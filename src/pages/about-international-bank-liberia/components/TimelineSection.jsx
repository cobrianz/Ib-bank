import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Bank Establishment",
      description: "International Bank (Liberia) Limited was founded with a vision to modernize banking in Liberia.",
      icon: "Building2",
      highlight: true
    },
    {
      year: "2019",
      title: "CBL License Approval",
      description: "Received full banking license from the Central Bank of Liberia, enabling comprehensive financial services.",
      icon: "Shield"
    },
    {
      year: "2020",
      title: "Digital Banking Launch",
      description: "Launched our first digital banking platform, bringing online banking to Liberian customers.",
      icon: "Smartphone"
    },
    {
      year: "2021",
      title: "Agency Banking Network",
      description: "Expanded reach through innovative agency banking model, serving rural communities across 15 counties.",
      icon: "Network"
    },
    {
      year: "2022",
      title: "SME Focus Initiative",
      description: "Launched specialized small and medium enterprise support program with tailored financial products.",
      icon: "Briefcase"
    },
    {
      year: "2023",
      title: "Technology Upgrade",
      description: "Implemented advanced core banking system and enhanced cybersecurity infrastructure.",
      icon: "Server"
    },
    {
      year: "2024",
      title: "Financial Inclusion Award",
      description: "Recognized by West African Banking Association for outstanding contribution to financial inclusion.",
      icon: "Award"
    },
    {
      year: "2025",
      title: "Continued Growth",
      description: "Expanding digital services and strengthening our commitment to Liberia\'s economic development.",
      icon: "TrendingUp",
      future: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From establishment to becoming a trusted partner in Liberia's financial landscape.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-ib-green via-ib-accent to-ib-dark hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ib-green rounded-full border-4 border-background z-10 hidden lg:block"></div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`glassmorphic rounded-xl p-6 brand-transition hover:shadow-brand-lg ${milestone.highlight ? 'bg-gradient-to-br from-ib-green/10 to-ib-accent/10' : 'bg-white/50'} ${milestone.future ? 'border-2 border-dashed border-ib-accent' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${milestone.highlight ? 'bg-gradient-to-br from-ib-green to-ib-accent' : milestone.future ? 'bg-gradient-to-br from-ib-accent to-ib-dark' : 'bg-muted'}`}>
                        <Icon 
                          name={milestone.icon} 
                          size={20} 
                          className={milestone.highlight || milestone.future ? "text-white" : "text-ib-dark"} 
                        />
                      </div>
                      <div>
                        <span className={`text-2xl font-heading font-bold ${milestone.future ? 'text-ib-accent' : 'text-ib-green'}`}>
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-ib-dark mb-2">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>

                    {milestone.future && (
                      <div className="mt-4 flex items-center space-x-2 text-ib-accent">
                        <Icon name="Clock" size={16} />
                        <span className="text-sm font-medium">Ongoing</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="lg:hidden absolute left-0 top-6">
                  <div className="w-3 h-3 bg-ib-green rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-ib-green/30 ml-1 mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;