import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-emerald-500 hover:bg-emerald-400 text-white"
      : "border border-slate-700 hover:bg-slate-800 text-white";

  const classes = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}