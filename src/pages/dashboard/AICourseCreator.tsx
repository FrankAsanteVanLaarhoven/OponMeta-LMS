import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Globe, ChevronDown, FileText, Youtube, Link, BookOpen, ListChecks, Video, Award, Users, MessageSquare, Bot } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppContext } from '@/context/AppContext';
import DashboardBackButton from "@/components/ui/DashboardBackButton";

// Stepper UI
const steps = [
  { label: 'Describe', icon: BookOpen },
  { label: 'Train AI', icon: Upload },
  { label: 'Structure', icon: ListChecks },
  { label: 'Generate & Review', icon: Award },
];

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
];

// Placeholder for multilingual content seed data
const MULTILINGUAL_EXAMPLES = {
  en: {
    title: 'New Mid-level Account Managers',
    description: 'This course is designed for new mid-level account managers to develop essential skills in project management, client relations, and strategic planning.',
    objectives: [
      'Understand the role of a mid-level account manager',
      'Develop project management skills',
      'Enhance client communication and relationship building',
      'Learn strategic planning and execution',
    ],
    tags: ['account management', 'project management', 'client relations'],
  },
  // ...add more languages as needed
};

const AICourseCreator = () => {
  const { language, setLanguage } = useAppContext();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    title: MULTILINGUAL_EXAMPLES[language]?.title || '',
    description: MULTILINGUAL_EXAMPLES[language]?.description || '',
    objectives: MULTILINGUAL_EXAMPLES[language]?.objectives || [''],
    tags: MULTILINGUAL_EXAMPLES[language]?.tags || [''],
    files: [],
    website: '',
    youtube: '',
    structure: {
      objectives: 4,
      lessons: 4,
      topicsPerLesson: 4,
      quizzesPerLesson: 1,
      assignmentsPerLesson: 1,
      quizPassGrade: 50,
      assignmentPassGrade: 25,
      assignmentWordCount: 50,
      wordsPerTopic: 50,
      referencesPerLesson: 5,
    },
    outline: [],
    generated: null,
  });
  const [loading, setLoading] = useState(false);

  // Stepper UI
  const Stepper = () => (
    <div className="flex items-center justify-center gap-8 my-8">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          <div className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${i <= step ? 'bg-purple-500 text-white border-purple-500' : 'bg-white text-purple-500 border-purple-300'}`}>{i + 1}</div>
          <span className={`font-semibold ${i === step ? 'text-purple-700' : 'text-gray-500'}`}>{s.label}</span>
          {i < steps.length - 1 && <div className="w-8 h-0.5 bg-purple-200 mx-2" />}
        </div>
      ))}
    </div>
  );

  // Step 1: Describe
  const DescribeStep = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Describe your course</h2>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map(l => (
              <SelectItem key={l.code} value={l.code}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input placeholder="Course Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
      <Textarea placeholder="Course Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
      <Textarea placeholder="Course Objectives (one per line)" value={form.objectives.join('\n')} onChange={e => setForm(f => ({ ...f, objectives: e.target.value.split('\n') }))} />
      <Input placeholder="Course Tags (comma separated)" value={form.tags.join(', ')} onChange={e => setForm(f => ({ ...f, tags: e.target.value.split(',').map(t => t.trim()) }))} />
      <div className="flex justify-end gap-2">
        <Button onClick={() => setStep(1)} disabled={!form.title || !form.description}>Next</Button>
      </div>
    </div>
  );

  // Step 2: Train AI
  const TrainAIStep = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Optional: Train AI on existing content</h2>
      <div className="flex gap-4">
        <Button variant="outline" className="flex-1"><FileText className="mr-2" /> Files</Button>
        <Button variant="outline" className="flex-1"><Link className="mr-2" /> Websites</Button>
        <Button variant="outline" className="flex-1"><Youtube className="mr-2" /> Youtube</Button>
      </div>
      <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center bg-purple-50">
        <Upload className="w-12 h-12 text-purple-400 mb-2" />
        <input type="file" multiple className="hidden" id="file-upload" onChange={e => setForm(f => ({ ...f, files: [...f.files, ...Array.from(e.target.files || [])] }))} />
        <label htmlFor="file-upload" className="text-purple-600 cursor-pointer">Drag & Drop to upload<br />or <span className="underline">Browse to upload</span></label>
        <div className="text-xs text-gray-500 mt-2">Supported File Types: .pdf, .txt, .docx, .csv</div>
        {form.files.length > 0 && <div className="mt-4 w-full"><b>Files:</b> {form.files.map((f: any) => f.name).join(', ')}</div>}
      </div>
      <Input placeholder="Paste website URL" value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} />
      <Input placeholder="Paste Youtube URL" value={form.youtube} onChange={e => setForm(f => ({ ...f, youtube: e.target.value }))} />
      <div className="flex justify-between gap-2">
        <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
        <Button onClick={() => setStep(2)}>Next</Button>
      </div>
    </div>
  );

  // Step 3: Structure
  const StructureStep = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Course Structure</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input type="number" min={1} max={10} value={form.structure.objectives} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, objectives: +e.target.value } }))} placeholder="Core Learning objectives" />
        <Input type="number" min={1} max={20} value={form.structure.lessons} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, lessons: +e.target.value } }))} placeholder="Lessons" />
        <Input type="number" min={1} max={10} value={form.structure.topicsPerLesson} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, topicsPerLesson: +e.target.value } }))} placeholder="Topics/Lesson" />
        <Input type="number" min={0} max={10} value={form.structure.quizzesPerLesson} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, quizzesPerLesson: +e.target.value } }))} placeholder="Quizzes/Lesson" />
        <Input type="number" min={0} max={10} value={form.structure.assignmentsPerLesson} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, assignmentsPerLesson: +e.target.value } }))} placeholder="Assignments/Lesson" />
        <Input type="number" min={0} max={100} value={form.structure.quizPassGrade} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, quizPassGrade: +e.target.value } }))} placeholder="Quiz pass grade" />
        <Input type="number" min={0} max={100} value={form.structure.assignmentPassGrade} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, assignmentPassGrade: +e.target.value } }))} placeholder="Assignment pass grade" />
        <Input type="number" min={0} max={1000} value={form.structure.assignmentWordCount} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, assignmentWordCount: +e.target.value } }))} placeholder="Assignment word count" />
        <Input type="number" min={0} max={1000} value={form.structure.wordsPerTopic} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, wordsPerTopic: +e.target.value } }))} placeholder="Words/Topic" />
        <Input type="number" min={0} max={20} value={form.structure.referencesPerLesson} onChange={e => setForm(f => ({ ...f, structure: { ...f.structure, referencesPerLesson: +e.target.value } }))} placeholder="References/Lesson" />
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
        <Button onClick={() => setStep(3)}>Next</Button>
      </div>
    </div>
  );

  // Step 4: Generate & Review
  const GenerateStep = () => (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Generate & Review</h2>
      <div className="flex flex-col gap-4">
        <Button onClick={async () => {
          setLoading(true);
          // TODO: Call AI API with form data and update form.generated
          setTimeout(() => {
            setForm(f => ({ ...f, generated: { ...f, ai: true } }));
            setLoading(false);
          }, 2000);
        }} disabled={loading}>{loading ? 'Generating...' : 'Generate Course with AI'}</Button>
        {form.generated && (
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-bold mb-2">AI-Generated Course Preview</h3>
            <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(form.generated, null, 2)}</pre>
            <Button className="mt-2">Export (SCORM, PDF, etc.)</Button>
          </div>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
        <Button onClick={() => alert('Course saved!')}>Finish</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1834] py-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8">
        <DashboardBackButton />
        <Stepper />
        {step === 0 && <DescribeStep />}
        {step === 1 && <TrainAIStep />}
        {step === 2 && <StructureStep />}
        {step === 3 && <GenerateStep />}
      </div>
    </div>
  );
};

export default AICourseCreator; 