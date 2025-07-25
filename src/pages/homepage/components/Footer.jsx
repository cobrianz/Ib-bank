import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Banking Services',
      links: [
        { name: 'Personal Banking', path: '/personal-banking-services' },
        { name: 'Business Solutions', path: '/business-solutions-center' },
        { name: 'Digital Banking', path: '/digital-banking-hub' },
        { name: 'Agency Network', path: '/agency-banking-network' }
      ]
    },
    {
      title: 'Customer Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Help Center', path: '/support' },
        { name: 'Branch Locator', path: '/agency-banking-network' },
        { name: 'Customer Care', path: '/support' }
      ]
    },
    {
      title: 'About IB Liberia',
      links: [
        { name: 'Our Story', path: '/about-international-bank-liberia' },
        { name: 'Leadership', path: '/about-international-bank-liberia' },
        { name: 'Careers', path: '/careers' },
        { name: 'News & Updates', path: '/news' }
      ]
    },
    {
      title: 'Legal & Security',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Security Center', path: '/security' },
        { name: 'Regulatory Info', path: '/regulatory' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Head Office',
      details: ['Broad Street, Monrovia', 'Montserrado County, Liberia']
    },
    {
      icon: 'Phone',
      title: 'Customer Service',
      details: ['+231-77-123-4567', '+231-88-987-6543']
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      details: ['info@ibliberia.com', 'support@ibliberia.com']
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM']
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-ib-dark via-secondary to-ib-accent text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glassmorphic rounded-brand-lg p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Stay Connected with IB Liberia
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get the latest updates on new services, financial tips, and exclusive offers delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  variant="default"
                  className="bg-white text-ib-dark hover:bg-white/90 font-semibold"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={16}
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-white/60 mt-4">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/homepage" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-ib-light rounded-lg flex items-center justify-center shadow-brand">
                    <span className="text-ib-dark font-heading font-bold text-xl">IB</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-heading font-bold">
                    IB Liberia Digital
                  </h1>
                  <p className="text-sm text-white/80">
                    Transparent Innovation Banking
                  </p>
                </div>
              </Link>

              <p className="text-white/80 leading-relaxed mb-6">
                International Bank (Liberia) Limited is committed to empowering Liberia's economic growth through innovative financial solutions, transparent banking practices, and community-focused services.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 glassmorphic rounded-brand flex items-center justify-center hover:bg-white/20 brand-transition"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h4 className="font-heading font-semibold text-white mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-white/80 hover:text-white brand-transition text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-heading font-semibold text-white mb-6">
                Contact Information
              </h4>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 glassmorphic rounded-brand flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={info.icon} size={16} />
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">{info.title}</h5>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-white/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>CBL Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-success" />
                <span>256-bit SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>FDIC Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-success" />
                <span>International Banking</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Download"
                iconPosition="left"
                iconSize={14}
              >
                Mobile App
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
                iconSize={14}
              >
                24/7 Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-white/80">
              © {currentYear} International Bank (Liberia) Limited. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <Link to="/privacy" className="hover:text-white brand-transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white brand-transition">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-white brand-transition">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;