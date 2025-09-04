// Article Images - Import your images here
import thumbnail1_1 from '@/assets/article-images/thumbnail1_1.jpg';
import oop_sucks from '@/assets/article-videos/oop_sucks.mp4';
import dayinthelife from "@/assets/article-images/dayinthelife.jpg"
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
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'CS degree vs AI',
    excerpt: 'This is my personal opinion about majoring in computer science while AI is taking over literally everything from performing human tasks to coding itself.',
    publishedAt: '2023-02-12',
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
    id: '2',
    title: 'DITL: Marketing or comparison tool?',
    excerpt: 'Day in the life videos are popular but not always. Read my opinion',
    publishedAt: '2023-03-10',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    image: dayinthelife, // <-- This will be used as video poster
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
    id: '3',
    title: 'If blue-collar job sucks. Why do them?',
    excerpt: 'Blue-collar - a labor that does not require working in an office. If you didn’t know it',
    publishedAt: '2024-01-20',
    readTime: 4,
    tags: ['Writing', 'Tips'],
    content: `# Blue-collar jobs. Are they easy or stress-free?

This is where your actual article content goes. You can write in markdown format, which means:

## You can use headings like this

And regular paragraphs just by typing normally.

### Smaller headings too

**Bold text** and *italic text* work great.

You can make lists:
- Point one
- Point two  
- Point three

Or numbered lists:
1. First thing
2. Second thing
3. Third thing

> You can even add quotes like this for emphasis

And if you want to include code examples:
\`\`\`
const example = "code goes here";
\`\`\`

[Links work too](https://example.com)

Just write naturally and use these formatting tricks when you need them!`
  },
  {
    id: '4',
    title: 'Writing in the Digital Age',
    excerpt: 'How technology has transformed the way we write and communicate in the modern world.',
    publishedAt: '2024-01-25',
    readTime: 6,
    tags: ['Technology', 'Writing', 'Communication'],
    content: `# Writing in the Digital Age

Technology has fundamentally changed how we approach writing. From typewriters to word processors to AI assistants, each evolution has shaped not just our tools, but our thinking processes.

## The Evolution of Writing Tools

The journey from pen and paper to digital documents represents more than just technological progress—it's a transformation in how we think about and approach writing itself.

### Traditional Writing
- Deliberate and careful
- Limited editing capabilities  
- Physical connection to words
- Slower pace encouraged deeper thought

### Digital Revolution
- Infinite editing possibilities
- Real-time collaboration
- Instant publication
- Speed over reflection

## Modern Challenges

While digital tools have democratized publishing and made writing more accessible, they've also introduced new challenges:

**Information Overload**: With so much content available, standing out requires exceptional quality and unique perspective.

**Attention Economy**: Writers must compete with endless distractions for readers' limited attention spans.

**AI Assistance**: As AI becomes more sophisticated, the line between human and machine-generated content blurs.

## Finding Balance

The key isn't to reject technology or embrace it blindly, but to use it intentionally:

1. Use digital tools for efficiency, not as a crutch
2. Maintain the human element in your voice
3. Focus on quality over quantity
4. Preserve time for deep, uninterrupted thinking

The future of writing lies not in choosing between traditional and digital approaches, but in thoughtfully combining the best of both worlds.`
  }
];