import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      business: "Monrovia Fresh Market",
      industry: "Agriculture & Retail",
      location: "Monrovia, Montserrado",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: `IB's seasonal credit facility was a game-changer for our business. They understood that our cash flow varies with harvest seasons and structured a payment plan that works with our reality. We've grown from one market stall to three locations across Monrovia, and our monthly revenue has increased by 300%. The relationship manager visits us regularly and truly understands our business needs.`,
      metrics: {
        growth: "300% Revenue Growth",
        timeline: "18 months",
        locations: "3 Locations"
      },
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Marcus Williams",
      business: "TechLiberia Solutions",
      industry: "Technology Services",
      location: "Paynesville, Montserrado",
      image: "https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      quote: `As a tech startup, we needed a bank that understood our unique challenges. IB's business advisors helped us structure our finances properly and their digital banking platform made managing multiple client payments seamless. The equipment financing helped us purchase servers and expand our team from 3 to 8 developers. They're not just our bank, they're our growth partners.`,
      metrics: {
        growth: "150% Team Expansion",
        timeline: "12 months",
        locations: "2 Offices"
      },
      videoUrl: "#"
    },
    {
      id: 3,
      name: "Fatima Konneh",
      business: "Coastal Trading Company",
      industry: "Import/Export",
      location: "Buchanan, Grand Bassa",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      quote: `IB's trade finance solutions transformed our import business. Their letters of credit and foreign exchange services made dealing with international suppliers much easier. The processing time for our transactions reduced from weeks to days, and their competitive rates saved us thousands in fees. Our trade volume has doubled since we started banking with them.`,
      metrics: {
        growth: "200% Trade Volume",
        timeline: "24 months",
        locations: "International"
      },
      videoUrl: "#"
    },
    {
      id: 4,
      name: "James Cooper",
      business: "Cooper Construction Ltd",
      industry: "Construction",
      location: "Gbarnga, Bong",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: `The equipment financing from IB allowed us to purchase heavy machinery that transformed our construction capabilities. We can now take on larger projects and complete them faster. Their payroll services also simplified our operations significantly. From a small local contractor, we're now bidding on government projects across three counties.`,
      metrics: {
        growth: "400% Project Value",
        timeline: "30 months",
        locations: "3 Counties"
      },
      videoUrl: "#"
    },
    {
      id: 5,
      name: "Mary Toe",
      business: "Liberian Crafts Collective",
      industry: "Arts & Crafts",
      location: "Kakata, Margibi",
      image: "https://images.pixabay.com/photo/2017/05/31/18/38/woman-2361905_1280.jpg",
      quote: `IB believed in our vision to promote Liberian arts internationally. Their working capital loan helped us purchase materials in bulk and their international wire transfer services made it easy to receive payments from overseas customers. We've grown from 5 artisans to 25, and our products are now sold in 8 countries.`,
      metrics: {
        growth: "500% Artisan Network",
        timeline: "20 months",
        locations: "8 Countries"
      },
      videoUrl: "#"
    },
    {
      id: 6,
      name: "David Mulbah",
      business: "Mulbah Transport Services",
      industry: "Transportation",
      location: "Zwedru, Grand Gedeh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: `Starting with one taxi, IB's vehicle financing program helped us build a fleet of 12 vehicles. Their understanding of the transportation business and flexible repayment terms made expansion possible. The mobile banking services help our drivers make deposits from anywhere, and the business account management tools keep our finances organized.`,
      metrics: {
        growth: "1200% Fleet Size",
        timeline: "36 months",
        locations: "Regional Routes"
      },
      videoUrl: "#"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-ib-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
              <Icon name="Quote" size={24} className="text-white" />
            </div>
            <span className="text-ib-accent font-medium text-lg">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Real Growth Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from Liberian business owners who have transformed their enterprises with IB's support and expertise.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="glassmorphic rounded-brand-lg p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-ib-dark">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-ib-accent font-medium">
                    {currentTestimonial.business}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.industry} • {currentTestimonial.location}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Icon name="Quote" size={32} className="text-ib-green/20 absolute -top-2 -left-2" />
                <blockquote className="text-lg text-foreground leading-relaxed pl-8">
                  {currentTestimonial.quote}
                </blockquote>
              </div>

              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={16}
                >
                  Watch Video
                </Button>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <span className="text-sm text-muted-foreground ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Metrics Display */}
            <div className="space-y-6">
              <h4 className="text-xl font-heading font-semibold text-ib-dark">
                Business Growth Metrics
              </h4>
              
              <div className="grid gap-4">
                <div className="bg-white/50 rounded-brand p-6 border border-ib-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Growth Achievement</span>
                    <Icon name="TrendingUp" size={16} className="text-success" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-ib-dark">
                    {currentTestimonial.metrics.growth}
                  </p>
                </div>

                <div className="bg-white/50 rounded-brand p-6 border border-ib-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <Icon name="Clock" size={16} className="text-ib-accent" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-ib-dark">
                    {currentTestimonial.metrics.timeline}
                  </p>
                </div>

                <div className="bg-white/50 rounded-brand p-6 border border-ib-green/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Expansion</span>
                    <Icon name="MapPin" size={16} className="text-ib-green" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-ib-dark">
                    {currentTestimonial.metrics.locations}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-ib-green/10 to-ib-accent/10 rounded-brand p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Award" size={16} className="text-ib-green" />
                  <span className="text-sm font-medium text-ib-dark">IB Impact</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Comprehensive business banking solutions tailored for Liberian market conditions
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {activeTestimonial + 1} of {testimonials.length}
              </span>
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full brand-transition ${
                      index === activeTestimonial 
                        ? 'bg-ib-green' :'bg-ib-green/30 hover:bg-ib-green/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                iconName="ChevronLeft"
                iconSize={20}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                iconName="ChevronRight"
                iconSize={20}
              />
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`glassmorphic rounded-brand-lg p-6 brand-transition hover:shadow-brand-lg cursor-pointer ${
                index === activeTestimonial ? 'ring-2 ring-ib-green' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-semibold text-ib-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-ib-accent font-medium truncate">
                    {testimonial.business}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.industry}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-foreground line-clamp-3 mb-4">
                {testimonial.quote.substring(0, 120)}...
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  {testimonial.metrics.growth.split(' ')[0]}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-warning fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glassmorphic rounded-brand-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of Liberian businesses that have transformed their operations with IB's comprehensive business banking solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="conversion-cta"
                iconName="Rocket"
                iconPosition="left"
                iconSize={20}
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;