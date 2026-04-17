'use client';

import { useEffect, useState } from 'react';
import AnalyticsChart from '@/components/stats/AnalyticsChart';
import { getInteractionCounts } from '@/lib/timelineStorage';

export default function StatsPage() {
  const [chartData, setChartData] = useState([
    { name: 'Text', value: 0 },
    { name: 'Call', value: 0 },
    { name: 'Video', value: 0 }
  ]);

  useEffect(() => {
    const data = getInteractionCounts();
    setChartData([
      data.find((item) => item.name === 'Text') || { name: 'Text', value: 0 },
      data.find((item) => item.name === 'Call') || { name: 'Call', value: 0 },
      data.find((item) => item.name === 'Video') || { name: 'Video', value: 0 }
    ]);
  }, []);

  return (
    <div className="container-width py-10">
      <h1 className="page-heading mb-8">Friendship Analytics</h1>
      <AnalyticsChart data={chartData} />
    </div>
  );
}