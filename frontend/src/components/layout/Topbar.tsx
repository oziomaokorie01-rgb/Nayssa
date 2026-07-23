import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  Brain,
  BookOpen,
  Mic,
  Settings,
} from "lucide-react";

const items = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Study Spaces", icon: FolderOpen, path: "/study-spaces" },
  { name: "Flashcards", icon: Brain, path: "/flashcards" },
  { name: "Quiz", icon: BookOpen, path: "/quiz" },
  { name: "Tutor", icon: Mic, path: "/tutor" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-emerald-400">
        NAYSSA
      </h1>

      <p className="text-slate-400 text-sm mb-10">
        AI Study Companion
      </p>

      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}