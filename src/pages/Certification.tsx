import React, { useState, useRef } from 'react';
import { Award, CheckCircle, Calendar, User, FileText, Search, Download, Share2, Star, Globe, Target } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Mock certificate data
const mockCertificates = [
  {
    id: 'CERT-2025-001',
    courseName: 'Advanced AI and Machine Learning',
    studentName: 'John Smith',
    completionDate: '2025-01-15',
    instructor: 'Dr. Sarah Johnson',
    grade: 'A+ (95%)',
    certificateNumber: 'OPM-2025-001-001',
    courseDuration: '12 weeks',
    skills: ['Python', 'TensorFlow', 'Neural Networks', 'Data Analysis'],
    verified: true
  },
  {
    id: 'CERT-2025-002',
    courseName: 'Digital Marketing Mastery',
    studentName: 'Emily Rodriguez',
    completionDate: '2025-01-10',
    instructor: 'Mike Chen',
    grade: 'A (92%)',
    certificateNumber: 'OPM-2025-002-001',
    courseDuration: '8 weeks',
    skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
    verified: true
  },
  {
    id: 'CERT-2025-003',
    courseName: 'Web Development Fundamentals',
    studentName: 'Alex Thompson',
    completionDate: '2025-01-05',
    instructor: 'David Wilson',
    grade: 'A- (88%)',
    certificateNumber: 'OPM-2025-003-001',
    courseDuration: '10 weeks',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    verified: true
  }
];

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(mockCertificates[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const filteredCertificates = mockCertificates.filter(cert =>
    cert.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    try {
      // Use the hidden clean template for download
      const downloadElement = document.getElementById('download-template');
      if (!downloadElement) {
        throw new Error('Download template not found');
      }
      
      const canvas = await html2canvas(downloadElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`OponMeta_Certificate_${selectedCertificate.certificateNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadAsJPEG = async () => {
    setIsDownloading(true);
    try {
      // Use the hidden clean template for download
      const downloadElement = document.getElementById('download-template');
      if (!downloadElement) {
        throw new Error('Download template not found');
      }
      
      const canvas = await html2canvas(downloadElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      const link = document.createElement('a');
      link.download = `OponMeta_Certificate_${selectedCertificate.certificateNumber}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.9);
      link.click();
    } catch (error) {
      console.error('Error generating JPEG:', error);
      alert('Error generating JPEG. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const shareCertificate = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `OponMeta Certificate - ${selectedCertificate.courseName}`,
          text: `I completed ${selectedCertificate.courseName} with grade ${selectedCertificate.grade} on OponMeta!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      const text = `OponMeta Certificate - ${selectedCertificate.courseName}\nCertificate #: ${selectedCertificate.certificateNumber}\nGrade: ${selectedCertificate.grade}\nCompleted: ${formatDate(selectedCertificate.completionDate)}`;
      navigator.clipboard.writeText(text);
      alert('Certificate details copied to clipboard!');
    }
  };

  const CertificateCard = ({ certificate }: { certificate: typeof mockCertificates[0] }) => (
    <div className="bg-white dark:bg-[#16203a] rounded-xl shadow-lg p-6 border border-[#e5e7eb] dark:border-[#22305a] hover:shadow-xl transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Award className="h-8 w-8 text-yellow-500" />
          <div>
            <h3 className="text-lg font-bold text-[#0a1834] dark:text-white">{certificate.courseName}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Certificate #{certificate.certificateNumber}</p>
          </div>
        </div>
        {certificate.verified && (
          <CheckCircle className="h-6 w-6 text-green-500" />
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{certificate.studentName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">Completed {formatDate(certificate.completionDate)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">{certificate.grade}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {certificate.skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={() => setSelectedCertificate(certificate)}
          className="flex-1 bg-[#0a1834] dark:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          View Certificate
        </button>
        <button 
          onClick={() => {
            setSelectedCertificate(certificate);
            setTimeout(() => downloadAsPDF(), 100);
          }}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          title="Download PDF"
        >
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const CertificateView = ({ certificate }: { certificate: typeof mockCertificates[0] }) => (
    <div className="bg-white dark:bg-[#16203a] rounded-xl shadow-lg p-8 border border-[#e5e7eb] dark:border-[#22305a]">
      {/* Certificate Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src="/branding/logo.png" alt="OponMeta Logo" className="h-16 w-16" />
            <img src="/branding/new-logo.png" alt="OponMeta" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-6 w-auto" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">Certificate of Completion</h1>
        <p className="text-gray-600 dark:text-gray-300">This is to certify that</p>
      </div>

      {/* Student Name */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#0a1834] dark:text-white mb-2">{certificate.studentName}</h2>
        <p className="text-gray-600 dark:text-gray-300">has successfully completed the course</p>
      </div>

      {/* Course Details */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-[#0a1834] dark:text-white mb-4">{certificate.courseName}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600 dark:text-gray-300">Grade</p>
            <p className="font-semibold text-[#0a1834] dark:text-white">{certificate.grade}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Duration</p>
            <p className="font-semibold text-[#0a1834] dark:text-white">{certificate.courseDuration}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Completion Date</p>
            <p className="font-semibold text-[#0a1834] dark:text-white">{formatDate(certificate.completionDate)}</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">Certificate #</p>
            <p className="font-semibold text-[#0a1834] dark:text-white">{certificate.certificateNumber}</p>
          </div>
        </div>
      </div>

      {/* Skills Acquired */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#0a1834] dark:text-white mb-3">Skills Acquired</h4>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Signatures */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4">
            <p className="font-semibold text-[#0a1834] dark:text-white">{certificate.instructor}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Course Instructor</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-4">
            <p className="font-semibold text-[#0a1834] dark:text-white">OponMeta Team</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Platform Director</p>
          </div>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Certificate Verification</p>
            <p className="font-mono text-sm text-[#0a1834] dark:text-white">{certificate.certificateNumber}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-600 dark:text-green-400">Verified</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={downloadAsPDF}
          disabled={isDownloading}
          className="flex-1 bg-[#0a1834] dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Download className="h-5 w-5" />
          <span>{isDownloading ? 'Generating...' : 'Download PDF'}</span>
        </button>
        <button 
          onClick={downloadAsJPEG}
          disabled={isDownloading}
          className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Download className="h-5 w-5" />
          <span>{isDownloading ? 'Generating...' : 'Download JPEG'}</span>
        </button>
        <button 
          onClick={shareCertificate}
          className="flex-1 border border-[#0a1834] dark:border-blue-600 text-[#0a1834] dark:text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-[#0a1834] hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors flex items-center justify-center space-x-2"
        >
          <Share2 className="h-5 w-5" />
          <span>Share Certificate</span>
        </button>
      </div>
    </div>
  );

  // Separate certificate template for download (without action buttons)
  const CertificateForDownload = ({ certificate }: { certificate: typeof mockCertificates[0] }) => (
    <div className="bg-white p-8 max-w-4xl mx-auto" style={{ minHeight: '297mm', width: '210mm' }}>
      {/* Certificate Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src="/branding/logo.png" alt="OponMeta Logo" className="h-16 w-16" />
            <img src="/branding/new-logo.png" alt="OponMeta" className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-6 w-auto" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#0a1834] mb-2">Certificate of Completion</h1>
        <p className="text-gray-600">This is to certify that</p>
      </div>

      {/* Student Name */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#0a1834] mb-2">{certificate.studentName}</h2>
        <p className="text-gray-600">has successfully completed the course</p>
      </div>

      {/* Course Details */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-[#0a1834] mb-4">{certificate.courseName}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Grade</p>
            <p className="font-semibold text-[#0a1834]">{certificate.grade}</p>
          </div>
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold text-[#0a1834]">{certificate.courseDuration}</p>
          </div>
          <div>
            <p className="text-gray-600">Completion Date</p>
            <p className="font-semibold text-[#0a1834]">{formatDate(certificate.completionDate)}</p>
          </div>
          <div>
            <p className="text-gray-600">Certificate #</p>
            <p className="font-semibold text-[#0a1834]">{certificate.certificateNumber}</p>
          </div>
        </div>
      </div>

      {/* Skills Acquired */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#0a1834] mb-3">Skills Acquired</h4>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Signatures */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <div className="border-t-2 border-gray-300 pt-4">
            <p className="font-semibold text-[#0a1834]">{certificate.instructor}</p>
            <p className="text-sm text-gray-600">Course Instructor</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-gray-300 pt-4">
            <p className="font-semibold text-[#0a1834]">OponMeta Team</p>
            <p className="text-sm text-gray-600">Platform Director</p>
          </div>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Certificate Verification</p>
            <p className="font-mono text-sm text-[#0a1834]">{certificate.certificateNumber}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-600">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f0f4fa] dark:bg-[#0a1834] text-[#0a1834] dark:text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white dark:bg-[#0a1834]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Course Certifications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Verify and showcase your achievements with official OponMeta certificates. Each certificate includes course details, instructor signatures, and verification codes.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search certificates by course name, student, or certificate number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <button className="px-6 py-3 bg-[#0a1834] dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Verify Certificate
            </button>
          </div>

          {/* Certificate Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>

          {/* Selected Certificate View */}
          {selectedCertificate && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Certificate Details</h2>
              <div ref={certificateRef}>
                <CertificateView certificate={selectedCertificate} />
              </div>
              
              {/* Hidden download template */}
              <div className="hidden">
                <div id="download-template">
                  <CertificateForDownload certificate={selectedCertificate} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Certification; 