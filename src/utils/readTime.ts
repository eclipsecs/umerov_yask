// Read time calculation utility
// Based on average reading speed of 200 words per minute

export function calculateReadTime(content: string): number {
  // Remove markdown syntax and HTML tags for accurate word count
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/#{1,6}\s/g, '') // Remove markdown headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/~~([^~]+)~~/g, '$1') // Remove strikethrough
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
    .replace(/>/g, '') // Remove blockquote markers
    .replace(/[-*+]\s/g, '') // Remove list markers
    .replace(/\d+\.\s/g, '') // Remove numbered list markers
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count words
  const words = cleanContent.split(' ').filter(word => word.length > 0).length;
  
  // Calculate read time (average 200 words per minute)
  const readTime = Math.ceil(words / 200);
  
  // Minimum read time of 1 minute
  return Math.max(1, readTime);
}

export function formatReadTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}