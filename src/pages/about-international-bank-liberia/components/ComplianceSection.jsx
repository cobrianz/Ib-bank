import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ComplianceSection = () => {
  const certifications = [
    {
      title: "Central Bank of Liberia License",
      description: "Full banking license issued by CBL, authorizing comprehensive financial services",
      icon: "Shield",
      status: "Active",
      date: "2019"
    },
    {
      title: "ISO 27001 Certification",
      description: "International standard for information security management systems",
      icon: "Lock",
      status: "Certified",
      date: "2023"
    },
    {
      title: "PCI DSS Compliance",
      description: "Payment Card Industry Data Security Standard compliance for secure transactions",
      icon: "CreditCard",
      status: "Compliant",
      date: "2024"
    },
    {
      title: "SWIFT Network Member",
      description: "Secure international financial messaging and payment services",
      icon: "Globe",
      status: "Member",
      date: "2020"
    }
  ];

  const partnerships = [
    {
      name: "Mastercard",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      description: "Global payment solutions partner"
    },
    {
      name: "Visa",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      description: "International payment processing"
    },
    {
      name: "SWIFT",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      description: "Secure financial messaging"
    },
    {
      name: "West African Banking Association",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      description: "Regional banking network"
    }
  ];

  const regulations = [
    {
      title: "Anti-Money Laundering (AML)",
      description: "Comprehensive AML policies and procedures to prevent financial crimes",
      icon: "AlertTriangle"
    },
    {
      title: "Know Your Customer (KYC)",
      description: "Robust customer identification and verification processes",
      icon: "UserCheck"
    },
    {
      title: "Data Protection",
      description: "Strict data privacy and protection measures for customer information",
      icon: "Database"
    },
    {
      title: "Risk Management",
      description: "Enterprise-wide risk assessment and mitigation frameworks",
      icon: "TrendingDown"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Regulatory Compliance & Partnerships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Maintaining the highest standards of regulatory compliance and strategic partnerships for secure, reliable banking services.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Licenses & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="glassmorphic rounded-xl p-6 h-full brand-transition group-hover:shadow-brand-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-success to-ib-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={cert.icon} size={20} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-ib-dark">
                          {cert.title}
                        </h4>
                        <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
                          {cert.status}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-ib-green">
                        <Icon name="Calendar" size={14} />
                        <span className="text-xs font-medium">Since {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Strategic Partnerships
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="group">
                <div className="glassmorphic rounded-xl p-6 text-center h-full brand-transition group-hover:shadow-brand-lg group-hover:scale-105">
                  <div className="w-20 h-12 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-ib-dark mb-2">
                    {partner.name}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Framework */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Regulatory Framework
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((regulation, index) => (
              <div key={index} className="group">
                <div className="glassmorphic rounded-xl p-6 h-full brand-transition group-hover:shadow-brand-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ib-accent to-ib-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={regulation.icon} size={20} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-ib-dark mb-3">
                        {regulation.title}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {regulation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 glassmorphic rounded-2xl p-8 bg-gradient-to-br from-success/5 to-ib-green/5">
          <div className="text-center">
            <Icon name="Award" size={48} className="text-success mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-ib-dark mb-4">
              Your Trust, Our Priority
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              We maintain the highest standards of regulatory compliance, security, and transparency to ensure your financial assets are protected and your banking experience is secure and reliable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Shield" size={16} />
                <span>CBL Licensed & Regulated</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Lock" size={16} />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Eye" size={16} />
                <span>Transparent Operations</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Users" size={16} />
                <span>Customer-First Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;