import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const MobileAppSection = () => {
  const appFeatures = [
    "Instant account balance & transaction history",
    "Quick money transfers & bill payments", 
    "Loan applications & status tracking",
    "Biometric security & PIN protection",
    "Offline mode for basic information",
    "Multi-language support (English)"
  ];

  const securityCertifications = [
    { name: "256-bit SSL", icon: "Shield" },
    { name: "CBL Approved", icon: "Award" },
    { name: "Biometric Auth", icon: "Fingerprint" },
    { name: "PCI Compliant", icon: "Lock" }
  ];

  return (
    <div className="glassmorphic rounded-brand-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-brand flex items-center justify-center">
              <Icon name="Smartphone" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-brand-heading text-2xl font-semibold text-foreground">
                IB Mobile Banking
              </h3>
              <p className="text-sm text-muted-foreground">
                Banking at your fingertips, anywhere in Liberia
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Experience the future of banking with our award-winning mobile app. 
            Designed specifically for Liberian customers, featuring offline capabilities 
            for areas with limited connectivity and support for both LRD and USD transactions.
          </p>

          <div className="space-y-3 mb-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {securityCertifications.map((cert, index) => (
              <div key={index} className="text-center p-3 bg-muted/50 rounded-brand">
                <Icon name={cert.icon} size={20} className="text-success mx-auto mb-1" />
                <div className="text-xs font-medium text-foreground">{cert.name}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Button 
              variant="default" 
              fullWidth
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download for iOS
            </Button>
            <Button 
              variant="outline" 
              fullWidth
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Download for Android
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} className="text-warning fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Download" size={12} />
              <span>50K+ Downloads</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>25K+ Active Users</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-64 h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-brand-lg transform rotate-6"></div>
            <div className="relative bg-background rounded-3xl shadow-brand-lg overflow-hidden border-8 border-muted">
              <div className="bg-primary h-6 flex items-center justify-center">
                <div className="w-12 h-1 bg-primary-foreground/50 rounded-full"></div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-foreground">IB Mobile</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-success rounded-full"></div>
                    <div className="w-1 h-1 bg-success rounded-full"></div>
                    <div className="w-1 h-1 bg-success rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Available Balance</div>
                  <div className="text-lg font-bold text-primary">L$45,250.00</div>
                  <div className="text-xs text-muted-foreground">≈ $238.16 USD</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-muted/50 rounded-lg p-2 text-center">
                    <Icon name="Send" size={16} className="text-primary mx-auto mb-1" />
                    <div className="text-xs font-medium">Transfer</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-2 text-center">
                    <Icon name="CreditCard" size={16} className="text-primary mx-auto mb-1" />
                    <div className="text-xs font-medium">Pay Bills</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-foreground">Recent Transactions</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Salary Deposit</span>
                      <span className="text-success">+L$15,000</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Utility Payment</span>
                      <span className="text-error">-L$2,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;