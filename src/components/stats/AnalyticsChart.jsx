'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#7c3aed', '#ec4899', '#0ea5e9'];

export default function AnalyticsChart({ data }) {
  return (
    <div className="card-surface p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Overview</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Interaction Breakdown</h3>
        </div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={75} outerRadius={115} paddingAngle={5}>
              {data.map((item, index) => (
                <Cell key={item.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {data.map((item, index) => (
          <div key={item.name} className="rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <p className="text-sm font-semibold text-slate-600">{item.name}</p>
            </div>
            <h4 className="mt-2 text-2xl font-black text-slate-950">{item.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
