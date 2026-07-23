import { useState } from "react";
import OptionCard from "../../components/auth/OptionCard";

export default function Step3Accent() {
  const [selected, setSelected] = useState("Nigerian English");

  const accents = [
    "Nigerian English 🇳🇬",
    "British English 🇬🇧",
    "American English 🇺🇸",
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        Choose your tutor's accent
      </h1>

      <p className="text-slate-400">
        Nigerian English is recommended.
      </p>

      {accents.map((accent) => (
        <OptionCard
          key={accent}
          label={accent}
          selected={selected === accent}
          onClick={() => setSelected(accent)}
        />
      ))}
    </div>
  );
}