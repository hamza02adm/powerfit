import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = RATE_LIMIT.get(ip);

  if (entry && entry.resetAt > now) {
    if (entry.count >= 5) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    entry.count++;
  } else {
    RATE_LIMIT.set(ip, { count: 1, resetAt: now + 60_000 });
  }

  try {
    const body = await req.json();
    const { name, email, message, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !email ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // In production, send via Resend/SendGrid here
    console.log("Contact form submission:", { name, email, message: message.slice(0, 100) });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
