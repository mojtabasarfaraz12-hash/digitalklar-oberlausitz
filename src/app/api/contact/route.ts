import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend or another email service
    // For now, log the contact form submission
    console.log("Contact form submission:", { name, email, subject, message });

    // When Resend is configured, uncomment and add your API key:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@digitalklar-oberlausitz.de",
    //   to: "info@digitalklar-oberlausitz.de",
    //   subject: `Kontaktformular: ${subject}`,
    //   html: `
    //     <h2>Neue Kontaktanfrage</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>E-Mail:</strong> ${email}</p>
    //     <p><strong>Betreff:</strong> ${subject}</p>
    //     <p><strong>Nachricht:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
