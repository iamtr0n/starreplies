"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "gridadmin2026";

interface Signup {
  id: string;
  businessName: string;
  ownerName: string;
  email: string;
  businessType: string;
  googleMapsUrl: string;
  createdAt: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Wrong password.");
    }
  }

  useEffect(() => {
    if (!authed) return;
    setLoading(true);

    fetch("/api/admin/signups", {
      headers: { Authorization: `Bearer ${ADMIN_PASSWORD}` },
    })
      .then((r) => r.json())
      .then((data) => {
        setSignups(data.signups ?? []);
      })
      .catch(() => {
        setError("Failed to load signups.");
      })
      .finally(() => setLoading(false));
  }, [authed]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-surface text-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <span className="text-brand-400 text-3xl font-bold">★</span>
            <h1 className="text-2xl font-bold mt-2">StarReplies Admin</h1>
            <p className="text-gray-500 text-sm mt-1">Restricted access</p>
          </div>

          <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-white">
      <nav className="border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-brand-400 text-xl font-bold">★</span>
            <span className="text-white font-semibold text-lg tracking-tight">StarReplies</span>
            <span className="text-gray-500 text-sm ml-2">/ Admin</span>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
          >
            Sign out
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Early Access Signups</h1>
            <p className="text-gray-500 text-sm mt-1">
              {loading ? "Loading..." : `${signups.length} signup${signups.length !== 1 ? "s" : ""} total`}
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-gray-500 py-20 text-center">Loading signups...</div>
        ) : signups.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-xl font-semibold text-gray-400 mb-2">No signups yet</p>
            <p>Share the landing page to start collecting early access requests.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-border text-left text-gray-500 text-xs uppercase tracking-wide">
                  <th className="pb-3 pr-6 font-medium">Business</th>
                  <th className="pb-3 pr-6 font-medium">Owner</th>
                  <th className="pb-3 pr-6 font-medium">Email</th>
                  <th className="pb-3 pr-6 font-medium">Type</th>
                  <th className="pb-3 pr-6 font-medium">Signed up</th>
                  <th className="pb-3 font-medium">Google Maps</th>
                </tr>
              </thead>
              <tbody>
                {signups
                  .slice()
                  .reverse()
                  .map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-surface-border hover:bg-surface-soft transition-colors"
                    >
                      <td className="py-4 pr-6 font-medium text-white">{s.businessName}</td>
                      <td className="py-4 pr-6 text-gray-300">{s.ownerName}</td>
                      <td className="py-4 pr-6">
                        <a
                          href={`mailto:${s.email}`}
                          className="text-brand-400 hover:text-brand-300 transition-colors"
                        >
                          {s.email}
                        </a>
                      </td>
                      <td className="py-4 pr-6 text-gray-400">{s.businessType}</td>
                      <td className="py-4 pr-6 text-gray-500 whitespace-nowrap">
                        {formatDate(s.createdAt)}
                      </td>
                      <td className="py-4">
                        {s.googleMapsUrl ? (
                          <a
                            href={s.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2"
                          >
                            View ↗
                          </a>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
