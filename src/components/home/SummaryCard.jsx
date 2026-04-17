export default function SummaryCard({ label, value }) {
  return (
    <div className="card-surface flex min-h-[140px] flex-col items-center justify-center px-6 py-8 text-center">
      <h3 className="text-4xl font-extrabold text-[#255845] sm:text-5xl">
        {value ?? 0}
      </h3>
      <p className="mt-4 text-lg text-slate-500 sm:text-2xl">{label}</p>
    </div>
  );
}