import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const successStories = [
    {
      id: 1,
      businessName: "Monrovia Fresh Market",
      owner: "Sarah Johnson",
      industry: "Agriculture & Retail",
      growth: "300% revenue increase",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "IB\'s seasonal credit facility helped us expand from one stall to three locations across Monrovia."
    },
    {
      id: 2,
      businessName: "TechLiberia Solutions",
      owner: "Marcus Williams",
      industry: "Technology Services",
      growth: "150% team expansion",
      image: "https://images.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
      quote: "Their understanding of tech startups and flexible payment terms made our growth possible."
    },
    {
      id: 3,
      businessName: "Coastal Trading Co.",
      owner: "Fatima Konneh",
      industry: "Import/Export",
      growth: "200% trade volume",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      quote: "IB's trade finance solutions streamlined our international transactions significantly."
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ib-light via-background to-ib-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-ib-green rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-ib-accent rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-ib-dark rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <span className="text-ib-accent font-medium text-lg">Business Solutions Center</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gradient-brand leading-tight">
                Empowering Liberian
                <span className="block text-ib-dark">Entrepreneurs</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                From Monrovia market vendors to emerging tech startups, we provide tailored financial solutions that understand local market conditions and support sustainable business growth across Liberia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="conversion-cta"
                iconName="Calculator"
                iconPosition="left"
                iconSize={20}
              >
                Business Loan Calculator
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
              >
                Speak with Advisor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">CBL Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">SME Specialist</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span className="text-sm text-muted-foreground">500+ Businesses Served</span>
              </div>
            </div>
          </div>

          {/* Right Content - Success Stories */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-2">
                Success Stories
              </h3>
              <p className="text-muted-foreground">
                Real Liberian businesses growing with IB support
              </p>
            </div>

            <div className="space-y-4">
              {successStories.map((story, index) => (
                <div 
                  key={story.id}
                  className="glassmorphic rounded-brand-lg p-6 brand-transition hover:shadow-brand-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src={story.image}
                        alt={story.owner}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-heading font-semibold text-ib-dark">
                          {story.businessName}
                        </h4>
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                          {story.growth}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {story.owner} • {story.industry}
                      </p>
                      <p className="text-sm text-foreground italic">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link 
                to="#testimonials"
                className="inline-flex items-center text-ib-accent hover:text-ib-dark brand-transition"
              >
                <span className="text-sm font-medium">View All Success Stories</span>
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          variant="default"
          size="icon"
          className="floating-action w-14 h-14 shadow-brand-lg"
          iconName="MessageCircle"
          iconSize={24}
        />
      </div>
    </section>
  );
};

export default HeroSection;