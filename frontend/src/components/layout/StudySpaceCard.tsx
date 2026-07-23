type Props = {
  title: string;
  progress: number;
};

export default function StudySpaceCard({
  title,
  progress,
}: Props) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <div className="mt-5 h-3 rounded-full bg-slate-700">

        <div
          className="h-3 rounded-full bg-emerald-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-3 text-slate-400">
        {progress}% Complete
      </p>

      <button className="mt-6 rounded-lg bg-emerald-500 px-4 py-2">
        Continue
      </button>

    </div>
  );
}