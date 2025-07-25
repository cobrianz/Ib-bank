import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glassmorphic rounded-brand-lg p-6 brand-transition brand-hover-scale cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onLearnMore(service)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-brand flex items-center justify-center brand-transition ${
          isHovered ? 'bg-primary shadow-brand' : 'bg-muted'
        }`}>
          <Icon 
            name={service.icon} 
            size={24} 
            className={`brand-transition ${
              isHovered ? 'text-primary-foreground' : 'text-primary'
            }`} 
          />
        </div>
        {service.isPopular && (
          <span className="bg-success text-success-foreground text-xs px-2 py-1 rounded-full font-medium">
            Popular
          </span>
        )}
      </div>

      <h3 className="text-brand-heading text-xl font-semibold mb-2 text-foreground group-hover:text-primary brand-transition">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {service.description}
      </p>

      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon name="Check" size={16} className="text-success flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <span className="text-muted-foreground">Starting from</span>
          <div className="font-semibold text-primary">{service.startingRate}</div>
        </div>
        <Button 
          variant="outline" 
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          className="group-hover:bg-primary group-hover:text-primary-foreground brand-transition"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;