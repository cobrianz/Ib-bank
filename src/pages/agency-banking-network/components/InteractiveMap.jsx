import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ agents, selectedAgent, onAgentSelect, onLocationRequest }) => {
  const [mapView, setMapView] = useState('satellite');
  const [showFilters, setShowFilters] = useState(false);

  const mapViewOptions = [
    { value: 'satellite', label: 'Satellite', icon: 'Satellite' },
    { value: 'roadmap', label: 'Roadmap', icon: 'Map' },
    { value: 'terrain', label: 'Terrain', icon: 'Mountain' }
  ];

  const getAgentStatusColor = (status) => {
    switch (status) {
      case 'online': return '#5A8A3A';
      case 'busy': return '#B8860B';
      case 'offline': return '#A0522D';
      default: return '#8A9A5B';
    }
  };

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-brand-lg overflow-hidden glassmorphic">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="IB Liberia Agency Banking Network"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=6.3156,-10.8074&z=10&output=embed&maptype=${mapView}`}
          className="w-full h-full"
        />
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        {/* View Toggle */}
        <div className="glassmorphic rounded-brand p-2">
          <div className="flex space-x-1">
            {mapViewOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMapView(option.value)}
                className={`p-2 rounded-brand brand-transition ${
                  mapView === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                title={option.label}
              >
                <Icon name={option.icon} size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Location Request */}
        <Button
          variant="default"
          size="sm"
          iconName="MapPin"
          iconPosition="left"
          iconSize={14}
          onClick={onLocationRequest}
          className="glassmorphic conversion-cta"
        >
          My Location
        </Button>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          size="sm"
          iconName="Filter"
          iconPosition="left"
          iconSize={14}
          onClick={() => setShowFilters(!showFilters)}
          className="glassmorphic"
        >
          Filters
        </Button>
      </div>

      {/* Agent Markers Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {agents.map((agent, index) => (
          <div
            key={agent.id}
            className="absolute pointer-events-auto cursor-pointer brand-transition hover:scale-110"
            style={{
              left: `${20 + (index % 5) * 15}%`,
              top: `${30 + Math.floor(index / 5) * 20}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => onAgentSelect(agent)}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 border-white shadow-brand flex items-center justify-center ${
                selectedAgent?.id === agent.id ? 'scale-125' : ''
              }`}
              style={{ backgroundColor: getAgentStatusColor(agent.status) }}
            >
              <Icon name="MapPin" size={12} className="text-white" />
            </div>
            {selectedAgent?.id === agent.id && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 glassmorphic rounded-brand p-2 min-w-max z-10">
                <div className="text-xs font-medium text-foreground">
                  {agent.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {agent.distance} km away
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="absolute top-16 right-4 glassmorphic rounded-brand-lg p-4 w-64 space-y-3">
          <h4 className="text-sm font-medium text-foreground">Filter Agents</h4>
          
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Status</label>
            <div className="flex flex-wrap gap-2">
              {['online', 'busy', 'offline'].map((status) => (
                <button
                  key={status}
                  className="px-2 py-1 rounded-brand text-xs font-medium bg-muted/50 text-foreground hover:bg-primary/20 brand-transition"
                >
                  <span className="capitalize">{status}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-muted-foreground">Services</label>
            <div className="flex flex-wrap gap-2">
              {['Cash', 'Transfer', 'Bills', 'Account'].map((service) => (
                <button
                  key={service}
                  className="px-2 py-1 rounded-brand text-xs font-medium bg-muted/50 text-foreground hover:bg-primary/20 brand-transition"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-border/50">
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => setShowFilters(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 glassmorphic rounded-brand p-3">
        <h4 className="text-xs font-medium text-foreground mb-2">Agent Status</h4>
        <div className="space-y-1">
          {[
            { status: 'online', label: 'Available', color: '#5A8A3A' },
            { status: 'busy', label: 'Busy', color: '#B8860B' },
            { status: 'offline', label: 'Closed', color: '#A0522D' }
          ].map((item) => (
            <div key={item.status} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;