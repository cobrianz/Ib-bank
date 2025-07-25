import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AgencyNetworkSection = () => {
  const [selectedCounty, setSelectedCounty] = useState('montserrado');

  const counties = [
    {
      id: 'montserrado',
      name: 'Montserrado',
      agents: 45,
      services: ['Cash Deposits', 'Withdrawals', 'Transfers', 'Bill Payments'],
      coordinates: { lat: 6.3156, lng: -10.8074 },
      color: 'bg-blue-500'
    },
    {
      id: 'margibi',
      name: 'Margibi',
      agents: 28,
      services: ['Cash Services', 'Account Opening', 'Loan Applications'],
      coordinates: { lat: 6.5158, lng: -10.3451 },
      color: 'bg-green-500'
    },
    {
      id: 'nimba',
      name: 'Nimba',
      agents: 22,
      services: ['Basic Banking', 'Money Transfer', 'Mobile Banking'],
      coordinates: { lat: 7.5931, lng: -8.6606 },
      color: 'bg-purple-500'
    },
    {
      id: 'bong',
      name: 'Bong',
      agents: 18,
      services: ['Cash Deposits', 'Withdrawals', 'Account Services'],
      coordinates: { lat: 6.8312, lng: -9.3677 },
      color: 'bg-orange-500'
    },
    {
      id: 'lofa',
      name: 'Lofa',
      agents: 15,
      services: ['Basic Banking', 'Cash Services', 'Transfers'],
      coordinates: { lat: 8.1921, lng: -9.7236 },
      color: 'bg-red-500'
    },
    {
      id: 'grand-bassa',
      name: 'Grand Bassa',
      agents: 12,
      services: ['Cash Services', 'Mobile Banking', 'Bill Payments'],
      coordinates: { lat: 6.2308, lng: -9.8239 },
      color: 'bg-indigo-500'
    }
  ];

  const networkStats = [
    {
      icon: 'MapPin',
      value: '150+',
      label: 'Agent Locations',
      description: 'Nationwide Coverage'
    },
    {
      icon: 'Users',
      value: '500+',
      label: 'Trained Agents',
      description: 'Professional Service'
    },
    {
      icon: 'Clock',
      value: '12hrs',
      label: 'Extended Hours',
      description: 'Daily Operations'
    },
    {
      icon: 'Shield',
      value: '100%',
      label: 'Secure Transactions',
      description: 'Protected Banking'
    }
  ];

  const selectedCountyData = counties.find(county => county.id === selectedCounty);

  return (
    <section className="py-16 lg:py-24 bg-muted">
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
              <Icon name="Network" size={16} />
              <span className="text-sm font-medium">Agency Banking Innovation</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Banking Closer to Your Community
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access full banking services through our extensive network of trained agents across all 15 counties of Liberia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="neumorphic rounded-brand-lg p-6 bg-card">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Interactive County Map
              </h3>
              
              {/* Map Container */}
              <div className="relative bg-gradient-to-br from-ib-light to-white rounded-brand-lg p-8 mb-6 min-h-[400px]">
                <iframe
                  width="100%"
                  height="400"
                  loading="lazy"
                  title="IB Liberia Agency Network"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${selectedCountyData.coordinates.lat},${selectedCountyData.coordinates.lng}&z=10&output=embed`}
                  className="rounded-brand"
                />
                
                {/* Overlay Info */}
                <div className="absolute top-4 left-4 glassmorphic rounded-brand p-4 text-foreground">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${selectedCountyData.color}`}></div>
                    <span className="font-semibold">{selectedCountyData.name} County</span>
                  </div>
                  <div className="text-sm opacity-80">
                    {selectedCountyData.agents} Active Agents
                  </div>
                </div>
              </div>

              {/* County Selector */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {counties.map((county) => (
                  <button
                    key={county.id}
                    onClick={() => setSelectedCounty(county.id)}
                    className={`p-3 rounded-brand text-sm font-medium brand-transition ${
                      selectedCounty === county.id
                        ? 'bg-primary text-primary-foreground shadow-brand'
                        : 'bg-muted hover:bg-primary/10 text-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${county.color}`}></div>
                      <span>{county.name}</span>
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {county.agents} agents
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* County Details & Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="neumorphic rounded-brand-lg p-6 bg-card mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-4 h-4 rounded-full ${selectedCountyData.color}`}></div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {selectedCountyData.name} County
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 glassmorphic rounded-brand">
                  <div className="text-2xl font-bold text-primary">{selectedCountyData.agents}</div>
                  <div className="text-sm text-muted-foreground">Active Agents</div>
                </div>
                <div className="text-center p-4 glassmorphic rounded-brand">
                  <div className="text-2xl font-bold text-primary">{selectedCountyData.services.length}</div>
                  <div className="text-sm text-muted-foreground">Services Available</div>
                </div>
              </div>

              <h4 className="font-semibold text-foreground mb-4">Available Services:</h4>
              <div className="space-y-2 mb-6">
                {selectedCountyData.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Link to="/agency-banking-network">
                <Button
                  variant="default"
                  fullWidth
                  className="conversion-cta"
                  iconName="MapPin"
                  iconPosition="left"
                  iconSize={16}
                >
                  Find Nearest Agent
                </Button>
              </Link>
            </div>

            {/* Network Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {networkStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="neumorphic rounded-brand p-4 bg-card text-center"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon} size={20} className="text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glassmorphic rounded-brand-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Experience Convenient Banking Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Visit any of our agent locations for fast, secure banking services in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agency-banking-network">
                <Button
                  variant="default"
                  size="lg"
                  className="conversion-cta"
                  iconName="Navigation"
                  iconPosition="left"
                  iconSize={18}
                >
                  Locate Agent
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                iconSize={18}
              >
                Download App
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyNetworkSection;