import React from 'react';
import { Link } from 'react-router-dom';
import RoughNotation from '@/components/RoughNotation';
import { courses } from '@/data/courses';

const CoursesPage = () => (
  <div className="min-h-screen bg-background">
    <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-6xl">
      <h1 className="text-5xl font-serif font-extrabold mb-8 text-center">
        Courses & Vocabulary
      </h1>
      <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
        Explore our selection of courses and the vocabulary learned from reading articles and courses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <RoughNotation type="underline" color="#ec4899" onHover={true}>
                {/* Link to CourseDetailPage; CourseDetailPage will use the course ID to fetch content from courses.ts */}
                <Link
                  to={`/books/courses/${course.id}`}
                  className="text-3xl font-bold text-foreground transition-colors hover:text-pink-500"
                >
                  {course.title}
                </Link>
              </RoughNotation>
              <p className="text-sm font-semibold text-pink-500">{course.level}</p>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default CoursesPage;

// In CourseDetailPage, use the `id` from the route params to fetch the corresponding course from courses.ts