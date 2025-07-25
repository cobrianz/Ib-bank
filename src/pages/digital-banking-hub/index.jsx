import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SecurityBadges from './components/SecurityBadges';
import OnlinePortal from './components/OnlinePortal';
import MobileAppShowcase from './components/MobileAppShowcase';
import DigitalLiteracy from './components/DigitalLiteracy';
import SystemStatus from './components/SystemStatus';
import ThirdPartyServices from './components/ThirdPartyServices';
import CustomerSupport from './components/CustomerSupport';

const DigitalBankingHub = () => {
  const digitalFeatures = [
    {
      id: 1,
      icon: "Shield",
      title: "Bank-Grade Security",
      description: "Multi-layer security with biometric authentication and real-time fraud monitoring",
      highlight: "256-bit SSL Encryption"
    },
    {
      id: 2,
      icon: "Smartphone",
      title: "Mobile-First Design",
      description: "Optimized for Liberia\'s mobile-first banking needs with offline capabilities",
      highlight: "Works Offline"
    },
    {
      id: 3,
      icon: "Globe",
      title: "Multi-Language Support",
      description: "Available in English and local Liberian languages for accessibility",
      highlight: "Local Languages"
    },
    {
      id: 4,
      icon: "Zap",
      title: "Instant Transactions",
      description: "Real-time processing for transfers, bill payments, and account management",
      highlight: "Real-Time Processing"
    }
  ];

  const quickStats = [
    { label: "Digital Users", value: "25,000+", icon: "Users", color: "text-success" },
    { label: "Monthly Transactions", value: "150,000+", icon: "TrendingUp", color: "text-primary" },
    { label: "System Uptime", value: "99.9%", icon: "Activity", color: "text-accent" },
    { label: "Customer Satisfaction", value: "4.8/5", icon: "Star", color: "text-warning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 lg:px-6 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Digital Banking Revolution</span>
            </div>
            
            <h1 className="text-brand-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Digital Banking
              <span className="text-gradient-brand block">Hub Awaits</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Experience the future of banking with IB Liberia Digital. Secure, accessible, and designed specifically for Liberia's digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="LogIn"
                iconPosition="left"
                className="conversion-cta"
              >
                Access Online Banking
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Mobile App
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-')}/10 rounded-brand flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={stat.icon} size={24} className={stat.color} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Features Overview */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Liberia's Digital Future
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our digital banking platform addresses the unique needs of Liberian customers with innovative features and local insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-card rounded-brand-lg p-6 glassmorphic hover:shadow-brand-lg brand-transition group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white brand-transition">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {feature.description}
                </p>
                <div className="inline-flex items-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  <Icon name="Check" size={12} className="mr-1" />
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Banking Portal */}
      <section className="py-16 px-4 lg:px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Secure Online Banking Portal
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Access your accounts, transfer money, pay bills, and manage your finances with our secure online banking platform. Built with international security standards and optimized for the Liberian banking environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/10 rounded-brand flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-success" />
                  </div>
                  <span className="text-foreground">Multi-factor authentication with biometric support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/10 rounded-brand flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-success" />
                  </div>
                  <span className="text-foreground">Real-time transaction monitoring and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/10 rounded-brand flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-success" />
                  </div>
                  <span className="text-foreground">24/7 access from any device, anywhere</span>
                </div>
              </div>
            </div>
            <div>
              <OnlinePortal />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <MobileAppShowcase />
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 lg:px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Security is Our Priority
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We employ international banking security standards to protect your financial information and transactions. Our multi-layered security approach ensures your peace of mind while banking digitally.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Advanced Encryption</h3>
                    <p className="text-muted-foreground text-sm">All data is protected with 256-bit SSL encryption, the same standard used by international banks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Eye" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Monitoring</h3>
                    <p className="text-muted-foreground text-sm">Our fraud detection system monitors transactions in real-time to identify and prevent suspicious activity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Regulatory Compliance</h3>
                    <p className="text-muted-foreground text-sm">Fully compliant with Central Bank of Liberia regulations and international banking standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SecurityBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Literacy Resources */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn Digital Banking Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master digital banking with our comprehensive learning resources, available in multiple languages and designed for all skill levels.
            </p>
          </div>
          <DigitalLiteracy />
        </div>
      </section>

      {/* System Status Dashboard */}
      <section className="py-16 px-4 lg:px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <SystemStatus />
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integrated Services for Daily Life
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pay bills, top up mobile credit, and access government services directly from your banking platform. Digital banking that fits your lifestyle.
            </p>
          </div>
          <ThirdPartyServices />
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-16 px-4 lg:px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support When You Need It
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get help through multiple channels including live chat, video calls, and comprehensive FAQ resources. Our support team understands your digital banking journey.
            </p>
          </div>
          <CustomerSupport />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-brand-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Digital Banking?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of Liberians who have already embraced the future of banking. Get started with IB Liberia Digital today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="UserPlus"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Open Digital Account
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">IB</span>
                </div>
                <div>
                  <h3 className="text-brand-heading text-lg font-bold text-white">
                    IB Liberia Digital
                  </h3>
                  <p className="text-white/80 text-sm">Transparent Innovation Banking</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Leading Liberia's digital banking transformation with secure, accessible, and innovative financial services designed for the modern Liberian economy.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-brand flex items-center justify-center cursor-pointer hover:bg-white/20 brand-transition">
                  <Icon name="Facebook" size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-brand flex items-center justify-center cursor-pointer hover:bg-white/20 brand-transition">
                  <Icon name="Twitter" size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-brand flex items-center justify-center cursor-pointer hover:bg-white/20 brand-transition">
                  <Icon name="Linkedin" size={16} className="text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Digital Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white brand-transition">Online Banking</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Mobile App</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Bill Payments</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Money Transfers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white brand-transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Live Chat</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white brand-transition">System Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} International Bank (Liberia) Limited. All rights reserved. Licensed by the Central Bank of Liberia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalBankingHub;