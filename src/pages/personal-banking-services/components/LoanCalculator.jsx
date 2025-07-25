import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('12');
  const [currency, setCurrency] = useState('LRD');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const currencyOptions = [
    { value: 'LRD', label: 'Liberian Dollar (LRD)' },
    { value: 'USD', label: 'US Dollar (USD)' }
  ];

  const termOptions = [
    { value: '6', label: '6 months' },
    { value: '12', label: '12 months' },
    { value: '24', label: '24 months' },
    { value: '36', label: '36 months' },
    { value: '48', label: '48 months' },
    { value: '60', label: '60 months' }
  ];

  const interestRates = {
    LRD: 0.15, // 15% annual rate
    USD: 0.12  // 12% annual rate
  };

  const exchangeRate = 190; // 1 USD = 190 LRD (mock rate)

  useEffect(() => {
    if (loanAmount && loanTerm) {
      calculateLoan();
    }
  }, [loanAmount, loanTerm, currency]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const months = parseInt(loanTerm);
    const annualRate = interestRates[currency];
    const monthlyRate = annualRate / 12;

    if (principal > 0 && months > 0) {
      const monthlyPaymentCalc = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                                (Math.pow(1 + monthlyRate, months) - 1);
      
      const totalPaymentCalc = monthlyPaymentCalc * months;
      const totalInterestCalc = totalPaymentCalc - principal;

      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayment(totalPaymentCalc);
      setTotalInterest(totalInterestCalc);
    }
  };

  const formatCurrency = (amount) => {
    const symbol = currency === 'LRD' ? 'L$' : '$';
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getConvertedAmount = (amount) => {
    if (currency === 'LRD') {
      return `≈ $${(amount / exchangeRate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      return `≈ L$${(amount * exchangeRate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  return (
    <div className="glassmorphic rounded-brand-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-brand flex items-center justify-center">
          <Icon name="Calculator" size={20} className="text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-brand-heading text-lg font-semibold text-foreground">
            Loan Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Calculate your monthly payments
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Loan Amount"
            type="number"
            placeholder="Enter amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="mb-0"
          />
          <Select
            label="Currency"
            options={currencyOptions}
            value={currency}
            onChange={setCurrency}
            className="mb-0"
          />
        </div>

        <Select
          label="Loan Term"
          options={termOptions}
          value={loanTerm}
          onChange={setLoanTerm}
        />
      </div>

      {loanAmount && monthlyPayment > 0 && (
        <div className="space-y-4 p-4 bg-muted/50 rounded-brand">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Monthly Payment</div>
              <div className="text-lg font-semibold text-primary">
                {formatCurrency(monthlyPayment)}
              </div>
              <div className="text-xs text-muted-foreground">
                {getConvertedAmount(monthlyPayment)}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Total Payment</div>
              <div className="text-lg font-semibold text-foreground">
                {formatCurrency(totalPayment)}
              </div>
              <div className="text-xs text-muted-foreground">
                {getConvertedAmount(totalPayment)}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
              <div className="text-lg font-semibold text-warning">
                {formatCurrency(totalInterest)}
              </div>
              <div className="text-xs text-muted-foreground">
                {getConvertedAmount(totalInterest)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-4 border-t border-border/50">
            <div className="text-xs text-muted-foreground text-center">
              <div className="flex items-center space-x-1 mb-1">
                <Icon name="Info" size={12} />
                <span>Interest Rate: {(interestRates[currency] * 100).toFixed(1)}% per annum</span>
              </div>
              <div>Exchange Rate: 1 USD = {exchangeRate} LRD (indicative)</div>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-3 mt-6">
        <Button 
          variant="default" 
          fullWidth
          iconName="FileText"
          iconPosition="left"
          iconSize={16}
        >
          Apply Now
        </Button>
        <Button 
          variant="outline" 
          fullWidth
          iconName="Phone"
          iconPosition="left"
          iconSize={16}
        >
          Speak to Advisor
        </Button>
      </div>
    </div>
  );
};

export default LoanCalculator;