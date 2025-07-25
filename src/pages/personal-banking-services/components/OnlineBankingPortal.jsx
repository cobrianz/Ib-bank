import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const OnlineBankingPortal = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleInputChange = (field, value) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    // Mock login process
    setTimeout(() => {
      setIsLoading(false);
      if (loginData.username === 'demo@ibliberia.com' && loginData.password === 'Demo123!') {
        alert('Login successful! Redirecting to dashboard...');
      } else {
        alert('Invalid credentials. Use demo@ibliberia.com / Demo123!');
      }
    }, 2000);
  };

  const portalFeatures = [
    "View account balances & statements",
    "Transfer funds between accounts", 
    "Pay bills & schedule payments",
    "Apply for loans & credit cards",
    "Download tax documents",
    "Update personal information"
  ];

  const securityFeatures = [
    { icon: "Shield", title: "Multi-Factor Authentication", description: "Extra layer of security" },
    { icon: "Lock", title: "256-bit Encryption", description: "Bank-grade security" },
    { icon: "Eye", title: "Session Monitoring", description: "Real-time fraud detection" },
    { icon: "Clock", title: "Auto Logout", description: "Automatic session timeout" }
  ];

  return (
    <div className="glassmorphic rounded-brand-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Login Form */}
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-brand flex items-center justify-center">
              <Icon name="Monitor" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-brand-heading text-xl font-semibold text-foreground">
                Online Banking Portal
              </h3>
              <p className="text-sm text-muted-foreground">
                Secure access to your accounts 24/7
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <Input
              label="Username or Email"
              type="email"
              placeholder="Enter your username"
              value={loginData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </div>

          <div className="space-y-3 mb-6">
            <Button 
              variant="default" 
              fullWidth
              loading={isLoading}
              onClick={handleLogin}
              iconName="LogIn"
              iconPosition="left"
              iconSize={16}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => setShowDemo(!showDemo)}
                iconName="Eye"
                iconPosition="left"
                iconSize={16}
              >
                Demo Credentials
              </Button>
              <Button 
                variant="ghost" 
                fullWidth
                iconName="HelpCircle"
                iconPosition="left"
                iconSize={16}
              >
                Forgot Password?
              </Button>
            </div>
          </div>

          {showDemo && (
            <div className="bg-muted/50 rounded-brand p-4 mb-6">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-foreground mb-2">Demo Credentials:</div>
                  <div className="space-y-1 text-muted-foreground">
                    <div><strong>Username:</strong> demo@ibliberia.com</div>
                    <div><strong>Password:</strong> Demo123!</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Don't have an account?
            </p>
            <Button 
              variant="link" 
              iconName="UserPlus"
              iconPosition="left"
              iconSize={16}
            >
              Open Account Online
            </Button>
          </div>
        </div>

        {/* Features & Security */}
        <div className="bg-muted/30 p-8">
          <h4 className="text-brand-heading text-lg font-semibold mb-4 text-foreground">
            Portal Features
          </h4>
          
          <div className="space-y-3 mb-8">
            {portalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <h4 className="text-brand-heading text-lg font-semibold mb-4 text-foreground">
            Security Features
          </h4>
          
          <div className="space-y-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-brand flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} size={16} className="text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-background/50 rounded-brand">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Available 24/7</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Access your accounts anytime, anywhere. Customer support available 
              Monday-Friday 8AM-6PM GMT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineBankingPortal;