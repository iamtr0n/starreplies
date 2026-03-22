import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const DATA_FILE = path.join(process.cwd(), "data", "signups.json");
const ADMIN_PASSWORD = "gridadmin2026";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ signups: [] });
    }

    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const signups = JSON.parse(raw);

    return NextResponse.json({ signups });
  } catch (err) {
    console.error("[admin/signups] Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
