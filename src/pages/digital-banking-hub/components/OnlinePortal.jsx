import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OnlinePortal = () => {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication
    setTimeout(() => {
      if (loginForm.username === 'demo@ibliberia.com' && loginForm.password === 'Demo123!') {
        alert('Login successful! Redirecting to dashboard...');
      } else {
        alert('Invalid credentials. Use: demo@ibliberia.com / Demo123!');
      }
      setIsLoading(false);
    }, 2000);
  };

  const quickActions = [
    {
      id: 1,
      icon: "CreditCard",
      title: "Check Balance",
      description: "View account balances instantly"
    },
    {
      id: 2,
      icon: "Send",
      title: "Transfer Money",
      description: "Send money locally & internationally"
    },
    {
      id: 3,
      icon: "Receipt",
      title: "Pay Bills",
      description: "Utilities, loans, and services"
    },
    {
      id: 4,
      icon: "History",
      title: "Transaction History",
      description: "View detailed account activity"
    }
  ];

  return (
    <div className="bg-card rounded-brand-lg glassmorphic overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-brand flex items-center justify-center">
            <Icon name="Monitor" size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-brand-heading text-xl font-bold">
              Online Banking Portal
            </h2>
            <p className="text-white/80 text-sm">
              Secure access to your accounts 24/7
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <div
              key={action.id}
              className="bg-white/10 rounded-brand p-3 text-center hover:bg-white/20 brand-transition cursor-pointer"
            >
              <Icon name={action.icon} size={20} className="text-white mx-auto mb-2" />
              <p className="text-xs font-medium text-white mb-1">{action.title}</p>
              <p className="text-xs text-white/70">{action.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              label="Username or Email"
              type="email"
              name="username"
              value={loginForm.username}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              className="mb-4"
            />
          </div>

          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginForm.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground brand-transition"
            >
              <Icon name={showPassword ? "EyeOff" : "Eye"} size={16} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginForm.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-primary hover:text-accent brand-transition"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isLoading}
            iconName="LogIn"
            iconPosition="left"
            className="conversion-cta"
          >
            {isLoading ? 'Signing In...' : 'Sign In to Online Banking'}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Don't have online banking access?
            </p>
            <Button
              variant="outline"
              fullWidth
              iconName="UserPlus"
              iconPosition="left"
            >
              Register for Online Banking
            </Button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/30 rounded-brand">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={14} className="text-primary" />
            <span className="text-xs font-medium text-foreground">Demo Credentials</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Email: demo@ibliberia.com | Password: Demo123!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlinePortal;