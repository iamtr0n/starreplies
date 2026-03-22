import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StarReplies — AI Review Responses for Local Businesses",
  description:
    "AI-powered review responses for local businesses. Sounds like you. Posts for you. Never miss a Google or Yelp review again.",
  openGraph: {
    title: "StarReplies — AI Review Responses for Local Businesses",
    description:
      "AI-powered review responses for local businesses. Sounds like you. Posts for you.",
    siteName: "StarReplies",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
