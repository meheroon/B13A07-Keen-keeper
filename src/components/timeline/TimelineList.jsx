import TimelineEntry from './TimelineEntry';

export default function TimelineList({ entries }) {
  if (!entries.length) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="text-2xl font-black tracking-tight text-slate-950">No interactions logged yet</h3>
        <p className="mt-3 text-slate-500">
          Visit any friend details page and use the Call, Text, or Video buttons to create your first timeline entry.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {entries.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
