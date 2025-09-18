// Teaching Images/Videos - reused from articles assets for now
import thumbnail1_1 from '@/assets/article-images/thumbnail1_1.jpg';
import oop_sucks from '@/assets/article-videos/oop_sucks.mp4';
import dayinthelife from "@/assets/article-images/dayinthelife.jpg";
import sampleVideoThumbnail from '@/assets/article-videos/sample-video-thumbnail.png';

export interface Teaching {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  image?: string; // Optional image for teachings
  video?: string; // Optional video for teachings
  youtubeUrl?: string; // Optional YouTube URL instead of video file
}

export const teachings: Teaching[] = [
   {
    id: 't17',
    title: 'Doing great things and being a human',
    excerpt: 'Doing everything you can to help, but also forgetting the small parts',
    publishedAt: '2024-02-16',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    image: dayinthelife,
    content:
    `
## Is it a trend or a comparison tool?
    
“Day in the Life” (DITL) videos have recently taken over social media, becoming a trend that countless creators — both amateurs and well-known influencers — are eager to follow. From one side, it is easy to see why. These clips are engaging, especially for young viewers who look up to content creators as role models. Watching how their idols spend an ordinary day can feel authentic, even though much of the reality is often left off-screen.

At their best, such videos can encourage people of all ages to move away from a sedentary lifestyle and to establish routines, whether studying at school, working at an office, or pursuing personal projects. For some, the very act of creating this type of content can encourage them to thrive after something, maybe finding a purpose in life or unlock their hidden potentials, talents, creativity - a part which is mostly developed at school.

However, there are bad sides to this. Most celebrities and vloggers refuse to reveal the less polished aspects of their daily lives. It is unrealistic to assume that every day runs smoothly, filled only with productivity and positive energy. Many creators struggle to balance content production with their private lives, and some may not even have a clear sense of purpose. This raises an important point: if viewers consume such content uncritically, they may be misled into comparing themselves with an ideal that does not exist - gradually ending up feeling stressed and depressed.
That said, the solution is not to reject the trend altogether or to dismiss it as a waste of time. Instead, we should be attentive of how and what we consume online. When approached with awareness, DITL videos can be entertaining, sometimes even inspiring.

If I were to join the trend myself, I would use it not to showcase perfection, but to cheer people on, like a personal coach or even a cheerleader, reminding them that life is about effort and progress rather than flawless routines.
    
    `
  },
  {
    id: 't16',
    title: 'Are you a teacher?',
    excerpt: 'Do you have the guts to be one?',
    publishedAt: '2025-02-14',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    image: dayinthelife,
    content:
    `
## Is it a trend or a comparison tool?
    
“Day in the Life” (DITL) videos have recently taken over social media, becoming a trend that countless creators — both amateurs and well-known influencers — are eager to follow. From one side, it is easy to see why. These clips are engaging, especially for young viewers who look up to content creators as role models. Watching how their idols spend an ordinary day can feel authentic, even though much of the reality is often left off-screen.

At their best, such videos can encourage people of all ages to move away from a sedentary lifestyle and to establish routines, whether studying at school, working at an office, or pursuing personal projects. For some, the very act of creating this type of content can encourage them to thrive after something, maybe finding a purpose in life or unlock their hidden potentials, talents, creativity - a part which is mostly developed at school.

However, there are bad sides to this. Most celebrities and vloggers refuse to reveal the less polished aspects of their daily lives. It is unrealistic to assume that every day runs smoothly, filled only with productivity and positive energy. Many creators struggle to balance content production with their private lives, and some may not even have a clear sense of purpose. This raises an important point: if viewers consume such content uncritically, they may be misled into comparing themselves with an ideal that does not exist - gradually ending up feeling stressed and depressed.
That said, the solution is not to reject the trend altogether or to dismiss it as a waste of time. Instead, we should be attentive of how and what we consume online. When approached with awareness, DITL videos can be entertaining, sometimes even inspiring.

If I were to join the trend myself, I would use it not to showcase perfection, but to cheer people on, like a personal coach or even a cheerleader, reminding them that life is about effort and progress rather than flawless routines.
    
    `
  },
  {
    id: 't15',
    title: 'Love-hate reationship with ChatGPT',
    excerpt: 'I love ChatGPT, but I hate how it makes me feel sometimes.',
    publishedAt: '2025-02-12',
    readTime: 3,
    tags: ['AI', 'Learning', 'Opinion'],
    video: oop_sucks,
    image: thumbnail1_1,
    content:
    ` 
## Studying vs Artificial Intelligence

AI is accelerating everything, but intentional learning still matters. Use AI as a tool, not a crutch.

**This teaching will continue...**
    `
  },
  {
    id: 't14',
    title: 'How did I improve my reading score.',
    excerpt: 'One person that transformed my reading skills.',
    publishedAt: '2025-02-10',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    image: dayinthelife,
    content:
    `
## Is it a trend or a comparison tool?
    
“Day in the Life” (DITL) videos have recently taken over social media, becoming a trend that countless creators — both amateurs and well-known influencers — are eager to follow. From one side, it is easy to see why. These clips are engaging, especially for young viewers who look up to content creators as role models. Watching how their idols spend an ordinary day can feel authentic, even though much of the reality is often left off-screen.

At their best, such videos can encourage people of all ages to move away from a sedentary lifestyle and to establish routines, whether studying at school, working at an office, or pursuing personal projects. For some, the very act of creating this type of content can encourage them to thrive after something, maybe finding a purpose in life or unlock their hidden potentials, talents, creativity - a part which is mostly developed at school.

However, there are bad sides to this. Most celebrities and vloggers refuse to reveal the less polished aspects of their daily lives. It is unrealistic to assume that every day runs smoothly, filled only with productivity and positive energy. Many creators struggle to balance content production with their private lives, and some may not even have a clear sense of purpose. This raises an important point: if viewers consume such content uncritically, they may be misled into comparing themselves with an ideal that does not exist - gradually ending up feeling stressed and depressed.
That said, the solution is not to reject the trend altogether or to dismiss it as a waste of time. Instead, we should be attentive of how and what we consume online. When approached with awareness, DITL videos can be entertaining, sometimes even inspiring.

If I were to join the trend myself, I would use it not to showcase perfection, but to cheer people on, like a personal coach or even a cheerleader, reminding them that life is about effort and progress rather than flawless routines.
    
    `
  },
  {
    id: 't13',
    title: 'Results or salary?',
    excerpt: 'Which one to chase in between? Salary or results?.',
    publishedAt: '2025-02-06',
    readTime: 4,
    tags: ['Work', 'Mindset'],
    content: `# Purpose and work

Short, actionable lessons will live here. Use markdown as needed.`
  },
  {
    id: 't12',
    title: 'When should start learning a language',
    excerpt: 'Choosing the right moment. Although, there is no such thing.',
    publishedAt: '2025-02-03',
    readTime: 6,
    tags: ['Ethics', 'Technology'],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: `# Teaching snippet

Balance tools with values.`
  },
  {
    id: 't11',
    title: 'American accent',
    excerpt: 'How did learn to speak like Americans. Or am I an American now?',
    publishedAt: '2025-01-29',
    readTime: 5,
    tags: ['English', 'Communication', 'Skills'],
    content: `
# Mastering English Communication

Effective communication in English requires consistent practice and a focus on clarity. Start by expanding your vocabulary and learning common expressions used in everyday conversations.

Listening to native speakers and engaging in speaking exercises can significantly boost your confidence. Writing regularly, such as journaling or composing essays, helps reinforce grammar and sentence structure.

Remember, making mistakes is part of the learning process. Embrace feedback and keep refining your skills for continuous improvement.
    `
  },
  {
    id: 't10',
    title: 'Task 1 is a mix of madness and precision',
    excerpt: 'How to approach IELTS writing tasks with confidence and structure.',
    publishedAt: '2025-01-27',
    readTime: 6,
    tags: ['IELTS', 'Writing', 'Exam'],
    content: `
# IELTS Writing: Strategies for Success

Understanding the task requirements is crucial. Analyze the prompt carefully and plan your essay before writing.

Use clear topic sentences to organize paragraphs and support your ideas with relevant examples. Pay attention to coherence and cohesion to ensure your essay flows logically.

Practice timed writing to improve your speed and accuracy. Reviewing model essays can also provide valuable insights into effective writing styles.
    `
  },
  {
    id: 't9',
    title: 'Articles are like steroids',
    excerpt: 'Can reading articles help to grow vocabulary?.',
    publishedAt: '2025-01-25',
    readTime: 4,
    tags: ['Grammar', 'English', 'Basics'],
    content: `
# Grammar Essentials for Everyday Use

Mastering basic grammar rules lays the foundation for clear communication. Focus on verb tenses, subject-verb agreement, and sentence structure.

Regularly review common mistakes and practice exercises to reinforce your understanding. Using grammar in context, such as through reading and writing, helps internalize the rules.

Don’t hesitate to consult grammar references or seek feedback to clarify doubts.
    `
  },
  {
    id: 't8',
    title: 'Always chasing language',
    excerpt: 'What did I acquire while teaching a language.',
    publishedAt: '2025-01-22',
    readTime: 3,
    tags: ['Motivation', 'Learning', 'Mindset'],
    content: `
# Staying Motivated in Language Learning

Setting clear, achievable goals helps maintain focus. Celebrate small milestones to acknowledge your progress.

Incorporate variety into your study routine to keep things interesting—use videos, podcasts, books, and conversations.

Remember why you started and visualize the benefits of mastering the language to stay inspired during challenging times.
    `
  },
  {
    id: 't7',
    title: 'Telegram courses',
    excerpt: 'My opinion about marathons, courses: and a slight honesty.',
    publishedAt: '2025-01-18',
    readTime: 5,
    tags: ['Learning Centre', 'Education', 'Tips'],
    content: `
# Truths About Learning Centres

Learning centres provide structured environments and resources but require your active participation to be effective.

Choose centres that align with your goals and learning style. Engage with instructors and peers to maximize your learning.

Be proactive in seeking feedback and practicing outside of scheduled sessions to accelerate progress.
    `
  },
  {
    id: 't6',
    title: 'Language teaching is easy? Lets debate...',
    excerpt: 'Uncovering all the nonsense you might have heard.',
    publishedAt: '2025-01-15',
    readTime: 6,
    tags: ['Teaching', 'Philosophy', 'Learning'],
    content: `
# The Big Picture: Overall Teaching Philosophy

Teaching is not just about transferring knowledge but inspiring curiosity and critical thinking.

Encourage learners to ask questions, explore ideas, and apply concepts in real life. Adapt teaching methods to individual needs for better engagement.

Lifelong learning is a continuous journey; fostering a growth mindset helps learners embrace challenges and persist through difficulties.
    `
  },
  {
    id: 't5',
    title: 'Teaching English to anyone',
    excerpt: 'Dealing with people from all social backgrounds.',
    publishedAt: '2025-01-13',
    readTime: 4,
    tags: ['English', 'Teaching', 'Conversation'],
    content: `
# Teaching English in Real Life

Using English outside the classroom can be tricky, but it’s the best way to really learn. Encourage your students to practice with friends, order food, or even chat with strangers.

Keep lessons practical and fun by focusing on common phrases and everyday situations. Role-playing can help build confidence and make speaking less scary.

Remember, making mistakes is part of learning. Celebrate small wins and keep the conversation going!
    `
  },
  {
    id: 't4',
    title: 'Grammar multiplied by infinity',
    excerpt: 'Why Grammar is dull and important simultaneously.',
    publishedAt: '2025-01-10',
    readTime: 3,
    tags: ['Grammar', 'Teaching', 'Fun'],
    content: `
# Fun Ways to Teach Grammar

Grammar doesn’t have to be boring! Use games, songs, and stories to bring rules to life.

Try activities like sentence building races or grammar bingo to keep students engaged. When learners have fun, they remember better.

Mix up your lessons with quizzes and group work to keep the energy high and the learning natural.
    `
  },
  {
    id: 't3',
    title: 'Ensuring a student thinks clearly',
    excerpt: 'Spoonfeeding student brains in the right way.',
    publishedAt: '2025-01-08',
    readTime: 4,
    tags: ['Motivation', 'Teaching', 'Mindset'],
    content: `
# Motivating Students Without Pressure

Pushing too hard can backfire. Instead, focus on encouragement and celebrate progress, no matter how small.

Set clear but flexible goals and remind students why they started learning. Use positive feedback to build their confidence.

Create a supportive environment where mistakes are okay and learning feels safe and enjoyable.
    `
  },
  {
    id: 't2',
    title: 'How to choose a tutor',
    excerpt: 'I dont mean to hate, just an opinion debunking about bull***t.',
    publishedAt: '2025-01-05',
    readTime: 3,
    tags: ['Learning Centre', 'Myths', 'Education'],
    content: `
# Common Myths About Learning Centres

Some think learning centres will do all the work for you — that’s not true. Your effort matters most.

Others believe you have to be perfect to join, but everyone starts somewhere. Centres are there to help you grow at your own pace.

Knowing the facts can help you choose the right place and get the most out of your experience.
    `
  },
  {
    id: 't1',
    title: 'Writing is fun but not always',
    excerpt: 'How enjoying its gets when you teach writing, but the challenges to deal with too.',
    publishedAt: '2025-01-03',
    readTime: 5,
    tags: ['Writing', 'Teaching', 'Skills'],
    content: `
## The impact writing had and has on my life.

**Writing...**

    `
  }
];
