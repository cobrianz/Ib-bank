import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AgentRecruitmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    businessType: ''
  });

  const requirements = [
    {
      icon: 'Store',
      title: 'Physical Location',
      description: 'Established business premises in strategic location'
    },
    {
      icon: 'DollarSign',
      title: 'Initial Capital',
      description: 'Minimum LRD 50,000 working capital requirement'
    },
    {
      icon: 'Shield',
      title: 'Security Measures',
      description: 'Basic security infrastructure and protocols'
    },
    {
      icon: 'GraduationCap',
      title: 'Training Completion',
      description: 'Complete IB Liberia agent certification program'
    }
  ];

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Earning Potential',
      description: 'LRD 15,000 - 45,000 monthly commission potential',
      highlight: true
    },
    {
      icon: 'Users',
      title: 'Customer Base',
      description: 'Access to IB Liberia\'s growing customer network'
    },
    {
      icon: 'BookOpen',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing technical support'
    },
    {
      icon: 'Award',
      title: 'Brand Recognition',
      description: 'Association with trusted IB Liberia brand'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Agent application submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
          Become an IB Liberia Agent
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our growing network of successful agents and build a sustainable business while serving your community's banking needs.
        </p>
      </div>

      {/* Requirements */}
      <div className="space-y-6">
        <h3 className="text-brand-heading text-2xl font-semibold text-foreground text-center">
          Agent Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="glassmorphic rounded-brand-lg p-6 text-center space-y-4 brand-transition hover:shadow-brand-lg"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-brand-lg flex items-center justify-center">
                  <Icon name={requirement.icon} size={28} className="text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-brand-heading font-semibold text-foreground">
                  {requirement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {requirement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-6">
        <h3 className="text-brand-heading text-2xl font-semibold text-foreground text-center">
          Agent Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glassmorphic rounded-brand-lg p-6 space-y-4 brand-transition hover:shadow-brand-lg ${
                benefit.highlight ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-brand-lg flex items-center justify-center ${
                  benefit.highlight 
                    ? 'bg-gradient-to-br from-primary to-accent' :'bg-muted'
                }`}>
                  <Icon 
                    name={benefit.icon} 
                    size={20} 
                    className={benefit.highlight ? 'text-white' : 'text-foreground'} 
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-brand-heading font-semibold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="glassmorphic rounded-brand-lg p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-brand-heading text-2xl font-semibold text-foreground">
              Apply to Become an Agent
            </h3>
            <p className="text-muted-foreground">
              Start your journey as an IB Liberia agent today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+231 XXX XXXX"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Business Location"
                type="text"
                name="location"
                placeholder="City, County"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <Input
              label="Current Business Type"
              type="text"
              name="businessType"
              placeholder="e.g., Retail Store, Service Center"
              value={formData.businessType}
              onChange={handleInputChange}
              description="Describe your current business or intended agent location"
              required
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="left"
                iconSize={18}
                className="conversion-cta flex-1"
              >
                Submit Application
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                iconSize={18}
                className="flex-1"
              >
                Download Brochure
              </Button>
            </div>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              Our team will review your application and contact you within 3-5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentRecruitmentSection;