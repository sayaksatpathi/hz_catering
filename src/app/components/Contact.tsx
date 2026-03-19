import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

interface ContactProps {
  selectedPlan?: string;
}

export function Contact({ selectedPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    pricingPlan: selectedPlan || '',
    guestCount: '',
    date: '',
    message: '',
  });

  // Update pricing plan when selectedPlan prop changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, pricingPlan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      pricingPlan: '',
      guestCount: '',
      date: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0F0F0F]">
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
            Book Your Event
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              />
            </div>

            {/* Event Type and Guest Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventType" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors cursor-pointer"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="outdoor">Outdoor Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="guestCount" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                  Guest Count *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  required
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                />
              </div>
            </div>

            {/* Pricing Plan */}
            <div>
              <label htmlFor="pricingPlan" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                Pricing Plan
              </label>
              <select
                id="pricingPlan"
                name="pricingPlan"
                value={formData.pricingPlan}
                onChange={handleChange}
                className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors cursor-pointer"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                <option value="">Select pricing plan (optional)</option>
                <option value="Silver">Silver - ₹799 per person</option>
                <option value="Gold">Gold - ₹1,299 per person</option>
                <option value="Royal">Royal - ₹1,999 per person</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                Event Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full h-12 md:h-14 bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 text-white font-['Poppins'] outline-none transition-colors cursor-pointer"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-['Poppins'] text-sm text-white/70 mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-[#1A1A1A] focus:border-[#C9A24A] rounded-lg px-4 py-3 text-white font-['Poppins'] outline-none transition-colors resize-none"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 md:h-14 bg-[#C9A24A] text-[#0F0F0F] rounded-full font-['Montserrat'] text-sm font-semibold uppercase tracking-wider hover:bg-[#E8A020] transition-all duration-200 cursor-pointer"
            >
              Request a Quote
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}