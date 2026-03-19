import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: "HZ Catering made our wedding absolutely magical. The food was exquisite and the presentation was stunning. Our guests are still talking about it!",
    name: 'Priya & Rahul',
    event: 'Wedding Reception',
  },
  {
    rating: 5,
    quote: "Professional, punctual, and perfect. The corporate event was a huge success thanks to their exceptional service and delicious cuisine.",
    name: 'Amit Sharma',
    event: 'Corporate Event',
  },
  {
    rating: 5,
    quote: "The live food counters were a highlight of our daughter's birthday party. The chef's skills and the taste were both phenomenal!",
    name: 'Neha Patel',
    event: 'Birthday Celebration',
  },
  {
    rating: 5,
    quote: "From planning to execution, everything was flawless. The outdoor setup was beautiful and the food quality was top-notch.",
    name: 'Vikram Singh',
    event: 'Garden Party',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-[#0F0F0F]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Playfair_Display'] font-semibold text-3xl md:text-5xl text-white mb-4">
            Client Stories
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-xl p-8 md:p-12 h-full flex flex-col justify-center" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C9A24A] text-[#C9A24A]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-['Poppins'] italic text-base md:text-lg text-[#0F0F0F] mb-6 text-center leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div className="text-center">
                    <p className="font-['Montserrat'] font-semibold text-lg text-[#0F0F0F]">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="font-['Poppins'] text-sm text-[#0F0F0F]/60">
                      {testimonials[currentIndex].event}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 text-[#C9A24A] hover:text-[#E8A020] transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 text-[#C9A24A] hover:text-[#E8A020] transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex ? 'bg-[#C9A24A] w-8' : 'bg-[#C9A24A]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
