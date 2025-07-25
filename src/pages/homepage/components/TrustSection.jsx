import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const trustIndicators = [
    {
      icon: 'Shield',
      title: 'CBL Licensed',
      description: 'Fully licensed and regulated by the Central Bank of Liberia',
      badge: 'License #CBL-2018-001',
      color: 'text-green-600'
    },
    {
      icon: 'Lock',
      title: '256-bit SSL Encryption',
      description: 'Bank-grade security protecting all your transactions',
      badge: 'SSL Verified',
      color: 'text-blue-600'
    },
    {
      icon: 'Award',
      title: 'FDIC Insured',
      description: 'Your deposits are protected up to $250,000',
      badge: 'FDIC Member',
      color: 'text-purple-600'
    },
    {
      icon: 'Globe',
      title: 'International Standards',
      description: 'Compliant with global banking regulations and standards',
      badge: 'ISO 27001',
      color: 'text-orange-600'
    }
  ];

  const partnerships = [
    {
      name: 'Central Bank of Liberia',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
      description: 'Primary regulatory authority'
    },
    {
      name: 'SWIFT Network',
      logo: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=120&h=60&fit=crop',
      description: 'International wire transfers'
    },
    {
      name: 'Visa International',
      logo: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=120&h=60&fit=crop',
      description: 'Global payment processing'
    },
    {
      name: 'Mastercard',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop',
      description: 'Worldwide acceptance'
    }
  ];

  const securityFeatures = [
    {
      icon: 'Fingerprint',
      title: 'Biometric Authentication',
      description: 'Advanced fingerprint and facial recognition for secure access'
    },
    {
      icon: 'Smartphone',
      title: 'Two-Factor Authentication',
      description: 'SMS and app-based verification for enhanced security'
    },
    {
      icon: 'Eye',
      title: '24/7 Fraud Monitoring',
      description: 'Real-time transaction monitoring and fraud detection'
    },
    {
      icon: 'Database',
      title: 'Data Protection',
      description: 'Encrypted data storage with regular security audits'
    }
  ];

  const feeStructure = [
    {
      service: 'Account Maintenance',
      fee: 'Free',
      description: 'No monthly maintenance fees for active accounts'
    },
    {
      service: 'ATM Withdrawals',
      fee: '$0.50',
      description: 'First 5 transactions per month are free'
    },
    {
      service: 'Mobile Banking',
      fee: 'Free',
      description: 'Unlimited mobile banking transactions'
    },
    {
      service: 'International Transfers',
      fee: '$15',
      description: 'Competitive rates for overseas transfers'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted to-ib-light/30">
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
              <Icon name="ShieldCheck" size={16} />
              <span className="text-sm font-medium">Trust & Transparency</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Trust is Our Foundation
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on transparency, secured by technology, and backed by regulatory compliance - discover why thousands trust IB Liberia with their financial future.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neumorphic rounded-brand-lg p-6 bg-card text-center brand-hover-scale"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-brand flex items-center justify-center mx-auto mb-4">
                <Icon name={indicator.icon} size={28} className="text-primary" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {indicator.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {indicator.description}
              </p>
              
              <div className={`glassmorphic rounded px-3 py-1 text-xs font-medium ${indicator.color}`}>
                {indicator.badge}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Advanced Security Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security protocols protect your accounts and transactions 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphic rounded-brand-lg p-6 bg-card/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Trusted Partnerships
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic alliances with leading financial institutions and technology providers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="neumorphic rounded-brand-lg p-6 bg-card text-center brand-hover-scale"
              >
                <div className="w-full h-16 bg-gradient-to-br from-muted to-background rounded-brand mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                
                <h4 className="font-semibold text-foreground text-sm mb-1">{partner.name}</h4>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transparent Fee Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphic rounded-brand-lg p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Transparent Fee Structure
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No hidden charges, no surprises. Our transparent pricing ensures you always know what you're paying for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeStructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-brand p-6 border border-border/50"
              >
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">{item.service}</h4>
                  <div className="text-2xl font-bold text-primary mb-3">{item.fee}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              * Fees are subject to change. Please refer to our current fee schedule for the most up-to-date information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-primary hover:text-accent brand-transition font-medium text-sm flex items-center space-x-2">
                <Icon name="Download" size={16} />
                <span>Download Full Fee Schedule</span>
              </button>
              <button className="text-primary hover:text-accent brand-transition font-medium text-sm flex items-center space-x-2">
                <Icon name="Calculator" size={16} />
                <span>Fee Calculator</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Regulatory Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Scale" size={24} className="text-primary" />
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Regulatory Compliance
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              IB Liberia operates under the strict oversight of the Central Bank of Liberia and adheres to all national and international banking regulations. Our commitment to compliance ensures the highest standards of financial integrity and customer protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Annual Audits</h4>
                <p className="text-sm text-muted-foreground">Independent financial audits ensure transparency</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Customer Protection</h4>
                <p className="text-sm text-muted-foreground">Comprehensive deposit insurance coverage</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                  <Icon name="AlertTriangle" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Risk Management</h4>
                <p className="text-sm text-muted-foreground">Proactive risk assessment and mitigation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;