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
    coverImage: "https://m.media-amazon.com/images/I/71ls-I6A5KL._UF1000,1000_QL80_.jpg",
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
    id: "4",
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
    id: "5",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71pqZChaJkL.jpg",
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
  },
  {
    id: "6",
    title: "The 4-Hour Work-week",
    author: "Timothy Ferriss",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/6142S0D-PiL._UF1000,1000_QL80_.jpg",
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
    id: "7",
    title: "The Dead Zone",
    author: "Stephen King",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/51IP+552f5L._SL500_.jpg",
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
    id: "8",
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
  },
  {
    id: "9",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/419pbSB7PdL._UF1000,1000_QL80_.jpg",
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
    id: "10",
    title: "Hopeless",
    author: "Collen Hover",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666362713i/62967897.jpg",
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
    id: "11",
    title: "The Testaments",
    author: "Margaret Atwood",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549292344l/42975172.jpg",
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
  },
  {
    id: "12",
    title: "Grit: Why passion and resilience are the secrets to success",
    author: "Angela Duckworth",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/91fmmjCP6FL.jpg",
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
  },
  {
    id: "13",
    title: "The 80/20 Principle",
    author: "Richard Koch",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71sAovz8llL._UF894,1000_QL80_.jpg",
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
  },
  {
    id: "14",
    title: "Why Nations Fail",
    author: "Daron Acemoglu",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/91j9vfc0GmL._UF1000,1000_QL80_.jpg",
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
  },
  {
    id: "15",
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71EsQwJ3chL._UF894,1000_QL80_.jpg",
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
  },
  {
    id: "16",
    title: "Psycho-Cybernetics",
    author: "Maxwell Maltz",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71dKL5THnGL.jpg",
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
  },
  {
    id: "17",
    title: "Principles",
    author: "Ray Dalio",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/61LKD6scbfL._UF1000,1000_QL80_.jpg",
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
    id: "18",
    title: "Art of War",
    author: "Sun Tzu",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://www.hachettebookgroup.com/wp-content/uploads/2024/01/9780465013272-1.jpg",
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
  },
  {
    id: "19",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71bPC5sjX5L._UF1000,1000_QL80_.jpg",
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
  },
  {
    id: "20",
    title: "The Laws of Nature",
    author: "Robert Greene",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/61UPuQRgNKL._UF1000,1000_QL80_.jpg",
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
    id: "21",
    title: "Mastery",
    author: "Robert Greene",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/61M2Zzw9FyL._UF1000,1000_QL80_.jpg",
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
    id: "22",
    title: "Beyond Order",
    author: "Jordan Peterson",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/61fuCrDLgxL._UF894,1000_QL80_.jpg",
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
  },
  {
    id: "23",
    title: "Noise",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/81pn-QpyPGL._UF1000,1000_QL80_.jpg",
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
    id: "24",
    title: "1984",
    author: "George Orwell",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71wANojhEKL._UF1000,1000_QL80_.jpg",
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
  },
  {
    id: "25",
    title: "Extreme Ownership",
    author: "Jacko Willink & Leif Babin",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71teGAqCOzL._UF1000,1000_QL80_.jpg",
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
  },
 {
    id: "26",
    title: "The 5AM Club",
    author: "Robin Sharma",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/712VrOZ60zL.jpg",
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
  },
   {
    id: "27",
    title: "I'll be there for you",
    author: "Kelsey Miller",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71ykRDp6kFL._UF1000,1000_QL80_.jpg",
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
  },
   {
    id: "28",
    title: "The Formula",
    author: "Albert-Laszlo Barabasi",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71XqGEAiEXL.jpg",
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
  },
   {
    id: "29",
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/91aGTM8+3JL._UF894,1000_QL80_.jpg",
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
  },
   {
    id: "30",
    title: "The Room Where It Happened",
    author: "John Bolton",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982148041/the-room-where-it-happened-9781982148041_hr.jpg",
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
  },
   {
    id: "31",
    title: "The Code Of the Extraordinary Mind",
    author: "Vishen Lakhiani",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71ndlTWF5VL._UF1000,1000_QL80_.jpg",
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
  },
   {
    id: "32",
    title: "Linchpin",
    author: "Seth Godin",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://www.hachette.co.uk/wp-content/uploads/2023/11/hbg-title-9780349439815-10.jpg",
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
  },
   {
    id: "33",
    title: "The Husbands Secret",
    author: "Liane Moriarty",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460577225l/17802724.jpg",
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
  },
   {
    id: "34",
    title: "A Whole New Mind",
    author: "Daniel H. Pink",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/710w6375hKL.jpg",
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
  },
   {
    id: "35",
    title: "The Universe Has Your Back",
    author: "Gabrielle Bernstein",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://www.harryhartog.com.au/cdn/shop/products/9781781809334.jpg?v=1662087316",
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
  },
   {
    id: "36",
    title: "Psychology of Lie: Lie to me if you can",
    author: "Paul Ekman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/71EBTJJ8CML._UF1000,1000_QL80_.gif",
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
  },
   {
    id: "37",
    title: "Good to Great",
    author: "Jim Collins",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://m.media-amazon.com/images/I/51IPJiX34fL.jpg",
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
  },
   {
    id: "38",
    title: "The Goal",
    author: "Eliyahu M. Goldratt",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://cdn11.bigcommerce.com/s-yneuaokjib/images/stencil/1280x1280/attribute_rule_images/111137_source_1746689130.png",
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
  },
   {
    id: "39",
    title: "The 8th Habit",
    author: "Stephen Covey",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435624014i/1044141.jpg",
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
  },
   {
    id: "40",
    title: "From The Third World To First",
    author: "Lee Kuan Yew",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546080459i/144409.jpg",
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
  },
   {
    id: "41",
    title: "Economics: User's Guide",
    author: "Ha-Joon Chang",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A groundbreaking tour of the mind and explains the two systems that drive the way we think.",
    coverImage: "https://cdn.penguin.co.uk/dam-assets/books/9780718197032/9780718197032-jacket-large.jpg",
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
  },
];