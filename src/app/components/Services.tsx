import { motion } from 'motion/react';
import { Utensils, Briefcase, Cake, TreePine, UtensilsCrossed, Flame } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Wedding Catering',
    description: 'Bespoke menus crafted for your special day with royal elegance and tradition.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Catering',
    description: 'Professional service for conferences, meetings, and corporate events.',
  },
  {
    icon: Cake,
    title: 'Birthday & Private Events',
    description: 'Personalized catering for intimate celebrations and milestone moments.',
  },
  {
    icon: TreePine,
    title: 'Outdoor Catering',
    description: 'Seamless service for garden parties, picnics, and outdoor gatherings.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Buffet Setup',
    description: 'Grand buffet arrangements with live stations and elegant displays.',
  },
  {
    icon: Flame,
    title: 'Live Food Counters',
    description: 'Interactive cooking experiences with chefs preparing dishes on-site.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0F0F0F]">
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
            Our Services
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#1A1A1A] rounded-xl p-6 md:p-8 border border-transparent hover:border-[#C9A24A] transition-all duration-200 cursor-pointer group"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              >
                <div className="mb-6">
                  <Icon 
                    size={32} 
                    className="text-[#C9A24A] group-hover:text-[#E8A020] transition-colors duration-200" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-['Montserrat'] font-semibold text-xl md:text-2xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-['Poppins'] text-sm md:text-base text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
