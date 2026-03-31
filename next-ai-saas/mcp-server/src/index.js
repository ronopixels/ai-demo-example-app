#!/usr/bin/env node

/**
 * next-ai-saas MCP Server
 *
 * Exposes .claude/skills/, CLAUDE.md, AGENTS.md, .cursor/rules, ai/ docs,
 * and MCP prompts (used by Cursor for `/` suggestions — not tools/resources).
 * for context-aware assistance (pattern after secureframe-marketing-website/mcp-server).
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { readFile, readdir, stat, writeFile, mkdir, unlink, rmdir } from 'fs/promises'
import { join, dirname, relative, resolve, normalize } from 'path'
import { fileURLToPath } from 'url'
import { parse as parseYaml } from 'yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const PROJECT_ROOT = join(__dirname, '../..')
const CLAUDE_MD = join(PROJECT_ROOT, 'CLAUDE.md')
const AGENTS_MD = join(PROJECT_ROOT, 'AGENTS.md')
const SKILLS_DIR = join(PROJECT_ROOT, '.claude', 'skills')
const CURSOR_RULES_DIR = join(PROJECT_ROOT, '.cursor', 'rules')
const AI_BRIEFS_DIR = join(PROJECT_ROOT, 'ai', 'briefs')
const AI_PROMPTS_DIR = join(PROJECT_ROOT, 'ai', 'prompts')
const SRC_DIR = join(PROJECT_ROOT, 'src')
const APP_DIR = join(SRC_DIR, 'app')
const CURSOR_COMMANDS_DIR = join(PROJECT_ROOT, '.cursor', 'commands')

const URI = {
  index: 'next-ai-saas://index',
  tools: 'next-ai-saas://tools/list',
  commands: 'next-ai-saas://commands/suggestions',
  config: 'next-ai-saas://config',
  contextAll: 'next-ai-saas://context/all',
  docsAgents: 'next-ai-saas://docs/agents',
  docsBriefs: 'next-ai-saas://docs/ai-briefs',
  docsPrompts: 'next-ai-saas://docs/ai-prompts',
  cursorRules: 'next-ai-saas://cursor/rules-summary',
  fileOps: 'next-ai-saas://docs/file-operations',
  fileOpsQuick: 'next-ai-saas://docs/file-operations-quick',
}

function validatePath(filePath) {
  const resolvedPath = resolve(PROJECT_ROOT, normalize(filePath))
  const rel = relative(PROJECT_ROOT, resolvedPath)
  if (rel.startsWith('..') || resolvedPath.indexOf(PROJECT_ROOT) !== 0) {
    throw new Error('Path must be within project directory')
  }
  return resolvedPath
}

async function parseSkillFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8')
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

    if (!frontmatterMatch) {
      return {
        name: 'unknown',
        description: 'No frontmatter found',
        content,
        fullContent: content,
      }
    }

    const frontmatter = parseYaml(frontmatterMatch[1])
    const body = frontmatterMatch[2]

    return {
      name: frontmatter.name || 'unknown',
      description: frontmatter.description || '',
      content: body,
      fullContent: content,
    }
  } catch (error) {
    return {
      name: 'error',
      description: `Error reading file: ${error.message}`,
      content: '',
      fullContent: '',
    }
  }
}

async function loadSkills() {
  const skills = {}
  try {
    const skillDirs = await readdir(SKILLS_DIR, { withFileTypes: true })
    for (const dir of skillDirs) {
      if (dir.isDirectory()) {
        const skillPath = join(SKILLS_DIR, dir.name, 'SKILL.md')
        try {
          const skill = await parseSkillFile(skillPath)
          skills[dir.name] = skill
        } catch (e) {
          console.error(`Error loading skill ${dir.name}:`, e)
        }
      }
    }
  } catch (e) {
    console.error('Error loading skills:', e)
  }
  return skills
}

async function readTextSafe(path, fallback) {
  try {
    return await readFile(path, 'utf-8')
  } catch {
    return fallback
  }
}

async function loadDirMarkdown(dir, title) {
  try {
    const files = await readdir(dir, { withFileTypes: true })
    const md = files.filter((f) => f.isFile() && f.name.endsWith('.md')).map((f) => f.name).sort()
    let out = `# ${title}\n\n`
    for (const name of md) {
      const p = join(dir, name)
      const body = await readTextSafe(p, '')
      out += `## ${name}\n\n${body}\n\n---\n\n`
    }
    return out
  } catch (e) {
    return `Error loading ${dir}: ${e.message}`
  }
}

let skillsCache = null
let claudeConfigCache = null
let agentsCache = null
let aiBriefsCache = null
let aiPromptsCache = null
let cursorRulesSummaryCache = null

async function refreshCache() {
  skillsCache = await loadSkills()
  claudeConfigCache = await readTextSafe(CLAUDE_MD, `Error: missing ${CLAUDE_MD}`)
  agentsCache = await readTextSafe(AGENTS_MD, `Error: missing ${AGENTS_MD}`)
  aiBriefsCache = await loadDirMarkdown(AI_BRIEFS_DIR, 'AI briefs')
  aiPromptsCache = await loadDirMarkdown(AI_PROMPTS_DIR, 'AI prompts')

  try {
    const entries = await readdir(CURSOR_RULES_DIR, { withFileTypes: true })
    const rules = entries.filter((e) => e.isFile() && e.name.endsWith('.mdc')).map((e) => e.name).sort()
    let summary = '# Cursor rules (.cursor/rules)\n\n'
    for (const name of rules) {
      const p = join(CURSOR_RULES_DIR, name)
      const text = await readTextSafe(p, '')
      const preview = text.split('\n').slice(0, 24).join('\n')
      summary += `## ${name}\n\n\`\`\`\n${preview}${text.length > preview.length ? '\n…' : ''}\n\`\`\`\n\n`
    }
    cursorRulesSummaryCache = summary
  } catch (e) {
    cursorRulesSummaryCache = `Error reading Cursor rules: ${e.message}`
  }
}

await refreshCache()

const server = new Server(
  {
    name: 'next-ai-saas-skills',
    version: '1.0.0',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
      prompts: {},
    },
  },
)

function combinedConfig() {
  return `# CLAUDE.md\n\n${claudeConfigCache}\n\n---\n\n# AGENTS.md\n\n${agentsCache}`
}

async function describeCommandFile(fileName) {
  const p = join(CURSOR_COMMANDS_DIR, fileName)
  const text = await readTextSafe(p, '')
  const line = text.split('\n').find((l) => l.replace(/[#\s]/g, '').length > 0) || fileName
  return line.replace(/^#+\s*/, '').slice(0, 220)
}

