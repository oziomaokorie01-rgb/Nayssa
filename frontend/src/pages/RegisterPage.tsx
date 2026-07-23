import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">

      <div className="bg-slate-900 rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full p-4 rounded-lg bg-slate-800 mb-4"
        />

        <input
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-slate-800 mb-4"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-4 rounded-lg bg-slate-800"
        />

        <button
          onClick={() => navigate("/onboarding")}
          className="w-full mt-8 bg-emerald-500 p-4 rounded-xl"
        >
          Continue
        </button>

        <p className="text-center mt-8 text-slate-400">

          Already have an account?

          <Link
            className="text-emerald-400 ml-2"
            to="/login"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}