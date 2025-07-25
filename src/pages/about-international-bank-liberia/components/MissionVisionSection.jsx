import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVisionSection = () => {
  const values = [
    {
      icon: "Heart",
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings."
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "We embrace technology and creative solutions to enhance banking experiences."
    },
    {
      icon: "Users",
      title: "Community",
      description: "We are committed to supporting Liberia\'s economic development and financial inclusion."
    },
    {
      icon: "Award",
      title: "Excellence",
      description: "We strive for superior service quality and continuous improvement in everything we do."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="glassmorphic rounded-2xl p-8 bg-white/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center">
                <Icon name="Target" size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-ib-dark">Our Mission</h2>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              To provide innovative, accessible, and reliable financial services that empower individuals, businesses, and communities across Liberia to achieve their financial goals and contribute to sustainable economic development.
            </p>
          </div>

          {/* Vision */}
          <div className="glassmorphic rounded-2xl p-8 bg-white/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-ib-accent to-ib-dark rounded-lg flex items-center justify-center">
                <Icon name="Eye" size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-ib-dark">Our Vision</h2>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              To be Liberia's leading digital-first bank, recognized for excellence in customer service, financial innovation, and positive community impact while bridging traditional banking with modern technology.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-ib-dark mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide our decisions and shape our culture as we serve Liberia's banking needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="glassmorphic rounded-xl p-6 h-full brand-transition group-hover:shadow-brand-lg group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-ib-green to-ib-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name={value.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-ib-dark mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;