import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Download, 
  Play, 
  Mail, 
  Globe,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';
import { toast } from 'sonner';

interface PaymentDetails {
  transactionId: string;
  amount: number;
  currency: string;
  courseTitle: string;
  customerEmail: string;
  gateway: string;
}

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract payment details from URL params or localStorage
    const transactionId = searchParams.get('tx_ref') || searchParams.get('reference') || 'OPM_' + Date.now();
    const amount = parseFloat(searchParams.get('amount') || '0');
    const currency = searchParams.get('currency') || 'GBP';
    const courseTitle = searchParams.get('course_title') || 'Your Course';
    const customerEmail = searchParams.get('email') || 'student@example.com';
    const gateway = searchParams.get('gateway') || 'stripe';

    setPaymentDetails({
      transactionId,
      amount,
      currency,
      courseTitle,
      customerEmail,
      gateway,
    });

    setLoading(false);
    toast.success('Payment completed successfully! Welcome to OponMeta!');
  }, [searchParams]);

  const formatCurrency = (amount: number, currency: string) => {
    const symbols: Record<string, string> = {
      GBP: '£',
      USD: '$',
      EUR: '€',
      NGN: '₦',
      GHS: '₵',
      KES: 'KSh',
      ZAR: 'R',
      INR: '₹',
      BRL: 'R$',
      CAD: 'C$',
      AUD: 'A$',
    };
    
    return `${symbols[currency] || currency}${amount.toFixed(2)}`;
  };

  const getGatewayName = (gateway: string) => {
    const names: Record<string, string> = {
      stripe: 'Stripe',
      paystack: 'Paystack',
      flutterwave: 'Flutterwave',
    };
    return names[gateway] || gateway;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to OponMeta! Your course is now ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Access Card */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-5 h-5 text-green-600" />
                  <span>Course Access Granted</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {paymentDetails?.courseTitle.charAt(0) || 'C'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {paymentDetails?.courseTitle}
                    </h3>
                    <p className="text-sm text-gray-600">Lifetime access • 25 lessons • Certificate included</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                    <Link to="/dashboard">
                      <Play className="w-4 h-4 mr-2" />
                      Start Learning
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resources
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Check Your Email</h4>
                      <p className="text-sm text-gray-600">
                        We've sent course access details to {paymentDetails?.customerEmail}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Globe className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Join Community</h4>
                      <p className="text-sm text-gray-600">
                        Connect with other learners in our global community
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <Award className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">Earn Certificate</h4>
                      <p className="text-sm text-gray-600">
                        Complete the course to receive your certificate
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">30-Day Guarantee</h4>
                      <p className="text-sm text-gray-600">
                        Not satisfied? Get a full refund within 30 days
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-semibold">
                    {paymentDetails && formatCurrency(paymentDetails.amount, paymentDetails.currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono text-sm text-gray-500">
                    {paymentDetails?.transactionId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <Badge variant="outline">
                    {paymentDetails && getGatewayName(paymentDetails.gateway)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard">
                    <Play className="w-4 h-4 mr-2" />
                    Go to Dashboard
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/courses">
                    <Globe className="w-4 h-4 mr-2" />
                    Browse More Courses
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/support">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Global Learning Stats */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Join Our Global Community</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Active Learners:</span>
                    <span className="font-bold">50K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Countries:</span>
                    <span className="font-bold">193</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses Available:</span>
                    <span className="font-bold">5,500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to continue your learning journey?
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/dashboard">
              Start Learning Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 