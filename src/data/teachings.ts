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
    id: 't6',
    title: 'Doing great things and being a human',
    excerpt: 'Do newcomers to English courses what they are signed up for?',
    publishedAt: '2024-03-10',
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
    id: 't5',
    title: 'Selecting a teacher',
    excerpt: 'Do newcomers to English courses know what they are signing up for?',
    publishedAt: '2024-03-10',
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
    id: 't4',
    title: '🎓 Learning in an AI world',
    excerpt: 'Thoughts on studying effectively when AI is everywhere.',
    publishedAt: '2023-02-12',
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
    id: 't3',
    title: '🚨 Annoying Day in the Life videos',
    excerpt: 'Day in the life videos are popular but not always. Read my opinion',
    publishedAt: '2023-03-10',
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
    id: 't2',
    title: '⚙️ Purposeful work vs easy work',
    excerpt: 'Notes on meaningful effort and balance.',
    publishedAt: '2024-01-20',
    readTime: 4,
    tags: ['Work', 'Mindset'],
    content: `# Purpose and work

Short, actionable lessons will live here. Use markdown as needed.`
  },
  {
    id: 't1',
    title: '🍼 Should parents decide the baby\'s traits?',
    excerpt: 'Ethics of choice and technology.',
    publishedAt: '2024-01-25',
    readTime: 6,
    tags: ['Ethics', 'Technology'],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: `# Teaching snippet

Balance tools with values.`
  }
];
