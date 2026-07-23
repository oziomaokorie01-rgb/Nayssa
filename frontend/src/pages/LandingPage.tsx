import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import GradientBlob from "../components/ui/GradientBlob";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <GradientBlob />

 <div className="mx-auto max-w-7xl px-8">

        <Navbar />

        <Hero />

        <section className="py-20">
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8">
            <Logo />

            <h1 className="mt-12 max-w-3xl text-6xl font-black leading-tight">
              Learn the way
              <span className="text-emerald-400"> your brain </span>
              learns.
            </h1>

            <h2 className="text-center text-3xl font-bold">
              Trusted Learning Paths
            </h2>

            <p className="mt-8 max-w-2xl text-xl text-slate-300">
              Upload notes. Generate summaries. Practice with quizzes. Chat with your
              AI tutor. Learn with natural Nigerian voices.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="rounded-2xl bg-slate-900 p-8 text-center">🇳🇬 WAEC</div>
              <div className="rounded-2xl bg-slate-900 p-8 text-center">🇳🇬 JAMB</div>
              <div className="rounded-2xl bg-slate-900 p-8 text-center">🇬🇧 IELTS</div>
              <div className="rounded-2xl bg-slate-900 p-8 text-center">🇺🇸 SAT</div>
            </div>

            <div className="mt-12 flex gap-5">
              <Button to="/register">Get Started</Button>
              <Button to="/login" variant="secondary">Login</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}