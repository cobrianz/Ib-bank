import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const IntegrationSection = () => {
  const integrations = [
    {
      id: 1,
      name: "QuickBooks",
      category: "Accounting Software",
      description: "Seamlessly sync your business transactions with QuickBooks for automated bookkeeping and financial reporting.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      features: ["Auto transaction sync", "Real-time balance updates", "Tax reporting", "Expense categorization"],
      status: "Available",
      icon: "Calculator"
    },
    {
      id: 2,
      name: "Orange Money",
      category: "Mobile Money",
      description: "Accept Orange Money payments directly into your business account with instant settlement.",
      logo: "https://images.pixabay.com/photo/2021/01/15/17/01/green-5919790_1280.jpg",
      features: ["Instant settlements", "QR code payments", "Bulk disbursements", "Transaction tracking"],
      status: "Available",
      icon: "Smartphone"
    },
    {
      id: 3,
      name: "MTN Mobile Money",
      category: "Mobile Money",
      description: "Integrate MTN Mobile Money for seamless customer payments and business transactions.",
      logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=100",
      features: ["Payment collection", "Airtime top-up", "Bill payments", "Merchant services"],
      status: "Available",
      icon: "Smartphone"
    },
    {
      id: 4,
      name: "Xero",
      category: "Accounting Software",
      description: "Connect your IB business account with Xero for comprehensive financial management and reporting.",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=100&q=80",
      features: ["Bank reconciliation", "Invoice management", "Financial reports", "Multi-currency support"],
      status: "Coming Soon",
      icon: "BarChart3"
    },
    {
      id: 5,
      name: "Shopify",
      category: "E-commerce",
      description: "Accept online payments through your Shopify store with direct deposit to your IB account.",
      logo: "https://images.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
      features: ["Online payments", "Inventory sync", "Sales reporting", "Customer management"],
      status: "Coming Soon",
      icon: "ShoppingCart"
    },
    {
      id: 6,
      name: "Sage Business Cloud",
      category: "ERP System",
      description: "Integrate with Sage for complete business management including accounting, payroll, and inventory.",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&q=80",
      features: ["ERP integration", "Payroll processing", "Inventory management", "Business intelligence"],
      status: "Coming Soon",
      icon: "Database"
    }
  ];

  const benefits = [
    {
      title: "Streamlined Operations",
      description: "Reduce manual data entry and automate financial processes",
      icon: "Zap",
      metric: "75% Time Saved"
    },
    {
      title: "Real-time Insights",
      description: "Get instant access to business performance and cash flow data",
      icon: "BarChart3",
      metric: "Live Updates"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors with automated transaction recording",
      icon: "Shield",
      metric: "99% Accuracy"
    },
    {
      title: "Cost Efficiency",
      description: "Lower operational costs through integrated systems",
      icon: "DollarSign",
      metric: "30% Cost Reduction"
    }
  ];

  const mobileMoneyStats = [
    { label: "Daily Transactions", value: "50,000+", icon: "Activity" },
    { label: "Active Merchants", value: "2,500+", icon: "Store" },
    { label: "Transaction Success Rate", value: "99.8%", icon: "CheckCircle" },
    { label: "Average Settlement Time", value: "< 5 mins", icon: "Clock" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
              <Icon name="Plug" size={24} className="text-white" />
            </div>
            <span className="text-ib-accent font-medium text-lg">System Integration</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Seamless Business Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect your IB business account with popular accounting software and mobile money platforms to streamline operations and improve efficiency.
          </p>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glassmorphic rounded-brand-lg p-6 text-center brand-transition hover:shadow-brand-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-ib-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {benefit.description}
              </p>
              <span className="inline-flex items-center text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                <Icon name="TrendingUp" size={12} className="mr-1" />
                {benefit.metric}
              </span>
            </div>
          ))}
        </div>

        {/* Available Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Available Integrations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div 
                key={integration.id}
                className="glassmorphic rounded-brand-lg p-6 brand-transition hover:shadow-brand-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/50 flex items-center justify-center">
                      <Icon name={integration.icon} size={24} className="text-ib-green" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-ib-dark">
                        {integration.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {integration.category}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    integration.status === 'Available' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-xs">
                      <Icon name="Check" size={14} className="text-success mr-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={integration.status === 'Available' ? 'default' : 'outline'}
                  size="sm"
                  fullWidth
                  iconName={integration.status === 'Available' ? 'Link' : 'Bell'}
                  iconPosition="left"
                  iconSize={16}
                  disabled={integration.status !== 'Available'}
                >
                  {integration.status === 'Available' ? 'Connect Now' : 'Notify Me'}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Money Integration Highlight */}
        <div className="glassmorphic rounded-brand-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-ib-dark">
                    Mobile Money Integration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Accept payments from all major mobile money providers
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expand your customer base by accepting Orange Money and MTN Mobile Money payments. 
                Perfect for retail businesses, service providers, and any business serving customers 
                who prefer mobile payment methods.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Instant payment notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Automatic reconciliation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-foreground">QR code payment acceptance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-foreground">Bulk payment disbursements</span>
                </div>
              </div>
              
              <Button 
                variant="default"
                className="conversion-cta"
                iconName="Smartphone"
                iconPosition="left"
                iconSize={16}
              >
                Enable Mobile Money
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {mobileMoneyStats.map((stat, index) => (
                <div key={index} className="bg-white/50 rounded-brand p-4 text-center border border-ib-green/20">
                  <div className="w-10 h-10 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon} size={20} className="text-white" />
                  </div>
                  <p className="text-2xl font-heading font-bold text-ib-dark mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Setup Process */}
        <div className="glassmorphic rounded-brand-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-4">
              Easy Setup Process
            </h3>
            <p className="text-muted-foreground">
              Get your integrations up and running in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Choose Integration",
                description: "Select the software or platform you want to connect",
                icon: "MousePointer"
              },
              {
                step: 2,
                title: "Authorize Connection",
                description: "Securely link your accounts with OAuth authentication",
                icon: "Shield"
              },
              {
                step: 3,
                title: "Configure Settings",
                description: "Customize sync preferences and automation rules",
                icon: "Settings"
              },
              {
                step: 4,
                title: "Start Using",
                description: "Begin enjoying automated workflows and real-time sync",
                icon: "Play"
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-ib-green to-ib-accent rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Icon name={step.icon} size={24} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-ib-dark text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-lg font-heading font-semibold text-ib-dark mb-2">
                  {step.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ib-green to-ib-accent transform -translate-x-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="default"
              size="lg"
              className="conversion-cta"
              iconName="Rocket"
              iconPosition="left"
              iconSize={20}
            >
              Get Started with Integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;