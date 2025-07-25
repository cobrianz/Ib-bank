import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceComparisonChart = () => {
  const [selectedTier, setSelectedTier] = useState('standard');

  const agentTiers = [
    {
      id: 'basic',
      name: 'Basic Agent',
      icon: 'Store',
      color: 'from-muted to-muted/80',
      textColor: 'text-muted-foreground',
      requirements: 'Small retail location',
      services: [
        { name: 'Cash Deposits', limit: 'LRD 25,000', available: true },
        { name: 'Cash Withdrawals', limit: 'LRD 15,000', available: true },
        { name: 'Money Transfers', limit: 'LRD 50,000', available: true },
        { name: 'Bill Payments', limit: 'LRD 10,000', available: true },
        { name: 'Account Opening', limit: 'Savings only', available: true },
        { name: 'Loan Applications', limit: 'N/A', available: false },
        { name: 'Foreign Exchange', limit: 'N/A', available: false },
        { name: 'Business Services', limit: 'N/A', available: false }
      ],
      commission: '0.5% - 1.2%',
      monthlyPotential: 'LRD 15,000 - 25,000'
    },
    {
      id: 'standard',
      name: 'Standard Agent',
      icon: 'Building',
      color: 'from-primary to-accent',
      textColor: 'text-white',
      requirements: 'Established business location',
      services: [
        { name: 'Cash Deposits', limit: 'LRD 75,000', available: true },
        { name: 'Cash Withdrawals', limit: 'LRD 50,000', available: true },
        { name: 'Money Transfers', limit: 'LRD 150,000', available: true },
        { name: 'Bill Payments', limit: 'LRD 25,000', available: true },
        { name: 'Account Opening', limit: 'All types', available: true },
        { name: 'Loan Applications', limit: 'Personal loans', available: true },
        { name: 'Foreign Exchange', limit: 'USD 500', available: true },
        { name: 'Business Services', limit: 'Basic', available: true }
      ],
      commission: '1.0% - 2.0%',
      monthlyPotential: 'LRD 25,000 - 45,000'
    },
    {
      id: 'premium',
      name: 'Premium Agent',
      icon: 'Crown',
      color: 'from-warning to-warning/80',
      textColor: 'text-white',
      requirements: 'Large business with security',
      services: [
        { name: 'Cash Deposits', limit: 'LRD 150,000', available: true },
        { name: 'Cash Withdrawals', limit: 'LRD 100,000', available: true },
        { name: 'Money Transfers', limit: 'LRD 300,000', available: true },
        { name: 'Bill Payments', limit: 'LRD 50,000', available: true },
        { name: 'Account Opening', limit: 'All types', available: true },
        { name: 'Loan Applications', limit: 'All loan types', available: true },
        { name: 'Foreign Exchange', limit: 'USD 2,000', available: true },
        { name: 'Business Services', limit: 'Full suite', available: true }
      ],
      commission: '1.5% - 2.5%',
      monthlyPotential: 'LRD 45,000 - 75,000'
    }
  ];

  const selectedTierData = agentTiers.find(tier => tier.id === selectedTier);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
          Agent Service Tiers
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Choose the agent tier that matches your business capacity and growth ambitions. Each tier offers different service limits and earning potential.
        </p>
      </div>

      {/* Tier Selection */}
      <div className="flex justify-center">
        <div className="flex space-x-2 glassmorphic rounded-brand-lg p-2">
          {agentTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`px-6 py-3 rounded-brand text-sm font-medium brand-transition flex items-center space-x-2 ${
                selectedTier === tier.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tier.icon} size={16} />
              <span>{tier.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tier Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agentTiers.map((tier) => (
          <div
            key={tier.id}
            className={`glassmorphic rounded-brand-lg overflow-hidden brand-transition hover:shadow-brand-lg cursor-pointer ${
              selectedTier === tier.id ? 'ring-2 ring-primary/30' : ''
            }`}
            onClick={() => setSelectedTier(tier.id)}
          >
            <div className={`bg-gradient-to-br ${tier.color} p-6 text-center`}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-brand-lg flex items-center justify-center">
                  <Icon name={tier.icon} size={28} className={tier.textColor} />
                </div>
              </div>
              <h3 className={`text-brand-heading text-xl font-semibold ${tier.textColor} mb-2`}>
                {tier.name}
              </h3>
              <p className={`text-sm ${tier.textColor} opacity-90`}>
                {tier.requirements}
              </p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Commission Rate</span>
                  <span className="font-semibold text-foreground">{tier.commission}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Potential</span>
                  <span className="font-semibold text-primary">{tier.monthlyPotential}</span>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-xs text-muted-foreground mb-2">Available Services</div>
                <div className="flex flex-wrap gap-1">
                  {tier.services.filter(service => service.available).slice(0, 4).map((service, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-brand"
                    >
                      {service.name}
                    </span>
                  ))}
                  {tier.services.filter(service => service.available).length > 4 && (
                    <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs rounded-brand">
                      +{tier.services.filter(service => service.available).length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Service Comparison */}
      <div className="glassmorphic rounded-brand-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border/50">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${selectedTierData.color} rounded-brand-lg flex items-center justify-center`}>
              <Icon name={selectedTierData.icon} size={24} className={selectedTierData.textColor} />
            </div>
            <div>
              <h3 className="text-brand-heading text-xl font-semibold text-foreground">
                {selectedTierData.name} Services & Limits
              </h3>
              <p className="text-muted-foreground">
                Detailed breakdown of available services and transaction limits
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Service</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Daily Limit</th>
                  <th className="text-center py-3 text-sm font-medium text-muted-foreground">Available</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {selectedTierData.services.map((service, index) => (
                  <tr key={index} className="border-b border-border/30">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          service.available ? 'bg-success' : 'bg-error'
                        }`} />
                        <span className="font-medium text-foreground">{service.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`text-sm ${
                        service.available ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {service.limit}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <Icon 
                        name={service.available ? "CheckCircle" : "XCircle"} 
                        size={16} 
                        className={service.available ? 'text-success' : 'text-error'} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-muted/30 p-6 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                {selectedTierData.commission}
              </div>
              <div className="text-sm text-muted-foreground">
                Commission Rate
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                {selectedTierData.monthlyPotential}
              </div>
              <div className="text-sm text-muted-foreground">
                Monthly Potential
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">
                {selectedTierData.services.filter(s => s.available).length}
              </div>
              <div className="text-sm text-muted-foreground">
                Available Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparisonChart;