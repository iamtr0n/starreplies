import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const DATA_FILE = path.join(process.cwd(), "data", "signups.json");

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

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

    ensureDataFile();

    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const signups: unknown[] = JSON.parse(raw);

    const entry = {
      id: crypto.randomUUID(),
      businessName: String(businessName).trim(),
      ownerName: String(ownerName).trim(),
      email: String(email).trim().toLowerCase(),
      businessType: String(businessType).trim(),
      googleMapsUrl: googleMapsUrl ? String(googleMapsUrl).trim() : "",
      createdAt: new Date().toISOString(),
    };

    signups.push(entry);

    fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2), "utf-8");

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[signup] Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
