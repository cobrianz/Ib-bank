import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Business Credit Facilities",
      description: "Flexible credit solutions designed to fuel your business growth with competitive rates and personalized terms.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      icon: "Building2",
      features: ["Working Capital Loans", "Equipment Financing", "Trade Finance", "Lines of Credit"],
      link: "/business-solutions-center",
      stats: { value: "$2.5M+", label: "Disbursed" },
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Personal Loans",
      description: "Achieve your personal goals with our flexible loan options, from home improvements to education financing.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=400&h=300&fit=crop",
      icon: "User",
      features: ["Home Loans", "Auto Loans", "Education Loans", "Personal Lines"],
      link: "/personal-banking-services",
      stats: { value: "15,000+", label: "Customers" },
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "e-Banking Services",
      description: "Bank anytime, anywhere with our comprehensive digital banking platform featuring advanced security.",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=300&fit=crop",
      icon: "Smartphone",
      features: ["Mobile Banking", "Online Transfers", "Bill Payments", "Account Management"],
      link: "/digital-banking-hub",
      stats: { value: "24/7", label: "Available" },
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Money Transfer Services",
      description: "Send and receive money securely across Liberia and internationally with competitive exchange rates.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      icon: "Send",
      features: ["Domestic Transfers", "International Remittance", "Mobile Money", "Agent Network"],
      link: "/agency-banking-network",
      stats: { value: "150+", label: "Locations" },
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-16 lg:py-24 bg-background">
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
              <Icon name="Star" size={16} />
              <span className="text-sm font-medium">Premium Banking Services</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Financial Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From personal banking to business growth, discover tailored financial services designed to meet your unique needs and aspirations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
            >
              <div className="neumorphic rounded-brand-lg overflow-hidden bg-card brand-transition brand-hover-scale h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 brand-transition"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 glassmorphic rounded-brand p-2 text-white">
                    <div className="text-center">
                      <div className="text-lg font-bold">{service.stats.value}</div>
                      <div className="text-xs opacity-90">{service.stats.label}</div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-brand flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary brand-transition">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={service.link}>
                    <Button
                      variant="outline"
                      fullWidth
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary brand-transition"
                      iconName="ArrowRight"
                      iconPosition="right"
                      iconSize={16}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glassmorphic rounded-brand-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust IB Liberia for their financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/personal-banking-services">
                <Button
                  variant="default"
                  size="lg"
                  className="conversion-cta"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={18}
                >
                  Open Account
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;