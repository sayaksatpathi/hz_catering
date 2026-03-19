import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onMenuClick: () => void;
}

export function Hero({ onBookClick, onMenuClick }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1700140579084-ef7e6c5f54c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwYnVmZmV0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczOTQxMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury wedding setup"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F]/85 via-[#0F0F0F]/70 to-transparent" />
        {/* Gold Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C9A24A]/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-['Playfair_Display'] font-bold text-4xl md:text-6xl lg:text-7xl text-[#F8F5F0] mb-6 leading-tight"
              style={{ letterSpacing: '-0.5px' }}
            >
              Serving Taste with Royal Perfection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-['Poppins'] text-base md:text-lg text-[#F8F5F0]/70 mb-8 md:mb-12 leading-relaxed max-w-2xl"
            >
              Experience the finest luxury catering service that brings together exquisite flavors, 
              elegant presentation, and impeccable service for your most cherished occasions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onBookClick}
                className="bg-[#C9A24A] text-[#0F0F0F] px-8 py-4 rounded-full font-['Montserrat'] text-sm font-semibold uppercase tracking-wider hover:bg-[#E8A020] transition-all duration-200 cursor-pointer"
              >
                Book Catering
              </button>
              <button
                onClick={onMenuClick}
                className="border-2 border-[#C9A24A] text-[#C9A24A] px-8 py-4 rounded-full font-['Montserrat'] text-sm font-semibold uppercase tracking-wider hover:bg-[#C9A24A] hover:text-[#0F0F0F] transition-all duration-200 cursor-pointer"
              >
                View Menu
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
        >
          <ChevronDown className="text-[#C9A24A]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
