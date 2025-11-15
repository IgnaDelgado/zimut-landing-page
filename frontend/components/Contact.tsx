"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export function Contact() {
  const { contact } = useLanguage().content;
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage(contact.validation);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || contact.error);
      }

      setStatus("ok");
      form.reset();
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || contact.error);
    } finally {
      setStatus((prev) => (prev === "loading" ? "idle" : prev));
    }
  }

  const isLoading = status === "loading";

  return (
    <section id="contact" className="border-b border-zimut-gray-200 bg-white">
      <div className="section-wrapper section-padding grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-semibold text-zimut-gray-900 sm:text-4xl">{contact.title}</h2>
            <p className="mt-3 text-sm text-zimut-gray-700 sm:text-base">{contact.subtitle}</p>
          </div>
          <div className="grid gap-3 text-xs text-zimut-gray-700 sm:grid-cols-2">
            {contact.pills.map((pill) => (
              <span
                key={pill}
                className="flex items-center justify-center rounded-full border border-zimut-gray-200 bg-zimut-gray-100 px-3 py-2 font-mono uppercase tracking-[0.28em] text-zimut-green-700"
              >
                <span aria-hidden className="mr-2 text-zimut-green-700">▹</span>
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-glass space-y-4 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-zimut-gray-700">{contact.fields.name}</label>
              <input
                name="name"
                className="w-full rounded-xl border border-zimut-gray-300 bg-white px-3 py-2 text-sm text-zimut-gray-900 outline-none transition focus:border-zimut-green-500 focus:ring-2 focus:ring-zimut-green-200"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zimut-gray-700">{contact.fields.email}</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl border border-zimut-gray-300 bg-white px-3 py-2 text-sm text-zimut-gray-900 outline-none transition focus:border-zimut-green-500 focus:ring-2 focus:ring-zimut-green-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-zimut-gray-700">{contact.fields.company}</label>
            <input
              name="company"
              className="w-full rounded-xl border border-zimut-gray-300 bg-white px-3 py-2 text-sm text-zimut-gray-900 outline-none transition focus:border-zimut-green-500 focus:ring-2 focus:ring-zimut-green-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-zimut-gray-700">{contact.fields.message}</label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-xl border border-zimut-gray-300 bg-white px-3 py-2 text-sm text-zimut-gray-900 outline-none transition focus:border-zimut-green-500 focus:ring-2 focus:ring-zimut-green-200"
              required
            />
          </div>

          {status === "ok" && (
            <p className="flex items-center gap-2 rounded-xl border border-zimut-green-200 bg-zimut-green-100/70 px-3 py-2 text-sm text-zimut-green-800">
              <span aria-hidden className="text-zimut-green-700">✓</span>
              {contact.success}
            </p>
          )}

          {status === "error" && (
            <p className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              <span aria-hidden>!</span>
              {errorMessage || contact.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="cta-primary flex w-full justify-center text-sm disabled:opacity-60"
          >
            {isLoading ? contact.sending : contact.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
