export function Capabilities() {
  const items = [
    {
      title: 'Principal AI Engineer',
      points: [
        'LLM systems, RAG, vector search, evaluation, safety',
        'POC → production with CI/CD and guardrails',
      ],
    },
    {
      title: 'Principal Data Scientist',
      points: [
        'Causal inference, forecasting, uplift, experimentation',
        'Metrics architecture, feature stores, KPI design',
      ],
    },
    {
      title: 'Data Engineer',
      points: [
        'Lakehouse, ELT/ETL, streaming pipelines, governance',
        'Modern data stack, performance-oriented architectures',
      ],
    },
    {
      title: 'Data Analyst',
      points: [
        'Executive dashboards, self-serve analytics',
        'Narrative synthesis and stakeholder workshops',
      ],
    },
    {
      title: 'Product & Project Leadership',
      points: [
        'Vision → roadmap → delivery; discovery to orchestration',
        'Outcome-driven prioritization and risk management',
      ],
    },
  ];

  return (
    <section id="services" className="relative bg-[#0B0F14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Core capabilities</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          I operate across strategy, modeling, data engineering, MLOps, analytics, and executive enablement.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                {card.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  const items = [
    {
      title: 'Revenue lift with LLM support',
      problem: 'High ticket volume and slow response',
      impact: '−38% resolution time, +22% CSAT, ~$4.1M savings',
      stack: 'LangChain, Azure OpenAI, PGVector, FastAPI, Kubernetes',
    },
    {
      title: 'Marketing efficiency with MMM + uplift',
      problem: 'Waste in paid channels; unclear marginal ROI',
      impact: '−17% CAC, +11% incremental conversions',
      stack: 'PyMC, Airflow, BigQuery, dbt, Tableau',
    },
    {
      title: 'Realtime analytics platform',
      problem: 'Siloed data and delayed insights',
      impact: 'Minutes‑level visibility, +9% ops productivity',
      stack: 'Kafka, Spark, Iceberg, dbt, Looker',
    },
  ];

  return (
    <section id="work" className="relative bg-[#0B0F14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected case studies</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs) => (
            <article key={cs.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{cs.title}</h3>
              <p className="mt-2 text-slate-300"><span className="text-slate-200">Problem:</span> {cs.problem}</p>
              <p className="mt-1 text-slate-300"><span className="text-slate-200">Impact:</span> {cs.impact}</p>
              <p className="mt-1 text-slate-400 text-sm">{cs.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { t: 'Discover', d: 'Objectives, constraints, success metrics' },
    { t: 'Design', d: 'Architecture, data contracts, evaluation plan' },
    { t: 'Build', d: 'Iterative delivery with demos and transparent tracking' },
    { t: 'Ship', d: 'Productionization, monitoring, handover' },
    { t: 'Amplify', d: 'Training, documentation, narrative rollout' },
  ];

  return (
    <section id="process" className="relative bg-[#0B0F14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Process</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-300">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0B0F14] text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s design your next data advantage</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">2–3 openings per quarter. If speed and quality matter, let’s talk.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-slate-200">
            <a href="mailto:hello@ahmad.example" className="rounded-xl bg-white/10 border border-white/10 p-4 hover:bg-white/20 transition">Email Ahmad</a>
            <a href="#" className="rounded-xl bg-white/10 border border-white/10 p-4 hover:bg-white/20 transition">LinkedIn</a>
            <a href="#" className="rounded-xl bg-white/10 border border-white/10 p-4 hover:bg-white/20 transition">Book a Strategy Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
