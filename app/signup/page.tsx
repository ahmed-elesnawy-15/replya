"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const { error: insertError } = await supabase
      .from("companies")
      .insert([
        {
          id: crypto.randomUUID(),
          name: company,
          email: email,
        },
      ]);

    if (insertError) {
      console.error("Insert Error:", insertError);
      alert(insertError.message);
      return;
    }

    console.log("Database insert works!");
    alert("Database insert works!");
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Test Database
        </h1>

        <form onSubmit={handleSignup} className="mt-8 space-y-4">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            className="w-full rounded-lg p-3 bg-slate-800 text-white"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg p-3 bg-slate-800 text-white"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black p-3 font-bold"
          >
            Test Database
          </button>
        </form>
      </div>
    </main>
  );
}