export default function SummaryCard({ label, value, helper }) {
  return (
    <div className="card-surface p-5">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{helper}</p>
    </div>
  );
}
