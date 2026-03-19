import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#C9A24A]/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-[#C9A24A] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#C9A24A] rounded-full" />
              </div>
              <span className="text-white font-['Playfair_Display'] text-xl font-semibold">
                HZ Catering
              </span>
            </div>
            <p className="font-['Poppins'] text-sm text-white/70 leading-relaxed mb-2">
              Serving Taste with Royal Perfection
            </p>
            <p className="font-['Poppins'] text-xs text-white/50 leading-relaxed">
              Creating unforgettable culinary experiences for every celebration
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Menu', 'About'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="font-['Poppins'] text-sm text-white/70 hover:text-[#C9A24A] transition-colors cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'Buffet Setup'].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="font-['Poppins'] text-sm text-white/70 hover:text-[#C9A24A] transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-['Montserrat'] font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <button
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </button>
            </div>
            <div className="mt-6">
              <p className="font-['Poppins'] text-sm text-white/70 mb-1">Phone:</p>
              <a href="tel:+911234567890" className="font-['Poppins'] text-sm text-[#C9A24A] hover:text-[#E8A020] transition-colors">
                +91 123 456 7890
              </a>
              <p className="font-['Poppins'] text-sm text-white/70 mt-3 mb-1">Email:</p>
              <a href="mailto:info@hzcatering.com" className="font-['Poppins'] text-sm text-[#C9A24A] hover:text-[#E8A020] transition-colors">
                info@hzcatering.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9A24A]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Poppins'] text-xs text-white/50">
            © 2026 HZ Catering Services. All rights reserved.
          </p>
          <p className="font-['Poppins'] text-xs text-white/50">
            Designed with ❤ for every celebration
          </p>
        </div>
      </div>
    </footer>
  );
}
