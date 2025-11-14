"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Error sending message");
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setStatus((prev) => (prev === "loading" ? "idle" : prev));
    }
  }

  return (
    <section id="contact" className="bg-black py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Let&apos;s talk</h2>
          <p className="mt-3 text-sm text-white/70">
            Tell us briefly about your project, and we&apos;ll come back with
            ideas, questions and next steps.
          </p>
        </div>

        <div className="md:w-1/2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 rounded-2xl bg-white/5 p-5 backdrop-blur"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-white/60">
                  Name *
                </label>
                <input
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs text-white/60">
                Company / Project
              </label>
              <input
                name="company"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-white/60">
                Tell us briefly what you need *
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                required
              />
            </div>

            {status === "ok" && (
              <p className="text-sm text-emerald-400">
                Your message has been sent. We&apos;ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                {error || "Something went wrong. Please try again."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-300 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
