import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">

      <Logo />

      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <a href="#features">Features</a>
        <a href="#voices">Voices</a>
        <a href="#about">About</a>
      </div>

      <div className="flex gap-3">
        <Button to="/login" variant="secondary">
          Login
        </Button>

        <Button to="/register">
          Sign Up
        </Button>
      </div>

    </nav>
  );
}