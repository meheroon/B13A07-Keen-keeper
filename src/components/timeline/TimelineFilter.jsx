'use client';

export default function TimelineFilter({ activeFilter, onChange }) {
  return (
    <div className="mb-6 max-w-xs">
      <select
        value={activeFilter}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-slate-500 outline-none"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
    </div>
  );
}