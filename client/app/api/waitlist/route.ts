import { NextResponse } from "next/server";
import { WaitlistSchema } from "@/schemas/skills";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    const validationResult = WaitlistSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validationResult.error.format() },
        { status: 400 },
      );
    }

    const { fullName, email, skillInterested } = validationResult.data;

    // Check if email already exists in the waitlist
    const existingResponse = await fetch(
      "http://waitlist.ayonaire.com/api/waitlist",
      {
        cache: "no-store",
      },
    );

    if (existingResponse.ok) {
      const existingData = await existingResponse.json();
      const existingEntry = existingData.find(
        (entry: { email: string }) =>
          entry.email.toLowerCase() === email.toLowerCase(),
      );

      if (existingEntry) {
        return NextResponse.json(
          {
            error: "You have already joined the waitlist!",
            message:
              "This email is already registered. We'll notify you when we're ready.",
            alreadyExists: true,
          },
          { status: 409 },
        );
      }
    }

    // Send data to the external API
    const response = await fetch("http://waitlist.ayonaire.com/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        skillInterested,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit to waitlist", details: responseData },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        ...responseData,
        message: "Successfully joined the waitlist! We'll be in touch soon.",
        success: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error submitting to waitlist:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
