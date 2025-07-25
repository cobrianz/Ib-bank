import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ThirdPartyServices = () => {
  const [activeService, setActiveService] = useState('utilities');

  const serviceCategories = [
    {
      id: 'utilities',
      title: 'Utility Bills',
      icon: 'Zap',
      description: 'Pay electricity, water, and internet bills'
    },
    {
      id: 'mobile',
      title: 'Mobile Top-ups',
      icon: 'Smartphone',
      description: 'Recharge mobile credit and data plans'
    },
    {
      id: 'government',
      title: 'Government Services',
      icon: 'Building',
      description: 'Pay taxes, fees, and government services'
    },
    {
      id: 'education',
      title: 'Education',
      icon: 'GraduationCap',
      description: 'School fees and educational payments'
    }
  ];

  const services = {
    utilities: [
      {
        id: 1,
        name: "Liberia Electricity Corporation (LEC)",
        logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop",
        type: "Electricity",
        fee: "LRD 25",
        processingTime: "Instant",
        available: true
      },
      {
        id: 2,
        name: "Liberia Water & Sewer Corporation",
        logo: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?w=80&h=80&fit=crop",
        type: "Water & Sewer",
        fee: "LRD 20",
        processingTime: "Instant",
        available: true
      },
      {
        id: 3,
        name: "Orange Liberia Internet",
        logo: "https://images.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg",
        type: "Internet",
        fee: "LRD 30",
        processingTime: "2-5 minutes",
        available: true
      },
      {
        id: 4,
        name: "Lonestar Cell MTN Internet",
        logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop",
        type: "Internet",
        fee: "LRD 30",
        processingTime: "2-5 minutes",
        available: false
      }
    ],
    mobile: [
      {
        id: 5,
        name: "Orange Money",
        logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=80&h=80&fit=crop",
        type: "Mobile Money",
        fee: "LRD 15",
        processingTime: "Instant",
        available: true
      },
      {
        id: 6,
        name: "MTN Mobile Money",
        logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=80&h=80&fit=crop",
        type: "Mobile Money",
        fee: "LRD 15",
        processingTime: "Instant",
        available: true
      },
      {
        id: 7,
        name: "Lonestar Cell Airtime",
        logo: "https://images.pixabay.com/photo/2017/01/13/01/22/mobile-phone-1976062_960_720.jpg",
        type: "Airtime",
        fee: "LRD 10",
        processingTime: "Instant",
        available: true
      },
      {
        id: 8,
        name: "Cellcom Data Plans",
        logo: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=80&h=80&fit=crop",
        type: "Data Plans",
        fee: "LRD 20",
        processingTime: "1-2 minutes",
        available: true
      }
    ],
    government: [
      {
        id: 9,
        name: "Liberia Revenue Authority",
        logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop",
        type: "Tax Payments",
        fee: "LRD 50",
        processingTime: "1-3 business days",
        available: true
      },
      {
        id: 10,
        name: "Ministry of Commerce",
        logo: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?w=80&h=80&fit=crop",
        type: "Business Registration",
        fee: "LRD 75",
        processingTime: "2-5 business days",
        available: true
      },
      {
        id: 11,
        name: "Immigration Services",
        logo: "https://images.pixabay.com/photo/2017/07/10/23/49/club-2492011_960_720.jpg",
        type: "Passport & Visa",
        fee: "LRD 100",
        processingTime: "3-7 business days",
        available: false
      }
    ],
    education: [
      {
        id: 12,
        name: "University of Liberia",
        logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=80&h=80&fit=crop",
        type: "Tuition Fees",
        fee: "LRD 40",
        processingTime: "Instant",
        available: true
      },
      {
        id: 13,
        name: "Cuttington University",
        logo: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?w=80&h=80&fit=crop",
        type: "Tuition Fees",
        fee: "LRD 40",
        processingTime: "Instant",
        available: true
      },
      {
        id: 14,
        name: "WAEC Examination Fees",
        logo: "https://images.pixabay.com/photo/2015/05/19/07/44/writing-773065_960_720.jpg",
        type: "Exam Fees",
        fee: "LRD 35",
        processingTime: "2-4 hours",
        available: true
      }
    ]
  };

  const stats = [
    { label: "Services Available", value: "45+", icon: "Grid3X3" },
    { label: "Monthly Transactions", value: "15,000+", icon: "TrendingUp" },
    { label: "Success Rate", value: "99.8%", icon: "CheckCircle" },
    { label: "Avg Processing", value: "< 2 min", icon: "Clock" }
  ];

  return (
    <div className="bg-card rounded-brand-lg glassmorphic overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-brand flex items-center justify-center">
            <Icon name="Link" size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-brand-heading text-xl font-bold text-foreground">
              Third-Party Services Integration
            </h2>
            <p className="text-muted-foreground text-sm">
              Pay bills and access services directly from your account
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted/30 rounded-brand">
              <Icon name={stat.icon} size={20} className="text-primary mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveService(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-brand text-sm font-medium brand-transition ${
                activeService === category.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted/30 hover:bg-muted/50 text-foreground'
              }`}
            >
              <Icon 
                name={category.icon} 
                size={16} 
                className={activeService === category.id ? 'text-white' : 'text-primary'} 
              />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-2">
            {serviceCategories.find(cat => cat.id === activeService)?.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {serviceCategories.find(cat => cat.id === activeService)?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services[activeService]?.map((service) => (
            <div
              key={service.id}
              className={`p-4 rounded-brand border brand-transition ${
                service.available
                  ? 'bg-muted/30 hover:bg-muted/50 border-border/50 hover:border-primary/30' :'bg-muted/10 border-border/30 opacity-60'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-brand overflow-hidden flex-shrink-0 bg-muted">
                  <img
                    src={service.logo}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/no_image.png';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {service.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.type}
                      </p>
                    </div>
                    {service.available ? (
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse-subtle"></div>
                    ) : (
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center space-x-1">
                      <Icon name="DollarSign" size={12} />
                      <span>Fee: {service.fee}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{service.processingTime}</span>
                    </span>
                  </div>

                  <Button
                    variant={service.available ? "default" : "outline"}
                    size="sm"
                    fullWidth
                    disabled={!service.available}
                    iconName={service.available ? "ArrowRight" : "AlertCircle"}
                    iconPosition="right"
                    className={service.available ? "conversion-cta" : ""}
                  >
                    {service.available ? "Pay Now" : "Coming Soon"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-brand p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-brand flex items-center justify-center flex-shrink-0">
                <Icon name="Plus" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-2">
                  Request New Service Integration
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Don't see a service you need? Let us know and we'll work to add it to our platform. We're constantly expanding our third-party integrations based on customer feedback.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    iconName="MessageSquare"
                    iconPosition="left"
                    className="conversion-cta"
                  >
                    Request Service
                  </Button>
                  <Button
                    variant="outline"
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyServices;