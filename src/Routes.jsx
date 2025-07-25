import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import PersonalBankingServices from "pages/personal-banking-services";
import AgencyBankingNetwork from "pages/agency-banking-network";
import BusinessSolutionsCenter from "pages/business-solutions-center";
import DigitalBankingHub from "pages/digital-banking-hub";
import AboutInternationalBankLiberia from "pages/about-international-bank-liberia";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/personal-banking-services" element={<PersonalBankingServices />} />
        <Route path="/agency-banking-network" element={<AgencyBankingNetwork />} />
        <Route path="/business-solutions-center" element={<BusinessSolutionsCenter />} />
        <Route path="/digital-banking-hub" element={<DigitalBankingHub />} />
        <Route path="/about-international-bank-liberia" element={<AboutInternationalBankLiberia />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;