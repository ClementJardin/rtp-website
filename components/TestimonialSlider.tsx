"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  text: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah, 32 ans",
    text: "Après 2 ans à éviter le running à cause des fuites, je cours maintenant 10km sans problème. Merci Romane !",
    result: "10km sans fuites",
  },
  {
    name: "Marie, 28 ans",
    text: "La rééducation classique n'avait rien donné. Avec RTP, j'ai retrouvé ma confiance et je peux faire du crossfit normalement.",
    result: "Crossfit sans protection",
  },
  {
    name: "Julie, 35 ans",
    text: "Post-partum difficile. Aujourd'hui je saute, je cours, je fais du sport comme avant. C'est libérateur !",
    result: "Sport comme avant",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play (optionnel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative w-full">
      {/* Slider swipeable */}
      <div
        className="overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full px-4"
            >
              <div className="bg-beige-light rounded-2xl p-6 shadow-lg border border-rose/30">
                <div className="mb-4">
                  <p className="text-noir text-lg leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-bordeaux">
                      {testimonial.name}
                    </span>
                    <span className="text-sm bg-rose text-bordeaux px-3 py-1 rounded-full font-semibold">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-bordeaux"
                : "w-2 bg-rose"
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
