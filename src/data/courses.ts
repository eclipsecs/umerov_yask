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
    description: 'Learn to speak fluently, build confidence, and master IELTS Speaking with structured weekly practice.',
    content: `

Week 1: Introduction and Basics
❶ Understanding the test format
- Common topics and vocabulary
- Practical exercises: recording short answers

Week 2: Part 1 & 2 Practice
- Answering questions naturally
- Structuring responses
- Pronunciation and fluency drills

Week 3: Part 3 & Advanced Strategies
- Discussing abstract topics
- Giving opinions and justifying answers
- Mock interviews and peer feedback

Week 4: Mock Tests and Review
- Full practice tests
- Identifying strengths and weaknesses
- Tips for exam day` 
  },
  {
    id: '2',
    title: 'IELTS Writing Essentials',
    level: 'Beginner to Advanced',
    duration: '6 weeks',
    description: 'Master IELTS Writing tasks with step-by-step guidance, advanced vocabulary, and structured essay techniques.',
    content: `# IELTS Writing Essentials

Week 1: Task 1 Overview
- Understanding different chart types
- Summarizing trends and key features
- Practice: writing reports

Week 2: Task 2 Overview
- Essay types and structures
- Thesis statements and paragraph development
- Practice essays with feedback

Week 3: Planning & Outlines
- Time management strategies
- Effective outlining techniques
- Writing cohesive paragraphs

Week 4: Vocabulary & Grammar
- Academic vocabulary
- Common grammatical mistakes
- Exercises to improve accuracy

Week 5: Practice Essays
- Full-length writing tasks
- Timed writing simulations
- Review and improvement

Week 6: Mock Tests and Feedback
- Complete writing tests under exam conditions
- Feedback on structure, vocabulary, and coherence
- Final tips and strategies` 
  },
  {
    id: '3',
    title: 'IELTS Reading & Listening',
    level: 'All Levels',
    duration: '5 weeks',
    description: 'Enhance your reading comprehension and listening skills with focused exercises and practical strategies for IELTS.',
    content: `# IELTS Reading & Listening

Week 1: Reading Strategies
- Skimming and scanning techniques
- Understanding question types
- Practice passages with answers

Week 2: Listening Techniques
- Identifying key information
- Understanding accents and intonation
- Exercises on short and long recordings

Week 3: Practice Tests
- Simulated reading and listening tests
- Time management and pacing
- Detailed answer review

Week 4: Common Mistakes
- Analyzing frequent errors
- Techniques to avoid mistakes
- Tips for accuracy under pressure

Week 5: Review and Exam Strategies
- Consolidating skills learned
- Final practice with full tests
- Tips for exam day` 
  },
  {
    id: '4',
    title: 'something course',
    level: 'All Levels',
    duration: '5 weeks',
    description: 'Enhance your reading comprehension and listening skills with focused exercises and practical strategies for IELTS.',
    content: `# IELTS Reading & Listening

Week 1: Reading Strategies
- Skimming and scanning techniques
- Understanding question types
- Practice passages with answers

Week 2: Listening Techniques
- Identifying key information
- Understanding accents and intonation
- Exercises on short and long recordings

Week 3: Practice Tests
- Simulated reading and listening tests
- Time management and pacing
- Detailed answer review

Week 4: Common Mistakes
- Analyzing frequent errors
- Techniques to avoid mistakes
- Tips for accuracy under pressure

Week 5: Review and Exam Strategies
- Consolidating skills learned
- Final practice with full tests
- Tips for exam day` 
  }
];