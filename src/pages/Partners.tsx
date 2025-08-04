import React, { useState } from 'react';
import { Building, Users, Lightbulb, Check, ChevronDown, Mail, ExternalLink, Calendar, FileText, Briefcase, Target } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: 'TechCorp Industries',
    category: 'Technology',
    type: 'Strategic',
    description: 'Leading technology company specializing in AI and machine learning solutions.',
    collaborationAreas: ['AI Research', 'Internship Programs', 'Joint Certifications'],
    contact: 'Sarah Johnson',
    email: 'partnerships@techcorp.com',
    website: 'https://techcorp.com'
  },
  {
    id: 2,
    name: 'InnovateStart',
    category: 'Startup',
    type: 'Innovation',
    description: 'Fast-growing startup focused on educational technology and digital learning platforms.',
    collaborationAreas: ['EdTech Development', 'Student Projects', 'Innovation Labs'],
    contact: 'Mike Chen',
    email: 'hello@innovatestart.com',
    website: 'https://innovatestart.com'
  },
  {
    id: 3,
    name: 'Global University',
    category: 'Education',
    type: 'Academic',
    description: 'Prestigious university with strong programs in computer science and business.',
    collaborationAreas: ['Credit Transfer', 'Research Collaboration', 'Faculty Exchange'],
    contact: 'Dr. Emily Rodriguez',
    email: 'partnerships@globaluniversity.edu',
    website: 'https://globaluniversity.edu'
  }
];

const partnershipTypes = [
  'Strategic Partnership',
  'Innovation Collaboration',
  'Academic Partnership',
  'Industry Partnership',
  'Research Collaboration',
  'Internship Program',
  'Certification Program',
  'Joint Venture'
];

const categories = [
  'Technology',
  'Education',
  'Healthcare',
  'Finance',
  'Startup',
  'Non-Profit',
  'Government'
];

const activeProjects = [
  { name: 'AI Ethics Research', status: 'Active', color: 'bg-green-500' },
  { name: 'EdTech Innovation Lab', status: 'Planning', color: 'bg-yellow-500' },
  { name: 'Student Mentorship Program', status: 'Active', color: 'bg-green-500' }
];

const upcomingEvents = [
  { name: 'Partner Summit 2025', date: 'March 15-17, 2025' },
  { name: 'Innovation Workshop', date: 'February 28, 2025' },
  { name: 'Research Symposium', date: 'April 5, 2025' }
];

const partnerResources = [
  { title: 'Partnership Guidelines', description: 'Learn about our partnership process', icon: FileText },
  { title: 'Collaboration Toolkit', description: 'Resources for successful partnerships', icon: Briefcase },
  { title: 'Partner Portal', description: 'Access your partnership dashboard', icon: Target }
];

