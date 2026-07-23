import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const next = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center px-6">

      <div className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-10">

        <div className="mb-8">

          <div className="text-sm text-emerald-400">
            Step {step} of 4
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-800">

            <div
              className="h-2 rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${step * 25}%` }}
            />

          </div>

        </div>

        {step === 1 && (
          <>
            <h1 className="text-4xl font-bold">
              What would you like to use NAYSSA for?
            </h1>

            <p className="mt-3 text-slate-400">
              Choose the option that best matches your learning goal.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700 transition">
                📚
                <h2 className="mt-3 text-xl font-semibold">
                  School & University
                </h2>
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700 transition">
                📝
                <h2 className="mt-3 text-xl font-semibold">
                  Exam Preparation
                </h2>
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700 transition">
                💼
                <h2 className="mt-3 text-xl font-semibold">
                  Professional Learning
                </h2>
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700 transition">
                🌍
                <h2 className="mt-3 text-xl font-semibold">
                  General Learning
                </h2>
              </button>

            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-4xl font-bold">
              How do you learn best?
            </h1>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700">
                🎧 Listening
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700">
                📖 Reading
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700">
                🧠 Flashcards
              </button>

              <button className="rounded-2xl bg-slate-800 p-6 hover:bg-purple-700">
                🔀 Mix of Everything
              </button>

            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-4xl font-bold">
              Choose your tutor
            </h1>

            <p className="mt-3 text-slate-400">
              Nigerian voices are recommended.
            </p>

            <div className="space-y-4 mt-8">

              <button className="w-full rounded-xl bg-slate-800 p-5 flex justify-between hover:bg-purple-700">
                <span>🇳🇬 Ada</span>
                <span className="text-emerald-400">⭐ Recommended</span>
              </button>

              <button className="w-full rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🇳🇬 Tunde
              </button>

              <button className="w-full rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🇳🇬 Zainab
              </button>

              <button className="w-full rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🇬🇧 Emma
              </button>

              <button className="w-full rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🇺🇸 Mason
              </button>

            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="text-4xl font-bold">
              What's your goal?
            </h1>

            <div className="grid gap-4 mt-10">

              <button className="rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🎯 Pass an Exam
              </button>

              <button className="rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                📖 Understand My Notes
              </button>

              <button className="rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                ⚡ Revise Quickly
              </button>

              <button className="rounded-xl bg-slate-800 p-5 hover:bg-purple-700">
                🧠 Learn Something New
              </button>

            </div>
          </>
        )}

        <button
          onClick={next}
          className="w-full mt-12 rounded-xl bg-emerald-500 py-4 text-lg font-semibold hover:bg-emerald-400 transition"
        >
          {step === 4 ? "Enter NAYSSA" : "Continue"}
        </button>

      </div>

    </div>
  );
}