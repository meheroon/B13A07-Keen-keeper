export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-violet-200 bg-white/70 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
      <div>
        <p className="text-lg font-semibold text-slate-900">Loading your friends...</p>
        <p className="text-sm text-slate-500">Preparing your friendship dashboard.</p>
      </div>
    </div>
  );
}
