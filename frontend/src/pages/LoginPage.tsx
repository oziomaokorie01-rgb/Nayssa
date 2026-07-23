import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">

      <div className="bg-slate-900 rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">
          Welcome Back
        </h1>

        <input
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-slate-800 mb-4"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-4 rounded-lg bg-slate-800"
        />

        <button className="w-full mt-8 bg-emerald-500 p-4 rounded-xl">
          Login
        </button>

        <p className="text-center mt-8 text-slate-400">

          Don't have an account?

          <Link
            className="text-emerald-400 ml-2"
            to="/register"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}