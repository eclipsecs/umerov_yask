import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">The course you are looking for does not exist.</p>
          <Link to='/books/courses' className="text-pink-500 font-bold mt-6 inline-block">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  // Parse sections with week numbers and sort them
  const sectionsWithWeek = course.content?.split('\n\n').map(section => {
    const lines = section.split('\n');
    let weekLine = lines[0];
    if (weekLine.startsWith('#')) weekLine = weekLine.replace(/^#\s*/, '');

    const weekMatch = weekLine.match(/Week\s*(\d+)/);
    const weekNumber = weekMatch ? parseInt(weekMatch[1], 10) : 0;
    return {
      weekNumber,
      sectionLines: [weekLine, ...lines.slice(1).map(line => line.startsWith('#') ? line.replace(/^#\s*/, '') : line)]
    };
  }).sort((a, b) => a.weekNumber - b.weekNumber);

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-6 text-center text-gray-900 dark:text-white">
          {course.title.replace(/^#\s*/, '')}
        </h1>
        <p className="text-lg font-semibold mb-6 text-center text-pink-500">
          {course.level} - {course.duration}
        </p>
        <p className="text-lg mb-12 text-center text-gray-700 dark:text-gray-300">{course.description}</p>

        {/* Course Content Sections in 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sectionsWithWeek?.map((sectionObj, idx) => {
            const weekLine = sectionObj.sectionLines[0];
            const contentLines = sectionObj.sectionLines.slice(1);

            return (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                  {weekLine.trim()}
                </h2>
                <div className="space-y-1">
                  {contentLines.map((line, lineIdx) => (
                    <p key={lineIdx} className='text-gray-800 dark:text-gray-200 leading-relaxed text-sm md:text-base'>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;