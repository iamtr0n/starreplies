import Link from "next/link";

const STAR = "★";

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <span className="text-brand-400 text-sm tracking-wide" aria-label={`${count} stars`}>
      {Array.from({ length: count }, (_, i) => STAR).join("")}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-white">
      {/* NAV */}
      <nav className="border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-brand-400 text-xl font-bold">★</span>
            <span className="text-white font-semibold text-lg tracking-tight">StarReplies</span>
          </div>
          <Link
            href="/signup"
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-surface-soft border border-surface-border rounded-full px-4 py-1.5 text-sm text-brand-400 font-medium mb-8">
          <span>★</span>
          <span>Now accepting early access applications</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
          Your reviews deserve a response.{" "}
          <span className="text-brand-400">We write them for you.</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered review responses for local businesses.{" "}
          <span className="text-gray-300">Sounds like you. Posts for you.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/signup"
            className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors w-full sm:w-auto text-center"
          >
            Start your free trial →
          </Link>
          <p className="text-gray-500 text-sm">No credit card required. 14-day trial.</p>
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <StarRow /> Restaurants
          </span>
          <span className="flex items-center gap-1.5">
            <StarRow /> Dental Practices
          </span>
          <span className="flex items-center gap-1.5">
            <StarRow /> HVAC Companies
          </span>
          <span className="flex items-center gap-1.5">
            <StarRow /> Auto Shops
          </span>
          <span className="flex items-center gap-1.5">
            <StarRow /> Salons & Spas
          </span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
              <div className="text-brand-400 text-3xl mb-4">👁</div>
              <h3 className="text-white font-bold text-xl mb-3">Monitor reviews</h3>
              <p className="text-gray-400 leading-relaxed">
                We watch your Google and Yelp reviews around the clock. Every new review lands in your dashboard the moment it's posted — no more logging in to check.
              </p>
            </div>
            <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
              <div className="text-brand-400 text-3xl mb-4">✍️</div>
              <h3 className="text-white font-bold text-xl mb-3">AI drafts responses</h3>
              <p className="text-gray-400 leading-relaxed">
                Our AI learns your voice and tone, then writes responses that sound exactly like you — warm, professional, on-brand. Not robotic. Not generic.
              </p>
            </div>
            <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
              <div className="text-brand-400 text-3xl mb-4">✅</div>
              <h3 className="text-white font-bold text-xl mb-3">You approve or auto-post</h3>
              <p className="text-gray-400 leading-relaxed">
                Review and approve with one tap, or let us auto-post on your behalf. Your call. Either way, every review gets handled — nothing slips through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="border-t border-surface-border bg-surface-soft">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sound familiar?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most local business owners are too busy to keep up with reviews. That's not a character flaw — it's just the reality of running a business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: "I haven't responded to a review in 6 months. I keep meaning to.",
                role: "Restaurant owner, 12 years in",
              },
              {
                quote: "I don't even know what people are saying about us half the time.",
                role: "HVAC company, 3 locations",
              },
              {
                quote: "A customer told me there were bad reviews online. I had no idea.",
                role: "Dental practice manager",
              },
              {
                quote: "I know I should reply but by the time I get to it, it feels too late.",
                role: "Salon owner, 8 years in",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-surface border border-surface-border rounded-2xl p-7"
              >
                <p className="text-white text-lg leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-gray-500 text-sm font-medium">— {item.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-xl font-semibold mb-6">
              StarReplies handles it so you don&apos;t have to think about it.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get early access →
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-gray-400 text-lg">
              No surprises. Cancel anytime. Early access pricing locked in forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Solo */}
            <div className="bg-surface-soft border border-surface-border rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-white font-bold text-2xl mb-1">Solo</h3>
                <p className="text-gray-400 text-sm">One location. Clear the backlog.</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$49</span>
                <span className="text-gray-400 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                {[
                  "1 location",
                  "Up to 50 responses/month",
                  "Google & Yelp monitoring",
                  "AI-drafted responses",
                  "1-click approval or auto-post",
                  "Email notifications",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand-400 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full text-center border border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Start free trial
              </Link>
            </div>

            {/* Growth */}
            <div className="bg-surface-soft border-2 border-brand-500 rounded-2xl p-8 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-white font-bold text-2xl mb-1">Growth</h3>
                <p className="text-gray-400 text-sm">Multiple locations. Handled.</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">$99</span>
                <span className="text-gray-400 text-lg">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                {[
                  "Up to 3 locations",
                  "Unlimited responses",
                  "Google & Yelp monitoring",
                  "AI-drafted responses",
                  "1-click approval or auto-post",
                  "Email notifications",
                  "Priority support",
                  "Response analytics",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand-400 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="border-t border-surface-border bg-surface-soft">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your reputation is being built right now.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Every unanswered review is a missed opportunity. Let StarReplies handle the responses so you can focus on running your business.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Get early access — it&apos;s free to start →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-surface-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-brand-400">★</span>
            <span className="font-semibold text-gray-400">StarReplies</span>
            <span>— AI review responses for local businesses</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
