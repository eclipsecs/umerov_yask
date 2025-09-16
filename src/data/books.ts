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
    id: "54",
    title: "The Shallows",
    author: "Nicholas Carr",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/41EnRRiRetL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://www.alim.org/tafsir/ibn-kathir/?surah=1&ayah=0",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "Chapter Number 2",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "53",
    title: "Tafsir Ibn Kathir",
    author: "Shaykh Safiur Rahman Mubarakpuri",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/41EnRRiRetL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://www.alim.org/tafsir/ibn-kathir/?surah=1&ayah=0",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "Chapter Number 2",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "52",
    title: "Clear thinking",
    author: "Shane Parrish",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/81hmO-IVMjL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://vk.com/doc399904795_667905728?hash=yxNEATmitjv9ZfailpS6SiYqzZW80ukZVdc5L4tXjkk&api=1&no_preview=1",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "51",
    title: "Words of my father",
    author: "Yousef Bashir",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677837399i/41595606.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://libgen.li/edition.php?id=138118916",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "50",
    title: "In front of your nose",
    author: "George Orwell",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/71uDHglnpCL._UF1000,1000_QL80_.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://libgen.li/edition.php?id=136554437",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "49",
    title: "7 Habits of Highly Effective People",
    author: "Stephen Covey",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/71Koyhv2bML.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://lrc.wiut.uz/Content/Uploads/Ckeditor/fd199c0f-6612-4e28-9229-b7286bfe1ae21590810411_the-7-habits-of-highly-effective-people.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the two modes of thinking."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "48",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "A practical guide to understanding how habits are formed and how tiny changes can lead to remarkable personal and professional growth.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320i/40121378.jpg",
    readingStatus: "completed",
    startedDate: "2024-08-01",
    personalComments: "Currently reading this one. The 1% better every day concept is compelling, though some examples feel repetitive. The habit stacking technique is something I'm actively trying to implement.",
    downloadUrl: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Surprising Power of Atomic Habits",
        content: "How small changes compound over time",
        notes: "The 1% improvement principle - small habits compound into significant results over time. This chapter sets the foundation for the book's approach to habit change."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "How Your Habits Shape Your Identity",
        content: "The relationship between habits and identity formation",
        notes: "Every action is a vote for the type of person you wish to become. This chapter connects habits to personal identity."
      }
    ],
    tags: ["habits", "productivity", "self-improvement"]
  },
  {
    id: "47",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A landmark exploration of how our thinking is shaped by two systems—one fast and intuitive, the other slow and deliberate—and how they influence our decisions and judgments.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the book's core psychological framework."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "46",
    title: "F*ck Whales: Petty Essays from a Brilliant Mind",
    author: "Maddox",
    isbn: "9781501187513",
    publishedYear: 2017,
    genre: "Humor",
    description: "A collection of satirical essays by Maddox, filled with biting humor and irreverent takes on modern life, culture, and the absurdities of the world.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter sets the stage for the book's unique humor and perspective."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "45",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9781455586691",
    publishedYear: 2016,
    genre: "Productivity",
    description: "Examines the benefits of focused, distraction-free work and provides strategies for cultivating deep concentration in a world full of interruptions.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This first chapter introduces the importance of deep, focused work."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "44",
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    isbn: "9780307465351",
    publishedYear: 2007,
    genre: "Business",
    description: "A guide to escaping the traditional 9-to-5, automating income, and designing a lifestyle of freedom, travel, and personal fulfillment.",
    coverImage: "https://m.media-amazon.com/images/I/6142S0D-PiL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. An introduction to lifestyle design and unconventional approaches to work."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "43",
    title: "The Dead Zone",
    author: "Stephen King",
    isbn: "9780451155758",
    publishedYear: 1979,
    genre: "Horror",
    description: "A supernatural thriller about Johnny Smith, who awakens from a coma with psychic abilities that allow him to see people's pasts and futures, leading to a confrontation with evil.",
    coverImage: "https://m.media-amazon.com/images/I/51IP+552f5L._SL500_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The first chapter introduces Johnny's awakening and his psychic abilities."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "42",
    title: "The Storyteller (Sea of Ink and Gold #3)",
    author: "Traci Chee",
    isbn: "9780399176796",
    publishedYear: 2018,
    genre: "Young Adult Fantasy",
    description: "The concluding volume of the Sea of Ink and Gold trilogy, where Sefia and Archer fight for freedom and truth in a world shaped by stories and secrets.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the final struggle in the trilogy."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "41",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    isbn: "9780061241895",
    publishedYear: 1984,
    genre: "Psychology",
    description: "A classic exploration of the key principles that drive people to say 'yes,' revealing the psychology behind persuasion and how to apply it ethically.",
    coverImage: "https://m.media-amazon.com/images/I/419pbSB7PdL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter explores key psychological triggers for persuasion."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "40",
    title: "Hopeless",
    author: "Colleen Hoover",
    isbn: "9781476718722",
    publishedYear: 2012,
    genre: "New Adult Romance",
    description: "A gripping romance novel about Sky, a girl with a mysterious past, and her journey of love, secrets, and self-discovery.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666362713i/62967897.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Sky's journey begins with hints of her mysterious past."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "39",
    title: "The Testaments",
    author: "Margaret Atwood",
    isbn: "9780385543781",
    publishedYear: 2019,
    genre: "Dystopian Fiction",
    description: "A sequel to The Handmaid's Tale, this novel follows three women in Gilead as their intertwined stories reveal the fate of the oppressive regime.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Introduces the world of Gilead and the three main characters."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "38",
    title: "Grit: The Power of Passion and Perseverance",
    author: "Angela Duckworth",
    isbn: "9781501111105",
    publishedYear: 2016,
    genre: "Self-Help",
    description: "Explores why passion and perseverance are more important than talent in achieving success, blending research, stories, and practical advice.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter explains the concept of grit and its importance."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "37",
    title: "The 80/20 Principle",
    author: "Richard Koch",
    isbn: "9780385491747",
    publishedYear: 1997,
    genre: "Business",
    description: "Demonstrates how 80% of results come from 20% of efforts and how to apply this principle to business, productivity, and life.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the 80/20 rule and its applications."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "36",
    title: "Why Nations Fail",
    author: "Daron Acemoglu & James A. Robinson",
    isbn: "9780307719225",
    publishedYear: 2012,
    genre: "Economics",
    description: "Examines the historical and political roots of prosperity and poverty, arguing that inclusive institutions are the key to national success.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The basics of nonverbal communication are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "35",
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    isbn: "9780553804720",
    publishedYear: 2004,
    genre: "Communication",
    description: "A comprehensive guide to understanding and interpreting body language, revealing the secrets behind nonverbal communication.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The power of self-image is introduced in this chapter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "34",
    title: "Psycho-Cybernetics",
    author: "Maxwell Maltz",
    isbn: "9780399176130",
    publishedYear: 1960,
    genre: "Self-Help",
    description: "Explores the power of self-image and visualization, offering techniques for personal development and achieving goals.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Dalio introduces his life philosophy and the importance of principles."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "33",
    title: "Principles",
    author: "Ray Dalio",
    isbn: "9781501124020",
    publishedYear: 2017,
    genre: "Business",
    description: "Billionaire investor Ray Dalio shares the guiding principles that shaped his life and career, focusing on work, decision-making, and organizational success.",
    coverImage: "https://m.media-amazon.com/images/I/61LKD6scbfL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The first chapter introduces Sun Tzu's philosophy of strategy."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "32",
    title: "The Art of War",
    author: "Sun Tzu",
    isbn: "9781599869773",
    publishedYear: -500,
    genre: "Military Strategy",
    description: "An ancient Chinese military treatise offering timeless wisdom on strategy, leadership, and conflict, applicable to both warfare and modern life.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Taleb introduces the concept of antifragility."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "31",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    isbn: "9781400067824",
    publishedYear: 2012,
    genre: "Philosophy",
    description: "Explores how certain systems benefit and grow from volatility, disorder, and stress, introducing the concept of 'antifragility' in life, business, and nature.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Greene introduces the nature of human drives and behaviors."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "30",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    isbn: "9780525428145",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "Analyzes the forces that drive human behavior, offering strategies to understand and influence people in personal and professional life.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The journey toward mastery begins with the stories of masters."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "29",
    title: "Mastery",
    author: "Robert Greene",
    isbn: "9780143124177",
    publishedYear: 2012,
    genre: "Self-Improvement",
    description: "Explores the paths of historical masters and provides a blueprint for achieving mastery in any field through dedication, learning, and creativity.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Peterson introduces the concept of order and chaos."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "28",
    title: "Beyond Order: 12 More Rules for Life",
    author: "Jordan Peterson",
    isbn: "9780593084649",
    publishedYear: 2021,
    genre: "Self-Help",
    description: "In this sequel to '12 Rules for Life,' Peterson offers twelve new principles to help readers find meaning and stability in a chaotic world.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter explores the problem of noise in human judgment."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "27",
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    isbn: "9780316451406",
    publishedYear: 2021,
    genre: "Psychology",
    description: "Examines the pervasive problem of 'noise'—randomness and inconsistency in human judgment—and provides strategies to reduce errors in decision-making.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Winston Smith's world and the oppressive regime are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "26",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
    genre: "Dystopian Fiction",
    description: "A chilling vision of a totalitarian future, where Big Brother watches all and independent thought is crushed, exploring themes of surveillance, truth, and freedom.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The principle of extreme ownership is introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "25",
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    isbn: "9781250067050",
    publishedYear: 2015,
    genre: "Leadership",
    description: "Navy SEAL officers share leadership lessons learned in combat, applying them to business and life through the principle of taking full responsibility.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The benefits of waking up early and morning routines are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
 {
    id: "24",
    title: "The 5AM Club",
    author: "Robin Sharma",
    isbn: "9781443456623",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "Advocates waking up early and using the first hours of the day for self-improvement, productivity, and personal growth.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Explores the cultural significance of the TV show 'Friends.'"
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "23",
    title: "I'll Be There for You: The One about Friends",
    author: "Kelsey Miller",
    isbn: "9781488098642",
    publishedYear: 2018,
    genre: "Pop Culture",
    description: "An exploration of the cultural impact, history, and enduring legacy of the TV show 'Friends,' including its influence on society and television.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Introduces the main laws of success and how networks matter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "22",
    title: "The Formula: The Universal Laws of Success",
    author: "Albert-László Barabási",
    isbn: "9780316505499",
    publishedYear: 2018,
    genre: "Business",
    description: "Reveals the hidden patterns behind success, drawing on data science and network theory to explain how performance and networks drive achievement.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The author embarks on his journey into the world of memory championships."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "21",
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    isbn: "9780143120537",
    publishedYear: 2011,
    genre: "Memoir",
    description: "A journalist's journey into the world of competitive memory, blending neuroscience, history, and personal experience to unlock the secrets of remembering everything.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Bolton provides an insider's perspective on White House decision-making."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "20",
    title: "The Room Where It Happened",
    author: "John Bolton",
    isbn: "9781982148034",
    publishedYear: 2020,
    genre: "Political Memoir",
    description: "A firsthand account of John Bolton's time as U.S. National Security Advisor, detailing key events and controversies in the Trump administration.",
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982148041/the-room-where-it-happened-9781982148041_hr.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Lakhiani introduces his framework for questioning societal rules."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "19",
    title: "The Code of the Extraordinary Mind",
    author: "Vishen Lakhiani",
    isbn: "9781623367084",
    publishedYear: 2016,
    genre: "Self-Help",
    description: "Challenges conventional beliefs and offers a framework for breaking free from societal rules to create a life of happiness, success, and meaning.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Godin encourages readers to become indispensable."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "18",
    title: "Linchpin",
    author: "Seth Godin",
    isbn: "9781591844099",
    publishedYear: 2010,
    genre: "Business",
    description: "Encourages readers to become indispensable at work by embracing creativity, initiative, and emotional labor, rather than following the status quo.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The story begins with a life-changing secret."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "17",
    title: "The Husband's Secret",
    author: "Liane Moriarty",
    isbn: "9780399159348",
    publishedYear: 2013,
    genre: "Contemporary Fiction",
    description: "A suspenseful novel about a woman who discovers her husband's devastating secret, forcing her to confront the boundaries of love, trust, and forgiveness.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Pink introduces the right-brain skills needed for the future."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "16",
    title: "A Whole New Mind",
    author: "Daniel H. Pink",
    isbn: "9781594481710",
    publishedYear: 2005,
    genre: "Business",
    description: "Argues that creative and empathetic right-brain thinking will be essential in the future, and outlines the skills needed to thrive in a changing world.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Bernstein introduces the idea of trusting the universe."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "15",
    title: "The Universe Has Your Back",
    author: "Gabrielle Bernstein",
    isbn: "9781401946548",
    publishedYear: 2016,
    genre: "Spirituality",
    description: "Offers spiritual guidance and practical tools to help readers release fear, trust the universe, and find happiness and peace.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Ekman introduces the concept of detecting lies."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "14",
    title: "Telling Lies: Clues to Deceit in the Marketplace, Politics, and Marriage",
    author: "Paul Ekman",
    isbn: "9780393321888",
    publishedYear: 1985,
    genre: "Psychology",
    description: "Explores the science of deception, explaining how and why people lie and how to detect lies through facial expressions and behavior.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Collins lays out the framework for turning good companies into great ones."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "13",
    title: "Good to Great",
    author: "Jim Collins",
    isbn: "9780066620992",
    publishedYear: 2001,
    genre: "Business",
    description: "Examines why some companies make the leap from good to great, identifying key leadership traits and organizational practices that drive lasting success.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The Theory of Constraints is introduced in a business context."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "12",
    title: "The Goal",
    author: "Eliyahu M. Goldratt",
    isbn: "9780884271956",
    publishedYear: 1984,
    genre: "Business Fiction",
    description: "A business novel that explains the Theory of Constraints through the story of a plant manager racing to save his factory and improve performance.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Covey introduces the concept of the 8th habit."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "11",
    title: "The 8th Habit",
    author: "Stephen Covey",
    isbn: "9780743287937",
    publishedYear: 2004,
    genre: "Self-Help",
    description: "Builds on 'The 7 Habits of Highly Effective People' by introducing the concept of finding one's voice and inspiring others to do the same.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Lee Kuan Yew recounts Singapore's transformation journey."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "10",
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew",
    isbn: "9780060197764",
    publishedYear: 2000,
    genre: "Memoir",
    description: "The memoir of Singapore's founding father, chronicling how he transformed a struggling former colony into a thriving global city-state.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Chang challenges conventional economic wisdom in this chapter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "9",
    title: "Economics: The User's Guide",
    author: "Ha-Joon Chang",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Economics",
    description: "A clear and accessible introduction to economics, challenging conventional wisdom and providing the tools to understand how economies really work.",
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
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. John Green reviews the human impact on the planet."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "8",
    title: "The Anthropocene Reviewed",
    author: "John Green",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1616514130l/55145261.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Greene introduces the first law of power."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "7",
    title: "48 Laws of Power",
    author: "Robert Greene",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Hewlett Packard introduces strategies for antifragility."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "6",
    title: "Strategy of Antifragile",
    author: "Hewlett Packard",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://arminehslibrary.am/images/content/25-09-2023/hewlett-packard-strategia-antihrupkosti_gf_iC.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Will Smith begins his journey of self-discovery and fame."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "5",
    title: "Will",
    author: "Will Smith",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1624126289l/58375739.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Hallam introduces the basics of expat investing."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "4",
    title: "Millionaire Expat",
    author: "Hallam",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515309359i/37846172.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The story opens with the world of 19th-century Uzbekistan."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "Bygone Days",
    author: "Abdullah Qodiriy",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/61fq6IE2h9L._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The novel begins with Fugui's fortunes and family life."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "2",
    title: "To Live",
    author: "Yu Hua",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://images.uzum.uz/cv65oclpb7f9qcngdr8g/original.jpg",
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
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    isbn: "9780465050659",
    publishedYear: 2020,
    genre: "Contemporary Fiction",
    description: "A novel about Nora Seed, who finds herself in a magical library between life and death, where she can explore all the possible lives she could have lived and search for meaning, regret, and hope.",
    coverImage: "https://m.media-amazon.com/images/I/71ls-I6A5KL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "This book completely changed how I think about user experience and design. The principles are timeless and applicable beyond just physical objects - they apply to digital interfaces, processes, and systems. Norman's insights about affordances and signifiers are particularly valuable.",
    downloadUrl: "https://libgen.li/ads.php?md5=1b8c3c1c7877cc2223990f3f8ead5590",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Psychopathology of Everyday Things",
        content: "Introduction to design problems in everyday objects",
        notes: "Great examples of doors that confuse people. The Norman Door concept is introduced here. This chapter highlights the importance of intuitive design."
      },
      {
        id: "ch2", 
        chapterNumber: 2,
        title: "The Psychology of Everyday Actions",
        content: "How people interact with objects and the mental models they form",
        notes: "The seven stages of action framework is crucial for understanding user behavior. This chapter explains how users approach and complete tasks."
      },
      {
        id: "ch3",
        chapterNumber: 3,
        title: "Knowledge in the Head and in the World",
        content: "How we use both internal knowledge and external cues to navigate the world",
        notes: "The distinction between knowledge in the head vs. in the world is fundamental to good design. This chapter explores how design can support memory."
      }
    ],
    tags: ["design", "psychology", "UX", "usability"]
  }
];