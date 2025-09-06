import React from 'react';
import { Link } from 'react-router-dom';
import RoughNotation from '@/components/RoughNotation';
import { courses } from '@/data/courses';

const CoursesPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      <section className='container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-5xl'>
        <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6 text-center'>Courses</h1>
        <p className='text-lg text-muted-foreground mb-12 text-center'>
          Explore our selection of courses designed to improve your IELTS skills and boost your confidence.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {courses.map(course => (
            <div key={course.id} className='group bg-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between'>
              <div className='space-y-3'>
                <RoughNotation type='underline' color='#ec4899' onHover={true}>
                  <Link to={`/books/courses/${course.id}`} className='text-2xl md:text-3xl font-bold text-foreground transition-colors hover:text-pink-500'>
                    {course.title}
                  </Link>
                </RoughNotation>
                <p className='text-sm font-semibold text-pink-500'>{course.level}</p>
                <p className='text-sm text-muted-foreground'>{course.duration}</p>
                <p className='text-muted-foreground leading-relaxed'>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;