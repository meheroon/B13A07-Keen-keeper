export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-600">{description}</p> : null}
    </div>
  );
}
