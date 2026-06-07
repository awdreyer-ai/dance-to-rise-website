"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 border border-gray-300 text-[#555555] text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
    >
      Sign Out
    </button>
  );
}
