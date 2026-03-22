import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, ownerName, email, businessType, googleMapsUrl } = body;

    // Validate required fields
    if (!businessName || !ownerName || !email || !businessType) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const entry = {
      id,
      businessName: String(businessName).trim(),
      ownerName: String(ownerName).trim(),
      email: String(email).trim().toLowerCase(),
      businessType: String(businessType).trim(),
      googleMapsUrl: googleMapsUrl ? String(googleMapsUrl).trim() : "",
      createdAt: new Date().toISOString(),
    };

    // Store individual signup record
    await kv.set(`signup:${id}`, entry);

    // Add to sorted set by timestamp for ordered retrieval
    await kv.zadd("signups", { score: Date.now(), member: id });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[signup] Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
