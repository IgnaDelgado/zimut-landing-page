import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "ZIMUT <onboarding@resend.dev>";
  const recipientsEnv = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL;

  if (!apiKey || !recipientsEnv) {
    console.error("Missing email configuration", {
      hasApiKey: Boolean(apiKey),
      hasRecipients: Boolean(recipientsEnv),
    });
    return new Response(
      JSON.stringify({
        success: false,
        error: "Server email configuration error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const recipients = recipientsEnv
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    console.error("No valid recipients configured");
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
      from,
      to: recipients,
      subject: "New contact from ZIMUT website",
      text,
      reply_to: email,
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
