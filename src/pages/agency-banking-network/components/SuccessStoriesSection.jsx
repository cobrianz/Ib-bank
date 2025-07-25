import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoriesSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Martha Johnson",
      location: "Gbarnga, Bong County",
      businessType: "General Store & IB Agent",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      monthlyEarning: "LRD 38,000",
      yearsActive: 3,
      customersServed: 450,
      story: `When I first heard about becoming an IB Liberia agent, I was running a small general store barely making ends meet. The training program was comprehensive and the support team helped me understand every aspect of the banking services.\n\nNow, three years later, my store has become the financial hub of our community. I serve over 450 customers monthly with cash deposits, withdrawals, money transfers, and bill payments. The additional income has allowed me to expand my store and even hire two employees.\n\nWhat I love most is helping my neighbors access banking services without traveling to Monrovia. Many elderly customers tell me how grateful they are to have these services right in their neighborhood.`,
      achievements: [
        "Top performing agent in Bong County 2023",
        "Served over 15,000 transactions",
        "Expanded business to include mobile money",
        "Trained 2 new agents in the region"
      ]
    },
    {
      id: 2,
      name: "James Kollie",
      location: "Buchanan, Grand Bassa County",
      businessType: "Phone Repair Shop & IB Agent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      monthlyEarning: "LRD 42,000",
      yearsActive: 2,
      customersServed: 380,
      story: `I started as a phone repair technician with a small shop in Buchanan. When IB Liberia introduced the agency banking program, I saw an opportunity to diversify my income and serve my community better.\n\nThe combination of phone repairs and banking services has been perfect. Customers come for phone repairs and often need banking services too. The IB Liberia training gave me confidence to handle financial transactions professionally.\n\nMy monthly earnings have doubled, and I've been able to move to a larger location. The banking services bring steady daily income, while phone repairs provide additional revenue. I'm now planning to open a second location.`,
      achievements: [
        "Highest customer satisfaction rating",
        "Zero transaction errors in 24 months",
        "Integrated mobile banking with repair services",
        "Mentoring program participant"
      ]
    },
    {
      id: 3,
      name: "Grace Pewee",
      location: "Voinjama, Lofa County",
      businessType: "Market Vendor & IB Agent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      monthlyEarning: "LRD 35,000",
      yearsActive: 4,
      customersServed: 520,
      story: `As a market vendor in Voinjama, I understood the challenges people faced accessing banking services. The nearest bank was hours away, and many in our community couldn't afford the time or transport costs.\n\nBecoming an IB Liberia agent transformed not just my business, but our entire market community. I can now help farmers deposit their earnings, send money to family members, and pay bills without leaving town.\n\nThe agent program has given me financial independence and respect in my community. I've been able to educate many women about financial services and help them open their first bank accounts.`,
      achievements: [
        "Pioneered rural women\'s banking education",
        "Highest rural transaction volume",
        "Community financial literacy advocate",
        "4 years perfect service record"
      ]
    }
  ];

  const currentStory = successStories[activeStory];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
          Agent Success Stories
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover how IB Liberia agents are building successful businesses while transforming their communities' access to financial services.
        </p>
      </div>

      {/* Story Navigation */}
      <div className="flex justify-center">
        <div className="flex space-x-2 glassmorphic rounded-brand-lg p-2">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-4 py-2 rounded-brand text-sm font-medium brand-transition ${
                activeStory === index
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {story.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Story */}
      <div className="glassmorphic rounded-brand-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Story Content */}
          <div className="p-8 lg:p-12 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-brand-lg overflow-hidden">
                  <Image
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={16} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-brand-heading text-xl font-semibold text-foreground">
                  {currentStory.name}
                </h3>
                <p className="text-muted-foreground">
                  {currentStory.businessType}
                </p>
                <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} />
                  <span>{currentStory.location}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {currentStory.monthlyEarning}
                </div>
                <div className="text-xs text-muted-foreground">
                  Monthly Earnings
                </div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {currentStory.customersServed}
                </div>
                <div className="text-xs text-muted-foreground">
                  Customers Served
                </div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-primary">
                  {currentStory.yearsActive}
                </div>
                <div className="text-xs text-muted-foreground">
                  Years Active
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-4">
              {currentStory.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="text-brand-heading font-semibold text-foreground">
                Key Achievements
              </h4>
              <div className="space-y-2">
                {currentStory.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex flex-col justify-center space-y-8">
            {/* Quote */}
            <div className="space-y-4">
              <Icon name="Quote" size={32} className="text-primary" />
              <blockquote className="text-lg font-medium text-foreground italic">
                "Becoming an IB Liberia agent has transformed my life and my community. I'm not just earning more - I'm helping my neighbors access essential financial services."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                - {currentStory.name}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="space-y-4">
              <h4 className="text-brand-heading font-semibold text-foreground">
                Community Impact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    New Bank Accounts Opened
                  </span>
                  <span className="font-semibold text-foreground">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Monthly Transactions
                  </span>
                  <span className="font-semibold text-foreground">1,250+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Money Transfers Processed
                  </span>
                  <span className="font-semibold text-foreground">LRD 2.5M</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={18}
                className="conversion-cta w-full"
              >
                Start Your Success Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Navigation Dots */}
      <div className="flex justify-center space-x-2">
        {successStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStory(index)}
            className={`w-3 h-3 rounded-full brand-transition ${
              activeStory === index ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesSection;