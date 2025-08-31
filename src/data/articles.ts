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
    title: 'The Art of Cold Writing: Finding Your Voice',
    excerpt: 'Discover how to develop a unique writing style that resonates with your readers while maintaining clarity and engagement.',
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['Writing', 'Style', 'Creativity'],
    content: `# The Art of Cold Writing: Finding Your Voice

Writing is not just about putting words on paper—it's about discovering who you are as a communicator. When we talk about "cold writing," we're referring to that initial phase where ideas feel distant, unfamiliar, and challenging to articulate.

## Understanding Your Writing Identity

Every writer has a unique voice, but finding it requires practice and patience. Your voice is the combination of:

- Your natural speech patterns
- Your personal experiences and perspectives  
- Your preferred sentence structures and rhythms
- Your relationship with language itself

## The Cold Start Problem

When you sit down to write, especially at the beginning, everything feels cold. The cursor blinks mockingly, the page remains stubbornly blank, and words seem to hide just out of reach.

This is normal. This is where growth happens.

> "The first draft of anything is shit." - Ernest Hemingway

## Techniques for Warming Up

1. **Free writing**: Set a timer for 10 minutes and write continuously
2. **Morning pages**: Three pages of stream-of-consciousness writing
3. **Prompt exercises**: Use random prompts to kickstart creativity
4. **Voice journaling**: Write as if talking to a friend

## Finding Warmth in the Process

The magic happens when you stop trying to be perfect and start trying to be authentic. Your voice emerges not from grand gestures but from consistent, honest practice.

Remember: every professional writer started with cold, uncertain words. The key is to keep writing until those words find their fire.`
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
  }
];