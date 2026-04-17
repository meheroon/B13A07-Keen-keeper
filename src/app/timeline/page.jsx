'use client';

import { useMemo, useState } from 'react';
import TimelineFilter from '@/components/timeline/TimelineFilter';
import TimelineList from '@/components/timeline/TimelineList';
import { getFilteredEntries } from '@/lib/timelineStorage';

export default function TimelinePage() {
  const [filter, setFilter] = useState('all');

  const entries = useMemo(() => {
    const filteredEntries = getFilteredEntries(filter);
    return [...filteredEntries].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [filter]);

  return (
    <div className="container-width py-10">
      <h1 className="mb-8 text-4xl font-extrabold leading-tight text-slate-800 sm:text-[44px]">
        Timeline
      </h1>
      <TimelineFilter activeFilter={filter} onChange={setFilter} />
      <TimelineList entries={entries} />
    </div>
  );
}