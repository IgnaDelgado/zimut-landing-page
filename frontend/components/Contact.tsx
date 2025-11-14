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
    <section id="contact" className="relative overflow-hidden bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-gradient-to-br from-mint/20 to-transparent blur-3xl" />
        <div className="absolute right-[-15%] bottom-[-15%] h-96 w-96 rounded-full bg-gradient-to-br from-sky/25 to-transparent blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:w-5/12"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">{contact.title}</h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">{contact.subtitle}</p>
          <div className="mt-8 grid gap-4 text-xs text-white/60 sm:grid-cols-2">
            {contact.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center uppercase tracking-[0.28em]"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="md:w-7/12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute -top-20 left-14 h-40 w-40 rounded-full bg-gradient-to-br from-mint/30 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-6 h-48 w-48 rounded-full bg-gradient-to-br from-sky/25 to-transparent blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-white/60">{contact.fields.name}</label>
                <input
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">{contact.fields.email}</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="mb-1 block text-xs text-white/60">{contact.fields.company}</label>
              <input
                name="company"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
              />
            </div>

            <div className="relative">
              <label className="mb-1 block text-xs text-white/60">{contact.fields.message}</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                required
              />
            </div>

            {status === "ok" && (
              <p className="relative text-sm text-emerald-400">{contact.success}</p>
            )}

            {status === "error" && (
              <p className="relative text-sm text-red-400">{errorMessage || contact.error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-mint to-sky px-4 py-3 text-sm font-semibold text-bgDark transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <span>{isLoading ? contact.sending : contact.submit}</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
