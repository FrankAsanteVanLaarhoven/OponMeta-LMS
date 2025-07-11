import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Course, Lesson, Quiz, Assignment, QuizQuestion } from '../models/Course';
import { v4 as uuidv4 } from 'uuid';

const steps = [
  'Basic Info',
  'Structure',
  'Content',
  'AI Options',
  'Review & Publish',
];

const initialCourse: Partial<Course> = {
  title: '',
  description: '',
  learnerProfile: '',
  structure: {
    objectives: [],
    lessons: 1,
    topicsPerLesson: 1,
    quizzesPerLesson: 0,
    assignmentsPerLesson: 0,
  },
  lessons: [],
  quizzes: [],
  assignments: [],
  status: 'draft',
};

const LessonEditor = ({ lesson, onSave, onCancel }: { lesson: Partial<Lesson>, onSave: (l: Lesson) => void, onCancel: () => void }) => {
  const [title, setTitle] = useState(lesson.title || '');
  const [content, setContent] = useState(lesson.content || '');
  const [multimedia, setMultimedia] = useState<string[]>(lesson.multimedia || []);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map(f => URL.createObjectURL(f));
      setMultimedia([...multimedia, ...files]);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h3 className="text-xl font-bold mb-4">Lesson Editor</h3>
        <input className="border rounded px-4 py-2 w-full mb-2" placeholder="Lesson Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="border rounded px-4 py-2 w-full mb-2" placeholder="Lesson Content" value={content} onChange={e => setContent(e.target.value)} />
        <input type="file" multiple className="mb-2" onChange={handleFile} />
        <div className="flex flex-wrap gap-2 mb-2">
          {multimedia.map((url, i) => <img key={i} src={url} alt="media" className="w-16 h-16 object-cover rounded" />)}
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={() => onSave({ id: lesson.id || uuidv4(), title, content, multimedia })} className="px-4 py-2 bg-indigo-700 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

const QuizEditor = ({ quiz, onSave, onCancel }: { quiz: Partial<Quiz>, onSave: (q: Quiz) => void, onCancel: () => void }) => {
  const [title, setTitle] = useState(quiz.title || '');
  const [questions, setQuestions] = useState<QuizQuestion[]>(quiz.questions || []);
  const addQuestion = () => setQuestions([...questions, { id: uuidv4(), question: '', answers: ['', '', '', ''], correct: [] }]);
  const updateQuestion = (idx: number, q: QuizQuestion) => setQuestions(questions.map((qq, i) => i === idx ? q : qq));
  const removeQuestion = (idx: number) => setQuestions(questions.filter((_, i) => i !== idx));
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg overflow-y-auto max-h-[90vh]">
        <h3 className="text-xl font-bold mb-4">Quiz Editor</h3>
        <input className="border rounded px-4 py-2 w-full mb-2" placeholder="Quiz Title" value={title} onChange={e => setTitle(e.target.value)} />
        <div className="mb-2">
          {questions.map((q, idx) => (
            <div key={q.id} className="border rounded p-2 mb-2">
              <input className="border rounded px-2 py-1 w-full mb-1" placeholder="Question" value={q.question} onChange={e => updateQuestion(idx, { ...q, question: e.target.value })} />
              {q.answers.map((a, ai) => (
                <input key={ai} className="border rounded px-2 py-1 w-full mb-1" placeholder={`Answer ${ai + 1}`} value={a} onChange={e => updateQuestion(idx, { ...q, answers: q.answers.map((ans, i) => i === ai ? e.target.value : ans) })} />
              ))}
              <div className="flex gap-2 mb-1">
                {q.answers.map((_, ai) => (
                  <label key={ai} className="flex items-center gap-1 text-xs">
                    <input type="checkbox" checked={q.correct.includes(ai)} onChange={e => updateQuestion(idx, { ...q, correct: e.target.checked ? [...q.correct, ai] : q.correct.filter(c => c !== ai) })} /> Correct {ai + 1}
                  </label>
                ))}
              </div>
              <button onClick={() => removeQuestion(idx)} className="text-xs text-red-600">Remove Question</button>
            </div>
          ))}
          <button onClick={addQuestion} className="px-2 py-1 bg-indigo-100 rounded">Add Question</button>
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={() => onSave({ id: quiz.id || uuidv4(), title, questions })} className="px-4 py-2 bg-indigo-700 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

const AssignmentEditor = ({ assignment, onSave, onCancel }: { assignment: Partial<Assignment>, onSave: (a: Assignment) => void, onCancel: () => void }) => {
  const [title, setTitle] = useState(assignment.title || '');
  const [description, setDescription] = useState(assignment.description || '');
  const [rubric, setRubric] = useState(assignment.rubric || '');
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h3 className="text-xl font-bold mb-4">Assignment Editor</h3>
        <input className="border rounded px-4 py-2 w-full mb-2" placeholder="Assignment Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="border rounded px-4 py-2 w-full mb-2" placeholder="Assignment Description" value={description} onChange={e => setDescription(e.target.value)} />
        <textarea className="border rounded px-4 py-2 w-full mb-2" placeholder="Rubric (optional)" value={rubric} onChange={e => setRubric(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={() => onSave({ id: assignment.id || uuidv4(), title, description, rubric })} className="px-4 py-2 bg-indigo-700 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

const aiLanguages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'Arabic' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  { code: 'it', label: 'Italian' },
  { code: 'ko', label: 'Korean' },
  { code: 'ja', label: 'Japanese' },
  { code: 'nl', label: 'Dutch' },
  { code: 'zh', label: 'Chinese' },
];

const CourseCreate = () => {
  const { courses, setCourses } = useAppContext();
  const [step, setStep] = useState(0);
  const [course, setCourse] = useState<Partial<Course>>(initialCourse);
  const [lessonEdit, setLessonEdit] = useState<Partial<Lesson> | null>(null);
  const [quizEdit, setQuizEdit] = useState<Partial<Quiz> | null>(null);
  const [assignmentEdit, setAssignmentEdit] = useState<Partial<Assignment> | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLang, setAiLang] = useState('en');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [aiFiles, setAiFiles] = useState<File[]>([]);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSave = () => {
    const newCourse: Course = {
      ...course,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lessons: course.lessons || [],
      quizzes: course.quizzes || [],
      assignments: course.assignments || [],
      structure: course.structure!,
      status: 'draft',
    } as Course;
    setCourses([...courses, newCourse]);
    setStep(steps.length - 1);
  };

  const handleAIGenerate = () => {
    setAiResult(`Generating content for "${aiPrompt}" in ${aiLanguages.find(l => l.code === aiLang)?.label}...`);
    // In a real app, you'd call an AI API here
    setTimeout(() => {
      setAiResult(`Generated content for "${aiPrompt}" in ${aiLanguages.find(l => l.code === aiLang)?.label}. This is a placeholder.`);
    }, 2000);
  };

  const handleAIFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAiFiles([...aiFiles, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center mb-8">
        {steps.map((label, idx) => (
          <React.Fragment key={label}>
            <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-white ${idx <= step ? 'bg-indigo-700' : 'bg-gray-300'}`}>{idx + 1}</div>
            {idx < steps.length - 1 && <div className={`flex-1 h-1 ${idx < step ? 'bg-indigo-700' : 'bg-gray-300'}`}></div>}
          </React.Fragment>
        ))}
      </div>
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Basic Info</h2>
          <input className="border rounded px-4 py-2 w-full mb-4" placeholder="Course Title" value={course.title} onChange={e => setCourse({ ...course, title: e.target.value })} />
          <textarea className="border rounded px-4 py-2 w-full mb-4" placeholder="Description" value={course.description} onChange={e => setCourse({ ...course, description: e.target.value })} />
          <input className="border rounded px-4 py-2 w-full mb-4" placeholder="Learner Profile" value={course.learnerProfile} onChange={e => setCourse({ ...course, learnerProfile: e.target.value })} />
        </div>
      )}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Structure</h2>
          <input className="border rounded px-4 py-2 w-full mb-4" placeholder="Objectives (comma separated)" value={course.structure?.objectives.join(', ')} onChange={e => setCourse({ ...course, structure: { ...course.structure!, objectives: e.target.value.split(',').map(s => s.trim()), lessons: course.structure!.lessons, topicsPerLesson: course.structure!.topicsPerLesson, quizzesPerLesson: course.structure!.quizzesPerLesson, assignmentsPerLesson: course.structure!.assignmentsPerLesson } })} />
          <div className="grid grid-cols-2 gap-4">
            <input type="number" min={1} className="border rounded px-4 py-2" placeholder="Lessons" value={course.structure?.lessons} onChange={e => setCourse({ ...course, structure: { ...course.structure!, lessons: Number(e.target.value) } })} />
            <input type="number" min={1} className="border rounded px-4 py-2" placeholder="Topics per Lesson" value={course.structure?.topicsPerLesson} onChange={e => setCourse({ ...course, structure: { ...course.structure!, topicsPerLesson: Number(e.target.value) } })} />
            <input type="number" min={0} className="border rounded px-4 py-2" placeholder="Quizzes per Lesson" value={course.structure?.quizzesPerLesson} onChange={e => setCourse({ ...course, structure: { ...course.structure!, quizzesPerLesson: Number(e.target.value) } })} />
            <input type="number" min={0} className="border rounded px-4 py-2" placeholder="Assignments per Lesson" value={course.structure?.assignmentsPerLesson} onChange={e => setCourse({ ...course, structure: { ...course.structure!, assignmentsPerLesson: Number(e.target.value) } })} />
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Content</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Lessons</h3>
            <button onClick={() => setLessonEdit({})} className="mb-2 px-3 py-1 bg-indigo-100 rounded">Add Lesson</button>
            <ul className="mb-4">
              {course.lessons?.map((l, i) => (
                <li key={l.id} className="flex items-center gap-2 mb-1">
                  <span className="flex-1">{l.title}</span>
                  <button onClick={() => setLessonEdit(l)} className="text-xs text-indigo-700">Edit</button>
                  <button onClick={() => setCourse({ ...course, lessons: course.lessons!.filter((_, idx) => idx !== i) })} className="text-xs text-red-600">Delete</button>
                </li>
              ))}
            </ul>
            {lessonEdit && <LessonEditor lesson={lessonEdit} onSave={l => { setCourse({ ...course, lessons: [...(course.lessons || []).filter(les => les.id !== l.id), l] }); setLessonEdit(null); }} onCancel={() => setLessonEdit(null)} />}
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quizzes</h3>
            <button onClick={() => setQuizEdit({})} className="mb-2 px-3 py-1 bg-indigo-100 rounded">Add Quiz</button>
            <ul className="mb-4">
              {course.quizzes?.map((q, i) => (
                <li key={q.id} className="flex items-center gap-2 mb-1">
                  <span className="flex-1">{q.title}</span>
                  <button onClick={() => setQuizEdit(q)} className="text-xs text-indigo-700">Edit</button>
                  <button onClick={() => setCourse({ ...course, quizzes: course.quizzes!.filter((_, idx) => idx !== i) })} className="text-xs text-red-600">Delete</button>
                </li>
              ))}
            </ul>
            {quizEdit && <QuizEditor quiz={quizEdit} onSave={q => { setCourse({ ...course, quizzes: [...(course.quizzes || []).filter(qq => qq.id !== q.id), q] }); setQuizEdit(null); }} onCancel={() => setQuizEdit(null)} />}
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Assignments</h3>
            <button onClick={() => setAssignmentEdit({})} className="mb-2 px-3 py-1 bg-indigo-100 rounded">Add Assignment</button>
            <ul className="mb-4">
              {course.assignments?.map((a, i) => (
                <li key={a.id} className="flex items-center gap-2 mb-1">
                  <span className="flex-1">{a.title}</span>
                  <button onClick={() => setAssignmentEdit(a)} className="text-xs text-indigo-700">Edit</button>
                  <button onClick={() => setCourse({ ...course, assignments: course.assignments!.filter((_, idx) => idx !== i) })} className="text-xs text-red-600">Delete</button>
                </li>
              ))}
            </ul>
            {assignmentEdit && <AssignmentEditor assignment={assignmentEdit} onSave={a => { setCourse({ ...course, assignments: [...(course.assignments || []).filter(asg => asg.id !== a.id), a] }); setAssignmentEdit(null); }} onCancel={() => setAssignmentEdit(null)} />}
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">AI Options</h2>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">AI Content/Quiz Generation</label>
            <textarea className="border rounded px-4 py-2 w-full mb-2" placeholder="Describe what you want the AI to generate (e.g., lesson on project management, quiz about sales techniques)" value={aiPrompt} onChange={e => setAiPrompt(e.target.value)} />
            <select className="border rounded px-4 py-2 w-full mb-2" value={aiLang} onChange={e => setAiLang(e.target.value)}>
              {aiLanguages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded shadow hover:bg-indigo-800 transition mb-2" onClick={handleAIGenerate}>Generate</button>
            <div className="bg-gray-100 rounded p-2 min-h-[60px]">{aiResult || 'AI-generated content will appear here.'}</div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Upload Resources for AI Training</label>
            <input type="file" multiple className="mb-2" onChange={handleAIFileUpload} />
            <ul className="text-xs text-gray-600">
              {aiFiles.map((f, i) => <li key={i}>{f.name}</li>)}
            </ul>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Review & Publish</h2>
          <pre className="bg-gray-100 rounded p-4 mb-4 text-sm overflow-x-auto">{JSON.stringify(course, null, 2)}</pre>
          <button className="bg-indigo-700 text-white px-6 py-2 rounded shadow hover:bg-indigo-800 transition" onClick={handleSave}>Save as Draft</button>
        </div>
      )}
      <div className="flex justify-between mt-8">
        <button onClick={prev} disabled={step === 0} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50">Back</button>
        <button onClick={next} disabled={step === steps.length - 1} className="px-4 py-2 rounded bg-indigo-700 text-white hover:bg-indigo-800 disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default CourseCreate; 