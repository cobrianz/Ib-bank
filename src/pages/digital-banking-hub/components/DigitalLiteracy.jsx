import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DigitalLiteracy = () => {
  const [activeCategory, setActiveCategory] = useState('basics');

  const categories = [
    {
      id: 'basics',
      title: 'Banking Basics',
      icon: 'BookOpen',
      description: 'Learn fundamental digital banking concepts'
    },
    {
      id: 'security',
      title: 'Online Security',
      icon: 'Shield',
      description: 'Protect yourself from fraud and scams'
    },
    {
      id: 'payments',
      title: 'Digital Payments',
      icon: 'CreditCard',
      description: 'Master online and mobile payments'
    },
    {
      id: 'advanced',
      title: 'Advanced Features',
      icon: 'Settings',
      description: 'Explore advanced banking tools'
    }
  ];

  const resources = {
    basics: [
      {
        id: 1,
        title: "Getting Started with Online Banking",
        type: "video",
        duration: "5 min",
        language: "English",
        description: "Learn how to set up and navigate your online banking account",
        level: "Beginner"
      },
      {
        id: 2,
        title: "Understanding Your Account Dashboard",
        type: "guide",
        duration: "3 min read",
        language: "English",
        description: "Navigate your account dashboard like a pro",
        level: "Beginner"
      },
      {
        id: 3,
        title: "Mobile Banking Basics",
        type: "video",
        duration: "7 min",
        language: "English & Kpelle",
        description: "Essential mobile banking skills for everyday use",
        level: "Beginner"
      }
    ],
    security: [
      {
        id: 4,
        title: "Creating Strong Passwords",
        type: "interactive",
        duration: "4 min",
        language: "English",
        description: "Learn to create and manage secure passwords",
        level: "Essential"
      },
      {
        id: 5,
        title: "Recognizing Phishing Attempts",
        type: "video",
        duration: "6 min",
        language: "English & Bassa",
        description: "Identify and avoid common online banking scams",
        level: "Essential"
      },
      {
        id: 6,
        title: "Two-Factor Authentication Setup",
        type: "guide",
        duration: "5 min read",
        language: "English",
        description: "Add an extra layer of security to your account",
        level: "Intermediate"
      }
    ],
    payments: [
      {
        id: 7,
        title: "Making Your First Online Transfer",
        type: "video",
        duration: "8 min",
        language: "English",
        description: "Step-by-step guide to transferring money online",
        level: "Beginner"
      },
      {
        id: 8,
        title: "Bill Payment Automation",
        type: "guide",
        duration: "4 min read",
        language: "English",
        description: "Set up automatic bill payments for utilities and loans",
        level: "Intermediate"
      },
      {
        id: 9,
        title: "International Money Transfers",
        type: "video",
        duration: "10 min",
        language: "English & Kru",
        description: "Send money abroad safely and affordably",
        level: "Intermediate"
      }
    ],
    advanced: [
      {
        id: 10,
        title: "Investment Account Management",
        type: "webinar",
        duration: "30 min",
        language: "English",
        description: "Manage your investment portfolio online",
        level: "Advanced"
      },
      {
        id: 11,
        title: "Business Banking Tools",
        type: "guide",
        duration: "8 min read",
        language: "English",
        description: "Advanced features for business account holders",
        level: "Advanced"
      },
      {
        id: 12,
        title: "API Integration for Developers",
        type: "documentation",
        duration: "15 min read",
        language: "English",
        description: "Integrate IB Liberia services into your applications",
        level: "Expert"
      }
    ]
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return 'Play';
      case 'guide': return 'FileText';
      case 'interactive': return 'MousePointer';
      case 'webinar': return 'Video';
      case 'documentation': return 'Code';
      default: return 'BookOpen';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-success bg-success/10';
      case 'Essential': return 'text-warning bg-warning/10';
      case 'Intermediate': return 'text-primary bg-primary/10';
      case 'Advanced': return 'text-accent bg-accent/10';
      case 'Expert': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="bg-card rounded-brand-lg glassmorphic overflow-hidden">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-accent/10 rounded-brand flex items-center justify-center">
            <Icon name="GraduationCap" size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-brand-heading text-xl font-bold text-foreground">
              Digital Financial Literacy
            </h2>
            <p className="text-muted-foreground text-sm">
              Learn digital banking skills at your own pace
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-3 rounded-brand text-left brand-transition ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted/30 hover:bg-muted/50 text-foreground'
              }`}
            >
              <Icon 
                name={category.icon} 
                size={20} 
                className={`mb-2 ${activeCategory === category.id ? 'text-white' : 'text-primary'}`} 
              />
              <div className="text-sm font-medium mb-1">{category.title}</div>
              <div className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-muted-foreground'}`}>
                {category.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-2">
            {categories.find(cat => cat.id === activeCategory)?.title} Resources
          </h3>
          <p className="text-muted-foreground text-sm">
            {categories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources[activeCategory]?.map((resource) => (
            <div
              key={resource.id}
              className="p-4 bg-muted/30 rounded-brand hover:bg-muted/50 brand-transition cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center group-hover:bg-primary group-hover:text-white brand-transition">
                  <Icon name={getTypeIcon(resource.type)} size={18} />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(resource.level)}`}>
                  {resource.level}
                </span>
              </div>

              <h4 className="font-medium text-foreground mb-2 group-hover:text-primary brand-transition">
                {resource.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {resource.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{resource.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Globe" size={12} />
                    <span>{resource.language}</span>
                  </span>
                </div>
                <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 brand-transition" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-brand p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-brand flex items-center justify-center flex-shrink-0">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-heading text-lg font-semibold text-foreground mb-2">
                  Need Personal Assistance?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our digital banking specialists are available to help you learn and navigate our online services. Schedule a one-on-one session or join our weekly group tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    className="conversion-cta"
                  >
                    Schedule Tutorial
                  </Button>
                  <Button
                    variant="outline"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Live Chat Support
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

export default DigitalLiteracy;