import { FaPen } from 'react-icons/fa6';

export default function RelationshipGoalCard({ friend }) {
  return (
    <section className="card-surface p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Relationship Goal</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Stay connected every {friend.goal} days</h3>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-700 transition hover:bg-violet-200">
          <FaPen /> Edit
        </button>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Keep this friendship healthy by checking in before the next due date. Small conversations count and consistency matters.
      </p>
    </section>
  );
}
