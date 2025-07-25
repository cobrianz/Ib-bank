import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import AgentLocationCard from './components/AgentLocationCard';
import InteractiveMap from './components/InteractiveMap';
import NetworkStatsCard from './components/NetworkStatsCard';
import AgentRecruitmentSection from './components/AgentRecruitmentSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ServiceComparisonChart from './components/ServiceComparisonChart';
import Header from 'components/ui/Header';

const AgencyBankingNetwork = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyAgents, setNearbyAgents] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock agent data
  const agents = [
    {
      id: 1,
      name: "Martha\'s General Store",
      address: "Central Monrovia, Montserrado County",
      phone: "+231 777 123 456",
      distance: 2.3,
      status: "online",
      isOpen: true,
      operatingHours: "8:00 AM - 6:00 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Cash Withdrawal", icon: "ArrowUpCircle" },
        { name: "Money Transfer", icon: "Send" },
        { name: "Bill Payment", icon: "Receipt" }
      ],
      limits: {
        deposit: 75000,
        withdrawal: 50000
      },
      coordinates: { lat: 6.3156, lng: -10.8074 }
    },
    {
      id: 2,
      name: "Kollie\'s Phone Repair",
      address: "Buchanan, Grand Bassa County",
      phone: "+231 777 234 567",
      distance: 45.7,
      status: "busy",
      isOpen: true,
      operatingHours: "9:00 AM - 7:00 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Cash Withdrawal", icon: "ArrowUpCircle" },
        { name: "Money Transfer", icon: "Send" },
        { name: "Account Opening", icon: "UserPlus" }
      ],
      limits: {
        deposit: 100000,
        withdrawal: 75000
      },
      coordinates: { lat: 5.8811, lng: -10.0467 }
    },
    {
      id: 3,
      name: "Grace Market Center",
      address: "Voinjama, Lofa County",
      phone: "+231 777 345 678",
      distance: 187.2,
      status: "online",
      isOpen: true,
      operatingHours: "7:00 AM - 5:00 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Money Transfer", icon: "Send" },
        { name: "Bill Payment", icon: "Receipt" }
      ],
      limits: {
        deposit: 50000,
        withdrawal: 25000
      },
      coordinates: { lat: 8.4219, lng: -9.7478 }
    },
    {
      id: 4,
      name: "Johnson\'s Electronics",
      address: "Gbarnga, Bong County",
      phone: "+231 777 456 789",
      distance: 98.5,
      status: "online",
      isOpen: false,
      operatingHours: "8:30 AM - 6:30 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Cash Withdrawal", icon: "ArrowUpCircle" },
        { name: "Money Transfer", icon: "Send" },
        { name: "Bill Payment", icon: "Receipt" },
        { name: "Account Opening", icon: "UserPlus" }
      ],
      limits: {
        deposit: 150000,
        withdrawal: 100000
      },
      coordinates: { lat: 6.9978, lng: -9.4739 }
    },
    {
      id: 5,
      name: "Pewee\'s Trading Post",
      address: "Harper, Maryland County",
      phone: "+231 777 567 890",
      distance: 156.3,
      status: "offline",
      isOpen: false,
      operatingHours: "8:00 AM - 5:00 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Money Transfer", icon: "Send" }
      ],
      limits: {
        deposit: 25000,
        withdrawal: 15000
      },
      coordinates: { lat: 4.3750, lng: -7.7186 }
    },
    {
      id: 6,
      name: "Roberts Business Center",
      address: "Zwedru, Grand Gedeh County",
      phone: "+231 777 678 901",
      distance: 203.8,
      status: "online",
      isOpen: true,
      operatingHours: "9:00 AM - 6:00 PM",
      services: [
        { name: "Cash Deposit", icon: "ArrowDownCircle" },
        { name: "Cash Withdrawal", icon: "ArrowUpCircle" },
        { name: "Money Transfer", icon: "Send" },
        { name: "Bill Payment", icon: "Receipt" },
        { name: "Account Opening", icon: "UserPlus" },
        { name: "Loan Application", icon: "FileText" }
      ],
      limits: {
        deposit: 200000,
        withdrawal: 150000
      },
      coordinates: { lat: 6.1267, lng: -8.1339 }
    }
  ];

  // Network statistics
  const networkStats = {
    activeAgents: 156,
    countiesCovered: 12,
    customersServed: 45,
    monthlyTransactions: 125
  };

  // Update current time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Sort agents by distance and get nearby ones
  useEffect(() => {
    const sortedAgents = [...agents].sort((a, b) => a.distance - b.distance);
    setNearbyAgents(sortedAgents.slice(0, 3));
  }, []);

  const handleAgentSelect = (agent) => {
    setSelectedAgent(agent);
  };

  const handleViewDetails = (agent) => {
    setSelectedAgent(agent);
    // Scroll to map section
    document.getElementById('agent-map')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetDirections = (agent) => {
    // Open Google Maps with directions
    const url = `https://www.google.com/maps/dir/?api=1&destination=${agent.coordinates.lat},${agent.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Agency Banking Network - IB Liberia Digital</title>
        <meta name="description" content="Discover IB Liberia's innovative agency banking network across Liberia. Find nearby agents, explore services, and learn about becoming an agent partner." />
        <meta name="keywords" content="agency banking, financial inclusion, Liberia banking, agent network, mobile banking" />
      </Helmet>
      <Header/>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 glassmorphic rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Icon name="MapPin" size={16} />
                  <span>Serving All 15 Counties</span>
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                </div>
                <h1 className="text-brand-heading text-4xl lg:text-6xl font-bold text-foreground">
                  Agency Banking
                  <span className="block text-gradient-brand">Network</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Bringing banking services to every corner of Liberia through our innovative agent network. 
                  Find nearby agents, access essential services, and discover opportunities to join our growing community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Search"
                  iconPosition="left"
                  iconSize={18}
                  className="conversion-cta"
                  onClick={() => document.getElementById('agent-locator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Find Nearby Agents
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={18}
                  onClick={() => document.getElementById('become-agent')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Become an Agent
                </Button>
              </div>

              {/* Real-time info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Last updated: {currentTime.toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Activity" size={16} className="text-success" />
                  <span>{agents.filter(a => a.status === 'online').length} agents online now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Statistics */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
                Network at a Glance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our growing network continues to expand financial inclusion across Liberia
              </p>
            </div>
            <NetworkStatsCard stats={networkStats} />
          </div>
        </section>

        {/* Interactive Map & Agent Locator */}
        <section id="agent-locator" className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
                Find Your Nearest Agent
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Locate IB Liberia agents near you with real-time availability and service information
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div id="agent-map" className="lg:col-span-2">
                <InteractiveMap
                  agents={agents}
                  selectedAgent={selectedAgent}
                  onAgentSelect={handleAgentSelect}
                  onLocationRequest={handleLocationRequest}
                />
              </div>

              {/* Nearby Agents */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-brand-heading text-xl font-semibold text-foreground">
                    Nearby Agents
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="RefreshCw"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Refresh
                  </Button>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {nearbyAgents.map((agent) => (
                    <AgentLocationCard
                      key={agent.id}
                      agent={agent}
                      onViewDetails={handleViewDetails}
                      onGetDirections={handleGetDirections}
                    />
                  ))}
                </div>

                <div className="glassmorphic rounded-brand-lg p-4 text-center space-y-3">
                  <Icon name="MapPin" size={24} className="text-primary mx-auto" />
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Can't find a nearby agent?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We're expanding our network. Contact us to suggest new locations.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={14}
                    fullWidth
                  >
                    Suggest Location
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison Chart */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceComparisonChart />
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SuccessStoriesSection />
          </div>
        </section>

        {/* Agent Recruitment */}
        <section id="become-agent" className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AgentRecruitmentSection />
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
                Security & Trust
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your safety and security are our top priorities in every transaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: 'Shield',
                  title: 'Secure Transactions',
                  description: 'End-to-end encryption for all financial transactions'
                },
                {
                  icon: 'Eye',
                  title: '24/7 Monitoring',
                  description: 'Real-time fraud detection and prevention systems'
                },
                {
                  icon: 'Lock',
                  title: 'Agent Verification',
                  description: 'Rigorous background checks and ongoing compliance'
                },
                {
                  icon: 'Phone',
                  title: 'Support Hotline',
                  description: 'Immediate assistance for any security concerns'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glassmorphic rounded-brand-lg p-6 text-center space-y-4 brand-transition hover:shadow-brand-lg"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-brand-lg flex items-center justify-center">
                      <Icon name={feature.icon} size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-brand-heading font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="glassmorphic rounded-brand-lg p-8 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-brand-lg flex items-center justify-center">
                      <Icon name="HelpCircle" size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-brand-heading text-xl font-semibold text-foreground mb-2">
                      Questions About Agent Banking?
                    </h3>
                    <p className="text-muted-foreground">
                      Our customer service team is available 24/7 to help you with any questions about using our agent network or becoming an agent.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="Phone"
                      iconPosition="left"
                      iconSize={18}
                      className="conversion-cta"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glassmorphic rounded-brand-lg p-8 lg:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-brand-heading text-3xl lg:text-4xl font-bold text-foreground">
                  Ready to Experience Agent Banking?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of Liberians who trust IB Liberia's agent network for convenient, secure banking services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  iconSize={18}
                  className="conversion-cta"
                  onClick={() => document.getElementById('agent-locator')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Find Nearest Agent
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Smartphone"
                  iconPosition="left"
                  iconSize={18}
                >
                  Download Mobile App
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>CBL Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>Secure Transactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span>Extended Hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AgencyBankingNetwork;