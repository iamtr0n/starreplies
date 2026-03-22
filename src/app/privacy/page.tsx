import Link from "next/link";

export default function PrivacyPage() {
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
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-invert">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Last updated: March 2026</p>
        <p className="text-gray-300 leading-relaxed mb-4">
          StarReplies collects only the information you provide during signup: business name, owner name, email, business type, and optionally your Google Maps URL. This information is used solely to set up your account and contact you about the service.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We do not sell your data. We do not share your data with third parties except as required to operate the service (e.g., email delivery).
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          To request deletion of your data, email us at privacy@starreplies.com.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This policy will be updated as the service evolves. Continued use constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
}
