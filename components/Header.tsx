"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-rose/40">
      {/* Header minimal sur mobile - masqué par défaut, visible au scroll */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-bordeaux">
            RTP
          </Link>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/accompagnement"
              className="text-bordeaux hover:text-bordeaux transition-colors"
            >
              Accompagnement
            </Link>
            <Link
              href="/a-propos"
              className="text-bordeaux hover:text-bordeaux transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/tarifs"
              className="text-bordeaux hover:text-bordeaux transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/contact"
              className="bg-bordeaux text-white px-4 py-2 rounded-full hover:bg-bordeaux-dark transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-bordeaux"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link
              href="/accompagnement"
              className="block text-bordeaux hover:text-bordeaux transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accompagnement
            </Link>
            <Link
              href="/a-propos"
              className="block text-bordeaux hover:text-bordeaux transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/tarifs"
              className="block text-bordeaux hover:text-bordeaux transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="/contact"
              className="block bg-bordeaux text-white px-4 py-2 rounded-full text-center hover:bg-bordeaux-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