async function listMcpPrompts() {
  await refreshCache()
  const prompts = []
  try {
    const files = await readdir(CURSOR_COMMANDS_DIR, { withFileTypes: true })
    for (const f of files) {
      if (!f.isFile() || !f.name.endsWith('.md')) continue
      const base = f.name.replace(/\.md$/, '')
      prompts.push({
        name: base,
        title: base.replace(/-/g, ' '),
        description: await describeCommandFile(f.name),
      })
    }
  } catch {
    // no .cursor/commands
  }
  for (const [skillName, skill] of Object.entries(skillsCache)) {
    prompts.push({
      name: `skill-${skillName}`,
      title: `Skill: ${skill.name}`,
      description: String(skill.description || skillName).slice(0, 220),
    })
  }
  prompts.push({
    name: 'context-all',
    title: 'Full project context',
    description: 'CLAUDE.md + AGENTS.md + all .claude/skills',
  })
  return prompts
}

async function getMcpPromptBody(name) {
  await refreshCache()
  if (name === 'context-all') {
    let combined = `# Full project context\n\n## Config\n\n${combinedConfig()}\n\n## Skills\n\n`
    for (const [, skill] of Object.entries(skillsCache)) {
      combined += `### ${skill.name}\n\n${skill.fullContent || skill.content}\n\n---\n\n`
    }
    return combined
  }
  if (name.startsWith('skill-')) {
    const id = name.slice('skill-'.length)
    const skill = skillsCache[id]
    if (!skill) {
      throw new Error(`Unknown skill prompt "${name}". Available: ${Object.keys(skillsCache).map((k) => `skill-${k}`).join(', ')}`)
    }
    return skill.fullContent || skill.content
  }
  const cmdPath = join(CURSOR_COMMANDS_DIR, `${name}.md`)
  try {
    await stat(cmdPath)
    return await readFile(cmdPath, 'utf-8')
  } catch {
    throw new Error(`Unknown prompt "${name}"`)
  }
}

