import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BusinessCreditSection = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [calculatorResult, setCalculatorResult] = useState(null);

  const creditFacilities = [
    {
      id: 1,
      title: "Working Capital Loans",
      description: "Flexible financing for inventory, payroll, and operational expenses with seasonal payment options.",
      features: ["Up to $50,000", "6-24 months terms", "Seasonal payment plans", "Quick approval"],
      icon: "Banknote",
      interestRate: "12-18% APR"
    },
    {
      id: 2,
      title: "Equipment Financing",
      description: "Purchase machinery, vehicles, and technology with the equipment as collateral.",
      features: ["Up to $100,000", "12-60 months terms", "Equipment as collateral", "Tax benefits"],
      icon: "Truck",
      interestRate: "10-15% APR"
    },
    {
      id: 3,
      title: "Trade Finance",
      description: "Letters of credit, import/export financing, and foreign exchange services.",
      features: ["Import/Export support", "Letters of credit", "FX services", "Documentary collections"],
      icon: "Ship",
      interestRate: "8-12% APR"
    },
    {
      id: 4,
      title: "SME Growth Loans",
      description: "Long-term financing for business expansion, new locations, and market development.",
      features: ["Up to $200,000", "24-84 months terms", "Expansion support", "Business advisory"],
      icon: "TrendingUp",
      interestRate: "14-20% APR"
    }
  ];

  const calculateLoan = () => {
    if (!loanAmount || !loanTerm) return;
    
    const principal = parseFloat(loanAmount);
    const months = parseInt(loanTerm);
    const annualRate = 0.15; // 15% average rate
    const monthlyRate = annualRate / 12;
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                          (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    setCalculatorResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
              <Icon name="CreditCard" size={24} className="text-white" />
            </div>
            <span className="text-ib-accent font-medium text-lg">Credit Facilities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Business Credit Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible financing options designed for Liberian market conditions, including seasonal business cycles and commodity price fluctuations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credit Facilities Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {creditFacilities.map((facility) => (
                <div 
                  key={facility.id}
                  className="glassmorphic rounded-brand-lg p-6 brand-transition hover:shadow-brand-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center group-hover:scale-110 brand-transition">
                      <Icon name={facility.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-xs bg-ib-green/10 text-ib-green px-2 py-1 rounded-full">
                      {facility.interestRate}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-ib-dark mb-3">
                    {facility.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Calculator */}
          <div className="lg:col-span-1">
            <div className="glassmorphic rounded-brand-lg p-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-ib-dark">
                  Loan Calculator
                </h3>
              </div>

              <div className="space-y-4">
                <Input
                  label="Loan Amount (USD)"
                  type="number"
                  placeholder="Enter amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />

                <Input
                  label="Loan Term (Months)"
                  type="number"
                  placeholder="Enter term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />

                <Input
                  label="Business Type"
                  type="text"
                  placeholder="e.g., Retail, Agriculture"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />

                <Button 
                  variant="default"
                  fullWidth
                  onClick={calculateLoan}
                  iconName="Calculator"
                  iconPosition="left"
                  iconSize={16}
                  className="conversion-cta"
                >
                  Calculate Payment
                </Button>

                {calculatorResult && (
                  <div className="mt-6 p-4 bg-ib-light/50 rounded-brand border border-ib-green/20">
                    <h4 className="font-heading font-semibold text-ib-dark mb-3">
                      Estimated Payment
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment:</span>
                        <span className="font-semibold text-ib-dark">${calculatorResult.monthlyPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Payment:</span>
                        <span className="font-semibold text-ib-dark">${calculatorResult.totalPayment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Interest:</span>
                        <span className="font-semibold text-ib-dark">${calculatorResult.totalInterest}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      *Estimated based on 15% APR. Actual rates may vary.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Phone" size={16} className="text-ib-accent" />
                  <span className="text-sm font-medium text-ib-dark">Need Help?</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Speak with our business banking specialists
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCreditSection;