"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("error");

      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong while sending your message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-gradient-to-b from-black via-[#0F0F12] to-bgDark"
    >
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid items-start gap-10 md:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Ready to grow with clarity and technology?
            </h2>
            <p className="section-subtitle">
              Tell us where your product stands, the friction you feel, and the growth you’re chasing. We’ll reply with a guided next step and a team committed to walking beside you.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Founder-led teams needing focus amid rapid change.</li>
              <li>• Organisations modernising mission-critical platforms.</li>
              <li>• Leaders exploring AI with responsibility and care.</li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="card-glass space-y-4 border-white/10 bg-white/5 p-6 text-sm"
          >
            <div>
              <label className="mb-1 block text-xs text-white/60">
                Name *
              </label>
              <input
                required
                name="name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-mint"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/60">
                Email *
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-mint"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/60">
                Company / Project
              </label>
              <input
                name="company"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-mint"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/60">
                Tell us briefly what you need *
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-mint"
              />
            </div>

            {status === "ok" && (
              <p className="text-xs text-mint">
                ✅ Thanks for reaching out. We will be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center rounded-full bg-mint px-4 py-2 text-sm font-semibold text-bgDark transition-colors hover:bg-sky disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Let’s begin"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