server.setRequestHandler(ListPromptsRequestSchema, async () => ({
  prompts: await listMcpPrompts(),
}))

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const { name } = request.params
  const text = await getMcpPromptBody(name)
  return {
    messages: [
      {
        role: 'user',
        content: { type: 'text', text },
      },
    ],
  }
})

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  await refreshCache()
  const resources = [
    { uri: URI.index, name: '📚 All resources & tools', description: 'Resource index', mimeType: 'text/markdown' },
    { uri: URI.tools, name: '🛠️ MCP tools list', description: 'Tool names for agents', mimeType: 'text/markdown' },
    { uri: URI.commands, name: '💡 Command suggestions', description: 'Usage hints', mimeType: 'text/markdown' },
    { uri: URI.config, name: '⚙️ Project config', description: 'CLAUDE.md + AGENTS.md', mimeType: 'text/markdown' },
    { uri: URI.contextAll, name: '📖 All skills context', description: 'Skills + config', mimeType: 'text/markdown' },
    { uri: URI.docsAgents, name: '🤖 AGENTS.md', description: 'Agent rules', mimeType: 'text/markdown' },
    { uri: URI.docsBriefs, name: '📋 AI briefs', description: 'ai/briefs/*.md', mimeType: 'text/markdown' },
    { uri: URI.docsPrompts, name: '✉️ AI prompts', description: 'ai/prompts/*.md', mimeType: 'text/markdown' },
    { uri: URI.cursorRules, name: '📐 Cursor rules summary', description: '.cursor/rules/*.mdc', mimeType: 'text/markdown' },
    { uri: URI.fileOps, name: '📝 File operations guide', description: 'MCP file tools', mimeType: 'text/markdown' },
    { uri: URI.fileOpsQuick, name: '⚡ File ops quick ref', description: 'Short examples', mimeType: 'text/markdown' },
  ]
  for (const [skillName, skill] of Object.entries(skillsCache)) {
    resources.push({
      uri: `next-ai-saas://skill/${skillName}`,
      name: `🎨 ${skill.name}`,
      description: skill.description,
      mimeType: 'text/markdown',
    })
  }
  return { resources }
})

function buildIndexMarkdown() {
  const skillKeys = Object.keys(skillsCache)
  const n = 11 + skillKeys.length
  let index = `# next-ai-saas — resources index\n\n`
  index += `## Tools\n\n`
  index += `- \`get_skill_context\`, \`get_context_for_task\`, \`get_prompt_template\`, \`refresh_skills_cache\`\n`
  index += `- \`get_project_info\`, \`get_file_pattern\`, \`get_component_example\`, \`get_page_example\`, \`get_route_structure\`, \`list_cursor_rules\`\n`
  index += `- \`create_file\`, \`update_file\`, \`delete_file\`, \`create_directory\`, \`delete_directory\`\n\n`
  index += `## Resources (${n} total)\n\n`
  index += `- \`@${URI.index}\` — this index\n`
  index += `- \`@${URI.tools}\`, \`@${URI.commands}\`\n`
  index += `- \`@${URI.config}\`, \`@${URI.contextAll}\`\n`
  index += `- \`@${URI.docsAgents}\`, \`@${URI.docsBriefs}\`, \`@${URI.docsPrompts}\`\n`
  index += `- \`@${URI.cursorRules}\`\n`
  for (const k of skillKeys) {
    index += `- \`@next-ai-saas://skill/${k}\`\n`
  }
  index += `\n`
  return index
}

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  await refreshCache()
  const { uri } = request.params

  if (uri === URI.index) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: buildIndexMarkdown() }] }
  }
  if (uri === URI.config) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: combinedConfig() }] }
  }
  if (uri === URI.docsAgents) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: agentsCache }] }
  }
  if (uri === URI.docsBriefs) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: aiBriefsCache }] }
  }
  if (uri === URI.docsPrompts) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: aiPromptsCache }] }
  }
  if (uri === URI.cursorRules) {
    return { contents: [{ uri, mimeType: 'text/markdown', text: cursorRulesSummaryCache }] }
  }
  if (uri === URI.contextAll) {
    let combined = `# next-ai-saas — full context\n\n## Config\n\n${combinedConfig()}\n\n## Skills\n\n`
    for (const [skillName, skill] of Object.entries(skillsCache)) {
      combined += `### ${skill.name} (${skillName})\n\n${skill.content}\n\n---\n\n`
    }
    return { contents: [{ uri, mimeType: 'text/markdown', text: combined }] }
  }
  if (uri.startsWith('next-ai-saas://skill/')) {
    const skillName = uri.replace('next-ai-saas://skill/', '')
    const skill = skillsCache[skillName]
    if (skill) {
      return {
        contents: [{ uri, mimeType: 'text/markdown', text: skill.fullContent || skill.content }],
      }
    }
  }
  if (uri === URI.tools) {
    const text = `# Tools\n\nUse MCP tool names with \`call_mcp_tool\` / your client’s tool UI.\n\n${buildIndexMarkdown()}`
    return { contents: [{ uri, mimeType: 'text/markdown', text }] }
  }
  if (uri === URI.commands) {
    const sk = Object.keys(skillsCache).join(', ')
    const text = `# Suggestions\n\n- **Skills:** ${sk}\n- **Route groups:** \`(marketing)\`, \`(dashboard)\`, \`(auth)\` under \`src/app/\`\n- **Data:** \`src/data/*\`, \`src/routes.ts\`, \`src/constants/site-config.ts\`\n`
    return { contents: [{ uri, mimeType: 'text/markdown', text }] }
  }
  if (uri === URI.fileOps) {
    const text = `# File operations\n\nThis server can create/update/delete files and directories under the project root via the \`create_file\`, \`update_file\`, \`delete_file\`, \`create_directory\`, and \`delete_directory\` tools. Paths are relative to the repo root.\n`
    return { contents: [{ uri, mimeType: 'text/markdown', text }] }
  }
  if (uri === URI.fileOpsQuick) {
    const text = `# Quick ref\n\n\`create_file\` — filePath + content\n\n\`update_file\` — filePath + content\n\n\`delete_file\` — filePath\n\n\`create_directory\` — dirPath\n\n\`delete_directory\` — dirPath\n`
    return { contents: [{ uri, mimeType: 'text/markdown', text }] }
  }

  throw new Error(`Resource not found: ${uri}`)
})

