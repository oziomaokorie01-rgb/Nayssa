import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import FeatureGrid from "../../components/layout/FeatureGrid";
import StudySpaces from "../../components/layout/StudySpaces";
import Footer from "../../components/layout/Footer";
import {
  BookMarked,
  BookOpen,
  Brain,
  FileText,
  MessageSquare,
  Mic,
} from "lucide-react";

const cards = [
  {
    title: "Study Session",
    icon: Mic,
    description: "Learn hands-free with your AI tutor.",
  },
  {
    title: "Upload Notes",
    icon: FileText,
    description: "PDF, DOCX, images and text.",
  },
  {
    title: "Flashcards",
    icon: Brain,
    description: "AI-generated study cards.",
  },
  {
    title: "Quiz Me",
    icon: BookOpen,
    description: "Practice what you've learned.",
  },
  {
    title: "AI Tutor",
    icon: MessageSquare,
    description: "Ask anything naturally.",
  },
  {
    title: "Dictionary",
    icon: BookMarked,
    description: "Offline definitions and explanations.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <StudySpaces />
      <Footer />

      <section className="mx-auto max-w-7xl px-8 py-20">
        <h1 className="text-6xl font-bold">NAYSSA</h1>
        <p className="mt-4 text-xl text-slate-400">Your AI Study Companion</p>

        <button className="mt-10 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold transition hover:bg-emerald-400">
          Start Study Session
        </button>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-emerald-500"
              >
                <Icon className="mb-4 h-10 w-10 text-emerald-400" />
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-slate-400">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}