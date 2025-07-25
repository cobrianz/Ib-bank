import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetricsSection = () => {
  const metrics = [
    {
      icon: "Building2",
      number: "2,500+",
      label: "Businesses Financed",
      description: "Supporting SMEs across Liberia"
    },
    {
      icon: "Users",
      number: "15,000+",
      label: "Jobs Supported",
      description: "Through our lending programs"
    },
    {
      icon: "MapPin",
      number: "150+",
      label: "Rural Communities",
      description: "Served through agency banking"
    },
    {
      icon: "DollarSign",
      number: "$50M+",
      label: "Loans Disbursed",
      description: "Fueling economic growth"
    },
    {
      icon: "GraduationCap",
      number: "5,000+",
      label: "Students Supported",
      description: "Through education financing"
    },
    {
      icon: "Home",
      number: "800+",
      label: "Families Housed",
      description: "Via mortgage programs"
    }
  ];

  const initiatives = [
    {
      title: "Financial Literacy Program",
      description: "Educating communities about banking, savings, and investment opportunities across all 15 counties.",
      icon: "BookOpen",
      impact: "25,000+ people trained"
    },
    {
      title: "Women Entrepreneurs Fund",
      description: "Dedicated funding and mentorship program supporting women-owned businesses in Liberia.",
      icon: "Users",
      impact: "500+ women entrepreneurs supported"
    },
    {
      title: "Youth Banking Initiative",
      description: "Specialized accounts and financial education programs designed for young Liberians.",
      icon: "Star",
      impact: "3,000+ youth accounts opened"
    },
    {
      title: "Infrastructure Development",
      description: "Supporting community infrastructure projects through specialized lending programs.",
      icon: "Building",
      impact: "50+ community projects funded"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Our Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Measurable contributions to Liberia's economic development and community empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="group">
              <div className="glassmorphic rounded-xl p-6 text-center h-full brand-transition group-hover:shadow-brand-lg group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} size={24} className="text-white" />
                </div>
                
                <div className="text-3xl font-heading font-bold text-ib-dark mb-2">
                  {metric.number}
                </div>
                
                <h3 className="text-lg font-semibold text-ib-dark mb-2">
                  {metric.label}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CSR Initiatives */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Community Initiatives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to social responsibility and community development across Liberia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="group">
              <div className="glassmorphic rounded-xl p-8 h-full brand-transition group-hover:shadow-brand-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ib-accent to-ib-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={initiative.icon} size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-ib-dark mb-3">
                      {initiative.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-ib-green">
                      <Icon name="TrendingUp" size={16} />
                      <span className="text-sm font-medium">{initiative.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glassmorphic rounded-2xl p-8 bg-gradient-to-br from-ib-green/10 to-ib-accent/10">
            <h3 className="text-2xl font-heading font-bold text-ib-dark mb-4">
              Join Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of Liberia's financial transformation. Together, we can build a stronger, more inclusive economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-ib-green to-ib-accent text-white rounded-lg font-medium brand-transition hover:shadow-brand-lg hover:scale-105">
                Open Account Today
              </button>
              <button className="px-6 py-3 border-2 border-ib-green text-ib-green rounded-lg font-medium brand-transition hover:bg-ib-green hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;