import { useState } from "react";
import OptionCard from "../../components/auth/OptionCard";

export default function Step1Exam() {
  const [selected, setSelected] = useState("");

  const exams = [
    "WAEC",
    "JAMB",
    "IELTS",
    "SAT",
    "UCAT",
    "University",
    "Other",
  ];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">What are you studying?</h1>

      <p className="text-slate-400">
        Choose the exam or learning path you want NAYSSA to help you with.
      </p>

      {exams.map((exam) => (
        <OptionCard
          key={exam}
          label={exam}
          selected={selected === exam}
          onClick={() => setSelected(exam)}
        />
      ))}
    </div>
  );
}