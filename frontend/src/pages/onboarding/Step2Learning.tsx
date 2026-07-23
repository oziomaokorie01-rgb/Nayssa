import { useState } from "react";
import OptionCard from "../../components/auth/OptionCard";

export default function Step2Learning() {
  const [selected, setSelected] = useState("");

  const styles = [
    "Listening",
    "Reading",
    "Flashcards",
    "Practice Questions",
    "Mixed Learning",
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        How do you learn best?
      </h1>

      <p className="text-slate-400">
        We'll personalise every study session.
      </p>

      {styles.map((style) => (
        <OptionCard
          key={style}
          label={style}
          selected={selected === style}
          onClick={() => setSelected(style)}
        />
      ))}
    </div>
  );
}