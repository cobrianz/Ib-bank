import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import LoanCalculator from './components/LoanCalculator';
import ServiceModal from './components/ServiceModal';
import CustomerStory from './components/CustomerStory';
import MobileAppSection from './components/MobileAppSection';
import OnlineBankingPortal from './components/OnlineBankingPortal';

const PersonalBankingServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const services = [
    {
      id: 1,
      icon: "CreditCard",
      title: "Personal Loans",
      description: "Flexible personal loans in LRD and USD with competitive rates. Quick approval process designed for Liberia\'s emerging middle class.",
      detailedDescription: `Our personal loans are designed to help you achieve your financial goals, whether it's home improvement, education, medical expenses, or debt consolidation. We offer flexible repayment terms and competitive interest rates for both Liberian Dollar and US Dollar loans.\n\nWith our streamlined application process, you can get approved quickly and access funds when you need them most. Our transparent pricing means no hidden fees or surprise charges.`,
      features: [
        "Loan amounts from L$50,000 to L$5,000,000",
        "USD loans from $500 to $25,000",
        "Flexible repayment terms (6-60 months)",
        "Quick approval within 48 hours",
        "No collateral required for qualified applicants",
        "Competitive interest rates starting at 12%"
      ],
      requirements: [
        "Valid Liberian ID or passport",
        "Proof of income (salary slip or business records)",
        "Bank statements for last 3 months",
        "Employment verification letter",
        "Two references with contact information"
      ],
      startingRate: "12% APR",
      processingTime: "48 hours",
      isPopular: true
    },
    {
      id: 2,
      icon: "PiggyBank",
      title: "Savings Accounts",
      description: "High-yield savings accounts with no minimum balance requirements. Earn competitive interest on both LRD and USD deposits.",
      detailedDescription: `Build your financial future with our range of savings accounts designed for different needs and goals. Whether you're saving for emergencies, future purchases, or long-term wealth building, we have the right account for you.\n\nOur savings accounts offer competitive interest rates, no monthly maintenance fees, and the flexibility to access your funds when needed. Start building your savings today with as little as L$1,000.`,
      features: [
        "No minimum balance requirement",
        "Competitive interest rates up to 8% APR",
        "Free online and mobile banking",
        "No monthly maintenance fees",
        "Unlimited deposits and transfers",
        "ATM access nationwide"
      ],
      requirements: [
        "Valid government-issued ID",
        "Proof of address (utility bill or lease)",
        "Initial deposit of L$1,000 or $10",
        "Completed account opening form"
      ],
      startingRate: "5% APR",
      processingTime: "Same day",
      isPopular: false
    },
    {
      id: 3,
      icon: "Send",
      title: "Money Transfer Services",
      description: "Fast and secure money transfers for the diaspora community. Send and receive money globally with competitive exchange rates.",
      detailedDescription: `Stay connected with family and friends around the world through our comprehensive money transfer services. Whether you're sending money home or receiving funds from abroad, we offer fast, secure, and affordable transfer options.\n\nOur partnerships with major international money transfer operators ensure your funds reach their destination quickly and safely. Track your transfers in real-time through our mobile app or online portal.`,
      features: [
        "Global money transfer network",
        "Competitive exchange rates",
        "Real-time transfer tracking",
        "Multiple pickup locations",
        "Mobile wallet integration",
        "Same-day processing for most destinations"
      ],
      requirements: [
        "Valid photo identification",
        "Recipient information and contact details",
        "Purpose of transfer documentation",
        "Source of funds verification for large amounts"
      ],
      startingRate: "2.5% fee",
      processingTime: "Minutes to hours",
      isPopular: true
    },
    {
      id: 4,
      icon: "Home",
      title: "Mortgage Loans",
      description: "Make homeownership dreams reality with our flexible mortgage solutions. Competitive rates for first-time buyers and refinancing.",
      detailedDescription: `Achieve your dream of homeownership with our comprehensive mortgage loan products. We offer competitive rates, flexible terms, and personalized service to help you find the right financing solution for your new home.\n\nOur experienced mortgage specialists will guide you through every step of the process, from pre-approval to closing. We understand the local real estate market and can help you navigate the complexities of home financing in Liberia.`,
      features: [
        "Up to 80% financing available",
        "Terms up to 25 years",
        "Fixed and variable rate options",
        "First-time buyer programs",
        "Refinancing options available",
        "Pre-approval certificates"
      ],
      requirements: [
        "Proof of stable income for 2+ years",
        "Down payment (minimum 20%)",
        "Property valuation report",
        "Legal title documentation",
        "Comprehensive financial statements",
        "Property insurance coverage"
      ],
      startingRate: "10% APR",
      processingTime: "2-4 weeks",
      isPopular: false
    },
    {
      id: 5,
      icon: "GraduationCap",
      title: "Education Loans",
      description: "Invest in your future with education loans for local and international studies. Flexible repayment options for students and parents.",
      detailedDescription: `Education is the key to a brighter future. Our education loans help students and families finance quality education, whether locally in Liberia or abroad. We offer competitive rates and flexible repayment terms that work with your financial situation.\n\nOur education loans cover tuition fees, accommodation, books, and other educational expenses. With grace periods and flexible repayment options, you can focus on your studies while we handle the financing.`,
      features: [
        "Cover up to 100% of educational expenses",
        "Grace period during studies",
        "Flexible repayment terms",
        "Competitive interest rates",
        "No prepayment penalties",
        "Parent and student loan options"
      ],
      requirements: [
        "Admission letter from accredited institution",
        "Academic transcripts and certificates",
        "Proof of income (student or guarantor)",
        "Cost breakdown from educational institution",
        "Guarantor documentation if required"
      ],
      startingRate: "8% APR",
      processingTime: "1-2 weeks",
      isPopular: false
    },
    {
      id: 6,
      icon: "Car",
      title: "Auto Loans",
      description: "Drive your dream car with our competitive auto financing. New and used vehicle loans with flexible terms and quick approval.",
      detailedDescription: `Get behind the wheel of your dream vehicle with our comprehensive auto loan solutions. Whether you're buying new or used, we offer competitive rates and flexible terms to make car ownership affordable.\n\nOur auto loans feature quick approval processes, competitive interest rates, and flexible repayment terms. We work with local dealers and can help you find the right financing for your vehicle purchase.`,
      features: [
        "Finance up to 90% of vehicle value",
        "New and used vehicle financing",
        "Terms up to 7 years",
        "Quick approval process",
        "Dealer partnerships available",
        "Gap insurance options"
      ],
      requirements: [
        "Valid driver\'s license",
        "Proof of income and employment",
        "Vehicle documentation and valuation",
        "Comprehensive insurance coverage",
        "Down payment (minimum 10%)"
      ],
      startingRate: "11% APR",
      processingTime: "3-5 days",
      isPopular: false
    }
  ];

  const customerStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Monrovia, Liberia",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Personal Loan",
      date: "Dec 2024",
      testimonial: "IB Liberia helped me expand my small business with a quick personal loan. The process was transparent, and the rates were very competitive. I was able to get approved within 48 hours and received the funds the next day. Highly recommended!"
    },
    {
      id: 2,
      name: "Marcus Williams",
      location: "Gbarnga, Liberia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Savings Account",
      date: "Nov 2024",
      testimonial: "The high-yield savings account has been perfect for building my emergency fund. No minimum balance requirements and great customer service. The mobile app makes it easy to track my savings progress and transfer money when needed."
    },
    {
      id: 3,
      name: "Grace Kpehe",
      location: "Buchanan, Liberia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      service: "Money Transfer",
      date: "Jan 2025",
      testimonial: "Sending money to my family in the US has never been easier. The exchange rates are competitive, and the transfers are fast and secure. The real-time tracking feature gives me peace of mind knowing exactly when my family receives the money."
    }
  ];

  const handleServiceLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Personal Banking Services - IB Liberia Digital</title>
        <meta name="description" content="Comprehensive personal banking services including loans, savings accounts, money transfers, and mobile banking solutions designed for Liberia's emerging middle class." />
        <meta name="keywords" content="personal banking, loans, savings, money transfer, mobile banking, Liberia, IB Liberia" />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Award" size={16} />
                <span>CBL Licensed & FDIC Insured</span>
              </div>
              
              <h1 className="text-brand-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Personal Banking
                <span className="text-gradient-brand block">Made Simple</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive financial solutions designed for Liberia's emerging middle class. From personal loans to savings accounts, we're here to help you achieve your financial goals 
                with transparency and competitive rates.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="conversion-cta"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={20}
                >
                  Open Account Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  iconSize={20}
                >
                  Calculate Loan
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center glassmorphic rounded-brand-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center glassmorphic rounded-brand-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">L$2.5B+</div>
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
              </div>
              <div className="text-center glassmorphic rounded-brand-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-sm text-muted-foreground">Avg. Approval Time</div>
              </div>
              <div className="text-center glassmorphic rounded-brand-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Personal Banking Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to meet your personal and family needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onLearnMore={handleServiceLearnMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Loan Calculator Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Calculate Your Loan
              </h2>
              <p className="text-lg text-muted-foreground">
                Get instant estimates for your personal loan with our interactive calculator
              </p>
            </div>

            <LoanCalculator />
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MobileAppSection />
          </div>
        </section>

        {/* Online Banking Portal */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Access Your Accounts Online
              </h2>
              <p className="text-lg text-muted-foreground">
                Secure, convenient banking available 24/7 from anywhere in Liberia
              </p>
            </div>

            <OnlineBankingPortal />
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Customer Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Real stories from real customers who achieved their financial goals with IB Liberia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customerStories.map((story) => (
                <CustomerStory key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust IB Liberia for their personal banking needs. 
              Open your account today and experience transparent, innovative banking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="secondary" 
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={20}
              >
                Open Account Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
              >
                Speak to Advisor
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>CBL Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} />
                <span>Secure Banking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>FDIC Insured</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">IB</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">IB Liberia Digital</h3>
                  <p className="text-sm opacity-80">Transparent Innovation Banking</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                International Bank (Liberia) Limited - Your trusted partner for personal and business banking solutions. 
                Licensed by the Central Bank of Liberia and committed to financial transparency and innovation.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={16} className="opacity-80" />
                <span className="text-sm">+231-77-123-4567</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Personal Banking</div>
                <div>Business Solutions</div>
                <div>Digital Banking</div>
                <div>Agency Network</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Contact Us</div>
                <div>Help Center</div>
                <div>Security</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} International Bank (Liberia) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalBankingServices;