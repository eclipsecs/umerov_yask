# Article Images

This folder contains images for articles. 

## How to add images to articles:

1. **Save your image**: Place your image file in this folder (`src/assets/article-images/`)
   - Use descriptive filenames like: `tech-trends-2024.png`, `ai-revolution.jpg`, etc.
   - Supported formats: PNG, JPG, JPEG, SVG, WebP

2. **Import the image**: In `src/data/articles.ts`, add the import at the top:
   ```typescript
   import techTrends from '@/assets/article-images/tech-trends-2024.png';
   ```

3. **Link the image**: In your article object, add the `image` property:
   ```typescript
   {
     id: 'your-article-id',
     title: 'Your Article Title',
     // ... other properties
     image: techTrends, // <-- Link your imported image here
   }
   ```

The image will automatically display as a hero image at the top of the article and as a thumbnail on the articles page.

## Example:
```typescript
// At the top of articles.ts
import heroImage from '@/assets/article-images/my-hero-image.png';

// In your article object
{
  id: 'my-article',
  title: 'My Amazing Article',
  image: heroImage, // This links the image
  // ... rest of article data
}
```
