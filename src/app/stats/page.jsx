'use client';

import { useEffect, useState } from 'react';
import AnalyticsChart from '@/components/stats/AnalyticsChart';
import SectionTitle from '@/components/shared/SectionTitle';
import { getInteractionCounts } from '@/lib/timelineStorage';

export default function StatsPage() {
  const [chartData, setChartData] = useState([
    { name: 'Call', value: 0 },
    { name: 'Text', value: 0 },
    { name: 'Video', value: 0 }
  ]);

  useEffect(() => {
    setChartData(getInteractionCounts());
  }, []);

  return (
    <div className="container-width py-8 sm:py-10">
      <SectionTitle
        eyebrow="Insights"
        title="Friendship Analytics"
        description="See which kind of interaction you rely on most and balance your communication style across your circle."
      />
      <AnalyticsChart data={chartData} />
    </div>
  );
}
