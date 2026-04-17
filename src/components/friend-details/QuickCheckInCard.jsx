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
    <section className="card-surface p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Quick Check-In</p>
      <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Log your latest interaction</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Use one of these shortcuts to instantly add a timeline entry and keep your friendship momentum going.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.type}
              onClick={() => handleLogInteraction(action.type)}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-4 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              <Icon />
              {action.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
