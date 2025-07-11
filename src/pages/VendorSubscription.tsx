import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, TrendingUp, Users, BookOpen, BarChart3, Zap, Crown, Shield } from 'lucide-react';
import { VENDOR_PLANS, getVendorPlanFeatures } from '@/data/vendorPlans';
import { VendorPlan } from '@/types/vendor';

const VendorSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState<VendorPlan>('professional');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleUpgrade = (plan: VendorPlan) => {
    // TODO: Integrate with Stripe for vendor subscriptions
    console.log(`Upgrading to ${plan} plan`);
  };

  const getYearlyPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount for yearly
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vendor Subscription Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to grow your educational business. 
            Scale from a single course to a complete learning empire.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <Button
              variant={billingCycle === 'monthly' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('monthly')}
              className="rounded-md"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === 'yearly' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setBillingCycle('yearly')}
              className="rounded-md"
            >
              Yearly
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </Button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {VENDOR_PLANS.map((plan) => {
            const planFeatures = getVendorPlanFeatures(plan.plan);
            const isPopular = plan.plan === 'professional';
            const price = billingCycle === 'yearly' ? getYearlyPrice(plan.price) : plan.price;
            const originalPrice = billingCycle === 'yearly' ? plan.price * 12 : plan.price;

            return (
              <Card 
                key={plan.plan}
                className={`relative ${isPopular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border border-gray-200'}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    Perfect for {plan.plan === 'free' ? 'getting started' : 
                    plan.plan === 'professional' ? 'growing businesses' : 'enterprise solutions'}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">${price}</span>
                      {billingCycle === 'yearly' && (
                        <span className="text-lg text-gray-500 line-through ml-2">${originalPrice}</span>
                      )}
                      <span className="text-gray-600 ml-1">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 mt-1">Save ${originalPrice - price}/year</p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {planFeatures?.featureList.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limits */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Plan Limits</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
                        <span>Storage: {plan.limits.storageGB}GB</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        <span>Bandwidth: {plan.limits.bandwidthGB}GB</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>API: {plan.limits.apiCallsPerMonth}/month</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-purple-500 mr-2" />
                        <span>Students: {plan.limits.studentsPerCourse === -1 ? 'Unlimited' : plan.limits.studentsPerCourse}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handleUpgrade(plan.plan)}
                    className={`w-full ${
                      isPopular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : plan.plan === 'free'
                        ? 'bg-gray-600 hover:bg-gray-700'
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                    disabled={plan.plan === 'free'}
                  >
                    {plan.plan === 'free' ? 'Current Plan' : 
                     plan.plan === 'professional' ? 'Start Professional' : 'Go Enterprise'}
                  </Button>

                  {plan.plan === 'free' && (
                    <p className="text-xs text-gray-500 text-center">
                      You're currently on the free plan
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Detailed Feature Comparison</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Maximum Courses</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">3</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Unlimited</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Advanced Analytics</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Priority Support</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Custom Branding</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">API Access</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">White-label Solutions</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Revenue Sharing</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Dedicated Support</td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-red-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I switch plans anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens to my courses if I downgrade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your existing courses remain accessible. You'll need to stay within the new plan's limits for future uploads.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee. If you're not satisfied, contact our support team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a setup fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No setup fees! All plans include instant access to all features within your tier.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Educational Business?</h2>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of educators who are already growing their revenue with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => handleUpgrade('professional')}>
                  Start Professional Plan
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorSubscription; 