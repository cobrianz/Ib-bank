import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSlider from './components/HeroSlider';
import ServicesGrid from './components/ServicesGrid';
import AgencyNetworkSection from './components/AgencyNetworkSection';
import CommunityImpactSection from './components/CommunityImpactSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>IB Liberia Digital - Transparent Innovation Banking | International Bank Liberia</title>
        <meta 
          name="description" 
          content="Experience the future of banking in Liberia with IB Liberia Digital. Offering personal banking, business solutions, agency banking network, and digital services with transparent innovation banking." 
        />
        <meta 
          name="keywords" 
          content="IB Liberia, International Bank Liberia, digital banking, personal banking, business loans, agency banking, mobile banking, Liberia banking" 
        />
        <meta name="author" content="International Bank (Liberia) Limited" />
        <meta property="og:title" content="IB Liberia Digital - Transparent Innovation Banking" />
        <meta 
          property="og:description" 
          content="Join thousands of satisfied customers who trust IB Liberia for secure, innovative digital banking solutions across all 15 counties of Liberia." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibliberia.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IB Liberia Digital - Transparent Innovation Banking" />
        <meta 
          name="twitter:description" 
          content="Experience modern banking with glassmorphism design, neumorphic elements, and comprehensive financial services in Liberia." 
        />
        <link rel="canonical" href="https://ibliberia.com/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section with Dynamic Slider */}
          <HeroSlider />
          
          {/* Interactive Services Grid */}
          <ServicesGrid />
          
          {/* Agency Banking Network with Interactive Map */}
          <AgencyNetworkSection />
          
          {/* Community Impact Metrics */}
          <CommunityImpactSection />
          
          {/* Customer Testimonials Carousel */}
          <TestimonialsCarousel />
          
          {/* Trust & Transparency Section */}
          <TrustSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;