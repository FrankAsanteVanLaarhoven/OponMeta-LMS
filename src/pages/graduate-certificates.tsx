import Certificate from '../components/ui/award';

const sampleCertificates = [
  {
    recipient: 'James Seymour',
    course: 'Positive Impact Mapping',
    courseId: 'PIM-2025-001',
    certificateNumber: 'CERT-2025-0001',
    date: '2025-05-22',
    authority: 'Kezia Luckett',
    authorityTitle: 'Founder, Our Platform',
    logoUrl: '/logo.svg',
  },
  {
    recipient: 'Aisha Bello',
    course: 'AI for Business Leaders',
    courseId: 'AIBL-2025-002',
    certificateNumber: 'CERT-2025-0002',
    date: '2025-06-10',
    authority: 'Frank van Laarhoven',
    authorityTitle: 'Founder, OponMeta',
    logoUrl: '/logo.svg',
  },
  {
    recipient: 'Liam Chen',
    course: 'Sustainable Agriculture',
    courseId: 'SAG-2025-003',
    certificateNumber: 'CERT-2025-0003',
    date: '2025-07-01',
    authority: 'Dr. Maria Gomez',
    authorityTitle: 'Director of Learning',
    logoUrl: '/logo.svg',
  },
];

export default function GraduateCertificatesPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-blue-900 text-white rounded-lg px-8 py-4 mt-8 mb-10 shadow-lg tracking-tight text-center">
          Our Platform Graduate Certificates & Awards
        </h1>
      </div>
      <div className="mt-8 mb-4" />
      <div className="grid gap-12">
        {sampleCertificates.map(cert => (
          <Certificate key={cert.certificateNumber} {...cert} />
        ))}
      </div>
    </div>
  );
} 