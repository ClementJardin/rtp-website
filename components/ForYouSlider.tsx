"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ForYouItem {
  title: string;
  desc: string;
}

const items: ForYouItem[] = [
  { 
    title: "Tu es sportive",
    desc: "Running, crossfit, fitness, sports collectifs..."
  },
  { 
    title: "Tu as des fuites à l'effort",
    desc: "Et tu veux en finir avec ça"
  },
  { 
    title: "Tu veux comprendre ton corps",
    desc: "Pas juste des exercices, mais une vraie compréhension"
  },
  { 
    title: "Tu refuses d'arrêter le sport",
    desc: "Tu veux continuer à te dépasser"
  },
  { 
    title: "Tu veux retrouver confiance",
    desc: "Confiance en ton périnée et en toi"
  },
];

export default function ForYouSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
    if (isRightSwipe) {
      setCurrentIndex(
        (prev) => (prev - 1 + items.length) % items.length
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Slider swipeable */}
      <div
        className="overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full px-4"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose/20 hover:border-bordeaux/30 transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-bordeaux/10 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-bordeaux text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-bordeaux text-2xl mb-3">{item.title}</h3>
                    <p className="text-noir text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-bordeaux"
                : "w-2 bg-rose"
            }`}
            aria-label={`Aller à l'élément ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
