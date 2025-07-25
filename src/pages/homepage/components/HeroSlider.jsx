import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import background from "../../../assets/ib-background.jpg"
import background2 from "../../../assets/id-bg2.jpg"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const slides = [
    {
      id: 1,
      title: "Digital Banking Revolution",
      subtitle: "Experience the Future of Banking in Liberia",
      description: "Join thousands of satisfied customers who trust IB Liberia for secure, innovative digital banking solutions that grow with your financial needs.",
      image: background,
      cta: "Open Account Today",
      ctaLink: "/personal-banking-services",
      stats: { value: "50,000+", label: "Active Customers" }
    },
    {
      id: 2,
      title: "Business Growth Solutions",
      subtitle: "Empowering Liberian Entrepreneurs",
      description: "From startup loans to enterprise credit facilities, we provide tailored financial solutions that fuel business growth across Liberia.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=1200&h=600&fit=crop",
      cta: "Explore Business Solutions",
      ctaLink: "/business-solutions-center",
      stats: { value: "$2.5M+", label: "Loans Disbursed" }
    },
    {
      id: 3,
      title: "Agency Banking Network",
      subtitle: "Banking Closer to Your Community",
      description: "Access banking services at over 150 agent locations nationwide. Convenient, secure, and always within reach.",
      image: background2,
      cta: "Find Nearest Agent",
      ctaLink: "/agency-banking-network",
      stats: { value: "150+", label: "Agent Locations" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-ib-green via-ib-accent to-ib-dark py-8 lg:py-16 top-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ib-dark/80 via-ib-green/60 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Real-time Date/Time Display */}
      <div className="absolute top-20 right-4 lg:top-24 lg:right-8 glassmorphic rounded-brand p-4 text-white z-20">
        <div className="text-right">
          <div className="text-sm font-medium opacity-90">
            {formatDate(currentTime)}
          </div>
          <div className="text-2xl font-bold font-heading">
            {formatTime(currentTime)}
          </div>
          <div className="text-xs opacity-75 mt-1">
            Monrovia, Liberia
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glassmorphic rounded-brand-lg p-2 px-4 inline-block mb-6"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      {slides[currentSlide].stats.value} {slides[currentSlide].stats.label}
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-ib-light"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl opacity-90"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to={slides[currentSlide].ctaLink}>
                    <Button
                      variant="default"
                      size="lg"
                      className="conversion-cta text-lg px-8 py-4 brand-hover-glow"
                      iconName="ArrowRight"
                      iconPosition="right"
                      iconSize={20}
                    >
                      {slides[currentSlide].cta}
                    </Button>
                  </Link>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="glassmorphic border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                    iconName="Play"
                    iconPosition="left"
                    iconSize={20}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 glassmorphic rounded-full flex items-center justify-center text-white hover:bg-white/20 brand-transition thumb-friendly"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full brand-transition ${
                  index === currentSlide
                    ? 'bg-white shadow-brand'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 glassmorphic rounded-full flex items-center justify-center text-white hover:bg-white/20 brand-transition thumb-friendly"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <div className="glassmorphic rounded-brand p-4 text-white">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>CBL Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} className="text-success" />
              <span>Secure Banking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-success" />
              <span>FDIC Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;