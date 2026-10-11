import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://ayonairewaitlist.pxxl.click/api/course/course-submission",
      {
        cache: "no-store", // Ensure fresh data, typically good for dynamic lists in dev/testing
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch skills: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 },
    );
  }
}
