import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Lock, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Award,
  Shield,
  ArrowRight,
  ShoppingCart,
  Apple,
  Chrome
} from 'lucide-react';
import { Course } from '@/data/coursesData';
import { courseService } from '@/services/courseService';
import { toast } from 'sonner';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import StripePaymentForm from './StripePaymentForm';
import { STRIPE_CONFIG } from '@/config/keys';

// Initialize Stripe
const stripePromise = loadStripe(STRIPE_CONFIG.PUBLISHABLE_KEY);

interface CoursePurchaseProps {
  course: Course;
  onPurchaseSuccess?: () => void;
  onClose?: () => void;
}

const CoursePurchase: React.FC<CoursePurchaseProps> = ({ 
  course, 
  onPurchaseSuccess, 
  onClose 
}) => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'googlepay' | 'applepay'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handlePurchase = async () => {
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    if (!formData.email || !formData.cardholderName || !formData.cardNumber || !formData.expiryDate || !formData.cvv) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Process the purchase
      const sale = await courseService.processPurchase(
        course.id,
        {
          id: 'student-' + Date.now(),
          name: formData.cardholderName,
          email: formData.email,
        },
        {
          amount: course.price,
          currency: 'GBP',
          paymentMethod: paymentMethod === 'card' ? 'credit_card' : 'paypal',
          transactionId: 'txn_' + Date.now(),
        }
      );

      toast.success('Course purchased successfully! You can now access your course.');
      onPurchaseSuccess?.();
    } catch (error) {
      console.error('Purchase error:', error);
      toast.error('Purchase failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const originalPrice = course.originalPrice || course.price;
  const discount = originalPrice > course.price ? originalPrice - course.price : 0;
  const discountPercentage = discount > 0 ? Math.round((discount / originalPrice) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h2>
              <p className="text-gray-600 mt-1">Secure payment powered by Stripe</p>
            </div>
            <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Course Summary */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Course Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.instructor}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="text-gray-900 line-through">£{originalPrice}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Discount:</span>
                        <Badge variant="destructive">-{discountPercentage}%</Badge>
                      </div>
                    )}
                    <div className="flex items-center justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-green-600">£{course.price}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {course.students} students enrolled
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 mr-2" />
                      {course.rating} rating
                    </div>
                    {course.certificate && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-2" />
                        Certificate of completion
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Lifetime access to course content
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {course.lessonsCount} lessons with video content
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Downloadable resources and materials
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Mobile and desktop access
                    </li>
                    {course.certificate && (
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Certificate of completion
                      </li>
                    )}
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      30-day money-back guarantee
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Payment Method Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={paymentMethod === 'card' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setPaymentMethod('card')}
                        className="flex items-center justify-center"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Credit Card
                      </Button>
                      <Button
                        variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setPaymentMethod('paypal')}
                        className="flex items-center justify-center"
                      >
                        PayPal
                      </Button>
                      <Button
                        variant={paymentMethod === 'googlepay' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setPaymentMethod('googlepay')}
                        className="flex items-center justify-center bg-black text-white hover:bg-gray-800"
                      >
                        <Chrome className="w-4 h-4 mr-2" />
                        Google Pay
                      </Button>
                      <Button
                        variant={paymentMethod === 'applepay' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setPaymentMethod('applepay')}
                        className="flex items-center justify-center bg-black text-white hover:bg-gray-800"
                      >
                        <Apple className="w-4 h-4 mr-2" />
                        Apple Pay
                      </Button>
                    </div>
                  </div>

                  {paymentMethod === 'card' && (
                    <Elements stripe={stripePromise}>
                      <StripePaymentForm
                        amount={course.price}
                        currency="GBP"
                        onSuccess={async (paymentResult) => {
                          try {
                            // Process the purchase
                            const sale = await courseService.processPurchase(
                              course.id,
                              {
                                id: 'student-' + Date.now(),
                                name: formData.cardholderName || 'Student',
                                email: formData.email,
                              },
                              {
                                amount: course.price,
                                currency: 'GBP',
                                paymentMethod: 'stripe',
                                transactionId: paymentResult.id,
                              }
                            );

                            toast.success('Course purchased successfully! You can now access your course.');
                            onPurchaseSuccess?.();
                          } catch (error) {
                            console.error('Purchase error:', error);
                            toast.error('Purchase failed. Please try again.');
                          }
                        }}
                        onError={(error) => {
                          toast.error(error);
                        }}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </Elements>
                  )}

                  {paymentMethod === 'googlepay' && (
                    <div className="text-center py-6">
                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                        <Chrome className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Pay</h3>
                        <p className="text-gray-600 mb-4">Click the button below to pay with Google Pay</p>
                        <Button 
                          className="bg-black text-white hover:bg-gray-800 w-full"
                          onClick={() => {
                            // Simulate Google Pay payment
                            toast.info('Google Pay integration would be implemented here');
                          }}
                        >
                          <Chrome className="w-4 h-4 mr-2" />
                          Pay with Google Pay
                        </Button>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'applepay' && (
                    <div className="text-center py-6">
                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                        <Apple className="w-12 h-12 text-gray-900 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple Pay</h3>
                        <p className="text-gray-600 mb-4">Click the button below to pay with Apple Pay</p>
                        <Button 
                          className="bg-black text-white hover:bg-gray-800 w-full"
                          onClick={() => {
                            // Simulate Apple Pay payment
                            toast.info('Apple Pay integration would be implemented here');
                          }}
                        >
                          <Apple className="w-4 h-4 mr-2" />
                          Pay with Apple Pay
                        </Button>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="text-center py-6">
                      <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                        <div className="w-12 h-12 bg-blue-600 rounded mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">PayPal</h3>
                        <p className="text-gray-600 mb-4">Click the button below to pay with PayPal</p>
                        <Button 
                          className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                          onClick={() => {
                            // Simulate PayPal payment
                            toast.info('PayPal integration would be implemented here');
                          }}
                        >
                          Pay with PayPal
                        </Button>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-900">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="text-gray-900 placeholder-gray-500"
                    />
                    <p className="text-xs text-gray-600 mt-1">We'll send your receipt and course access to this email</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="agree-terms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="/terms" className="text-blue-600 hover:underline font-medium">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">Secure Payment</p>
                      <p className="text-gray-600">Your payment information is encrypted and secure</p>
                      <p className="text-gray-500 mt-1">Powered by Stripe - PCI DSS compliant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stripe Integration Notice */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-blue-900">Stripe Integration</p>
                      <p className="text-blue-700">Professional payment processing with fraud protection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Button - Only show for non-card payment methods */}
              {paymentMethod !== 'card' && (
                <Button
                  onClick={handlePurchase}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Complete Purchase - £{course.price}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
              )}

              <p className="text-xs text-gray-500 text-center">
                By completing your purchase, you agree to our terms of service and privacy policy.
                You can cancel anytime within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePurchase; 