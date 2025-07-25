import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CorporateBankingSection = () => {
  const corporateServices = [
    {
      id: 1,
      title: "Treasury Management",
      description: "Comprehensive cash management solutions including automated clearing, wire transfers, and liquidity management for large enterprises.",
      features: [
        "Automated Clearing House (ACH)",
        "Wire Transfer Services",
        "Liquidity Management",
        "Cash Concentration",
        "Investment Sweeps",
        "Real-time Reporting"
      ],
      icon: "Vault",
      benefits: "Optimize cash flow and reduce operational costs"
    },
    {
      id: 2,
      title: "Payroll Services",
      description: "Streamlined payroll processing with direct deposit, tax compliance, and employee self-service portals for businesses of all sizes.",
      features: [
        "Direct Deposit Processing",
        "Tax Compliance Management",
        "Employee Self-Service",
        "Multi-location Support",
        "Payroll Cards",
        "Detailed Reporting"
      ],
      icon: "Users",
      benefits: "Reduce payroll processing time by 75%"
    },
    {
      id: 3,
      title: "International Wire Transfers",
      description: "Secure and efficient international money transfers with competitive exchange rates and same-day processing capabilities.",
      features: [
        "Same-day Processing",
        "Competitive FX Rates",
        "SWIFT Network Access",
        "Multi-currency Support",
        "Trade Documentation",
        "Compliance Monitoring"
      ],
      icon: "Globe",
      benefits: "Connect with global markets seamlessly"
    },
    {
      id: 4,
      title: "Credit Lines & Facilities",
      description: "Flexible credit solutions including revolving credit lines, term loans, and specialized financing for corporate growth initiatives.",
      features: [
        "Revolving Credit Lines",
        "Term Loans",
        "Asset-based Lending",
        "Project Financing",
        "Syndicated Loans",
        "Credit Risk Management"
      ],
      icon: "CreditCard",
      benefits: "Access capital when opportunities arise"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Meet with our corporate banking team to assess your business needs and objectives.",
      duration: "1-2 days",
      icon: "MessageSquare"
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Custom solution development based on your business requirements and industry specifics.",
      duration: "3-5 days",
      icon: "Settings"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Complete required documentation and compliance procedures for account setup.",
      duration: "5-7 days",
      icon: "FileText"
    },
    {
      step: 4,
      title: "Implementation",
      description: "System setup, testing, and staff training to ensure smooth transition.",
      duration: "7-10 days",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-20 bg-ib-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-ib-dark to-ib-accent rounded-lg flex items-center justify-center">
              <Icon name="Building" size={24} className="text-white" />
            </div>
            <span className="text-ib-accent font-medium text-lg">Corporate Banking</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive banking solutions designed for larger enterprises with complex financial needs and international operations.
          </p>
        </div>

        {/* Corporate Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {corporateServices.map((service) => (
            <div 
              key={service.id}
              className="glassmorphic rounded-brand-lg p-8 brand-transition hover:shadow-brand-lg group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-ib-dark to-ib-accent rounded-lg flex items-center justify-center group-hover:scale-110 brand-transition">
                  <Icon name={service.icon} size={28} className="text-white" />
                </div>
                <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full">
                  Enterprise
                </span>
              </div>
              
              <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-heading font-semibold text-ib-dark mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-ib-green/5 rounded-brand p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-ib-green" />
                  <span className="text-sm font-medium text-ib-dark">{service.benefits}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                Request Information
              </Button>
            </div>
          ))}
        </div>

        {/* Implementation Timeline */}
        <div className="glassmorphic rounded-brand-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-4">
              Implementation Timeline
            </h3>
            <p className="text-muted-foreground">
              Our streamlined process gets your corporate banking solutions up and running quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-ib-green to-ib-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={24} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ib-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-lg font-heading font-semibold text-ib-dark mb-2 text-center">
                  {step.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-3 text-center">
                  {step.description}
                </p>
                
                <div className="text-center">
                  <span className="inline-flex items-center text-xs bg-ib-accent/10 text-ib-accent px-2 py-1 rounded-full">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {step.duration}
                  </span>
                </div>

                {/* Connection Line */}
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ib-green to-ib-accent transform -translate-x-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="default"
              size="lg"
              className="conversion-cta"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              Schedule Corporate Consultation
            </Button>
          </div>
        </div>

        {/* Relationship Manager Contact */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="glassmorphic rounded-brand-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                <Icon name="UserCheck" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-ib-dark">Dedicated Relationship Manager</h4>
                <p className="text-sm text-muted-foreground">Personal banking advisor for your business</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Every corporate client receives a dedicated relationship manager who understands your business and provides personalized service.
            </p>
            <Button 
              variant="outline" 
              fullWidth
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Meet Your Manager
            </Button>
          </div>

          <div className="glassmorphic rounded-brand-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-ib-dark">24/7 Corporate Support</h4>
                <p className="text-sm text-muted-foreground">Round-the-clock assistance when you need it</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Access our corporate support team anytime for urgent banking needs, technical assistance, or account inquiries.
            </p>
            <Button 
              variant="outline" 
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateBankingSection;