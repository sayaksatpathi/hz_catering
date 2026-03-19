import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuItems = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese with aromatic spices',
        price: '₹450',
        image: 'https://images.unsplash.com/photo-1751212522446-7d4b788c8fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBrZWJhYiUyMGdyaWxsZWQlMjBza2V3ZXJzfGVufDF8fHx8MTc3Mzk0MTA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Tandoori Platter',
        description: 'Assorted kebabs from the clay oven',
        price: '₹650',
        image: 'https://images.unsplash.com/photo-1584542267383-aa453c9cc0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHRhbmRvb3IlMjBpbmRpYW58ZW58MXx8fHwxNzczOTQxMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Chaat Selection',
        description: 'Street-style appetizers with tangy flavors',
        price: '₹350',
        image: 'https://images.unsplash.com/photo-1760263051323-fcd7da7040b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcHBldGl6ZXJzJTIwY2hhYXQlMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc3Mzk0MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
  },
  {
    category: 'Main Course',
    items: [
      {
        name: 'Royal Biryani',
        description: 'Fragrant basmati rice with tender meat or vegetables',
        price: '₹550',
        image: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzczODE4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken',
        price: '₹500',
        image: 'https://images.unsplash.com/photo-1724500938841-ae4e52eb7118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwY291cnNlJTIwYWVyaWFsfGVufDF8fHx8MTc3Mzk0MTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Dal Makhani',
        description: 'Rich black lentils simmered overnight',
        price: '₹400',
        image: 'https://images.unsplash.com/photo-1768725847327-e2d5e929cc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmFucXVldCUyMGNhdGVyaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzczOTQxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings in rose-flavored syrup',
        price: '₹250',
        image: 'https://images.unsplash.com/photo-1617013451942-441bbba35a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBndWxhYiUyMGphbXVufGVufDF8fHx8MTc3Mzg5OTI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Dessert Platter',
        description: 'Assorted traditional Indian sweets',
        price: '₹600',
        image: 'https://images.unsplash.com/photo-1769812344084-b45b638b1737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGxhdHRlciUyMGNhdGVyaW5nJTIwZGlzcGxheXxlbnwxfHx8fDE3NzM5NDEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Kulfi',
        description: 'Traditional Indian ice cream with pistachios',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1772127822454-8566c23084df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwdGFibGUlMjBkZWNvcmF0aW9uJTIwbWFyaWdvbGR8ZW58MXx8fHwxNzczOTQxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
  },
  {
    category: 'Beverages',
    items: [
      {
        name: 'Masala Chai',
        description: 'Spiced tea with aromatic herbs',
        price: '₹100',
        image: 'https://images.unsplash.com/photo-1628702773947-1bcd12856811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBjaGFpJTIwdGVhJTIwYmV2ZXJhZ2V8ZW58MXx8fHwxNzczOTQxMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Fresh Lassi',
        description: 'Creamy yogurt drink with choice of flavors',
        price: '₹150',
        image: 'https://images.unsplash.com/photo-1724500938841-ae4e52eb7118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwY291cnNlJTIwYWVyaWFsfGVufDF8fHx8MTc3Mzk0MTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Mocktails',
        description: 'Refreshing non-alcoholic beverages',
        price: '₹200',
        image: 'https://images.unsplash.com/photo-1760263051323-fcd7da7040b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcHBldGl6ZXJzJTIwY2hhYXQlMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc3Mzk0MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters');

  const currentItems = menuItems.find((m) => m.category === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Playfair_Display'] font-semibold text-3xl md:text-5xl text-[#0F0F0F] mb-4">
            Menu Highlights
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {menuItems.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 rounded-full font-['Montserrat'] text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === category.category
                  ? 'bg-[#C9A24A] text-[#0F0F0F]'
                  : 'bg-white text-[#0F0F0F] hover:bg-[#C9A24A]/20'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#7A1F2A] text-white px-3 py-1 rounded-full font-['Montserrat'] text-xs uppercase tracking-wider">
                      {activeCategory}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#0F0F0F]/50 flex items-center justify-center"
                  >
                    <span className="border-2 border-[#C9A24A] text-[#C9A24A] px-6 py-2 rounded-full font-['Montserrat'] text-sm font-semibold uppercase">
                      View Details
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-['Montserrat'] font-semibold text-lg md:text-xl text-[#0F0F0F]">
                      {item.name}
                    </h3>
                    <span className="font-['Montserrat'] font-semibold text-[#C9A24A] text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-['Poppins'] text-sm text-[#0F0F0F]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
