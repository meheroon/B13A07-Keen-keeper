import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <div className="container-width flex min-h-[60vh] items-center justify-center py-12">
      <div className="card-surface max-w-xl p-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600">404 Error</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you are trying to reach does not exist or the friendship link is invalid.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
