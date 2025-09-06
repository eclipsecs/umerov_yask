

export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  content?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'IELTS Speaking Mastery',
    level: 'Intermediate to Advanced',
    duration: '4 weeks',
    description: 'Learn to speak fluently and confidently in IELTS Speaking.',
    content: `# IELTS Speaking Mastery
Week 1: Introduction
Week 2: Part 1 & 2 Practice
Week 3: Part 3 & Advanced Strategies
Week 4: Mock Tests`
  },
  {
    id: '2',
    title: 'IELTS Writing Essentials',
    level: 'Beginner to Advanced',
    duration: '6 weeks',
    description: 'Master the techniques required for high-scoring IELTS Writing.',
    content: `# IELTS Writing Essentials
Week 1: Task 1 Overview
Week 2: Task 2 Overview
Week 3: Planning & Outlines
Week 4: Vocabulary
Week 5: Practice Essays
Week 6: Review`
  },
  {
    id: '3',
    title: 'IELTS Reading & Listening',
    level: 'All Levels',
    duration: '5 weeks',
    description: 'Improve your reading and listening comprehension skills for IELTS.',
    content: `# IELTS Reading & Listening
Week 1: Reading Strategies
Week 2: Listening Techniques
Week 3: Practice Tests
Week 4: Common Mistakes
Week 5: Review and Tips`
  }
];