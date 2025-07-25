import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SystemStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemServices = [
    {
      id: 1,
      name: "Online Banking Portal",
      status: "operational",
      uptime: "99.9%",
      responseTime: "1.2s",
      lastUpdate: "2 minutes ago"
    },
    {
      id: 2,
      name: "Mobile Application",
      status: "operational",
      uptime: "99.8%",
      responseTime: "0.8s",
      lastUpdate: "1 minute ago"
    },
    {
      id: 3,
      name: "ATM Network",
      status: "operational",
      uptime: "99.5%",
      responseTime: "2.1s",
      lastUpdate: "5 minutes ago"
    },
    {
      id: 4,
      name: "International Transfers",
      status: "maintenance",
      uptime: "98.9%",
      responseTime: "3.2s",
      lastUpdate: "15 minutes ago"
    },
    {
      id: 5,
      name: "Bill Payment Services",
      status: "operational",
      uptime: "99.7%",
      responseTime: "1.5s",
      lastUpdate: "3 minutes ago"
    },
    {
      id: 6,
      name: "Customer Support Chat",
      status: "operational",
      uptime: "99.9%",
      responseTime: "0.5s",
      lastUpdate: "30 seconds ago"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'text-success bg-success/10 border-success/20';
      case 'maintenance': return 'text-warning bg-warning/10 border-warning/20';
      case 'degraded': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational': return 'CheckCircle';
      case 'maintenance': return 'AlertTriangle';
      case 'degraded': return 'XCircle';
      default: return 'HelpCircle';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'maintenance': return 'Maintenance';
      case 'degraded': return 'Degraded';
      default: return 'Unknown';
    }
  };

  const overallStatus = systemServices.every(service => service.status === 'operational') 
    ? 'All Systems Operational' 
    : systemServices.some(service => service.status === 'degraded')
    ? 'Some Systems Degraded' :'Scheduled Maintenance';

  const overallStatusColor = systemServices.every(service => service.status === 'operational')
    ? 'text-success'
    : systemServices.some(service => service.status === 'degraded')
    ? 'text-error' :'text-warning';

  return (
    <div className="bg-card rounded-brand-lg glassmorphic overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-success/10 rounded-brand flex items-center justify-center">
              <Icon name="Activity" size={24} className="text-success" />
            </div>
            <div>
              <h2 className="text-brand-heading text-xl font-bold text-foreground">
                System Status Dashboard
              </h2>
              <p className="text-muted-foreground text-sm">
                Real-time service monitoring
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-sm font-medium ${overallStatusColor}`}>
              {overallStatus}
            </div>
            <div className="text-xs text-muted-foreground">
              Last updated: {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-success/5 rounded-brand p-4 border border-success/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="TrendingUp" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">Overall Uptime</span>
            </div>
            <div className="text-2xl font-bold text-foreground">99.6%</div>
            <div className="text-xs text-muted-foreground">Last 30 days</div>
          </div>

          <div className="bg-primary/5 rounded-brand p-4 border border-primary/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Zap" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Avg Response</span>
            </div>
            <div className="text-2xl font-bold text-foreground">1.4s</div>
            <div className="text-xs text-muted-foreground">Across all services</div>
          </div>

          <div className="bg-accent/5 rounded-brand p-4 border border-accent/20">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Users" size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Active Users</span>
            </div>
            <div className="text-2xl font-bold text-foreground">12,847</div>
            <div className="text-xs text-muted-foreground">Currently online</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-4">
          Service Status
        </h3>

        <div className="space-y-3">
          {systemServices.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-brand hover:bg-muted/50 brand-transition"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-brand flex items-center justify-center border ${getStatusColor(service.status)}`}>
                  <Icon name={getStatusIcon(service.status)} size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{service.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    Updated {service.lastUpdate}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-foreground font-medium">{service.uptime}</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-foreground font-medium">{service.responseTime}</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                  {getStatusText(service.status)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="bg-muted/30 rounded-brand p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Scheduled Maintenance Notice
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  International transfer services will undergo scheduled maintenance on Sunday, July 28th from 2:00 AM to 4:00 AM GMT. All other services will remain operational.
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>July 28, 2025</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>2:00 AM - 4:00 AM GMT</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;