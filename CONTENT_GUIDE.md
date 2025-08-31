# Content Management Guide

This guide explains how to add and edit articles and IELTS essays on your Coldedly Writing website.

## Adding New Articles

To add a new article, edit the `src/data/articles.ts` file and add a new object to the `articles` array:

```typescript
{
  id: 'unique-id',
  title: 'Your Article Title',
  excerpt: 'A brief description that appears on the listing page',
  content: `# Your Article Title

Your markdown content goes here...

## Subheading

More content with **bold text**, *italic text*, and [links](https://example.com).

### Code Examples

\`\`\`javascript
const example = "code blocks work too";
\`\`\`

> Blockquotes are great for highlighting important points.
`,
  publishedAt: '2024-01-15', // Format: YYYY-MM-DD
  readTime: 5, // Estimated reading time in minutes
  tags: ['Writing', 'Tips', 'Guide'] // Categories for the article
}
```

## Adding New IELTS Essays

To add a new IELTS essay, edit the `src/data/ieltsEssays.ts` file and add a new object to the `ieltsEssays` array:

```typescript
{
  id: 'unique-id',
  task: 'task1', // or 'task2'
  title: 'Essay Title (e.g., Bar Chart Analysis)',
  question: 'The complete IELTS question prompt goes here...',
  bandScore: 7.5, // Your estimated band score
  writingTime: '20 minutes', // Time taken to write
  wordCount: 185, // Total word count
  tags: ['Bar Chart', 'Data Analysis'], // Relevant tags
  content: `# Essay Title

## The Question
[Copy the question here]

## My Essay

Your essay content in markdown format...

*Word count: 185*
*Writing time: 20 minutes*
*Estimated band score: 7.5*`
}
```

## Markdown Formatting Guide

Your content uses Markdown formatting. Here are the key features:

### Headers
```markdown
# Main Title (H1)
## Section Header (H2) 
### Subsection (H3)
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
[Link text](https://example.com)
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Code Blocks
````markdown
```javascript
const code = "syntax highlighted";
```
````

### Quotes
```markdown
> This is a blockquote
> Great for highlighting important points
```

### Tables (for Task 1 essays)
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## File Structure

- **Articles**: `src/data/articles.ts`
- **IELTS Essays**: `src/data/ieltsEssays.ts`
- **Components**: All UI components are in `src/components/`
- **Pages**: Main page components are in `src/pages/`

## Tips for Content Creation

### For Articles:
- Keep excerpts concise but engaging (1-2 sentences)
- Use descriptive titles that include keywords
- Add relevant tags for categorization
- Estimate reading time (roughly 250 words per minute)

### For IELTS Essays:
- Always include the complete original question
- Specify whether it's Task 1 or Task 2
- Provide accurate word counts and timing
- Be realistic about band scores
- Use tags that describe the essay type (e.g., "Opinion Essay", "Line Graph")

### Markdown Best Practices:
- Use headers to structure your content logically
- Break up long paragraphs for better readability
- Include code examples when discussing writing techniques
- Use blockquotes for emphasis or important points
- Add links to external resources when helpful

## Making Changes Live

After editing the content files:

1. Save your changes
2. The website will automatically update
3. Check the live preview to ensure formatting is correct
4. Test both the listing pages and individual content pages

## Troubleshooting

- **Content not showing**: Check that the ID is unique and properly formatted
- **Formatting issues**: Ensure proper Markdown syntax
- **Build errors**: Check for missing commas or quote marks in the data files
- **Images**: Currently, the site focuses on text content, but you can add image URLs in Markdown

Remember: All content is stored in TypeScript files, making it easy to backup, version control, and edit with any text editor.