import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CustomerSupport = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [chatMessage, setChatMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const supportChannels = [
    {
      id: 'chat',
      title: 'Live Chat',
      icon: 'MessageCircle',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      responseTime: '< 2 minutes'
    },
    {
      id: 'video',
      title: 'Video Call',
      icon: 'Video',
      description: 'Face-to-face assistance with banking specialists',
      availability: 'Mon-Fri 8AM-6PM',
      responseTime: '< 5 minutes'
    },
    {
      id: 'phone',
      title: 'Phone Support',
      icon: 'Phone',
      description: 'Speak directly with our customer service team',
      availability: 'Available 24/7',
      responseTime: 'Immediate'
    },
    {
      id: 'faq',
      title: 'FAQ Center',
      icon: 'HelpCircle',
      description: 'Find answers to common questions',
      availability: 'Always Available',
      responseTime: 'Self-service'
    }
  ];

  const faqCategories = [
    {
      id: 1,
      title: "Account Management",
      questions: [
        {
          id: 1,
          question: "How do I reset my online banking password?",
          answer: "Click 'Forgot Password' on the login page, enter your email, and follow the reset instructions sent to your email."
        },
        {
          id: 2,
          question: "How can I update my contact information?",
          answer: "Log into your online banking account, go to Profile Settings, and update your contact details. Changes are effective immediately."
        },
        {
          id: 3,
          question: "What should I do if my account is locked?",
          answer: "Contact our support team immediately via live chat or phone. We'll verify your identity and unlock your account within minutes."
        }
      ]
    },
    {
      id: 2,
      title: "Digital Banking",
      questions: [
        {
          id: 4,
          question: "Is mobile banking secure?",
          answer: "Yes, we use 256-bit SSL encryption, multi-factor authentication, and biometric security to protect your transactions."
        },
        {
          id: 5,
          question: "Can I use mobile banking offline?",
          answer: "Our app can queue transactions when offline and process them when you reconnect to the internet."
        },
        {
          id: 6,
          question: "How do I set up mobile notifications?",
          answer: "In the mobile app, go to Settings > Notifications and choose which alerts you want to receive for your account activity."
        }
      ]
    },
    {
      id: 3,
      title: "Transactions",
      questions: [
        {
          id: 7,
          question: "What are the transfer limits?",
          answer: "Daily transfer limits vary by account type. Standard accounts: LRD 50,000, Premium accounts: LRD 200,000."
        },
        {
          id: 8,
          question: "How long do international transfers take?",
          answer: "International transfers typically take 1-3 business days depending on the destination country and receiving bank."
        },
        {
          id: 9,
          question: "Are there fees for bill payments?",
          answer: "Most utility bill payments are free. Third-party service fees range from LRD 10-50 depending on the service provider."
        }
      ]
    }
  ];

  const chatMessages = [
    {
      id: 1,
      sender: 'support',
      message: 'Hello! Welcome to IB Liberia Digital support. How can I help you today?',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      sender: 'user',
      message: 'Hi, I need help setting up international transfers.',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      sender: 'support',
      message: 'I\'d be happy to help you with international transfers. First, let me verify that your account has international transfer privileges enabled.',
      timestamp: new Date(Date.now() - 180000)
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChatMessage('');
    }, 2000);
  };

  const renderChatTab = () => (
    <div className="h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20 rounded-t-brand">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-brand text-sm ${
                msg.sender === 'user' ?'bg-primary text-white' :'bg-white text-foreground border border-border/50'
              }`}
            >
              {msg.message}
              <div className={`text-xs mt-1 ${
                msg.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-foreground border border-border/50 px-4 py-2 rounded-brand text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border/50">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            variant="default"
            iconName="Send"
            className="conversion-cta"
          />
        </div>
      </form>
    </div>
  );

  const renderFAQTab = () => (
    <div className="space-y-6">
      {faqCategories.map((category) => (
        <div key={category.id}>
          <h4 className="text-brand-heading text-lg font-semibold text-foreground mb-4">
            {category.title}
          </h4>
          <div className="space-y-3">
            {category.questions.map((faq) => (
              <details key={faq.id} className="group">
                <summary className="flex justify-between items-center w-full px-4 py-3 text-left bg-white border border-border/50 rounded-brand cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <svg 
                    className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 py-3 text-muted-foreground bg-muted/20 border-x border-b border-border/50 rounded-b-brand">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderVideoTab = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">Schedule Video Call</h4>
      <p className="text-muted-foreground mb-6">Connect with our banking specialists face-to-face</p>
      <Button variant="default" className="conversion-cta">
        Start Video Call
      </Button>
    </div>
  );

  const renderPhoneTab = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">Call Support</h4>
      <p className="text-muted-foreground mb-4">Available 24/7 for immediate assistance</p>
      <div className="space-y-2 mb-6">
        <p className="text-foreground font-semibold text-xl">+231-77-000-0000</p>
        <p className="text-sm text-muted-foreground">Toll-free within Liberia</p>
      </div>
      <Button variant="outline">
        Call Now
      </Button>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Customer Support Center
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get help when you need it through multiple convenient channels. Our dedicated support team is here to assist you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Support Channel Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {supportChannels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveTab(channel.id)}
                className={`p-4 rounded-brand border transition-all ${
                  activeTab === channel.id
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-border/50 hover:border-border hover:bg-muted/20'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    activeTab === channel.id ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {channel.icon === 'MessageCircle' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      )}
                      {channel.icon === 'Video' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      )}
                      {channel.icon === 'Phone' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      )}
                      {channel.icon === 'HelpCircle' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{channel.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{channel.responseTime}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    activeTab === channel.id
                      ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
                  }`}>
                    {channel.availability}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-brand border border-border/50 shadow-sm">
            {activeTab === 'chat' && renderChatTab()}
            {activeTab === 'video' && renderVideoTab()}
            {activeTab === 'phone' && renderPhoneTab()}
            {activeTab === 'faq' && renderFAQTab()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;