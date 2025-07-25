import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareersSection = () => {
  const benefits = [
    {
      icon: "GraduationCap",
      title: "Professional Development",
      description: "Continuous learning opportunities and career advancement programs"
    },
    {
      icon: "Heart",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for employees"
    },
    {
      icon: "DollarSign",
      title: "Competitive Compensation",
      description: "Market-competitive salaries with performance-based bonuses"
    },
    {
      icon: "Clock",
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies"
    },
    {
      icon: "Users",
      title: "Team Culture",
      description: "Collaborative environment that values diversity and inclusion"
    },
    {
      icon: "Award",
      title: "Recognition Programs",
      description: "Employee recognition and achievement celebration initiatives"
    }
  ];

  const openPositions = [
    {
      title: "Senior Software Developer",
      department: "Technology",
      location: "Monrovia, Liberia",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of our digital banking platform and mobile applications."
    },
    {
      title: "Relationship Manager",
      department: "Business Banking",
      location: "Monrovia, Liberia",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage corporate client relationships and develop new business opportunities."
    },
    {
      title: "Risk Analyst",
      department: "Risk Management",
      location: "Monrovia, Liberia",
      type: "Full-time",
      experience: "2+ years",
      description: "Analyze credit risk and support loan underwriting processes."
    },
    {
      title: "Customer Service Representative",
      department: "Customer Experience",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1+ years",
      description: "Provide exceptional customer service across multiple banking channels."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to improve banking services."
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical standards."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, exceeding expectations."
    },
    {
      title: "Community",
      description: "We are committed to supporting Liberia\'s economic development and growth."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build your career with Liberia's leading digital bank and be part of our mission to transform financial services.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Why Choose IB Liberia?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="glassmorphic rounded-xl p-6 h-full brand-transition group-hover:shadow-brand-lg group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={20} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-ib-dark mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Current Openings
          </h3>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="group">
                <div className="glassmorphic rounded-xl p-6 brand-transition group-hover:shadow-brand-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="text-xl font-semibold text-ib-dark">
                          {position.title}
                        </h4>
                        <span className="text-xs bg-ib-green/10 text-ib-green px-2 py-1 rounded-full font-medium">
                          {position.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Icon name="Building2" size={14} />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {position.description}
                      </p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                      <Button variant="default" size="sm" className="conversion-cta">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button variant="outline" iconName="Mail" iconPosition="left">
              Send Us Your Resume
            </Button>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-ib-dark mb-8 text-center">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="glassmorphic rounded-xl p-6 h-full">
                  <h4 className="text-lg font-semibold text-ib-dark mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glassmorphic rounded-2xl p-8 bg-gradient-to-br from-ib-green/10 to-ib-accent/10 text-center">
          <Icon name="Users" size={48} className="text-ib-green mx-auto mb-6" />
          <h3 className="text-2xl font-heading font-bold text-ib-dark mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our team of dedicated professionals who are passionate about transforming banking in Liberia. Together, we can build a stronger financial future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              className="conversion-cta"
              iconName="UserPlus" 
              iconPosition="left"
            >
              View All Positions
            </Button>
            <Button 
              variant="outline"
              iconName="Download" 
              iconPosition="left"
            >
              Download Career Guide
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={14} />
                <span>careers@ibliberia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={14} />
                <span>+231-77-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={14} />
                <span>Monrovia, Liberia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;