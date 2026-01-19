"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-bordeaux text-white p-4 shadow-2xl">
        <Link
          href="/contact"
          className="block w-full text-center font-bold text-lg py-3 bg-white text-bordeaux rounded-full hover:bg-rose transition-colors"
        >
          Je démarre maintenant
        </Link>
      </div>
    </div>
  );
}
