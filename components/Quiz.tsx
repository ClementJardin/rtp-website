"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { track } from "@vercel/analytics";
import { FaArrowLeft, FaCheck, FaInstagram, FaTimes } from "react-icons/fa";
import { Answers, focusPoints, questions, summary } from "@/lib/quiz";
import { site } from "@/lib/site";

const STORAGE_KEY = "rtp-test";
const RESULT = questions.length; // écran résultat + formulaire

type Status = "idle" | "sending" | "sent" | "error";

function firstUnanswered(a: Answers) {
  const i = questions.findIndex((q) => !a[q.id]);
  return i === -1 ? RESULT : i;
}

export default function Quiz({ initial }: { initial: Answers }) {
  const [answers, setAnswers] = useState<Answers>(initial);
  const [step, setStep] = useState(() => firstUnanswered(initial));
  const [form, setForm] = useState({ prenom: "", email: "", instagram: "", consent: false });
  const [status, setStatus] = useState<Status>("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advancing = useRef(false);

  // Reprise d'un test commencé (rafraîchissement, retour arrière)
  useEffect(() => {
    if (Object.keys(initial).length) return;
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
      if (saved && typeof saved === "object" && Object.keys(saved).length) {
        setAnswers(saved);
        setStep(firstUnanswered(saved));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
    if (step === RESULT) track("quiz_complete");
    else track("quiz_step", { step: step + 1 });
  }, [step]);

  const choose = (qid: string, oid: string) => {
    if (advancing.current) return;
    advancing.current = true;
    const next = { ...answers, [qid]: oid };
    setAnswers(next);
    // Petit délai pour voir la sélection avant de passer à la suite
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, RESULT));
      advancing.current = false;
    }, 260);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const message = [
      "Nouvelle demande via le test du site RTP",
      "",
      summary(answers),
      "",
      `Instagram : ${form.instagram || "non renseigné"}`,
    ].join("\n");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS non configuré");

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.prenom,
          from_email: form.email,
          reply_to: form.email,
          message,
          to_email: site.email,
        },
        publicKey
      );
      setStatus("sent");
      track("lead_submit", { source: "test", success: true });
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {}
    } catch (err) {
      console.error(err);
      setStatus("error");
      track("lead_submit", { source: "test", success: false });
    }
  };

  const progress = status === "sent" ? 100 : (Math.min(step, RESULT) / RESULT) * 100;

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Barre du haut : sortie + progression */}
      <div className="sticky top-0 z-10 bg-sable">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" className="titre text-2xl text-vin" aria-label="RTP, retour à l'accueil">
            RTP
          </Link>
          <Link
            href="/"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-vin"
            aria-label="Quitter le test"
          >
            <FaTimes className="text-xl" />
          </Link>
        </div>
        <div className="h-1.5 w-full bg-vin/10" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Progression du test">
          <div className="h-full bg-vin transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="wrap flex-1 pb-12 pt-6 md:max-w-2xl md:pt-12">
        {step < RESULT && (
          <QuestionStep
            key={step}
            index={step}
            selected={answers[questions[step].id]}
            onChoose={choose}
            onBack={step > 0 ? () => setStep(step - 1) : undefined}
            headingRef={headingRef}
          />
        )}

        {step === RESULT && status !== "sent" && (
          <div className="step-in">
            <button
              type="button"
              onClick={() => setStep(RESULT - 1)}
              className="-ml-1 inline-flex min-h-[44px] items-center gap-2 font-semibold text-encre-doux"
            >
              <FaArrowLeft aria-hidden /> Modifier mes réponses
            </button>

            <h1 ref={headingRef} tabIndex={-1} className="display mt-4 text-5xl text-vin outline-none md:text-6xl">
              Bonne nouvelle&nbsp;: ça se travaille.
            </h1>
            <p className="mt-4 text-lg text-encre-doux">
              Les fuites à l&apos;effort ne sont pas une fatalité. D&apos;après tes réponses, voilà
              ce qu&apos;on travaillerait ensemble&nbsp;:
            </p>

            <ul className="mt-6 space-y-3">
              {focusPoints(answers).map((p) => (
                <li key={p} className="flex gap-3 rounded-2xl bg-white p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vin text-sable">
                    <FaCheck className="text-[0.65rem]" aria-hidden />
                  </span>
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={submit} className="mt-10 rounded-[1.75rem] bg-vin p-5 text-sable md:p-8">
              <h2 className="titre text-3xl text-poudre">Reçois l&apos;avis de Romane</h2>
              <p className="mt-2 text-sable/80">
                Elle lit tes réponses et te dit personnellement comment elle peut t&apos;aider.
              </p>

              <div className="mt-6 space-y-4">
                <Field label="Ton prénom" id="prenom">
                  <input
                    id="prenom"
                    required
                    autoComplete="given-name"
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="input"
                  />
                </Field>
                <Field label="Ton email" id="email">
                  <input
                    id="email"
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input"
                  />
                </Field>
                <Field label="Ton Instagram" hint="Facultatif, si tu préfères une réponse en message privé" id="instagram">
                  <input
                    id="instagram"
                    autoComplete="off"
                    autoCapitalize="none"
                    placeholder="@toncompte"
                    value={form.instagram}
                    onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                    className="input"
                  />
                </Field>
                <label className="flex cursor-pointer gap-3 pt-1 text-sm text-sable/85">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-poudre"
                  />
                  J&apos;accepte que Romane utilise mes réponses pour me recontacter. Elles ne sont
                  jamais partagées.
                </label>
              </div>

              {status === "error" && (
                <p className="mt-5 rounded-xl bg-sable p-4 text-sm text-encre" role="alert">
                  L&apos;envoi n&apos;a pas fonctionné. Réessaie, ou{" "}
                  <a
                    className="font-bold text-vin underline"
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Mon test RTP")}&body=${encodeURIComponent(
                      `Bonjour Romane,\n\nVoici mes réponses au test :\n${summary(answers)}\n\n${form.prenom}`
                    )}`}
                  >
                    envoie tes réponses par email
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 flex min-h-[56px] w-full items-center justify-center rounded-full bg-poudre text-lg font-bold text-vin-fonce transition-colors hover:bg-poudre-pale disabled:opacity-60"
              >
                {status === "sending" ? "Envoi en cours…" : "Envoyer mes réponses à Romane"}
              </button>
            </form>
          </div>
        )}

        {status === "sent" && (
          <div className="step-in">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-vin text-sable">
              <FaCheck className="text-xl" aria-hidden />
            </span>
            <h1 ref={headingRef} tabIndex={-1} className="display mt-6 text-5xl text-vin outline-none md:text-6xl">
              C&apos;est envoyé, {form.prenom}&nbsp;!
            </h1>
            <p className="mt-4 text-lg text-encre-doux">
              Romane lit tes réponses et te répond par email très vite. Pense à vérifier tes
              courriers indésirables.
            </p>

            <div className="mt-8 space-y-3">
              {site.bookingUrl && (
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("cta_click", { from: "test_merci", to: "booking" })}
                  className="flex min-h-[56px] items-center justify-center rounded-full bg-vin text-lg font-bold text-sable"
                >
                  Réserver mon appel avec Romane
                </a>
              )}
              <a
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("cta_click", { from: "test_merci", to: "instagram_dm" })}
                className={`flex min-h-[56px] items-center justify-center gap-2 rounded-full text-lg font-bold ${
                  site.bookingUrl ? "border-2 border-vin text-vin" : "bg-vin text-sable"
                }`}
              >
                <FaInstagram aria-hidden /> Lui écrire sur Instagram
              </a>
              <Link href="/" className="flex min-h-[48px] items-center justify-center font-semibold text-encre-doux underline underline-offset-4">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionStep({
  index,
  selected,
  onChoose,
  onBack,
  headingRef,
}: {
  index: number;
  selected?: string;
  onChoose: (qid: string, oid: string) => void;
  onBack?: () => void;
  headingRef: React.RefObject<HTMLHeadingElement>;
}) {
  const q = questions[index];
  return (
    <fieldset className="step-in">
      <div className="flex min-h-[44px] items-center justify-between">
        {onBack ? (
          <button type="button" onClick={onBack} className="-ml-1 inline-flex min-h-[44px] items-center gap-2 font-semibold text-encre-doux">
            <FaArrowLeft aria-hidden /> Retour
          </button>
        ) : (
          <span />
        )}
        <span className="text-sm font-semibold text-encre-doux">
          Question {index + 1} sur {questions.length}
        </span>
      </div>
      <legend className="sr-only">{q.title}</legend>
      <h1 ref={headingRef} tabIndex={-1} className="display mt-4 text-5xl text-vin outline-none md:text-6xl">
        {q.title}
      </h1>
      <div className="mt-8 grid gap-3">
        {q.options.map((o) => {
          const isOn = selected === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChoose(q.id, o.id)}
              aria-pressed={isOn}
              className={`flex min-h-[60px] items-center justify-between gap-3 rounded-2xl border-2 px-5 text-left text-lg font-semibold transition-colors ${
                isOn ? "border-vin bg-vin text-sable" : "border-vin/15 bg-white hover:border-vin/50"
              }`}
            >
              {o.label}
              <span
                aria-hidden
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  isOn ? "border-poudre bg-poudre text-vin" : "border-vin/25"
                }`}
              >
                {isOn && <FaCheck className="text-[0.6rem]" />}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({ label, hint, id, children }: { label: string; hint?: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      {hint && <p className="text-sm text-sable/65">{hint}</p>}
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
