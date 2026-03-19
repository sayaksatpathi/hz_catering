import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

const pricingTiers = [
  {
    name: 'Silver',
    price: '₹799',
    perPerson: true,
    features: [
      'Standard menu selection',
      'Basic buffet setup',
      'Serving staff included',
      'Standard tableware',
      'Clean-up service',
    ],
    popular: false,
    bgColor: 'bg-[#F8F5F0]',
  },
  {
    name: 'Gold',
    price: '₹1,299',
    perPerson: true,
    features: [
      'Premium menu selection',
      'Live food counters',
      'Professional wait staff',
      'Premium tableware & linens',
      'Decorative food displays',
      'Clean-up & packaging',
    ],
    popular: true,
    bgColor: 'bg-[#0F0F0F]',
  },
  {
    name: 'Royal',
    price: '₹1,999',
    perPerson: true,
    features: [
      'Luxury customized menu',
      'Multiple live stations',
      'Dedicated event manager',
      'Royal tableware & decor',
      'Signature presentations',
      'Full event coordination',
      'Photography of setup',
    ],
    popular: false,
    bgColor: 'bg-[#F8F5F0]',
  },
];

export function Pricing({ onPlanSelect }: PricingProps) {
  const scrollToContact = (planName: string) => {
    onPlanSelect(planName);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0F0F0F]">
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
            Pricing Plans
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-8 relative ${tier.bgColor} ${
                tier.popular ? 'border border-[#C9A24A]' : ''
              }`}
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C9A24A] text-[#0F0F0F] px-4 py-1 rounded-full font-['Montserrat'] text-xs font-semibold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3
                className={`font-['Playfair_Display'] font-semibold text-2xl md:text-3xl mb-4 ${
                  tier.popular ? 'text-white' : 'text-[#0F0F0F]'
                }`}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-['Playfair_Display'] font-bold text-4xl md:text-5xl ${
                    tier.popular ? 'text-[#C9A24A]' : 'text-[#C9A24A]'
                  }`}
                >
                  {tier.price}
                </span>
                {tier.perPerson && (
                  <span
                    className={`font-['Poppins'] text-sm ${
                      tier.popular ? 'text-white/70' : 'text-[#0F0F0F]/70'
                    }`}
                  >
                    {' '}
                    per person
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'text-[#C9A24A]' : 'text-[#C9A24A]'
                      }`}
                    />
                    <span
                      className={`font-['Poppins'] text-sm ${
                        tier.popular ? 'text-white/90' : 'text-[#0F0F0F]/90'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => scrollToContact(tier.name)}
                className={`w-full py-4 rounded-full font-['Montserrat'] text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  tier.popular
                    ? 'bg-[#C9A24A] text-[#0F0F0F] hover:bg-[#E8A020]'
                    : 'bg-[#C9A24A] text-[#0F0F0F] hover:bg-[#E8A020]'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}