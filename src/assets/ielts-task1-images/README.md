# IELTS Task 1 Images

This folder contains images for IELTS Task 1 essays (charts, graphs, diagrams, etc.).

## How to add images for Task 1 essays:

1. Save your Task 1 image files in this folder (e.g., `chart-1.png`, `graph-population.jpg`)

2. In your IELTS essay data file (`src/data/ieltsEssays.ts`), add an `image` property to Task 1 essays:

```typescript
{
  id: 'task1-essay-id',
  task: 'task1',
  title: 'Population Growth Chart Analysis',
  question: 'The chart shows population growth...',
  content: '...',
  // Add this line to link the image:
  image: '/src/assets/ielts-task1-images/chart-1.png', // Path to your image
  bandScore: 8.5,
  // ... other properties
}
```

3. In the essay detail page (`src/pages/IELTSEssayDetailPage.tsx`), the image will automatically display if the `image` property exists.

## Image Requirements:
- Use common formats: PNG, JPG, JPEG, GIF, SVG
- Keep file sizes reasonable (under 2MB recommended)
- Use descriptive filenames
- Ensure good quality and readability

## Example file structure:
```
src/assets/ielts-task1-images/
├── README.md (this file)
├── population-chart-2023.png
├── sales-graph-quarterly.jpg
├── process-diagram-water-cycle.png
└── map-city-development.jpg
```