const Partners = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Partnership Types');
  const [proposalForm, setProposalForm] = useState({
    name: '',
    organization: '',
    email: '',
    collaborationType: 'Strategic Partnership',
    details: ''
  });

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle proposal submission
    console.log('Proposal submitted:', proposalForm);
    setShowProposalModal(false);
    setProposalForm({
      name: '',
      organization: '',
      email: '',
      collaborationType: 'Strategic Partnership',
      details: ''
    });
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 border border-[#e5e7eb] dark:border-[#22305a]">
          <Building className="h-8 w-8 text-[#0a1834] dark:text-white mb-4" />
          <h3 className="text-lg font-bold mb-3 text-[#0a1834] dark:text-white">Industry Collaborations</h3>
          <p className="text-gray-600 dark:text-gray-300">Partner with us to shape the future of work and learning through joint programs and research.</p>
        </div>
        <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 border border-[#e5e7eb] dark:border-[#22305a]">
          <Users className="h-8 w-8 text-[#0a1834] dark:text-white mb-4" />
          <h3 className="text-lg font-bold mb-3 text-[#0a1834] dark:text-white">Internship Pipelines</h3>
          <p className="text-gray-600 dark:text-gray-300">Connect with top talent through our internship and job placement programs.</p>
        </div>
        <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 border border-[#e5e7eb] dark:border-[#22305a]">
          <Lightbulb className="h-8 w-8 text-[#0a1834] dark:text-white mb-4" />
          <h3 className="text-lg font-bold mb-3 text-[#0a1834] dark:text-white">Innovation Labs</h3>
          <p className="text-gray-600 dark:text-gray-300">Collaborate on cutting-edge projects in our innovation labs and advisory boards.</p>
        </div>
      </div>
    </div>
  );

  const renderOurPartners = () => (
    <div className="space-y-6">
      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 pr-8 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <div className="relative">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 pr-8 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Partnership Types</option>
              {partnershipTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
        <button 
          onClick={() => setShowProposalModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Propose Collaboration
        </button>
      </div>

      {/* Partner Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white dark:bg-[#16203a] rounded-xl shadow-lg p-6 border border-[#e5e7eb] dark:border-[#22305a]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#0a1834] dark:text-white">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{partner.category}</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                {partner.type}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{partner.description}</p>
            <div className="mb-4">
              <p className="text-sm font-medium text-[#0a1834] dark:text-white mb-2">Collaboration Areas:</p>
              <div className="flex flex-wrap gap-2">
                {partner.collaborationAreas.map((area, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4 text-sm">
              <p className="text-[#0a1834] dark:text-white">Contact: {partner.contact}</p>
              <p className="text-gray-600 dark:text-gray-300">Email: {partner.email}</p>
            </div>
            <div className="flex gap-2">
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0a1834] dark:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
              <button className="border border-[#0a1834] dark:border-blue-600 text-[#0a1834] dark:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0a1834] hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors">
                Collaborate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBecomePartner = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Partnership Benefits */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#0a1834] dark:text-white">Partnership Benefits</h3>
        <div className="space-y-4">
          {[
            'Access to our global network of learners and professionals',
            'Collaborative research and development opportunities',
            'Joint certification and credentialing programs',
            'Internship and job placement pipelines',
            'Innovation lab access and advisory board participation'
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Types */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#0a1834] dark:text-white">Partnership Types</h3>
        <div className="space-y-3">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-bold text-[#0a1834] dark:text-white">{type}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Customized collaboration opportunities.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCollaborationHub = () => (
    <div className="space-y-8">
      {/* Collaboration Hub Section */}
      <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 border border-[#e5e7eb] dark:border-[#22305a]">
        <h3 className="text-xl font-bold text-[#0a1834] dark:text-white mb-6">Collaboration Hub</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Active Projects */}
          <div>
            <h4 className="font-bold text-[#0a1834] dark:text-white mb-4">Active Projects</h4>
            <div className="space-y-3">
              {activeProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{project.name}</span>
                  <span className={`${project.color} text-white px-2 py-1 rounded text-xs`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Upcoming Events */}
          <div>
            <h4 className="font-bold text-[#0a1834] dark:text-white mb-4">Upcoming Events</h4>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index}>
                  <div className="text-[#0a1834] dark:text-white font-medium">{event.name}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{event.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Resources */}
      <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 border border-[#e5e7eb] dark:border-[#22305a]">
        <h3 className="text-xl font-bold text-[#0a1834] dark:text-white mb-6">Partner Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {partnerResources.map((resource, index) => (
            <div key={index} className="text-center">
              <resource.icon className="h-8 w-8 text-[#0a1834] dark:text-white mx-auto mb-3" />
              <h4 className="font-bold text-[#0a1834] dark:text-white mb-2">{resource.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f0f4fa] dark:bg-[#0a1834] text-[#0a1834] dark:text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white dark:bg-[#0a1834]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            Our Partners: Building the Future of Learning Together
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            OponMeta collaborates with leading organizations, universities, and industry partners to deliver world-class education and opportunities.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 bg-white dark:bg-[#0a1834] border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'partners', label: 'Our Partners' },
              { id: 'become', label: 'Become a Partner' },
              { id: 'hub', label: 'Collaboration Hub' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0a1834] dark:bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-[#0a1834] dark:text-white border border-[#0a1834] dark:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'partners' && renderOurPartners()}
          {activeTab === 'become' && renderBecomePartner()}
          {activeTab === 'hub' && renderCollaborationHub()}
        </div>
      </section>

      {/* Proposal Modal */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#16203a] rounded-xl shadow-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-[#0a1834] dark:text-white mb-6">Propose Collaboration</h3>
            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0a1834] dark:text-white mb-1">Your Name</label>
                <input
                  type="text"
                  value={proposalForm.name}
                  onChange={(e) => setProposalForm({...proposalForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a1834] dark:text-white mb-1">Your Organization</label>
                <input
                  type="text"
                  value={proposalForm.organization}
                  onChange={(e) => setProposalForm({...proposalForm, organization: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a1834] dark:text-white mb-1">Email</label>
                <input
                  type="email"
                  value={proposalForm.email}
                  onChange={(e) => setProposalForm({...proposalForm, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a1834] dark:text-white mb-1">Collaboration Type</label>
                <select
                  value={proposalForm.collaborationType}
                  onChange={(e) => setProposalForm({...proposalForm, collaborationType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {partnershipTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0a1834] dark:text-white mb-1">Proposal Details</label>
                <textarea
                  value={proposalForm.details}
                  onChange={(e) => setProposalForm({...proposalForm, details: e.target.value})}
                  placeholder="Describe your collaboration proposal..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowProposalModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#0a1834] dark:bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners; 