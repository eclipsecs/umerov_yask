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
  rating?: number;
  readingStatus: 'to-read' | 'reading' | 'completed';
  startedDate?: string;
  completedDate?: string;
  personalComments: string;
  chapters: BookChapter[];
  tags: string[];
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    isbn: "9780465050659",
    publishedYear: 2013,
    genre: "Design",
    description: "A powerful primer on how to design for users and understand the psychology behind everyday objects.",
    rating: 5,
    readingStatus: "completed",
    startedDate: "2024-01-15",
    completedDate: "2024-02-20",
    personalComments: "This book completely changed how I think about user experience and design. The principles are timeless and applicable beyond just physical objects - they apply to digital interfaces, processes, and systems. Norman's insights about affordances and signifiers are particularly valuable.",
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
    rating: 4,
    readingStatus: "reading",
    startedDate: "2024-08-01",
    personalComments: "Currently reading this one. The 1% better every day concept is compelling, though some examples feel repetitive. The habit stacking technique is something I'm actively trying to implement.",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Surprising Power of Atomic Habits",
        content: "How small changes compound over time",
        notes: "The 1% improvement principle - small habits compound into significant results over time."
      }
    ],
    tags: ["habits", "productivity", "self-improvement"]
  }
];