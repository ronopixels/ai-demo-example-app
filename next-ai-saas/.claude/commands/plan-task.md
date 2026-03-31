# Command: plan-task

Use **before** coding: produce a **plan only** (no implementation). Aligns with master guide “planning prompt” step.

## Instructions for the agent

1. Read **`ai/briefs/page-map.md`** and **`ai/briefs/component-checklist.md`** when the task touches new pages or components.
2. Output structured sections: **goal**, **sections/components to reuse**, **missing pieces**, **files likely to change**, **risks**, **order of work**.
3. **Do not** write production code in this step — planning only unless the user asks otherwise.
4. If the task includes UI icons, plan for **`@phosphor-icons/react` only** (see `.cursor/rules/25-phosphor-icons.mdc`); static HTML uses SVG/images, not the package.

## User prompt template (fill in)

```text
Plan (no code yet) for: [TASK DESCRIPTION].

Context:
- Route group: [marketing | auth | dashboard]
- Related pages: [list]

Questions to answer in the plan:
1. Which sections/components already exist that we can reuse?
2. What new files are probably needed?
3. Which src/data/* modules are involved?
4. What should we explicitly NOT change?

Output:
- Bullet plan and file list only
```

## Stop condition

Stop after the plan is delivered. User sends a follow-up **build-*** command or scoped prompt to implement.
