import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: "Shield",
      title: "256-bit SSL Encryption",
      description: "Bank-grade security for all transactions",
      status: "active"
    },
    {
      id: 2,
      icon: "Lock",
      title: "Multi-Factor Authentication",
      description: "Biometric and SMS verification",
      status: "active"
    },
    {
      id: 3,
      icon: "Eye",
      title: "24/7 Fraud Monitoring",
      description: "Real-time transaction monitoring",
      status: "active"
    },
    {
      id: 4,
      icon: "Award",
      title: "CBL Compliance",
      description: "Central Bank of Liberia certified",
      status: "verified"
    }
  ];

  return (
    <div className="bg-card rounded-brand-lg p-6 glassmorphic">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-success/10 rounded-brand flex items-center justify-center">
          <Icon name="ShieldCheck" size={20} className="text-success" />
        </div>
        <div>
          <h3 className="text-brand-heading text-lg font-semibold text-foreground">
            Security & Compliance
          </h3>
          <p className="text-sm text-muted-foreground">
            Your security is our priority
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {securityFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start space-x-3 p-4 rounded-brand bg-muted/30 hover:bg-muted/50 brand-transition"
          >
            <div className="w-8 h-8 bg-success/10 rounded-brand flex items-center justify-center flex-shrink-0 mt-1">
              <Icon name={feature.icon} size={16} className="text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h4>
                {feature.status === 'verified' && (
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-subtle"></div>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-success/5 rounded-brand border border-success/20">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-success" />
          <span className="text-sm font-medium text-success">Security Notice</span>
        </div>
        <p className="text-xs text-muted-foreground">
          IB Liberia Digital uses international banking security standards. Your data is encrypted and never shared with third parties.
        </p>
      </div>
    </div>
  );
};

export default SecurityBadges;