function taskToSkills(task) {
  const t = task.toLowerCase()
  const out = new Set()
  if (/(page|route|layout|metadata|app router|seo)/.test(t)) out.add('nextjs-page-architecture')
  if (/(component|section|tsx)/.test(t)) out.add('nextjs-page-architecture')
  if (/(theme|template|themeforest|html export|slice|figma)/.test(t)) {
    out.add('themeforest-template')
    out.add('html-export-alignment')
  }
  if (/(align|pixel|export|static html)/.test(t)) out.add('html-export-alignment')
  if (/(review|quality|accessib|a11y|wcag)/.test(t)) {
    out.add('nextjs-page-architecture')
    out.add('html-export-alignment')
  }
  if (/(plan|roadmap|phase|release|master guide|nexsas workflow|build order|page map)/.test(t)) {
    out.add('nexsas-workflow')
  }
  if (out.size === 0) return Object.keys(skillsCache)
  return [...out].filter((k) => skillsCache[k])
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
  await refreshCache()
  const availableSkills = Object.keys(skillsCache)
  return {
    tools: [
      {
        name: 'get_skill_context',
        description: 'Load one .claude/skills/*/SKILL.md by folder name.',
        inputSchema: {
          type: 'object',
          properties: {
            skillName: {
              type: 'string',
              description: `Skill id (directory name). Known: ${availableSkills.join(', ')}`,
              enum: availableSkills.length ? availableSkills : ['nextjs-page-architecture'],
            },
          },
          required: ['skillName'],
        },
      },
      {
        name: 'get_context_for_task',
        description: 'Pick relevant skills + project config for a natural-language task.',
        inputSchema: {
          type: 'object',
          properties: {
            task: { type: 'string', description: 'What you are building or fixing' },
          },
          required: ['task'],
        },
      },
      {
        name: 'get_prompt_template',
        description: 'Task-shaped prompt scaffold (create-page, create-component, sync-html, review-page, code-review).',
        inputSchema: {
          type: 'object',
          properties: {
            taskType: {
              type: 'string',
              enum: [
                'create-page',
                'create-component',
                'sync-html',
                'review-page',
                'code-review',
                'update-component',
                'plan-task',
              ],
            },
            includeSkills: {
              type: 'array',
              items: { type: 'string' },
              description: 'Optional skill folder names to force-include',
            },
          },
          required: ['taskType'],
        },
      },
      {
        name: 'refresh_skills_cache',
        description: 'Reload skills and docs from disk.',
        inputSchema: { type: 'object', properties: {} },
      },
      {
        name: 'get_project_info',
        description: 'Tech stack and live tree under src/app (and more).',
        inputSchema: {
          type: 'object',
          properties: {
            section: {
              type: 'string',
              enum: ['tech-stack', 'structure', 'routes', 'data', 'all'],
            },
          },
        },
      },
      {
        name: 'get_file_pattern',
        description: 'Opinionated snippets for page, component, layout, hook, util, api-route.',
        inputSchema: {
          type: 'object',
          properties: {
            fileType: {
              type: 'string',
              enum: ['page', 'component', 'layout', 'hook', 'util', 'api-route'],
            },
            context: { type: 'string', description: 'Optional extra hint' },
          },
          required: ['fileType'],
        },
      },
      {
        name: 'get_component_example',
        description: 'Where components live and conventions for this repo.',
        inputSchema: {
          type: 'object',
          properties: {
            kind: {
              type: 'string',
              description: 'e.g. marketing, ui, section',
            },
          },
        },
      },
      {
        name: 'get_page_example',
        description: 'Route groups and example paths for App Router pages.',
        inputSchema: {
          type: 'object',
          properties: {
            routeGroup: {
              type: 'string',
              enum: ['marketing', 'dashboard', 'auth', 'all'],
            },
          },
        },
      },
      {
        name: 'get_route_structure',
        description: 'List route groups and top-level segments under src/app.',
        inputSchema: {
          type: 'object',
          properties: {
            routeGroup: {
              type: 'string',
              enum: ['marketing', 'dashboard', 'auth', 'all'],
            },
          },
        },
      },
      {
        name: 'list_cursor_rules',
        description: 'Summaries of .cursor/rules/*.mdc.',
        inputSchema: { type: 'object', properties: {} },
      },
      {
        name: 'create_file',
        description: 'Create a file under the project root (creates parent dirs).',
        inputSchema: {
          type: 'object',
          properties: {
            filePath: { type: 'string' },
            content: { type: 'string' },
          },
          required: ['filePath', 'content'],
        },
      },
      {
        name: 'update_file',
        description: 'Overwrite an existing file.',
        inputSchema: {
          type: 'object',
          properties: {
            filePath: { type: 'string' },
            content: { type: 'string' },
          },
          required: ['filePath', 'content'],
        },
      },
      {
        name: 'delete_file',
        description: 'Delete a file.',
        inputSchema: {
          type: 'object',
          properties: { filePath: { type: 'string' } },
          required: ['filePath'],
        },
      },
      {
        name: 'create_directory',
        description: 'Create a directory (recursive by default).',
        inputSchema: {
          type: 'object',
          properties: {
            dirPath: { type: 'string' },
            recursive: { type: 'boolean', default: true },
          },
          required: ['dirPath'],
        },
      },
      {
        name: 'delete_directory',
        description: 'Delete a directory recursively.',
        inputSchema: {
          type: 'object',
          properties: {
            dirPath: { type: 'string' },
            recursive: { type: 'boolean', default: true },
          },
          required: ['dirPath'],
        },
      },
    ],
  }
})

