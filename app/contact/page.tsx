import type { Metadata } from "next";
import Link from "next/link";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur l'accompagnement RTP ? Écris à Romane sur Instagram, par email ou via le formulaire.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-12 md:py-20">
          <div className="wrap grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="display text-6xl text-vin md:text-8xl">On en parle&nbsp;?</h1>
              <p className="mt-5 max-w-md text-lg text-encre-doux">
                Le plus simple pour commencer&nbsp;: le test en 2 minutes. Tu peux aussi m&apos;écrire
                directement.
              </p>

              <div className="mt-8 space-y-3">
                <Link
                  href="/test"
                  className="block rounded-[1.5rem] bg-vin p-5 text-sable transition-colors hover:bg-vin-clair"
                >
                  <span className="titre block text-2xl text-poudre">Faire le test (2 min)</span>
                  <span className="mt-1 block text-sable/80">
                    5 questions sur ta situation. Je te réponds personnellement.
                  </span>
                </Link>
                <a
                  href={site.instagramDm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-[1.5rem] bg-poudre-pale p-5 transition-colors hover:bg-poudre"
                >
                  <FaInstagram className="shrink-0 text-2xl text-vin" aria-hidden />
                  <span>
                    <span className="block font-bold">M&apos;écrire sur Instagram</span>
                    <span className="text-encre-doux">{site.instagramHandle}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-[1.5rem] bg-poudre-pale p-5 transition-colors hover:bg-poudre"
                >
                  <FaEnvelope className="shrink-0 text-2xl text-vin" aria-hidden />
                  <span className="min-w-0">
                    <span className="block font-bold">M&apos;envoyer un email</span>
                    <span className="block break-all text-encre-doux">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="titre text-3xl text-vin">Ou laisse-moi un message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
