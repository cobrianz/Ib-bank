import React from 'react';
import Icon from '../../../components/AppIcon';

const NetworkStatsCard = ({ stats }) => {
  const statItems = [
    {
      icon: 'MapPin',
      label: 'Active Agents',
      value: stats.activeAgents,
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: 'Globe',
      label: 'Counties Covered',
      value: stats.countiesCovered,
      change: '+2',
      changeType: 'positive'
    },
    {
      icon: 'Users',
      label: 'Customers Served',
      value: `${stats.customersServed}K`,
      change: '+18%',
      changeType: 'positive'
    },
    {
      icon: 'TrendingUp',
      label: 'Monthly Transactions',
      value: `${stats.monthlyTransactions}K`,
      change: '+25%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="glassmorphic rounded-brand-lg p-6 text-center space-y-3 brand-transition hover:shadow-brand-lg"
        >
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-brand-lg flex items-center justify-center">
              <Icon name={item.icon} size={24} className="text-white" />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="text-2xl font-bold text-foreground">
              {item.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {item.label}
            </div>
          </div>

          <div className={`flex items-center justify-center space-x-1 text-xs font-medium ${
            item.changeType === 'positive' ? 'text-success' : 'text-error'
          }`}>
            <Icon 
              name={item.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
              size={12} 
            />
            <span>{item.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkStatsCard;