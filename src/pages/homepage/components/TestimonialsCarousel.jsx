import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Koffa",
      title: "Small Business Owner",
      business: "Koffa Electronics",
      location: "Monrovia, Montserrado",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `IB Liberia transformed my electronics business completely. Their business loan helped me expand from a small shop to three locations across Monrovia. The staff understood my vision and provided personalized support throughout the process. Today, I employ 15 people and serve hundreds of customers monthly.`,
      loanType: "Business Expansion Loan",
      amount: "$18,000",
      impact: "3 locations, 15 employees"
    },
    {
      id: 2,
      name: "Fatima Sesay",
      title: "Entrepreneur",
      business: "Sesay Catering Services",
      location: "Buchanan, Grand Bassa",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `As a woman entrepreneur, I faced many challenges accessing credit. IB Liberia believed in my catering business when others didn't. Their flexible repayment terms and ongoing support helped me grow from home-based cooking to catering major events across Grand Bassa County.`,
      loanType: "Women\'s Business Loan",
      amount: "$12,000",
      impact: "50+ events catered monthly"
    },
    {
      id: 3,
      name: "James Tubman",
      title: "Rice Farmer",
      business: "Tubman Farms",
      location: "Gbarnga, Bong County",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `The agricultural loan from IB Liberia revolutionized my farming operation. I was able to purchase modern equipment and expand my rice production by 400%. Their understanding of seasonal farming cycles and flexible payment schedules made all the difference for my success.`,
      loanType: "Agricultural Development Loan",
      amount: "$22,000",
      impact: "400% production increase"
    },
    {
      id: 4,
      name: "Mary Johnson",
      title: "Teacher & Homeowner",
      business: "Personal Banking Customer",
      location: "Kakata, Margibi County",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `After years of renting, IB Liberia made my dream of homeownership a reality. Their home loan process was transparent and supportive. The mobile banking app makes managing my mortgage payments incredibly convenient. I now have a beautiful home for my family.`,
      loanType: "Home Mortgage Loan",
      amount: "$35,000",
      impact: "Homeownership achieved"
    },
    {
      id: 5,
      name: "David Clarke",
      title: "University Student",
      business: "Education Loan Recipient",
      location: "Monrovia, Montserrado",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `IB Liberia's education loan enabled me to pursue my engineering degree at the University of Liberia. The competitive interest rates and understanding staff made higher education accessible. I'm now in my final year and already have job offers from major companies.`,
      loanType: "Education Loan",
      amount: "$8,500",
      impact: "Engineering degree in progress"
    },
    {
      id: 6,
      name: "Rebecca Williams",
      title: "Market Vendor",
      business: "Williams Market Stall",
      location: "Zwedru, Grand Gedeh",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `The micro-loan from IB Liberia helped me expand my market stall and diversify my products. Their agent banking network means I can access banking services right in my community. My income has doubled, and I can now support my children's education.`,
      loanType: "Micro Business Loan",
      amount: "$3,000",
      impact: "Income doubled"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glassmorphic rounded-brand-lg p-2 px-4 inline-block mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="MessageSquare" size={16} />
              <span className="text-sm font-medium">Customer Success Stories</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Voices from Our Community
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how IB Liberia has empowered individuals and businesses across the nation to achieve their financial goals and dreams.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="neumorphic rounded-brand-lg p-8 lg:p-12 bg-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Customer Info */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <Image
                        src={currentData.image}
                        alt={currentData.name}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto lg:mx-0"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {currentData.name}
                    </h3>
                    <p className="text-primary font-medium mb-1">{currentData.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{currentData.location}</p>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(currentData.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>

                    {/* Loan Details */}
                    <div className="glassmorphic rounded-brand p-4">
                      <div className="text-sm text-muted-foreground mb-2">Loan Type</div>
                      <div className="font-semibold text-foreground mb-3">{currentData.loanType}</div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{currentData.amount}</div>
                          <div className="text-xs text-muted-foreground">Amount</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-success">{currentData.impact}</div>
                          <div className="text-xs text-muted-foreground">Impact</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="relative">
                      <Icon 
                        name="Quote" 
                        size={48} 
                        className="text-primary/20 absolute -top-4 -left-4" 
                      />
                      
                      <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic pl-8">
                        "{currentData.testimonial}"
                      </blockquote>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Business</div>
                          <div className="font-semibold text-foreground">{currentData.business}</div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-success">
                          <Icon name="CheckCircle" size={20} />
                          <span className="text-sm font-medium">Verified Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="thumb-friendly"
                iconName="ChevronLeft"
                iconPosition="left"
                iconSize={16}
              >
                Previous
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full brand-transition ${
                      index === currentTestimonial
                        ? 'bg-primary shadow-brand'
                        : 'bg-muted-foreground/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="thumb-friendly"
                iconName="ChevronRight"
                iconPosition="right"
                iconSize={16}
              >
                Next
              </Button>
            </div>

            {/* Auto-play Control */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-muted-foreground hover:text-primary brand-transition flex items-center space-x-2 mx-auto"
              >
                <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
                <span>{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glassmorphic rounded-brand-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who have achieved their financial goals with IB Liberia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="conversion-cta"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={18}
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={18}
              >
                Share Your Story
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;