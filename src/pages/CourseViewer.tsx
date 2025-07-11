import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const CourseViewer = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [selectedLesson, setSelectedLesson] = useState<{ modIdx: number, lesIdx: number } | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/courses?id=${id}`)
      .then(async res => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to load course.');
        }
        return res.json();
      })
      .then(data => setCourse(data))
      .catch(e => setError(e.message));
  }, [id]);

  if (error) return <div className="max-w-3xl mx-auto py-10 text-red-600 font-bold">{error}</div>;

  if (!course) return <div className="max-w-3xl mx-auto py-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex justify-end mb-4">
        <LanguageSwitcher />
      </div>
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">&larr; Back to Catalog</Button>
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.description}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Lessons</h2>
        {course.curriculumModules && course.curriculumModules.length > 0 ? (
          course.curriculumModules.map((mod: any, i: number) => (
            <div key={i} className="mb-4">
              <h3 className="font-bold">Module {i + 1}: {mod.title}</h3>
              <ul className="ml-4 list-decimal">
                {mod.lessons.map((les: any, j: number) => (
                  <li key={j} className="mb-1">
                    <Button size="sm" variant="outline" onClick={() => setSelectedLesson({ modIdx: i, lesIdx: j })}>
                      Lesson {j + 1}: {les.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : <div>No lessons found.</div>}
      </div>
      {selectedLesson && (
        <div className="bg-white/60 rounded p-4 mb-4">
          <h3 className="text-lg font-bold mb-2">
            Module {selectedLesson.modIdx + 1}, Lesson {selectedLesson.lesIdx + 1}: {course.curriculumModules[selectedLesson.modIdx].lessons[selectedLesson.lesIdx].title}
          </h3>
          <div className="mb-2">
            <strong>Content:</strong> {course.curriculumModules[selectedLesson.modIdx].lessons[selectedLesson.lesIdx].content}
          </div>
          {course.lessonScripts && course.lessonScripts[`${selectedLesson.modIdx}-${selectedLesson.lesIdx}`] && (
            <div className="mb-2">
              <strong>Video Script:</strong>
              <pre className="bg-gray-100 rounded p-2 text-xs whitespace-pre-wrap">{course.lessonScripts[`${selectedLesson.modIdx}-${selectedLesson.lesIdx}`]}</pre>
            </div>
          )}
          {course.curriculumModules[selectedLesson.modIdx].assessment && course.curriculumModules[selectedLesson.modIdx].assessment.length > 0 && (
            <div className="mb-2">
              <strong>Assessment:</strong>
              <ul className="ml-4 list-disc">
                {course.curriculumModules[selectedLesson.modIdx].assessment.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseViewer;