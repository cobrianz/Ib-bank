import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AgencyOpportunitiesSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');

  const agencyBenefits = [
    {
      id: 1,
      title: "Recurring Revenue Stream",
      description: "Earn commission on every transaction processed through your agency location.",
      icon: "DollarSign",
      earning: "Up to $2,000/month"
    },
    {
      id: 2,
      title: "Community Impact",
      description: "Bring essential banking services to underserved communities across Liberia.",
      icon: "Heart",
      earning: "Social Impact"
    },
    {
      id: 3,
      title: "Business Growth",
      description: "Expand your existing business with additional financial services offerings.",
      icon: "TrendingUp",
      earning: "30% Revenue Boost"
    },
    {
      id: 4,
      title: "Training & Support",
      description: "Comprehensive training program and ongoing support from IB team.",
      icon: "GraduationCap",
      earning: "Full Support"
    }
  ];

  const requirements = [
    {
      category: "Location Requirements",
      items: [
        "High foot traffic area",
        "Secure premises with safe storage",
        "Accessible to community members",
        "Reliable electricity and internet"
      ],
      icon: "MapPin"
    },
    {
      category: "Financial Requirements",
      items: [
        "Initial investment: $5,000 - $15,000",
        "Working capital: $2,000 - $5,000",
        "Security deposit: $1,000",
        "Insurance coverage required"
      ],
      icon: "Banknote"
    },
    {
      category: "Operational Requirements",
      items: [
        "Minimum 8 hours daily operation",
        "Dedicated staff member",
        "Basic computer literacy",
        "Customer service experience"
      ],
      icon: "Clock"
    }
  ];

  const regions = [
    { name: "Montserrado County", demand: "High", population: "1.5M", agencies: 45 },
    { name: "Nimba County", demand: "Very High", population: "462K", agencies: 12 },
    { name: "Bong County", demand: "High", population: "333K", agencies: 8 },
    { name: "Grand Bassa County", demand: "Medium", population: "224K", agencies: 6 },
    { name: "Lofa County", demand: "Very High", population: "276K", agencies: 4 },
    { name: "Grand Cape Mount", demand: "High", population: "127K", agencies: 3 }
  ];

  const services = [
    "Account Opening",
    "Cash Deposits & Withdrawals",
    "Money Transfers",
    "Bill Payments",
    "Loan Applications",
    "Mobile Money Services",
    "Foreign Exchange",
    "Microfinance Services"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
              <Icon name="Store" size={24} className="text-white" />
            </div>
            <span className="text-ib-accent font-medium text-lg">Agency Banking</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Become an IB Agent
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our growing network of agency partners and bring essential banking services to underserved communities while building a profitable business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Benefits Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8">
              Why Become an IB Agent?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {agencyBenefits.map((benefit) => (
                <div 
                  key={benefit.id}
                  className="glassmorphic rounded-brand-lg p-6 brand-transition hover:shadow-brand-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center group-hover:scale-110 brand-transition">
                      <Icon name={benefit.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                      {benefit.earning}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-heading font-semibold text-ib-dark mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Services Offered */}
            <div className="glassmorphic rounded-brand-lg p-6 mb-8">
              <h4 className="text-xl font-heading font-semibold text-ib-dark mb-4">
                Services You'll Offer
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-ib-dark">
                Requirements
              </h3>
              
              {requirements.map((req, index) => (
                <div key={index} className="glassmorphic rounded-brand-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                      <Icon name={req.icon} size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-heading font-semibold text-ib-dark">
                      {req.category}
                    </h4>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-2">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="glassmorphic rounded-brand-lg p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-ib-dark">
                  Apply Now
                </h3>
              </div>

              <div className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+231 XXX XXXX"
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  required
                />

                <Input
                  label="Preferred Location"
                  type="text"
                  placeholder="City/Town"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  required
                />

                <Input
                  label="Investment Amount (USD)"
                  type="number"
                  placeholder="5,000 - 15,000"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  required
                />

                <Input
                  label="Business Experience"
                  type="text"
                  placeholder="Years in business"
                />

                <Button 
                  variant="default"
                  fullWidth
                  className="conversion-cta"
                  iconName="Send"
                  iconPosition="left"
                  iconSize={16}
                >
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Our team will contact you within 48 hours
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Phone" size={16} className="text-ib-accent" />
                  <span className="text-sm font-medium text-ib-dark">Questions?</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Speak with our agency development team
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                >
                  Call Agency Team
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Opportunities */}
        <div className="glassmorphic rounded-brand-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-4">
              Regional Opportunities
            </h3>
            <p className="text-muted-foreground">
              High-demand areas with significant growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white/50 rounded-brand p-6 border border-ib-green/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-semibold text-ib-dark">
                    {region.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    region.demand === 'Very High' ?'bg-error/10 text-error' 
                      : region.demand === 'High' ?'bg-warning/10 text-warning' :'bg-success/10 text-success'
                  }`}>
                    {region.demand} Demand
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population:</span>
                    <span className="font-medium text-ib-dark">{region.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Agencies:</span>
                    <span className="font-medium text-ib-dark">{region.agencies}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  className="mt-4"
                  iconName="MapPin"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyOpportunitiesSection;