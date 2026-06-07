"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/admin/applications");
    } else {
      const json = await res.json();
      setError(json.error || "Login failed");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Dance to Rise Foundation" width={120} height={120} className="h-24 w-auto" />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A3578] mb-2 text-center">
            Admin Access
          </h1>
          <p className="text-[#555555] text-sm text-center mb-6">Dance to Rise Foundation</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#2547B2] focus:border-transparent text-sm"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-sm text-[#C4305A]">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2547B2] text-white font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
