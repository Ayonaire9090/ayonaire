import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://waitlist.ayonaire.com/api/waitlist", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch waitlist: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json(
      { error: "Failed to fetch waitlist" },
      { status: 500 }
    );
  }
}
