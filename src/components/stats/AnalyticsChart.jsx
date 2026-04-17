'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#7c3aed', '#255845', '#41b36d'];

export default function AnalyticsChart({ data }) {
  return (
    <div className="card-surface p-4 sm:p-8">
      <h3 className="mb-8 text-2xl font-semibold text-[#255845] sm:text-3xl">By Interaction Type</h3>

      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={8}
              cornerRadius={8}
            >
              {data.map((item, index) => (
                <Cell key={item.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center gap-8 text-base text-slate-500 sm:text-lg">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}