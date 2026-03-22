"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "Restaurant / Food & Beverage",
  "Dental Practice",
  "Medical / Healthcare",
  "Hair Salon / Barbershop",
  "Nail Salon / Spa",
  "HVAC / Plumbing / Electrician",
  "Auto Shop / Mechanic",
  "Retail Store",
  "Fitness / Gym",
  "Legal Services",
  "Real Estate",
  "Cleaning Services",
  "Pet Services",
  "Other",
];

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    businessType: "",
    googleMapsUrl: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      router.push("/signup/success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-surface text-white">
      {/* NAV */}
      <nav className="border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-brand-400 text-xl font-bold">★</span>
            <span className="text-white font-semibold text-lg tracking-tight">StarReplies</span>
          </Link>
        </div>
      </nav>

      {/* FORM */}
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Get early access</h1>
          <p className="text-gray-400 text-lg">
            We&apos;ll reach out within 24 hours to get you set up — no payment required.
          </p>
        </div>

        <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="businessName">
                Business name <span className="text-brand-400">*</span>
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                placeholder="Joe's Auto Repair"
                value={form.businessName}
                onChange={handleChange}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Owner name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="ownerName">
                Your name <span className="text-brand-400">*</span>
              </label>
              <input
                id="ownerName"
                name="ownerName"
                type="text"
                required
                placeholder="Joe Martinez"
                value={form.ownerName}
                onChange={handleChange}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                Email address <span className="text-brand-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="joe@josautorepair.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Business type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="businessType">
                Business type <span className="text-brand-400">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={form.businessType}
                onChange={handleChange}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none"
              >
                <option value="" disabled>Select your type...</option>
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Google Maps URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="googleMapsUrl">
                Google Maps URL{" "}
                <span className="text-gray-500 font-normal">(optional — helps us set up faster)</span>
              </label>
              <input
                id="googleMapsUrl"
                name="googleMapsUrl"
                type="url"
                placeholder="https://maps.google.com/..."
                value={form.googleMapsUrl}
                onChange={handleChange}
                className="w-full bg-surface border border-surface-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <p className="text-gray-600 text-xs mt-1.5">
                Search your business on Google Maps → copy the URL from your browser
              </p>
            </div>

            {error && (
              <div className="bg-red-900/30 border border-red-700/50 text-red-400 rounded-lg px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl text-lg transition-colors mt-2"
            >
              {loading ? "Sending..." : "Request early access →"}
            </button>

            <p className="text-center text-gray-500 text-xs">
              No credit card. No commitment. We&apos;ll reach out within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
