import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerStory = ({ story }) => {
  return (
    <div className="glassmorphic rounded-brand-lg p-6 brand-transition brand-hover-scale">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src={story.avatar} 
              alt={story.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center">
            <Icon name="Check" size={10} className="text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-brand-heading font-semibold text-foreground">
            {story.name}
          </h4>
          <p className="text-sm text-muted-foreground">{story.location}</p>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                size={12} 
                className={`${i < story.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      <blockquote className="text-sm text-foreground leading-relaxed mb-4 italic">
        "{story.testimonial}"
      </blockquote>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Icon name="CreditCard" size={14} className="text-primary" />
          <span>{story.service}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={12} />
          <span>{story.date}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerStory;