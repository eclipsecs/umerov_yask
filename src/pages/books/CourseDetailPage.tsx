import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courses = [
  { id: '1', title: 'Speaking', duration: '4 weeks', level: 'Intermediate to Advanced', description: 'Learn to speak fluently and confidently in IELTS Speaking.', content: `Week 1: Introduction\nWeek 2: Part 1 & 2 Practice\nWeek 3: Part 3 & Advanced Strategies\nWeek 4: Mock Tests` },
  { id: '2', title: 'Writing', duration: '6 weeks', level: 'Beginner to Advanced', description: 'Master the techniques required for high-scoring IELTS Writing.', content: `Week 1: Task 1 Overview\nWeek 2: Task 2 Overview\nWeek 3: Planning & Outlines\nWeek 4: Vocabulary\nWeek 5: Practice Essays\nWeek 6: Review` },
  { id: '3', title: 'Reading', duration: '5 weeks', level: 'All Levels', description: 'Improve your reading and listening comprehension skills for IELTS.', content: `Week 1: Reading Strategies\nWeek 2: Listening Techniques\nWeek 3: Practice Tests\nWeek 4: Common Mistakes\nWeek 5: Review and Tips` }
];

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground">The course you are looking for does not exist.</p>
          <Link to='/books/courses' className="text-pink-500 font-bold mt-6 inline-block">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">{course.title}</h1>
        <p className="text-lg text-pink-500 font-semibold mb-2 text-center">
          {course.level} - {course.duration}
        </p>
        <p className="text-muted-foreground mb-8 text-center">{course.description}</p>
        {course.content && (
          <div className="prose max-w-none text-foreground">
            {course.content.split('\n').map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CourseDetailPage;