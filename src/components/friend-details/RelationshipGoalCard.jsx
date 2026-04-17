export default function RelationshipGoalCard({ friend }) {
  return (
    <section className="card-surface p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-[#255845] sm:text-3xl">Relationship Goal</h3>
          <p className="mt-6 text-lg text-slate-500 sm:text-2xl">
            Connect every <span className="font-bold text-slate-800">{friend.goal} days</span>
          </p>
        </div>

        <button className="rounded-md border border-gray-200 bg-gray-50 px-5 py-3 text-base font-medium text-slate-700 sm:text-lg">
          Edit
        </button>
      </div>
    </section>
  );
}