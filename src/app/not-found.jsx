import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-width flex min-h-[60vh] items-center justify-center py-12">
      <div className="card-surface max-w-xl p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#255845]">404 Error</p>
        <h1 className="mt-4 text-5xl font-extrabold text-slate-800">Page not found</h1>
        <p className="mt-4 text-lg text-slate-500">
          The page you are trying to visit does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-[#255845] px-6 py-4 text-base font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}