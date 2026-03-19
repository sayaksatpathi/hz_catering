import { motion } from 'motion/react';
import { Award, Clock, Users, Sparkles, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest ingredients and recipes',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock support for your events',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Professional chefs and service staff',
  },
  {
    icon: Sparkles,
    title: 'Elegant Presentation',
    description: 'Stunning visual displays',
  },
  {
    icon: Shield,
    title: 'Hygiene Certified',
    description: 'Highest food safety standards',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish prepared with care',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F0] relative overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#0F0F0F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#0F0F0F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#0F0F0F" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#0F0F0F" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Playfair_Display'] font-semibold text-3xl md:text-5xl text-[#0F0F0F] mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C9A24A] flex items-center justify-center mx-auto mb-4 md:mb-6"
                >
                  <Icon size={32} className="text-[#0F0F0F]" strokeWidth={1.5} />
                </motion.div>
                <h3 className="font-['Montserrat'] font-semibold text-lg md:text-xl text-[#0F0F0F] mb-2">
                  {feature.title}
                </h3>
                <p className="font-['Poppins'] text-sm md:text-base text-[#0F0F0F]/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
