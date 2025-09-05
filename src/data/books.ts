export interface BookChapter {
  id: string;
  chapterNumber: number;
  title: string;
  content: string;
  notes?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  genre: string;
  description: string;
  coverImage?: string;
  readingStatus: 'to-read' | 'reading' | 'completed';
  startedDate?: string;
  completedDate?: string;
  personalComments: string;
  chapters: BookChapter[];
  tags: string[];
  downloadUrl?: string; // Link to download the book
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    isbn: "9780465050659",
    publishedYear: 2013,
    genre: "#",
    description: "A powerful primer on how to design for users and understand the psychology behind everyday objects.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442460745i/840.jpg",
    readingStatus: "completed",
    personalComments: "This book completely changed how I think about user experience and design. The principles are timeless and applicable beyond just physical objects - they apply to digital interfaces, processes, and systems. Norman's insights about affordances and signifiers are particularly valuable.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Psychopathology of Everyday Things",
        content: "Introduction to design problems in everyday objects",
        notes: "Great examples of doors that confuse people. The Norman Door concept is introduced here."
      },
      {
        id: "ch2", 
        chapterNumber: 2,
        title: "The Psychology of Everyday Actions",
        content: "How people interact with objects and the mental models they form",
        notes: "The seven stages of action framework is crucial for understanding user behavior."
      },
      {
        id: "ch3",
        chapterNumber: 3,
        title: "Knowledge in the Head and in the World",
        content: "How we use both internal knowledge and external cues to navigate the world",
        notes: "The distinction between knowledge in the head vs. in the world is fundamental to good design."
      }
    ],
    tags: ["design", "psychology", "UX", "usability"]
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    publishedYear: 2018,
    genre: "Self-Development",
    description: "An easy and proven way to build good habits and break bad ones through tiny changes that lead to remarkable results.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320i/40121378.jpg",
    readingStatus: "completed",
    startedDate: "2024-08-01",
    personalComments: "Currently reading this one. The 1% better every day concept is compelling, though some examples feel repetitive. The habit stacking technique is something I'm actively trying to implement.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Surprising Power of Atomic Habits",
        content: "How small changes compound over time",
        notes: "The 1% improvement principle - small habits compound into significant results over time."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "How Your Habits Shape Your Identity",
        content: "The relationship between habits and identity formation",
        notes: "Every action is a vote for the type of person you wish to become."
      }
    ],
    tags: ["habits", "productivity", "self-improvement"]
  },
  {
    id: "3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "Maddox: F@#$ You",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://pictures.abebooks.com/isbn/9781501187513-us.jpg",
    readingStatus: "reading",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://pictures.abebooks.com/isbn/9781501187513-us.jpg",
    readingStatus: "reading",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "The 4-Hour Work-week",
    author: "Timothy Ferriss",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://pictures.abebooks.com/isbn/9781501187513-us.jpg",
    readingStatus: "reading",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "The Dead Zone",
    author: "Stephen King",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://pictures.abebooks.com/isbn/9781501187513-us.jpg",
    readingStatus: "reading",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "The Storyteller: Ready trilogy",
    author: "Traci Chee",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://utopia-state-of-mind.com/wp-content/uploads/2018/10/the-storyteller-by-traci-chee.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  }
];