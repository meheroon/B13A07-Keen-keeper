import TimelineEntry from './TimelineEntry';

export default function TimelineList({ entries }) {
  if (!entries.length) {
    return (
      <div className="card-surface p-8 text-center">
        <h3 className="text-3xl font-semibold text-slate-800">No interactions yet</h3>
        <p className="mt-4 text-lg text-slate-500">
          Go to any friend details page and log a Call, Text, or Video interaction.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {entries.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}