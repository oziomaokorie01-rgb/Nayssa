import { useState } from "react";
import OptionCard from "../../components/auth/OptionCard";

export default function Step5Goal() {
  const [selected, setSelected] = useState("");

  const goals = [
    "Pass my exams 🎓",
    "Improve my grades 📈",
    "Study every day 📚",
    "Master difficult topics 🧠",
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        What's your goal?
      </h1>

      <p className="text-slate-400">
        This helps NAYSSA personalise your study plan.
      </p>

      {goals.map((goal) => (
        <OptionCard
          key={goal}
          label={goal}
          selected={selected === goal}
          onClick={() => setSelected(goal)}
        />
      ))}
    </div>
  );
}