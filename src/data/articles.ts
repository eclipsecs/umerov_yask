// Article Images - Import your images here
import thumbnail1_1 from '@/assets/article-images/thumbnail1_1.jpg';
import oop_sucks from '@/assets/article-videos/oop_sucks.mp4';
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
    readTime: 15,
    tags: ['AI', 'Coding', 'Opinion'],
    video: oop_sucks,
    image: thumbnail1_1, // <-- Link your imported image here
    content:
    ` 
## Majoring in CS vs Artificial Intelligence

So, learning computer science is fun until you realize that AI is already taking over many jobs that require coding.
"FANG" Companies, these days, are no more looking to hire programmers either.

On the one side, this is a technological revolution. Basically shaping everything around us. AI is rewriting codes that once
took months to write, in a matter of seconds. Various companies used to hire individuals with extensive knowledge in programming.
These people with deep knowledge were paid millions of dollars to reprogram a software or suggest architectural solutions.

However, does this evolution in technology suggest that majoring in CS is becoming obsolete? Far from it.
    `
  },
  {
    id: '2',
    title: 'Day in the life videos are horrible',
    excerpt: 'Learn how to establish and maintain a writing routine that works with your lifestyle and helps you achieve your goals.',
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['Productivity', 'Habits', 'Writing Tips'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    image: thumbnail1_1, // <-- This will be used as video poster
    content: `# ##Building Consistent Writing Habits

Consistency is the secret weapon of successful writers. It's not about writing perfectly every day—it's about showing up regularly, even when inspiration feels absent.

## The Power of Small Wins

You don't need to write a novel every day. Small, consistent efforts compound over time:

- 250 words daily = 91,250 words yearly
- That's enough for a short novel or dozens of articles
- More importantly, it builds writing muscle memory

## Creating Your Writing Environment

Your environment shapes your habits. Consider:

### Physical Space
- Dedicated writing area (even a corner of a table)
- Minimal distractions
- Comfortable but not too comfortable
- Good lighting and ergonomics

### Digital Environment
- Distraction-free writing apps
- Website blockers during writing time
- Cloud backup for your work
- Simple formatting tools

## The Habit Loop

Every habit follows the same pattern: Cue → Routine → Reward

**Cue**: What triggers your writing?
- A specific time of day
- After morning coffee
- Before checking email
- When you sit in your writing spot

**Routine**: The writing itself
- Start with your current capacity
- Focus on time, not word count initially
- Allow yourself to write badly
- End before you're completely drained

**Reward**: What do you get for writing?
- The satisfaction of progress
- A small treat or break
- Checking items off a list
- Sharing your accomplishment

## Overcoming Common Obstacles

### "I don't have time"
- Start with 10-15 minutes
- Write during commutes or lunch breaks
- Use voice-to-text while walking
- Replace one social media session with writing

### "I don't know what to write"
- Keep an idea journal
- Use writing prompts
- Write about your day or observations
- Freewrite until something emerges

### "It's not good enough"
- First drafts are supposed to be terrible
- Quantity leads to quality
- You can't edit a blank page
- Progress over perfection

## Tracking Your Progress

What gets measured gets managed:

- Word count per session
- Days you've written this month
- Projects completed
- Skills you're developing

Remember: the goal isn't to become perfect overnight. It's to become someone who writes regularly, and that person will naturally become a better writer over time.`
  },
  {
    id: '3',
    title: 'My New Article Title',
    excerpt: 'A short description of what this article is about - this shows up on the main articles page.',
    publishedAt: '2024-01-20',
    readTime: 4,
    tags: ['Writing', 'Tips'],
    content: `# My New Article Title

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