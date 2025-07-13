"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const demoUsers = [
    { role: "مدير", username: "admin", password: "admin123" },
    // { role: "لجنة", username: "committee", password: "committee123" },
    // { role: "شريك", username: "partner", password: "partner123" },
    // { role: "مستخدم", username: "user", password: "user123" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const found = demoUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      router.push("/");
      alert(`تم تسجيل الدخول كـ ${found.role} بنجاح!`);
      setError("");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-10 items-center bg-[var(--background)] px-4">
      <h1 className="text-3xl font-bold mb-4   text-gray-600">إعمار</h1>
      <p className="mb-6 text-[var(--foreground)]">
        مبادرة إعمار المساجد السورية
      </p>
      <div className="max-w-md w-full border mb-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-right">
        <p className="mb-14 text-xl text-muted-foreground">تسجيل الدخول </p>
        <form onSubmit={handleSubmit} className="space-y-6 mb-6 ">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">
              اسم المستخدم
            </span>
            <input
              type="text"
              dir="ltr"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              autoComplete="username"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">
              كلمة المرور
            </span>
            <input
              type="password"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              autoComplete="current-password"
            />
          </label>

          {error && <p className="text-red-600 text-sm text-right">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[var(--green-primary)] hover:bg-[#04372f] text-white font-semibold py-3 rounded-md transition-colors mt-2"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
