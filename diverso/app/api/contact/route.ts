import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  street?: string;
  place?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get Strapi URL and token from environment variables
    const strapiUrl =
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const strapiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    // Prepare data for Strapi
    const strapiData = {
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        street: body.street || null,
        place: body.place || null,
        message: body.message || null,
      },
    };

    // Send to Strapi
    // Note: In Strapi, collection types use the format: api::[plugin-name].[content-type-name]
    // For our case: api::contact-submission.contact-submission
    const response = await fetch(`${strapiUrl}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(strapiToken && { Authorization: `Bearer ${strapiToken}` }),
      },
      body: JSON.stringify(strapiData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Strapi error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit form to Strapi" },
        { status: 500 }
      );
    }

    const result = await response.json();

    return NextResponse.json(
      { success: true, data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

