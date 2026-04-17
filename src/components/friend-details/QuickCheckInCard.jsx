'use client';

import toast from 'react-hot-toast';
import { FaPhone, FaRegMessage, FaVideo } from 'react-icons/fa6';
import { addTimelineEntry } from '@/lib/timelineStorage';

const actions = [
  { type: 'call', label: 'Call', icon: FaPhone },
  { type: 'text', label: 'Text', icon: FaRegMessage },
  { type: 'video', label: 'Video', icon: FaVideo }
];

export default function QuickCheckInCard({ friend }) {
  const handleLogInteraction = (type) => {
    const capitalized = type.charAt(0).toUpperCase() + type.slice(1);

    addTimelineEntry({
      id: `${Date.now()}-${type}`,
      friendId: friend.id,
      friendName: friend.name,
      type,
      title: `${capitalized} with ${friend.name}`,
      date: new Date().toISOString()
    });

    toast.success(`${capitalized} logged for ${friend.name}`);
  };

  return (
    <section className="card-surface p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-[#255845] sm:text-3xl">Quick Check-In</h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.type}
              onClick={() => handleLogInteraction(action.type)}
              className="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-6 py-8 text-xl text-slate-700 transition hover:bg-white sm:text-2xl"
            >
              <Icon className="text-3xl" />
              <span className="mt-4">{action.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}