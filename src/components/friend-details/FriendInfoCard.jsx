import Image from 'next/image';
import { FaBoxArchive, FaClock, FaEnvelope, FaTrash } from 'react-icons/fa6';
import { getStatusStyles } from '@/lib/utils';

export default function FriendInfoCard({ friend }) {
  return (
    <aside className="card-surface p-6 sm:p-8">
      <div className="relative mx-auto h-52 w-full max-w-sm overflow-hidden rounded-3xl sm:h-64">
        <Image src={friend.picture} alt={friend.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
      </div>

      <div className="mt-6 text-center lg:text-left">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-slate-950">{friend.name}</h1>
          <span className={`rounded-full border px-4 py-2 text-sm font-bold capitalize ${getStatusStyles(friend.status)}`}>
            {friend.status}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
          {friend.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-600">{friend.bio}</p>

        <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 lg:justify-start">
          <FaEnvelope className="text-violet-600" />
          <span>{friend.email}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          <FaClock /> Snooze 2 Weeks
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          <FaBoxArchive /> Archive
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50">
          <FaTrash /> Delete
        </button>
      </div>
    </aside>
  );
}
