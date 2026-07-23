export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-500 text-xl font-bold">
        N
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wide">
          NAYSSA
        </h1>

        <p className="text-xs text-slate-400">
          AI Study Companion
        </p>
      </div>
    </div>
  );
}