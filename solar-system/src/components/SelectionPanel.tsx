import { getBodyById, planets, sun } from "../data/planets";

type Props = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function formatMass(id: string, m: number) {
  if (id === "sun") return "~333,000 Earth masses (≈ 1 solar mass)";
  if (m >= 1000) return `${Math.round(m).toLocaleString()} Earth masses`;
  if (m >= 10) return `${m.toFixed(0)} Earth masses`;
  return `${m.toFixed(2)} Earth masses`;
}

export function SelectionPanel({ selectedId, onSelect }: Props) {
  const body = selectedId ? getBodyById(selectedId) : undefined;
  const list = [sun, ...planets];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-300/90">Quick select</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {list.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                selectedId === p.id
                  ? "border-sky-400/60 bg-sky-500/15 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {body ? (
        <article className="glass rounded-2xl p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">{body.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                {body.category.replace("_", " ")}
              </p>
            </div>
            {body.id !== sun.id && (
              <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-slate-400 ring-1 ring-white/10">
                ~{body.meanDistanceAU} AU
              </span>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-300">{body.summary}</p>

          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            {body.id !== sun.id && (
              <>
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
                  <dt className="text-xs text-slate-500">Orbital period</dt>
                  <dd className="mt-0.5 font-medium text-white">{body.orbitalPeriodYears} Earth years</dd>
                </div>
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
                  <dt className="text-xs text-slate-500">Diameter (vs Earth)</dt>
                  <dd className="mt-0.5 font-medium text-white">{body.diameterVsEarth}×</dd>
                </div>
              </>
            )}
            <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
              <dt className="text-xs text-slate-500">Mass (vs Earth)</dt>
              <dd className="mt-0.5 font-medium text-white">{formatMass(body.id, body.massVsEarth)}</dd>
            </div>
            <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5">
              <dt className="text-xs text-slate-500">Known moons</dt>
              <dd className="mt-0.5 font-medium text-white">{body.naturalSatellites}</dd>
            </div>
            <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5 sm:col-span-2">
              <dt className="text-xs text-slate-500">Temperature</dt>
              <dd className="mt-0.5 font-medium text-white">{body.surfaceTempC}</dd>
            </div>
            <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/5 sm:col-span-2">
              <dt className="text-xs text-slate-500">Atmosphere</dt>
              <dd className="mt-0.5 text-slate-200">{body.atmosphere}</dd>
            </div>
          </dl>

          <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-slate-300">
            {body.facts.map((fact) => (
              <li key={fact} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </article>
      ) : (
        <p className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-sm text-slate-400">
          Click the Sun or a planet in the 3D view, or pick a name above to load facts and figures.
        </p>
      )}
    </div>
  );
}
