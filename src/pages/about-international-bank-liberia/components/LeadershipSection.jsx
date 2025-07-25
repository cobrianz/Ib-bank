import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Dr. Sarah M. Johnson",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "With over 20 years of international banking experience, Dr. Johnson leads IB Liberia's strategic vision for financial inclusion and digital innovation across West Africa.",
      credentials: "MBA Finance, Harvard Business School",
      linkedin: "#"
    },
    {
      name: "Marcus T. Williams",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Marcus brings extensive operational expertise from leading African banks, focusing on sustainable growth and customer-centric service delivery.",
      credentials: "MSc Banking & Finance, London School of Economics",
      linkedin: "#"
    },
    {
      name: "Grace K. Mensah",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Grace spearheads our digital transformation initiatives, ensuring IB Liberia remains at the forefront of banking technology innovation.",
      credentials: "PhD Computer Science, MIT",
      linkedin: "#"
    },
    {
      name: "James R. Cooper",
      position: "Chief Risk Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "James oversees comprehensive risk management strategies, ensuring regulatory compliance and sustainable banking practices.",
      credentials: "CFA, Risk Management Certification",
      linkedin: "#"
    },
    {
      name: "Fatima A. Kamara",
      position: "Head of Community Banking",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Fatima leads our community outreach and financial inclusion initiatives, connecting banking services to underserved populations.",
      credentials: "MA Development Economics, University of Ghana",
      linkedin: "#"
    },
    {
      name: "Robert L. Davies",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      bio: "Robert ensures financial stability and strategic planning, with deep expertise in African banking regulations and international finance.",
      credentials: "ACCA, MBA International Finance",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Leadership Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced professionals committed to advancing Liberia's financial sector through innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="glassmorphic rounded-xl p-6 h-full brand-transition group-hover:shadow-brand-lg group-hover:scale-105">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-ib-green/20">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-gradient-to-br from-ib-green to-ib-accent rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={14} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-heading font-semibold text-ib-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-ib-accent font-medium mb-4">
                    {leader.position}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {leader.bio}
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-xs text-muted-foreground mb-3">
                      {leader.credentials}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <a
                        href={leader.linkedin}
                        className="w-8 h-8 bg-muted rounded-full flex items-center justify-center brand-transition hover:bg-ib-green hover:text-white"
                        aria-label={`${leader.name} LinkedIn profile`}
                      >
                        <Icon name="Linkedin" size={16} />
                      </a>
                      <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center brand-transition hover:bg-ib-accent hover:text-white">
                        <Icon name="Mail" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Message */}
        <div className="mt-16 glassmorphic rounded-2xl p-8 bg-gradient-to-br from-ib-green/5 to-ib-accent/5">
          <div className="text-center">
            <Icon name="Quote" size={32} className="text-ib-green mx-auto mb-6" />
            <blockquote className="text-xl font-medium text-ib-dark mb-6 max-w-4xl mx-auto leading-relaxed">
              "Our leadership team combines international expertise with deep local knowledge to drive Liberia's banking sector forward. We are committed to building a financial institution that serves as a catalyst for economic growth and prosperity."
            </blockquote>
            <cite className="text-ib-accent font-medium">
              - IB Liberia Leadership Team
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;