async function readPackageJson() {
  try {
    const raw = await readFile(join(PROJECT_ROOT, 'package.json'), 'utf-8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

async function listAppRoutes(routeGroup = 'all') {
  const map = {
    all: ['(marketing)', '(dashboard)', '(auth)'],
    marketing: ['(marketing)'],
    dashboard: ['(dashboard)'],
    auth: ['(auth)'],
  }
  const groups = map[routeGroup] || map.all

  let out = ''
  for (const g of groups) {
    const base = join(APP_DIR, g)
    try {
      const entries = await readdir(base, { withFileTypes: true })
      const dirs = entries.filter((e) => e.isDirectory()).map((e) => e.name)
      out += `## ${g}\n\n`
      out += dirs.length ? dirs.map((d) => `- ${d}`).join('\n') : '(no subfolders or empty)'
      out += `\n\n`
    } catch {
      out += `## ${g}\n\n(not found)\n\n`
    }
  }
  return out
}

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params
  await refreshCache()

  try {
    switch (name) {
      case 'get_skill_context': {
        const { skillName } = args
        const skill = skillsCache[skillName]
        if (!skill) {
          return {
            content: [{ type: 'text', text: `Unknown skill "${skillName}". Available: ${Object.keys(skillsCache).join(', ')}` }],
            isError: true,
          }
        }
        return {
          content: [
            {
              type: 'text',
              text: `# ${skill.name}\n\n**Description:** ${skill.description}\n\n${skill.fullContent || skill.content}`,
            },
          ],
        }
      }
      case 'get_context_for_task': {
        const { task } = args
        const keys = taskToSkills(task)
        let text = `# Task\n\n${task}\n\n## Config\n\n${combinedConfig()}\n\n## Skills\n\n`
        for (const k of keys) {
          const s = skillsCache[k]
          if (s) text += `### ${s.name}\n\n${s.content}\n\n---\n\n`
        }
        return { content: [{ type: 'text', text }] }
      }
      case 'get_prompt_template': {
        const { taskType, includeSkills = [] } = args
        let keys = includeSkills.length ? includeSkills.filter((k) => skillsCache[k]) : []
        if (keys.length === 0) {
          const map = {
            'create-page': ['nextjs-page-architecture', 'themeforest-template'],
            'create-component': ['nextjs-page-architecture', 'themeforest-template'],
            'sync-html': ['html-export-alignment', 'themeforest-template'],
            'review-page': ['nextjs-page-architecture', 'html-export-alignment'],
            'code-review': ['nextjs-page-architecture'],
            'update-component': ['nextjs-page-architecture', 'themeforest-template'],
            'plan-task': ['nexsas-workflow', 'themeforest-template'],
          }
          keys = (map[taskType] || Object.keys(skillsCache)).filter((k) => skillsCache[k])
        }
        let text = `# Prompt scaffold: ${taskType}\n\n${combinedConfig()}\n\n## Skills (excerpt)\n\n`
        for (const k of keys) {
          const s = skillsCache[k]
          if (s) text += `### ${s.name}\n\n${String(s.content).slice(0, 1200)}…\n\n`
        }
        text += `\n## Checklist\n\n- Match route group and file layout under \`src/app/\`.\n- Use \`src/data/*\` and \`src/constants/site-config.ts\` where applicable.\n- Follow Tailwind v4 + project rules in \`.cursor/rules\`.\n- UI icons: \`@phosphor-icons/react\` only (see \`25-phosphor-icons.mdc\`); static HTML uses SVG/images.\n`
        return { content: [{ type: 'text', text }] }
      }
      case 'refresh_skills_cache': {
        await refreshCache()
        return {
          content: [
            {
              type: 'text',
              text: `Refreshed. Skills: ${Object.keys(skillsCache).join(', ')}`,
            },
          ],
        }
      }
      case 'get_project_info': {
        const { section = 'all' } = args
        const pkg = await readPackageJson()
        let text = '# next-ai-saas\n\n'
        if (section === 'all' || section === 'tech-stack') {
          text += `## Tech stack\n\n`
          text += `- Next.js ${pkg.dependencies?.next || '?'}\n`
          text += `- React ${pkg.dependencies?.react || '?'}\n`
          text += `- Tailwind CSS v4 (PostCSS)\n`
          text += `- TypeScript\n`
          text += `- UI icons: @phosphor-icons/react\n\n`
        }
        if (section === 'all' || section === 'structure') {
          text += `## Layout\n\n\`\`\`\nsrc/\n  app/          # App Router\n  data/         # navigation, demos, …\n  lib/          # e.g. cn helper\n  constants/    # site-config\n  routes.ts\n\`\`\`\n\n`
        }
        if (section === 'all' || section === 'routes') {
          text += await listAppRoutes('all')
        }
        if (section === 'all' || section === 'data') {
          try {
            const files = await readdir(join(SRC_DIR, 'data'))
            text += `## src/data\n\n${files.map((f) => `- ${f}`).join('\n')}\n\n`
          } catch (e) {
            text += `## src/data\n\n(error: ${e.message})\n\n`
          }
        }
        return { content: [{ type: 'text', text }] }
      }
      case 'get_file_pattern': {
        const { fileType } = args
        const patterns = {
          page: `\`\`\`tsx\n// src/app/(marketing)/example/page.tsx\nimport type { Metadata } from 'next'\n\nexport const metadata: Metadata = { title: 'Example' }\n\nexport default function Page() {\n  return <main className="…">…</main>\n}\n\`\`\`\n`,
          component: `\`\`\`tsx\n// src/components/Example.tsx\nimport { cn } from '@/lib/cn'\n\ntype Props = { className?: string }\n\nexport function Example({ className }: Props) {\n  return <div className={cn('…', className)} />\n}\n\`\`\`\n`,
          layout: `\`\`\`tsx\n// src/app/(marketing)/layout.tsx\nexport default function MarketingLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      {children}\n    </div>\n  )\n}\n\`\`\`\n`,
          hook: `\`\`\`ts\n'use client'\n\nimport { useMemo } from 'react'\n\nexport function useExample() {\n  return useMemo(() => ({ ok: true }), [])\n}\n\`\`\`\n`,
          util: `\`\`\`ts\nexport function example(input: string): string {\n  return input.trim()\n}\n\`\`\`\n`,
          'api-route': `\`\`\`ts\nimport { NextResponse } from 'next/server'\n\nexport async function GET() {\n  return NextResponse.json({ ok: true })\n}\n\`\`\`\n`,
        }
        return { content: [{ type: 'text', text: `# Pattern: ${fileType}\n\n${patterns[fileType] || patterns.page}` }] }
      }
      case 'get_component_example': {
        return {
          content: [
            {
              type: 'text',
              text: `# Components\n\nPrefer colocated UI under \`src/components/\` (add folders as the app grows). Use \`@/lib/cn\` for class merging. See skills: themeforest-template, nextjs-page-architecture.\n`,
            },
          ],
        }
      }
      case 'get_page_example': {
        const rg = args.routeGroup || 'all'
        const lines = await listAppRoutes(rg === 'all' ? 'all' : rg)
        return { content: [{ type: 'text', text: `# Pages (route groups)\n\n${lines}` }] }
      }
      case 'get_route_structure': {
        const rg = args.routeGroup || 'all'
        return { content: [{ type: 'text', text: await listAppRoutes(rg) }] }
      }
      case 'list_cursor_rules': {
        return { content: [{ type: 'text', text: cursorRulesSummaryCache }] }
      }
      case 'create_file': {
        const { filePath, content } = args
        try {
          const resolvedPath = validatePath(filePath)
          await mkdir(dirname(resolvedPath), { recursive: true })
          await writeFile(resolvedPath, content, 'utf-8')
          return { content: [{ type: 'text', text: `Created: ${filePath}` }] }
        } catch (e) {
          return { content: [{ type: 'text', text: e.message }], isError: true }
        }
      }
      case 'update_file': {
        const { filePath, content } = args
        try {
          const resolvedPath = validatePath(filePath)
          await stat(resolvedPath)
          await writeFile(resolvedPath, content, 'utf-8')
          return { content: [{ type: 'text', text: `Updated: ${filePath}` }] }
        } catch (e) {
          return { content: [{ type: 'text', text: e.message }], isError: true }
        }
      }
      case 'delete_file': {
        const { filePath } = args
        try {
          const resolvedPath = validatePath(filePath)
          const st = await stat(resolvedPath)
          if (!st.isFile()) throw new Error('Not a file')
          await unlink(resolvedPath)
          return { content: [{ type: 'text', text: `Deleted: ${filePath}` }] }
        } catch (e) {
          return { content: [{ type: 'text', text: e.message }], isError: true }
        }
      }
      case 'create_directory': {
        const { dirPath, recursive = true } = args
        try {
          const resolvedPath = validatePath(dirPath)
          await mkdir(resolvedPath, { recursive })
          return { content: [{ type: 'text', text: `Created dir: ${dirPath}` }] }
        } catch (e) {
          return { content: [{ type: 'text', text: e.message }], isError: true }
        }
      }
      case 'delete_directory': {
        const { dirPath, recursive = true } = args
        try {
          const resolvedPath = validatePath(dirPath)
          const st = await stat(resolvedPath)
          if (!st.isDirectory()) throw new Error('Not a directory')
          if (recursive) {
            const del = async (p) => {
              const entries = await readdir(p, { withFileTypes: true })
              for (const ent of entries) {
                const q = join(p, ent.name)
                if (ent.isDirectory()) await del(q)
                else await unlink(q)
              }
              await rmdir(p)
            }
            await del(resolvedPath)
          } else {
            await rmdir(resolvedPath)
          }
          return { content: [{ type: 'text', text: `Deleted dir: ${dirPath}` }] }
        } catch (e) {
          return { content: [{ type: 'text', text: e.message }], isError: true }
        }
      }
      default:
        return { content: [{ type: 'text', text: `Unknown tool: ${name}` }], isError: true }
    }
  } catch (error) {
    return { content: [{ type: 'text', text: `${name}: ${error.message}` }], isError: true }
  }
})

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('next-ai-saas MCP server (stdio)')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
