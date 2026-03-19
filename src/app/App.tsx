import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Navigation />
      <Hero onBookClick={scrollToContact} onMenuClick={scrollToMenu} />
      <Services />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <Pricing onPlanSelect={handlePlanSelect} />
      <About />
      <Contact selectedPlan={selectedPlan} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}