import { useState } from "react";
import OptionCard from "../../components/auth/OptionCard";

export default function Step4Tutor() {
  const [selected, setSelected] = useState("");

  const tutors = [
    "Friendly 😊",
    "Strict 👩🏾‍🏫",
    "Funny 😂",
    "Motivational 🚀",
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        Choose your tutor's personality
      </h1>

      <p className="text-slate-400">
        Your AI tutor will adapt to your preferred teaching style.
      </p>

      {tutors.map((tutor) => (
        <OptionCard
          key={tutor}
          label={tutor}
          selected={selected === tutor}
          onClick={() => setSelected(tutor)}
        />
      ))}
    </div>
  );
}