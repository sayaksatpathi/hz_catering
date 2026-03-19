import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Masonry from 'react-responsive-masonry';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1700140579084-ef7e6c5f54c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwYnVmZmV0JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzczOTQxMDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Grand Wedding Setup',
  },
  {
    url: 'https://images.unsplash.com/photo-1724500938841-ae4e52eb7118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwY291cnNlJTIwYWVyaWFsfGVufDF8fHx8MTc3Mzk0MTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Fine Dining Plated Course',
  },
  {
    url: 'https://images.unsplash.com/photo-1768725847327-e2d5e929cc1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmFucXVldCUyMGNhdGVyaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzczOTQxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Outdoor Banquet Setup',
  },
  {
    url: 'https://images.unsplash.com/photo-1584542267383-aa453c9cc0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHRhbmRvb3IlMjBpbmRpYW58ZW58MXx8fHwxNzczOTQxMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Live Cooking Counter',
  },
  {
    url: 'https://images.unsplash.com/photo-1772127822454-8566c23084df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwdGFibGUlMjBkZWNvcmF0aW9uJTIwbWFyaWdvbGR8ZW58MXx8fHwxNzczOTQxMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Wedding Table Decoration',
  },
  {
    url: 'https://images.unsplash.com/photo-1769812344084-b45b638b1737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGxhdHRlciUyMGNhdGVyaW5nJTIwZGlzcGxheXxlbnwxfHx8fDE3NzM5NDEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Dessert Platter Display',
  },
  {
    url: 'https://images.unsplash.com/photo-1771508558305-11364b4069b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVufGVufDF8fHx8MTc3Mzk0MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Chef Plating Expertise',
  },
  {
    url: 'https://images.unsplash.com/photo-1760263051323-fcd7da7040b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcHBldGl6ZXJzJTIwY2hhYXQlMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc3Mzk0MTA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Chaat Counter Closeup',
  },
  {
    url: 'https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZSUyMGRpc2h8ZW58MXx8fHwxNzczODE4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Royal Biryani',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0F0F0F]">
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
            Gallery
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A24A] mx-auto" />
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="8px">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <motion.img
                src={image.url}
                alt={image.caption}
                className="w-full h-auto"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.25 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#0F0F0F]/70 flex items-center justify-center"
              >
                <Maximize2 className="text-[#C9A24A]" size={28} />
              </motion.div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#C9A24A] transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A24A] transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A24A] transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-full object-contain"
              />
              <p className="text-center text-white font-['Poppins'] mt-4 text-lg">
                {galleryImages[selectedImage].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
