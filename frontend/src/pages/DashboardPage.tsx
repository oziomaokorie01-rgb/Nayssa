import { useRef } from "react";
import {
  FileText,
  Image,
  Link2,
  Clipboard,
  Brain,
  BookOpen,
  Headphones,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { uploadFile } from "../services/uploadService";

export default function DashboardPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(file: File) {
    try {
      const result = await uploadFile(file);

      console.log(result);

      alert("Upload successful!");
    } catch (error) {
      console.error(error);

      alert("Upload failed.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-black">Welcome back 👋</h1>

          <p className="mt-3 text-lg text-slate-400">
            What are we studying today?
          </p>
        </div>

        {/* Hidden File Input */}

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={(e) => {
            if (!e.target.files?.length) return;

            handleUpload(e.target.files[0]);
          }}
        />

        {/* Upload Section */}

        <div className="rounded-3xl border-2 border-dashed border-purple-600 bg-slate-900 p-12">
          <div className="text-center">
            <Sparkles
              className="mx-auto text-purple-400"
              size={60}
            />

            <h2 className="mt-6 text-3xl font-bold">
              Upload your learning material
            </h2>

            <p className="mt-3 text-slate-400">
              Upload notes, textbooks, lecture slides, PDFs, images or paste a
              link.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <button
              onClick={() => inputRef.current?.click()}
              className="rounded-2xl bg-slate-800 p-8 transition hover:bg-purple-700"
            >
              <FileText
                className="mx-auto"
                size={42}
              />

              <p className="mt-5">Upload PDF</p>
            </button>

            <button className="rounded-2xl bg-slate-800 p-8 transition hover:bg-purple-700">
              <Image
                className="mx-auto"
                size={42}
              />

              <p className="mt-5">Scan Notes</p>
            </button>

            <button className="rounded-2xl bg-slate-800 p-8 transition hover:bg-purple-700">
              <Link2
                className="mx-auto"
                size={42}
              />

              <p className="mt-5">Paste Link</p>
            </button>

            <button className="rounded-2xl bg-slate-800 p-8 transition hover:bg-purple-700">
              <Clipboard
                className="mx-auto"
                size={42}
              />

              <p className="mt-5">Paste Text</p>
            </button>
          </div>
        </div>

        {/* AI Actions */}

        <div className="mt-14">
          <h2 className="text-3xl font-bold">Available AI Tools</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl bg-slate-900 p-8">
              <Headphones
                className="text-emerald-400"
                size={40}
              />

              <h3 className="mt-5 text-xl font-semibold">
                Listen with Senseii
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <Brain
                className="text-purple-400"
                size={40}
              />

              <h3 className="mt-5 text-xl font-semibold">
                AI Summary
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <BookOpen
                className="text-emerald-400"
                size={40}
              />

              <h3 className="mt-5 text-xl font-semibold">
                Flashcards
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <Clipboard
                className="text-purple-400"
                size={40}
              />

              <h3 className="mt-5 text-xl font-semibold">
                Quiz Generator
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <MessageCircle
                className="text-emerald-400"
                size={40}
              />

              <h3 className="mt-5 text-xl font-semibold">
                Ask Senseii
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}