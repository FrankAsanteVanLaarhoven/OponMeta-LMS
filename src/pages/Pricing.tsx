import React from 'react';

const plans = [
  {
    name: 'Starter Tier',
    price: 'Free',
    features: [
      'Access to selected digital courses',
      'Community forum participation',
      'Monthly newsletter and event invites',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional Tier',
    price: '$',
    features: [
      'Full access to all learning modules',
      'Join live and recorded workshops',
      'Mentorship programme access',
      'Course completion certificates',
    ],
    cta: 'Upgrade',
  },
  {
    name: 'Premium Tier',
    price: '$',
    features: [
      '1-on-1 mentorship sessions',
      'Personalised learning path',
      'Career coaching and resume reviews',
      'Access to exclusive partner opportunities',
    ],
    cta: 'Go Premium',
  },
  {
    name: 'Enterprise Tier',
    price: 'Custom',
    features: [
      'Team onboarding and admin dashboard',
      'Progress tracking and analytics',
      'Custom workshops and branded content',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Flexible Plans for Every Learner—From Curious Beginners to Career Climbers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center border border-gray-200">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{plan.name}</h2>
            <div className="text-3xl font-extrabold mb-4 text-gray-900">{plan.price}</div>
            <ul className="mb-6 space-y-2 text-gray-700 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center"><span className="mr-2 text-green-500">•</span>{f}</li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">{plan.cta}</button>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-700 font-medium mt-6">
        Annual billing discounts available. <span className="font-bold text-blue-700">Students and early-career professionals get 20% off.</span>
      </div>
    </div>
  );
} 