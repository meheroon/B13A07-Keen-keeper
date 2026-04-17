'use client';

import { useMemo, useState } from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
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
    <div className="container-width py-8 sm:py-10">
      <SectionTitle
        eyebrow="Activity Feed"
        title="Timeline"
        description="This is the full history of your logged calls, texts, and video check-ins across all friendships."
      />

      <TimelineFilter activeFilter={filter} onChange={setFilter} />
      <TimelineList entries={entries} />
    </div>
  );
}
