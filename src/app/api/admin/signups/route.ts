import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "gridadmin2026";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    // Get all signup IDs ordered by timestamp (newest first)
    const ids = await kv.zrange("signups", 0, -1, { rev: true });

    if (!ids || ids.length === 0) {
      return NextResponse.json({ signups: [] });
    }

    // Fetch all signup records
    const signups = await Promise.all(
      ids.map((id) => kv.get(`signup:${id}`))
    );

    return NextResponse.json({ signups: signups.filter(Boolean) });
  } catch (err) {
    console.error("[admin/signups] Error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
