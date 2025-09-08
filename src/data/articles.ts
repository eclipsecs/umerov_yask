// Article Images - Import your images here
import thumbnail1_1 from '@/assets/article-images/thumbnail1_1.jpg';
import oop_sucks from '@/assets/article-videos/oop_sucks.mp4';
import dayinthelife from "@/assets/article-images/dayinthelife.jpg"
import youtube from "@/assets/article-images/youtube.png"
import brain from "@/assets/article-images/brain.png"
// Add more images like this:
// import myImage from '@/assets/article-images/my-image.png';

// Article Videos - Import your videos here
// import myVideo from '@/assets/article-videos/my-video.mp4';
// Add more videos like this (supported formats: .mp4, .webm, .ogg)

// Example demonstration (uncomment when you have a real video file):
// import codingDemoVideo from '@/assets/article-videos/coding-demo.mp4';
import sampleVideoThumbnail from '@/assets/article-videos/sample-video-thumbnail.png';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  image?: string; // Optional image for articles
  video?: string; // Optional video for articles
  youtubeUrl?: string; // Optional YouTube URL instead of video file
}

export const articles: Article[] = [
  {
    id: '1',
    title: '🧭 Consistency issues',
    excerpt: 'Why is it so hard to stay consistent?',
    publishedAt: '2024-05-05',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    youtubeUrl: "https://www.youtube.com/watch?v=FOVUpRC9j2k", // <-- This will be used as video poster
    content:
    `
## Consistency is crucial, now, espeically.

I'm writing about this still...
    
    `
  },
  {
    id: '2',
    title: '🎓 Computer science major in an almost AI world',
    excerpt: 'This is my personal opinion about majoring in computer science while AI is taking over literally everything from performing human tasks to coding itself.',
    publishedAt: '2024-05-03',
    readTime: 3,
    tags: ['AI', 'Coding', 'Opinion'],
    video: oop_sucks,
    image: thumbnail1_1, // <-- Link your imported image here
    content:
    ` 
## Majoring in CS vs Artificial Intelligence

So, learning computer science is fun until you realize that AI is already taking over many jobs that require coding. "FANG" Companies, these days, are no more looking to hire programmers either.
On the one side, this is a technological revolution. Basically shaping everything around us. AI is rewriting codes that once took months to write, in a matter of seconds. Various companies used to hire individuals with extensive knowledge in programming. These people with deep knowledge were paid millions of dollars to reprogram a software or suggest architectural solutions.

However, does this evolution in technology suggest that majoring in CS is becoming obsolete? Far from it.

You see, back in the days, thousands of programmers had to use a platform such as Stackoverflow to find solutions to various problems. And such issues varied from being simple to extremely complicated to solve that took not less than a month to complete, not to mention the bugs that boiled the heck of our blood - which also prolonged the process of completing a code.
Just a few years ago, when Ai was just considered to be a joke, I was wholly different coder. I was breezing through documentation and writing mostly functional code. At my worst, I would literally sit and chase typos and strange bugs for hours, to no avail.

**This article will continue...**
    `
  },
  {
    id: '3',
    title: '🚨 Annoying Day in the Life videos',
    excerpt: 'Day in the life videos are popular but not always. Read my opinion',
    publishedAt: '2024-04-29',
    readTime: 5,
    tags: ['YouTube', 'Trend', 'Trap'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    image: dayinthelife, // <-- This will be used as video poster
    content:
    `
## Is it a trend or a comparison tool?
    
Day in the Life (DITL) videos have recently taken over social media, becoming a trend that countless creators — both amateurs and well-known influencers — are eager to follow. From one side, it is easy to see why. These clips are engaging, especially for young viewers who look up to content creators as role models. Watching how their idols spend an ordinary day can feel authentic, even though much of the reality is often left off-screen.

At their best, such videos can encourage people of all ages to move away from a sedentary lifestyle and to establish routines, whether studying at school, working at an office, or pursuing personal projects. For some, the very act of creating this type of content can encourage them to thrive after something, maybe finding a purpose in life or unlock their hidden potentials, talents, creativity - a part which is mostly developed at school.

However, there are bad sides to this. Most celebrities and vloggers refuse to reveal the less polished aspects of their daily lives. It is unrealistic to assume that every day runs smoothly, filled only with productivity and positive energy. Many creators struggle to balance content production with their private lives, and some may not even have a clear sense of purpose. This raises an important point: if viewers consume such content uncritically, they may be misled into comparing themselves with an ideal that does not exist - gradually ending up feeling stressed and depressed.
That said, the solution is not to reject the trend altogether or to dismiss it as a waste of time. Instead, we should be attentive of how and what we consume online. When approached with awareness, DITL videos can be entertaining, sometimes even inspiring.

If I were to join the trend myself, I would use it not to showcase perfection, but to cheer people on, like a personal coach or even a cheerleader, reminding them that life is about effort and progress rather than flawless routines.
    
    `
  },
  {
    id: '4',
    title: '⚙️ If blue-collar job sucks. Why do them?',
    excerpt: 'Blue-collar - a labor that does not require working in an office. If you didn’t know it',
    publishedAt: '2024-04-27',
    readTime: 4,
    tags: ['Hierarchy', 'Jobs'],
    youtubeUrl: "https://www.youtube.com/watch?v=I-hyT3Dw2eo",
    content: `

## Why blue-collar jobs are often look down upon.

Back in Japan, I used to work in various factories, ranging from those that manufacture steel, producing camera lens or chips for Canon (yes, like those you see in video, where Chinese people install tiny details of a camera or a phone) I was constantly exposed to ignorance. And, it was not until I landed a job at a hotel as a front-desk administrator, I understood the reason.

Japan is a country where people of all ages work 24/7. I mean the country never shuts down. Convenience stores working 24 hour clock, factories transporting goods shipped from different countries, mails and orders being delivered, night clubs being advertised and visited by perverts and many more.



 `
  },
  {
    id: '5',
    title: '🍼 Should parents decide the babys trait',
    excerpt: 'Parents drawing their babys life, and how does it influence their life.',
    publishedAt: '2024-04-26',
    readTime: 3,
    tags: ['Baby', 'Parenting', 'Genetics'],
    // Example YouTube URL - replace with actual video URL when you have one
    youtubeUrl: "https://youtu.be/SgtdVWEBXOM?feature=shared", // Example YouTube URL
    content: `# Modifying baby's genetics

Genes are the instruction code for all of an individual features. And, genetic modification (altering the genes in the organism) has been debated for centuries.

Understanding how genes work or their structure can help us understand to treat medical conditions, and also shape how a particular person develop. Although this has been a rare chance to see in real life, the movie "Gattaca" depicts a world where characteristics can be selected before birth. However, modern-day companies are able to modify genetic data using a computer or a technology that is made for this. CRISPR, for example, where therapeutics cure various diseases like hemoglobinopathis, cancer, and disease of the liver, lung and muscle. Therefore, its important to consider the ethics of such modification occurring in the modern world to point which this might causes severe issues, or a future goal for businesses and research.

**To be continued...**

`
  },
  {
    id: '6',
    title: '🎬 Reading Walkthroughs: YouTube',
    excerpt: 'How technology has transformed the way we write and communicate in the modern world.',
    publishedAt: '2024-04-25',
    readTime: 3,
    tags: ['Technology', 'Writing', 'Communication'],
    // Example YouTube URL - replace with actual video URL when you have one
    image: youtube, // Example YouTube URL
    content: `

## Why do I make Reading walkthroughs on YouTube?

`
  },
  {
    id: '7',
    title: '🌍 Should I travel or explore through papers',
    excerpt: 'Conventional way of travelling versus modern-day travelers',
    publishedAt: '2024-04-21',
    readTime: 6,
    tags: ['Travelling', 'Lex Fridman', 'Advice'],
    // Example YouTube URL - replace with actual video URL when you have one
    youtubeUrl: "https://www.youtube.com/watch?v=bGbHTFN_54s", // Example YouTube URL
    content: `
    
## The quest to understand the benefits of travelling

People have always been curious about the world around them. Some satisfy that curiosity by getting on a plane and seeing new places with their own eyes. Others prefer to sit down with books, research papers, or travel writing to learn about the world through words. Both choices are valid, and both shape how we understand life. But they offer very different kinds of experiences.

There is something irreplaceable about actually going somewhere. Travel is not just about seeing a landmark — it’s about smelling street food in a crowded market, hearing the noise of unfamiliar languages, or feeling the excitement of being lost in a city you’ve never visited before. These sensory details stick in memory in a way no textbook ever can.

Travel also changes people. When you meet others who live differently, you start to question your own assumptions. A short conversation with a local in another country can teach more about empathy and perspective than hours of reading about “cultural differences.” Many travelers also find themselves becoming more adaptable and resilient. Delayed flights, confusing maps, or unexpected challenges force you to think quickly and keep calm — skills that benefit everyday life, too.

And let’s not forget inspiration. Countless writers, artists, and scientists found their ideas while traveling. Darwin’s voyage led him to write On the Origin of Species. Writers like Mark Twain or Ernest Hemingway also drew much of their creativity from time spent abroad. Without travel, their work might not have existed in the same way.

On the other hand, exploring through reading is often underrated. Books and research papers open doors that even the most adventurous traveler could never reach. You can read about black holes, ancient civilizations, or the bottom of the ocean — places and ideas that no ordinary trip will ever take you to.

Reading is also more accessible. Not everyone has the money or freedom to travel. But with a library card, a laptop, or even a borrowed book, anyone can go on a mental journey. Unlike travel, reading doesn’t require visas, long flights, or big expenses. It also gives depth. A historian’s detailed work on the Roman Empire, for example, provides layers of knowledge far beyond what you could get just by standing in front of the Colosseum.

Books and papers also allow safe exploration. Some parts of the world are dangerous or simply too remote. Reading makes it possible to explore them without risk. In this sense, reading is the great equalizer — it gives almost everyone access to knowledge, regardless of where they live.

The real difference lies in the type of exploration each one offers. Traveling is alive, immediate, and deeply personal. Reading is thoughtful, analytical, and often abstract. Travel creates your own stories; reading connects you to the stories of others.

But it would be wrong to set them up as opposites. In fact, they complement each other. Traveling without reading can leave experiences shallow. Reading without traveling can make knowledge feel detached. When combined, they enrich each other: books give travel more meaning, and travel makes books come alive.

There isn’t a universal answer. For someone with limited resources, reading may be the main way to explore. For those with the freedom to move around, travel adds dimension to what they’ve read. Ideally, we would do both — read before a journey to prepare, then travel to bring that knowledge to life.

Exploration is not only about distance, it’s about curiosity. Whether we travel physically or through the written word, what matters is the desire to learn and to see the world with fresh eyes. Traveling fills us with real moments and emotions; reading gives us context, perspective, and ideas. Together, they don’t just show us the world — they help us understand it.

`
  },
  {
    id: '8',
    title: '📕 Learning from article',
    excerpt: 'Do articles help you learn about anything?',
    publishedAt: '2024-04-21',
    readTime: 6,
    tags: ['Travelling', 'Lex Fridman', 'Advice'],
    // Example YouTube URL - replace with actual video URL when you have one
    youtubeUrl: "https://www.youtube.com/watch?v=bGbHTFN_54s", // Example YouTube URL
    content: `
    
## The quest to understand the benefits of travelling

People have always been curious about the world around them. Some satisfy that curiosity by getting on a plane and seeing new places with their own eyes. Others prefer to sit down with books, research papers, or travel writing to learn about the world through words. Both choices are valid, and both shape how we understand life. But they offer very different kinds of experiences.

There is something irreplaceable about actually going somewhere. Travel is not just about seeing a landmark — it’s about smelling street food in a crowded market, hearing the noise of unfamiliar languages, or feeling the excitement of being lost in a city you’ve never visited before. These sensory details stick in memory in a way no textbook ever can.

Travel also changes people. When you meet others who live differently, you start to question your own assumptions. A short conversation with a local in another country can teach more about empathy and perspective than hours of reading about “cultural differences.” Many travelers also find themselves becoming more adaptable and resilient. Delayed flights, confusing maps, or unexpected challenges force you to think quickly and keep calm — skills that benefit everyday life, too.

And let’s not forget inspiration. Countless writers, artists, and scientists found their ideas while traveling. Darwin’s voyage led him to write On the Origin of Species. Writers like Mark Twain or Ernest Hemingway also drew much of their creativity from time spent abroad. Without travel, their work might not have existed in the same way.

On the other hand, exploring through reading is often underrated. Books and research papers open doors that even the most adventurous traveler could never reach. You can read about black holes, ancient civilizations, or the bottom of the ocean — places and ideas that no ordinary trip will ever take you to.

Reading is also more accessible. Not everyone has the money or freedom to travel. But with a library card, a laptop, or even a borrowed book, anyone can go on a mental journey. Unlike travel, reading doesn’t require visas, long flights, or big expenses. It also gives depth. A historian’s detailed work on the Roman Empire, for example, provides layers of knowledge far beyond what you could get just by standing in front of the Colosseum.

Books and papers also allow safe exploration. Some parts of the world are dangerous or simply too remote. Reading makes it possible to explore them without risk. In this sense, reading is the great equalizer — it gives almost everyone access to knowledge, regardless of where they live.

The real difference lies in the type of exploration each one offers. Traveling is alive, immediate, and deeply personal. Reading is thoughtful, analytical, and often abstract. Travel creates your own stories; reading connects you to the stories of others.

But it would be wrong to set them up as opposites. In fact, they complement each other. Traveling without reading can leave experiences shallow. Reading without traveling can make knowledge feel detached. When combined, they enrich each other: books give travel more meaning, and travel makes books come alive.

There isn’t a universal answer. For someone with limited resources, reading may be the main way to explore. For those with the freedom to move around, travel adds dimension to what they’ve read. Ideally, we would do both — read before a journey to prepare, then travel to bring that knowledge to life.

Exploration is not only about distance, it’s about curiosity. Whether we travel physically or through the written word, what matters is the desire to learn and to see the world with fresh eyes. Traveling fills us with real moments and emotions; reading gives us context, perspective, and ideas. Together, they don’t just show us the world — they help us understand it.

`
  }
];