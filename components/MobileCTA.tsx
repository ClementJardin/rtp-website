"use client";

import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";
import { track } from "@vercel/analytics";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-bordeaux text-white p-4 shadow-2xl">
        <Link
          href="/tarifs"
          className="flex items-center justify-center gap-2 w-full text-center font-bold text-lg py-3 bg-white text-bordeaux rounded-full hover:bg-rose transition-colors"
          onClick={() => track("cta_click", { location: "mobile_cta", action: "retrouver_mon_perinee" })}
        >
          <FaDumbbell /> Retrouver mon périnée
        </Link>
      </div>
    </div>
  );
}
