import { cn } from '@/lib/utils';

const filters = ['all', 'call', 'text', 'video'];

export default function TimelineFilter({ activeFilter, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-bold capitalize transition',
            activeFilter === filter
              ? 'bg-violet-600 text-white shadow-md'
              : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
