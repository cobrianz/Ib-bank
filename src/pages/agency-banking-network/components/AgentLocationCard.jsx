import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AgentLocationCard = ({ agent, onViewDetails, onGetDirections }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-success bg-success/10';
      case 'busy': return 'text-warning bg-warning/10';
      case 'offline': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online': return 'CheckCircle';
      case 'busy': return 'Clock';
      case 'offline': return 'XCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="glassmorphic rounded-brand-lg p-6 space-y-4 brand-transition hover:shadow-brand-lg">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-brand-heading text-lg font-semibold text-foreground">
            {agent.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {agent.address}
          </p>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
          <Icon name={getStatusIcon(agent.status)} size={12} />
          <span className="capitalize">{agent.status}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Icon name="Phone" size={14} />
          <span>{agent.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={14} />
          <span>{agent.distance} km away</span>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="flex items-center space-x-2 text-sm">
        <Icon name="Clock" size={14} className="text-muted-foreground" />
        <span className="text-foreground font-medium">
          {agent.operatingHours}
        </span>
        {agent.isOpen && (
          <span className="text-success text-xs font-medium">Open Now</span>
        )}
      </div>

      {/* Services */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Available Services</h4>
        <div className="flex flex-wrap gap-2">
          {agent.services.map((service, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-brand text-xs font-medium bg-primary/10 text-primary"
            >
              <Icon name={service.icon} size={12} className="mr-1" />
              {service.name}
            </span>
          ))}
        </div>
      </div>

      {/* Transaction Limits */}
      <div className="bg-muted/30 rounded-brand p-3 space-y-2">
        <h4 className="text-sm font-medium text-foreground">Daily Limits</h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-muted-foreground">Cash Deposit:</span>
            <span className="ml-2 font-medium text-foreground">
              LRD {agent.limits.deposit.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Cash Withdrawal:</span>
            <span className="ml-2 font-medium text-foreground">
              LRD {agent.limits.withdrawal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 pt-2">
        <Button
          variant="outline"
          size="sm"
          iconName="Info"
          iconPosition="left"
          iconSize={14}
          onClick={() => onViewDetails(agent)}
          className="flex-1"
        >
          Details
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Navigation"
          iconPosition="left"
          iconSize={14}
          onClick={() => onGetDirections(agent)}
          className="flex-1 conversion-cta"
        >
          Directions
        </Button>
      </div>
    </div>
  );
};

export default AgentLocationCard;