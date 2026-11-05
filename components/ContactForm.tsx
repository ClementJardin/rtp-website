"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS non configuré");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          message: data.message,
          to_email: site.email,
        },
        publicKey
      );
      setStatus("sent");
      track("lead_submit", { source: "contact", success: true });
    } catch (err) {
      console.error(err);
      setStatus("error");
      track("lead_submit", { source: "contact", success: false });
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-[1.75rem] bg-poudre-pale p-6" role="status">
        <p className="titre text-3xl text-vin">Message envoyé&nbsp;!</p>
        <p className="mt-2 text-encre-doux">Je te réponds par email au plus vite.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-semibold">Ton prénom</label>
        <input
          id="name"
          required
          autoComplete="given-name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="input input-clair mt-1.5"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold">Ton email</label>
        <input
          id="email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="input input-clair mt-1.5"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold">Ton message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Ta situation, ton sport, tes objectifs…"
          className="input input-clair mt-1.5 resize-none py-3"
        />
      </div>
      {status === "error" && (
        <p className="rounded-xl bg-poudre-pale p-4 text-sm" role="alert">
          L&apos;envoi n&apos;a pas fonctionné. Réessaie, ou écris directement à{" "}
          <a className="font-bold text-vin underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-vin text-lg font-bold text-sable transition-colors hover:bg-vin-clair disabled:opacity-60 md:w-auto md:px-10"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
