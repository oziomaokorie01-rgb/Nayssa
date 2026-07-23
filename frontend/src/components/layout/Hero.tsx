import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-16 items-center py-24">

      <div>

        <span className="rounded-full bg-emerald-500/20 text-emerald-300 px-4 py-2 text-sm">
          AI Powered Learning
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight">

          Learn
          <span className="text-purple-400"> Smarter </span>

          not harder.

        </h1>

        <p className="mt-8 text-xl text-slate-300">

          NAYSSA converts your notes into summaries,
          quizzes, flashcards and a conversational AI tutor
          with natural Nigerian voices.

        </p>

        <div className="mt-10 flex gap-4">

          <Button to="/register">
            Start Learning
          </Button>

          <Button
            to="/login"
            variant="secondary"
          >
            Login
          </Button>

        </div>

      </div>

      <div className="flex justify-center">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 w-full max-w-md">

          <h3 className="text-2xl font-bold">
            Senseii Tutor
          </h3>

          <div className="mt-8 space-y-5">

            <div className="rounded-xl bg-slate-800 p-4">
              🎧 Nigerian Voice
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              🧠 AI Summaries
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              📚 Flashcards
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              📝 Quiz Generator
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}