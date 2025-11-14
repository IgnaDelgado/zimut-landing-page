import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message, company } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
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

    await resend.emails.send({
      from: "ZIMUT <contact@zimut.com.ar>",
      to: ["ignaaad@gmail.com"],
      subject: "New contact from ZIMUT website",
      text,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
}
