export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">Features</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Personalized Learning</h2>
          <p className="mt-2 text-slate-400">Create a study flow that fits your pace and goals.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Interactive Practice</h2>
          <p className="mt-2 text-slate-400">Quizzes and flashcards help reinforce what you learn.</p>
        </div>
      </div>
    </section>
  );
}
