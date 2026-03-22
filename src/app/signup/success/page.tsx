import Link from "next/link";

export default function SuccessPage() {
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

      {/* CONFIRMATION */}
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-6">🌟</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">You&apos;re on the list.</h1>
        <p className="text-gray-300 text-xl mb-6 leading-relaxed">
          We&apos;ll reach out within 24 hours to get you set up. Keep an eye on your inbox.
        </p>
        <p className="text-gray-400 text-base mb-10">
          In the meantime, sit tight — your reviews are about to start getting the attention they deserve.
        </p>

        <div className="bg-surface-soft border border-surface-border rounded-2xl p-8 mb-10 text-left">
          <h2 className="text-white font-bold text-lg mb-4">What happens next:</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <span className="text-brand-400 font-bold mt-0.5">1.</span>
              <span>We review your signup and reach out to confirm your details.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-400 font-bold mt-0.5">2.</span>
              <span>We connect to your Google Business profile and pull your existing reviews.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-400 font-bold mt-0.5">3.</span>
              <span>We learn your voice and start drafting responses — ready for your approval.</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block border border-surface-border hover:border-brand-500 text-gray-300 hover:text-brand-400 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
}
