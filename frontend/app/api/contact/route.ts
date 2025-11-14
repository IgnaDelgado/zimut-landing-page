import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server email configuration error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, message, company } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const text = [
      "New contact from ZIMUT website:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Project: ${company || "-"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const { data, error } = await resend.emails.send({
      from: "ZIMUT <onboarding@resend.dev>", // 👈 PROBAR ASÍ PRIMERO
      to: ["ignadelgado21@gmail.com"],
      subject: "New contact from ZIMUT website",
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ success: false, error: "Email not sent" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Resend data:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
