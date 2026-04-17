export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[250px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#255845]" />
        <p className="mt-4 text-base text-slate-500">Loading your friends...</p>
      </div>
    </div>
  );
}