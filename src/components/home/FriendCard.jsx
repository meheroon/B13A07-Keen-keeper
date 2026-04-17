import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { getStatusStyles } from '@/lib/utils';

export default function FriendCard({ friend }) {
  return (
    <Link href={`/friends/${friend.id}`} className="group card-surface block overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden rounded-3xl">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-950">{friend.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{friend.days_since_contact} days since contact</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-bold capitalize ${getStatusStyles(friend.status)}`}>
          {friend.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-violet-700">
        <span>View friendship details</span>
        <FaArrowRight className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
