import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BusinessCreditSection from './components/BusinessCreditSection';
import CorporateBankingSection from './components/CorporateBankingSection';
import AgencyOpportunitiesSection from './components/AgencyOpportunitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import IntegrationSection from './components/IntegrationSection';

const BusinessSolutionsCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Business Solutions Center - IB Liberia Digital</title>
        <meta 
          name="description" 
          content="Comprehensive business banking solutions for Liberian entrepreneurs and SMEs. From working capital loans to corporate banking services, grow your business with IB's tailored financial solutions." 
        />
        <meta name="keywords" content="business banking, SME loans, corporate banking, trade finance, Liberia business, entrepreneur banking" />
        <meta property="og:title" content="Business Solutions Center - IB Liberia Digital" />
        <meta property="og:description" content="Empowering Liberian businesses with tailored financial solutions, from market vendors to tech startups." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/business-solutions-center" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <BusinessCreditSection />
        <CorporateBankingSection />
        <AgencyOpportunitiesSection />
        <TestimonialsSection />
        <IntegrationSection />
      </main>

      {/* Footer */}
      <footer className="bg-ib-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">IB</span>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold">IB Liberia Digital</h3>
                  <p className="text-xs text-white/70">Transparent Innovation Banking</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Empowering Liberian businesses with innovative financial solutions and transparent banking services.
              </p>
            </div>

            {/* Business Services */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Business Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#credit" className="hover:text-white brand-transition">Business Credit</a></li>
                <li><a href="#corporate" className="hover:text-white brand-transition">Corporate Banking</a></li>
                <li><a href="#agency" className="hover:text-white brand-transition">Agency Opportunities</a></li>
                <li><a href="#integration" className="hover:text-white brand-transition">System Integration</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Business Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="tel:+231-77-123-4567" className="hover:text-white brand-transition">Business Hotline</a></li>
                <li><a href="mailto:business@ibliberia.com" className="hover:text-white brand-transition">Business Email</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Loan Calculator</a></li>
                <li><a href="#" className="hover:text-white brand-transition">Business Resources</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Get Started</h4>
              <div className="space-y-3">
                <p className="text-sm text-white/80">
                  Ready to grow your business with IB?
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:+231-77-123-4567" 
                    className="block text-sm bg-ib-green hover:bg-ib-accent px-4 py-2 rounded-brand brand-transition text-center"
                  >
                    Call Business Team
                  </a>
                  <a 
                    href="#" 
                    className="block text-sm border border-white/30 hover:bg-white/10 px-4 py-2 rounded-brand brand-transition text-center"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} International Bank (Liberia) Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-white brand-transition">Privacy Policy</a>
                <a href="#" className="hover:text-white brand-transition">Terms of Service</a>
                <a href="#" className="hover:text-white brand-transition">Business Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessSolutionsCenter;