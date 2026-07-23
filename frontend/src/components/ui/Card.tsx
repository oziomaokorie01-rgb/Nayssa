import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}