import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Gold Corner Accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#C9A24A] z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#C9A24A]" />
              
              <img
                src="https://images.unsplash.com/photo-1771508558305-11364b4069b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc3Mzk0MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef plating food"
                className="w-full rounded-xl"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Playfair_Display'] font-semibold text-3xl md:text-5xl text-[#0F0F0F] mb-6">
              About HZ Catering
            </h2>
            
            <p className="font-['Poppins'] text-base text-[#0F0F0F]/80 leading-relaxed mb-6">
              For over two decades, HZ Catering Services has been synonymous with excellence in luxury catering. 
              We believe that every event is a celebration of life's precious moments, and our mission is to make 
              each one truly unforgettable.
            </p>
            
            <p className="font-['Poppins'] text-base text-[#0F0F0F]/80 leading-relaxed mb-8">
              Our team of award-winning chefs brings together traditional Indian flavors with contemporary culinary 
              techniques, creating dishes that delight all senses. From intimate gatherings to grand celebrations, 
              we serve taste with royal perfection.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center md:text-left">
                <div className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#C9A24A] mb-2">
                  20+
                </div>
                <div className="font-['Poppins'] text-sm text-[#0F0F0F]/70">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#C9A24A] mb-2">
                  5000+
                </div>
                <div className="font-['Poppins'] text-sm text-[#0F0F0F]/70">Events Catered</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-['Playfair_Display'] font-bold text-3xl md:text-4xl text-[#C9A24A] mb-2">
                  50+
                </div>
                <div className="font-['Poppins'] text-sm text-[#0F0F0F]/70">Cities Served</div>
              </div>
            </div>

            {/* CTA Link */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-['Montserrat'] font-semibold text-[#C9A24A] hover:text-[#E8A020] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              Get in Touch
              <span className="text-xl">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
