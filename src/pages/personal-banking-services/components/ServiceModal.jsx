import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glassmorphic rounded-brand-lg shadow-brand-lg">
        <div className="sticky top-0 glassmorphic border-b border-border/50 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-brand flex items-center justify-center">
              <Icon name={service.icon} size={20} className="text-primary-foreground" />
            </div>
            <h2 className="text-brand-heading text-xl font-semibold text-foreground">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-brand brand-transition"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-brand-heading text-lg font-semibold mb-3 text-foreground">
              Service Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-brand-heading text-lg font-semibold mb-3 text-foreground">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-brand-heading text-lg font-semibold mb-3 text-foreground">
              Requirements
            </h3>
            <div className="space-y-2">
              {service.requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Icon name="FileText" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-brand p-4">
            <h3 className="text-brand-heading text-lg font-semibold mb-3 text-foreground">
              Pricing & Terms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Starting Rate</div>
                <div className="text-lg font-semibold text-primary">{service.startingRate}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Processing Time</div>
                <div className="text-lg font-semibold text-foreground">{service.processingTime}</div>
              </div>
            </div>
            <div className="mt-3 p-3 bg-background/50 rounded-brand">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <strong>Transparent Pricing:</strong> No hidden fees. All charges clearly disclosed upfront.
                  Terms and conditions apply. Contact us for personalized rates.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button 
              variant="default" 
              fullWidth
              iconName="FileText"
              iconPosition="left"
              iconSize={16}
            >
              Apply Online
            </Button>
            <Button 
              variant="outline" 
              fullWidth
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download Brochure
            </Button>
            <Button 
              variant="secondary" 
              fullWidth
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;