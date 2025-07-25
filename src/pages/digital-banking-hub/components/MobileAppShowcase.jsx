import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const MobileAppShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const appFeatures = [
    {
      id: 0,
      icon: "Wifi",
      title: "Offline Transaction Queue",
      description: "Queue transactions when offline, sync when connected",
      benefit: "Perfect for areas with poor connectivity",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
    },
    {
      id: 1,
      icon: "Globe",
      title: "Multi-Language Support",
      description: "Available in English and local Liberian languages",
      benefit: "Banking in your preferred language",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      icon: "Smartphone",
      title: "Mobile Money Integration",
      description: "Connect with Orange Money, MTN, and other services",
      benefit: "Seamless local payment integration",
      image: "https://images.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg"
    },
    {
      id: 3,
      icon: "Fingerprint",
      title: "Biometric Security",
      description: "Fingerprint and face recognition login",
      benefit: "Fast and secure authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop"
    }
  ];

  const downloadStats = [
    { label: "Active Users", value: "25,000+", icon: "Users" },
    { label: "App Rating", value: "4.8/5", icon: "Star" },
    { label: "Downloads", value: "50,000+", icon: "Download" },
    { label: "Uptime", value: "99.9%", icon: "Activity" }
  ];

  return (
    <div className="bg-card rounded-brand-lg glassmorphic overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center">
            <Icon name="Smartphone" size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="text-brand-heading text-xl font-bold text-foreground">
              IB Liberia Mobile App
            </h2>
            <p className="text-muted-foreground text-sm">
              Banking designed for Liberia's mobile-first future
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {downloadStats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted/30 rounded-brand">
              <Icon name={stat.icon} size={20} className="text-primary mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature List */}
          <div className="space-y-4">
            <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-4">
              Key Features
            </h3>
            {appFeatures.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`p-4 rounded-brand cursor-pointer brand-transition ${
                  activeFeature === index
                    ? 'bg-primary/10 border border-primary/20' :'bg-muted/30 hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-brand flex items-center justify-center flex-shrink-0 ${
                    activeFeature === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={feature.icon} size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {feature.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="sticky top-4">
              <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-brand-lg">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                  <div className="h-full overflow-hidden">
                    <Image
                      src={appFeatures[activeFeature].image}
                      alt={appFeatures[activeFeature].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold mb-1">
                        {appFeatures[activeFeature].title}
                      </h4>
                      <p className="text-xs opacity-90">
                        {appFeatures[activeFeature].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="text-center">
            <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-4">
              Download IB Liberia Mobile App
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                className="conversion-cta"
                iconName="Smartphone"
                iconPosition="left"
              >
                Download for Android
              </Button>
              <Button
                variant="outline"
                iconName="Apple"
                iconPosition="left"
              >
                Download for iOS
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Available on Google Play Store and Apple App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppShowcase;