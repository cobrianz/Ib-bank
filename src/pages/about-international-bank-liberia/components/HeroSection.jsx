import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-ib-green via-ib-accent to-ib-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center glassmorphic">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="text-white/80 font-medium">Est. 2018</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              About International Bank
              <span className="block text-ib-light">Liberia Limited</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Bridging traditional banking excellence with digital innovation to empower Liberia's economic growth and financial inclusion.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full glassmorphic">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm font-medium">CBL Licensed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full glassmorphic">
                <Icon name="Users" size={16} className="text-success" />
                <span className="text-sm font-medium">50,000+ Customers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full glassmorphic">
                <Icon name="MapPin" size={16} className="text-success" />
                <span className="text-sm font-medium">15 Counties</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="glassmorphic rounded-2xl p-6 bg-white/10">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Modern banking building in Monrovia, Liberia"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-brand-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ib-dark">Growing Strong</p>
                    <p className="text-xs text-muted-foreground">Since 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;