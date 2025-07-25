import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityImpactSection = () => {
  const impactMetrics = [
    {
      icon: 'DollarSign',
      value: '$12.5M',
      label: 'Total Loans Disbursed',
      description: 'Supporting economic growth across Liberia',
      growth: '+25%',
      color: 'text-green-600'
    },
    {
      icon: 'Building2',
      value: '2,850',
      label: 'Businesses Supported',
      description: 'From startups to established enterprises',
      growth: '+18%',
      color: 'text-blue-600'
    },
    {
      icon: 'Users',
      value: '50,000+',
      label: 'Active Customers',
      description: 'Individuals and families served',
      growth: '+32%',
      color: 'text-purple-600'
    },
    {
      icon: 'GraduationCap',
      value: '1,200',
      label: 'Education Loans',
      description: 'Investing in Liberia\'s future leaders',
      growth: '+40%',
      color: 'text-orange-600'
    },
    {
      icon: 'Home',
      value: '850',
      label: 'Home Loans Approved',
      description: 'Building communities across the nation',
      growth: '+22%',
      color: 'text-indigo-600'
    },
    {
      icon: 'Briefcase',
      value: '15,000',
      label: 'Jobs Created',
      description: 'Through business financing initiatives',
      growth: '+28%',
      color: 'text-teal-600'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      business: "Johnson\'s Fashion House",
      location: "Monrovia, Montserrado",
      story: "With IB Liberia's business loan, I expanded from a small tailoring shop to a fashion house employing 12 people.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      loanAmount: "$15,000",
      impact: "12 jobs created"
    },
    {
      id: 2,
      name: "Marcus Williams",
      business: "Williams Agro Processing",
      location: "Gbarnga, Bong County",
      story: "The agricultural loan helped me purchase modern equipment, increasing our rice processing capacity by 300%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      loanAmount: "$25,000",
      impact: "300% capacity increase"
    },
    {
      id: 3,
      name: "Grace Kpehe",
      business: "Kpehe Educational Center",
      location: "Buchanan, Grand Bassa",
      story: "Our education loan enabled us to build a modern computer lab, preparing students for the digital economy.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      loanAmount: "$8,000",
      impact: "200+ students benefited"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-ib-light via-background to-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glassmorphic rounded-brand-lg p-2 px-4 inline-block mb-6">
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="Heart" size={16} />
              <span className="text-sm font-medium">Community Impact</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Empowering Liberia's Economic Growth
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our inception, IB Liberia has been committed to fostering economic development and creating opportunities for individuals and businesses across the nation.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="neumorphic rounded-brand-lg p-6 bg-card text-center brand-hover-scale"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-brand flex items-center justify-center mx-auto mb-4">
                <Icon name={metric.icon} size={28} className="text-primary" />
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-2">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {metric.value}
                </h3>
                <span className={`text-sm font-semibold ${metric.color} glassmorphic rounded px-2 py-1`}>
                  {metric.growth}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h4>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Success Stories from Our Community
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real customers who have transformed their lives and communities with IB Liberia's support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="neumorphic rounded-brand-lg p-6 bg-card brand-hover-scale"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <Image
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{story.name}</h4>
                    <p className="text-sm text-primary font-medium">{story.business}</p>
                    <p className="text-xs text-muted-foreground">{story.location}</p>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{story.story}"
                </blockquote>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{story.loanAmount}</div>
                    <div className="text-xs text-muted-foreground">Loan Amount</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-success">{story.impact}</div>
                    <div className="text-xs text-muted-foreground">Impact</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Economic Development Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphic rounded-brand-lg p-8 lg:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Target" size={24} className="text-primary" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Our Commitment to Liberia
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a proudly Liberian institution, we are committed to supporting the nation's economic development through innovative financial solutions, community partnerships, and sustainable growth initiatives that benefit all Liberians.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="Handshake" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community Partnership</h4>
                <p className="text-sm text-muted-foreground">Working together for sustainable development</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Economic Growth</h4>
                <p className="text-sm text-muted-foreground">Driving innovation and prosperity</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Financial Security</h4>
                <p className="text-sm text-muted-foreground">Protecting and growing your wealth</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground italic">
                "Together, we are building a stronger, more prosperous Liberia for future generations."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;