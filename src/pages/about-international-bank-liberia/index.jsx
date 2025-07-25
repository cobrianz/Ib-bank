import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import TimelineSection from './components/TimelineSection';
import LeadershipSection from './components/LeadershipSection';
import ImpactMetricsSection from './components/ImpactMetricsSection';
import ComplianceSection from './components/ComplianceSection';
import CareersSection from './components/CareersSection';

const AboutInternationalBankLiberia = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About International Bank Liberia - IB Liberia Digital';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mission & Vision Section */}
        <MissionVisionSection />
        
        {/* Timeline Section */}
        <TimelineSection />
        
        {/* Leadership Section */}
        <LeadershipSection />
        
        {/* Impact Metrics Section */}
        <ImpactMetricsSection />
        
        {/* Compliance Section */}
        <ComplianceSection />
        
        {/* Careers Section */}
        <CareersSection />
      </main>

      {/* Footer */}
      <footer className="bg-ib-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">IB</span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">IB Liberia</h3>
                  <p className="text-xs text-white/70">Digital Banking</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Empowering Liberia's financial future through innovative banking solutions and community-focused services.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ib-green brand-transition">
                  <span className="text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ib-green brand-transition">
                  <span className="text-xs font-bold">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-ib-green brand-transition">
                  <span className="text-xs font-bold">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/80 hover:text-ib-green brand-transition">Home</a></li>
                <li><a href="/personal-banking-services" className="text-white/80 hover:text-ib-green brand-transition">Personal Banking</a></li>
                <li><a href="/business-solutions-center" className="text-white/80 hover:text-ib-green brand-transition">Business Solutions</a></li>
                <li><a href="/digital-banking-hub" className="text-white/80 hover:text-ib-green brand-transition">Digital Banking</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/80 hover:text-ib-green brand-transition">Savings Accounts</a></li>
                <li><a href="#" className="text-white/80 hover:text-ib-green brand-transition">Business Loans</a></li>
                <li><a href="#" className="text-white/80 hover:text-ib-green brand-transition">Money Transfer</a></li>
                <li><a href="#" className="text-white/80 hover:text-ib-green brand-transition">Mobile Banking</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-ib-green mt-1">📍</span>
                  <span className="text-white/80">Broad Street, Monrovia, Liberia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ib-green">📞</span>
                  <span className="text-white/80">+231-77-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ib-green">✉️</span>
                  <span className="text-white/80">info@ibliberia.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} International Bank (Liberia) Limited. All rights reserved. | Licensed by Central Bank of Liberia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutInternationalBankLiberia;