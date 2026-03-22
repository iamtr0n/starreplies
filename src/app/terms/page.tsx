import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <nav className="border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="text-brand-400 text-xl font-bold">★</span>
            <span className="text-white font-semibold text-lg tracking-tight">StarReplies</span>
          </Link>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 mb-4">Last updated: March 2026</p>
        <p className="text-gray-300 leading-relaxed mb-4">
          StarReplies is currently in early access. By signing up, you agree to receive communications from us about the service and to provide accurate information about your business.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          The service is provided as-is during the early access period. We reserve the right to modify or discontinue access at any time.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          You are responsible for ensuring that the review responses posted on your behalf comply with Google&apos;s and Yelp&apos;s policies and any applicable laws.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Full terms of service will be published before general availability. Questions: legal@starreplies.com
        </p>
      </div>
    </div>
  );
}
