import Image from 'next/image';
import { FaBoxArchive, FaRegClock, FaRegTrashCan } from 'react-icons/fa6';
import { getStatusStyles } from '@/lib/utils';

export default function FriendInfoCard({ friend }) {
  return (
    <div className="space-y-4">
      <aside className="card-surface p-8 text-center">
        <div className="flex justify-center">
          <Image
            src={friend.picture}
            alt={friend.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-800 sm:text-5xl">
          {friend.name}
        </h1>

        <div className="mt-4 flex flex-col items-center gap-3">
          <span
            className={`rounded-full border px-4 py-1 text-sm font-semibold capitalize ${getStatusStyles(friend.status)}`}
          >
            {friend.status === 'on-track'
              ? 'On-Track'
              : friend.status === 'almost due'
              ? 'Almost Due'
              : 'Overdue'}
          </span>

          <div className="flex flex-wrap justify-center gap-2">
            {friend.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#dff3e8] px-3 py-1 text-sm font-medium uppercase text-[#255845]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-lg italic text-slate-500 sm:text-[28px]">
          “{friend.bio}”
        </p>
        <p className="mt-4 text-base text-slate-500 sm:text-xl">
          Preferred: email
        </p>
      </aside>

      <button className="flex h-16 w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-6 text-lg font-medium text-slate-700 sm:h-[70px] sm:text-2xl">
        <FaRegClock />
        Snooze 2 Weeks
      </button>

      <button className="flex h-16 w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-6 text-lg font-medium text-slate-700 sm:h-[70px] sm:text-2xl">
        <FaBoxArchive />
        Archive
      </button>

      <button className="flex h-16 w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-6 text-lg font-medium text-red-500 sm:h-[70px] sm:text-2xl">
        <FaRegTrashCan />
        Delete
      </button>
    </div>
  );
}