# Article Videos

This directory contains video files for articles. Videos are displayed as hero content in the article detail page.

## How to add a video to an article:

### Step 1: Add your video file
Place your video file in this directory (`src/assets/article-videos/`).

**Supported formats:**
- `.mp4` (recommended - best browser support)
- `.webm` (good compression, modern browsers)
- `.ogg` (open format, good browser support)

**File naming conventions:**
- Use kebab-case: `my-article-video.mp4`
- Keep names descriptive and unique

### Step 2: Import the video in articles.ts
Add an import statement at the top of `src/data/articles.ts`:

```javascript
import myVideo from '@/assets/article-videos/my-article-video.mp4';
```

### Step 3: Link the video to your article
In the articles array, add the `video` property to your article:

```javascript
{
  id: '1',
  title: 'My Article Title',
  // ... other properties
  video: myVideo, // <-- Link your imported video here
  image: myImage, // Optional: This will be used as video poster
}
```

## Video vs Image Priority:
- If both `video` and `image` are provided, the video will be displayed with the image as a poster/thumbnail
- If only `video` is provided, the video will be displayed without a poster
- If only `image` is provided, the image will be displayed as usual
- If neither are provided, no hero media will be shown

## Video Optimization Tips:
- Keep file sizes reasonable (under 50MB for web)
- Use appropriate resolution (1920x1080 max recommended)
- Consider using `.mp4` with H.264 encoding for best compatibility
- Test on different devices and connection speeds

## Example:
```javascript
// At the top of articles.ts
import codingDemoVideo from '@/assets/article-videos/coding-demo.mp4';
import codingThumbnail from '@/assets/article-images/coding-demo-thumbnail.png';

// In the articles array
{
  id: '1',
  title: 'Live Coding Demo',
  // ... other properties
  video: codingDemoVideo,
  image: codingThumbnail, // Will be used as video poster
}
```
