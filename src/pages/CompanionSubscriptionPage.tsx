import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Mic, 
  Brain, 
  Globe, 
  Clock, 
  Shield,
  ArrowLeft,
  Crown,
  Sparkles
} from 'lucide-react';

const CompanionSubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      localStorage.setItem('companionSubscribed', 'true');
      window.location.href = '/companion';
    }, 2000);
  };

  const handleCancel = () => {
    window.location.href = '/';
  };

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: 9.99,
      period: 'month',
      popular: false,
      savings: null
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: 99.99,
      period: 'year',
      popular: true,
      savings: 'Save 17%'
    }
  ];

  const features = [
    { icon: <Mic className="w-5 h-5" />, title: 'Voice-Driven Learning', description: 'Real-time voice interactions with AI companions' },
    { icon: <Brain className="w-5 h-5" />, title: 'Personalized Paths', description: 'AI adapts to your learning style and pace' },
    { icon: <Globe className="w-5 h-5" />, title: 'Multi-language Support', description: 'Learn in 10+ languages with native speakers' },
    { icon: <Clock className="w-5 h-5" />, title: 'Progress Tracking', description: 'Detailed analytics and session history' },
    { icon: <Shield className="w-5 h-5" />, title: 'Unlimited Sessions', description: 'No limits on learning time or sessions' },
    { icon: <Zap className="w-5 h-5" />, title: 'Advanced AI Features', description: 'Latest AI models for optimal learning' }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={handleCancel}
            className="absolute top-8 left-8 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-8 h-8 text-cyan-300" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Unlock Your AI Learning Companion
            </h1>
          </div>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto">
            Experience personalized, voice-driven learning with AI companions that adapt to your pace and style. 
            Join thousands of learners worldwide.
          </p>
        </div>

        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-start">
          {/* Features Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-300" />
                What You'll Get
              </h2>
            </div>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-[#16203a] border-[#11204a] hover:bg-[#22305a] transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-cyan-300 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-cyan-200">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left pt-6">
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-cyan-200">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-cyan-300" />
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
            </div>

            {/* Plan Selection */}
            <div className="grid gap-4">
              {plans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'bg-[#22305a] text-white border-2 border-cyan-300' 
                      : 'bg-[#16203a] border-[#11204a] hover:bg-[#22305a]'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        {plan.popular && (
                          <span className="bg-[#11204a] text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">${plan.price}</div>
                        <div className="text-sm opacity-80">per {plan.period}</div>
                        {plan.savings && (
                          <div className="text-sm font-medium text-cyan-300 mt-1">
                            {plan.savings}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {selectedPlan === plan.id && (
                      <div className="flex items-center justify-center text-cyan-300">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Selected</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Subscribe Button */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={handleSubscribe}
                disabled={isLoading}
                className="w-full bg-[#11204a] hover:bg-[#16203a] text-white border-2 border-[#0a1834] font-bold text-lg py-4 h-auto"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Start Learning with AI Companion
                  </div>
                )}
              </Button>
              
              <p className="text-center text-sm text-cyan-200">
                Cancel anytime. No commitment required.
              </p>
            </div>

            {/* Testimonials */}
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-cyan-200">4.9/5 from 2,847 reviews</span>
              </div>
              <p className="text-sm text-cyan-100 italic">
                "The AI companion has transformed how I learn. It's like having a personal tutor available 24/7!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanionSubscriptionPage; 