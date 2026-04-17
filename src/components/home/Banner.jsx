import Link from 'next/link';
import { FaUserPlus } from 'react-icons/fa6';

export default function Banner() {
  return (
    <section className="card-surface relative overflow-hidden px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500" />
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-700">
          Friendship Tracker
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Stay close to the people who matter the most.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          KeenKeeper helps you track meaningful friendships, log quick check-ins, and build a healthier rhythm of staying connected.
        </p>
        <Link
          href="#friends"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
        >
          <FaUserPlus />
          Add a Friend
        </Link>
      </div>
    </section>
  );
}
