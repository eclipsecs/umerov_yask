export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Coding sucks. AI takes over',
    excerpt: 'Personal opinion about learning and code and programming overall.',
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['AI', 'Coding', 'Opinion'],
    content:
    ` 
# Coding sucks. AI takes over

I used to love coding. The thrill of solving problems, building something from scratch, and the endless possibilities of what I could create were exhilarating. But over time, that excitement faded. Coding became a chore, a series of frustrating bugs and endless debugging sessions that drained my enthusiasm.
    `
  },
  {
    id: '2',
    title: 'Building Consistent Writing Habits',
    excerpt: 'Learn how to establish and maintain a writing routine that works with your lifestyle and helps you achieve your goals.',
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['Productivity', 'Habits', 'Writing Tips'],
    content: `# Building Consistent Writing Habits

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
  }
];