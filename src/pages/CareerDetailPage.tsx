import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, DollarSign } from 'lucide-react';

// Full data object from CareerCategoryPage.tsx
const CAREER_CATEGORIES = {
  'leadership-and-management': {
    name: 'Leadership and Management',
    description: 'Lead teams, drive strategy, and manage organizations to success. Careers in this category focus on leadership, organizational development, and executive management.',
    careers: [
      { name: 'Operations Manager', desc: 'Oversee daily operations and ensure business efficiency.', salary: 95000, traits: ['REALISTIC', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Project Director', desc: 'Lead large-scale projects and cross-functional teams.', salary: 120000, traits: ['ENTERPRISING', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'mentorship-career-readiness': {
    name: 'Mentorship & Career Readiness',
    description: 'Prepare for the workforce with mentorship, internships, and career readiness programmes.',
    careers: [
      { name: 'Career Coach', desc: 'Guide individuals in their career development and job search.', salary: 70000, traits: ['SOCIAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Internship Coordinator', desc: 'Connect students with valuable internship opportunities.', salary: 60000, traits: ['SOCIAL', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'specialised-industry-tracks': {
      name: 'Specialised Industry Tracks',
      description: 'Focus on niche industries and develop expertise in specialised fields.',
    careers: [
      { name: 'Aerospace Engineer', desc: 'Design and test aircraft, spacecraft, and satellites.', salary: 115000, traits: ['INVESTIGATIVE', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Biotech Researcher', desc: 'Advance science in biotechnology and pharmaceuticals.', salary: 98000, traits: ['INVESTIGATIVE', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'real-estate-and-estate-management': {
    name: 'Real Estate and Estate Management',
    description: 'Manage, buy, sell, and develop properties and estates.',
    careers: [
      { name: 'Property Manager', desc: 'Oversee residential and commercial properties.', salary: 75000, traits: ['ENTERPRISING', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Real Estate Agent', desc: 'Help clients buy, sell, and rent properties.', salary: 65000, traits: ['ENTERPRISING', 'SOCIAL'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'public-safety-and-emergency-services': {
    name: 'Public Safety and Emergency Services',
    description: 'Protect the public and respond to emergencies and disasters.',
    careers: [
      { name: 'Firefighter', desc: 'Respond to fires and emergencies to save lives.', salary: 60000, traits: ['REALISTIC', 'SOCIAL'], img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Paramedic', desc: 'Provide emergency medical care and transport.', salary: 58000, traits: ['SOCIAL', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'social-care-and-community-support': {
    name: 'Social Care and Community Support',
    description: 'Support individuals and communities through social services.',
    careers: [
      { name: 'Social Worker', desc: 'Help people cope with challenges in their lives.', salary: 55000, traits: ['SOCIAL', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Community Outreach Coordinator', desc: 'Connect communities with resources and support.', salary: 52000, traits: ['SOCIAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'health-science': {
    name: 'Health Science',
    description: 'Careers in healthcare, medicine, and wellness.',
    careers: [
      { name: 'Nurse', desc: 'Provide care and support to patients in various settings.', salary: 70000, traits: ['SOCIAL', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Medical Laboratory Scientist', desc: 'Analyze samples to help diagnose diseases.', salary: 65000, traits: ['INVESTIGATIVE', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'finance': {
    name: 'Finance',
    description: 'Manage money, investments, and financial planning.',
    careers: [
      { name: 'Financial Analyst', desc: 'Analyze financial data to guide business decisions.', salary: 80000, traits: ['CONVENTIONAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Accountant', desc: 'Prepare and examine financial records.', salary: 70000, traits: ['CONVENTIONAL', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'information-technology': {
    name: 'Information Technology',
    description: 'Develop, maintain, and secure computer systems and networks.',
    careers: [
      { name: 'Software Developer', desc: 'Design and build software applications.', salary: 95000, traits: ['INVESTIGATIVE', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Network Administrator', desc: 'Manage and secure computer networks.', salary: 85000, traits: ['CONVENTIONAL', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'education-training': {
    name: 'Education & Training',
    description: 'Teach, train, and develop educational programmes.',
    careers: [
      { name: 'Teacher', desc: 'Educate students in schools or colleges.', salary: 60000, traits: ['SOCIAL', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Corporate Trainer', desc: 'Develop and deliver training for employees.', salary: 65000, traits: ['SOCIAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'business-management-administration': {
    name: 'Business Management & Administration',
    description: 'Oversee business operations and support organizational goals.',
    careers: [
      { name: 'Business Analyst', desc: 'Analyze business processes and recommend improvements.', salary: 85000, traits: ['CONVENTIONAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Office Manager', desc: 'Coordinate administrative functions in an office.', salary: 60000, traits: ['CONVENTIONAL', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'marketing-sales-service': {
    name: 'Marketing, Sales, & Service',
    description: 'Promote products, manage sales, and deliver customer service.',
    careers: [
      { name: 'Marketing Manager', desc: 'Plan and execute marketing campaigns.', salary: 90000, traits: ['ENTERPRISING', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Sales Representative', desc: 'Sell products and services to customers.', salary: 65000, traits: ['ENTERPRISING', 'SOCIAL'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'agriculture-food-natural-resources': {
    name: 'Agriculture, Food, & Natural Resources',
    description: 'Work with food production, farming, and environmental resources.',
    careers: [
      { name: 'Agricultural Scientist', desc: 'Research ways to improve crop yields and sustainability.', salary: 75000, traits: ['INVESTIGATIVE', 'REALISTIC'], img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Environmental Consultant', desc: 'Advise on environmental best practices.', salary: 80000, traits: ['INVESTIGATIVE', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e1c?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
  'hospitality-tourism': {
    name: 'Hospitality & Tourism',
    description: 'Deliver guest experiences and manage travel and tourism services.',
    careers: [
      { name: 'Hotel Manager', desc: 'Oversee hotel operations and guest services.', salary: 70000, traits: ['ENTERPRISING', 'CONVENTIONAL'], img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300&q=80' },
      { name: 'Travel Consultant', desc: 'Plan and book travel experiences for clients.', salary: 60000, traits: ['SOCIAL', 'ENTERPRISING'], img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=300&q=80' },
    ],
  },
};

const CareerDetailPage = () => {
  const { categorySlug, careerSlug } = useParams();
  const category = CAREER_CATEGORIES[categorySlug] || { name: '', careers: [] };
  const career = category.careers.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === careerSlug);
  if (!career) return <div className="max-w-2xl mx-auto py-20 text-center text-xl">Career not found.</div>;
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link to={`/careers/${categorySlug}`} className="flex items-center text-blue-600 mb-4 hover:underline"><ArrowLeft className="w-4 h-4 mr-1" /> Back to {category.name}</Link>
      <Card className="shadow-lg">
        <img src={career.img} alt={career.name} className="w-full h-56 object-cover rounded-t" />
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-2">{career.name}</h1>
          <p className="text-gray-700 mb-4">{career.desc}</p>
          <div className="flex items-center mb-3">
            <DollarSign className="w-5 h-5 text-green-500 mr-1" />
            <span className="font-semibold text-green-700 text-lg">${career.salary.toLocaleString()}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {career.traits.map((trait, i) => (
              <Badge key={i} variant="secondary" className="text-xs">{trait}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerDetailPage; 