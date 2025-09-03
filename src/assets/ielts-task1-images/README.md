# IELTS Task 1 Images

This folder contains images for IELTS Task 1 essays (charts, graphs, diagrams, etc.).

## How to add images to IELTS Task 1 essays:

1. **Save your image**: Place your image file in this folder (`src/assets/ielts-task1-images/`)
   - Use descriptive filenames like: `population-chart.png`, `energy-process.jpg`, etc.
   - Supported formats: PNG, JPG, JPEG, SVG, WebP

2. **Import the image**: In `src/data/ieltsTask1Essays.ts`, add the import at the top:
   ```typescript
   import myChart from '@/assets/ielts-task1-images/population-chart.png';
   ```

3. **Link the image**: In your essay object, add the `image` property:
   ```typescript
   {
     id: 'your-essay-id',
     title: 'Your Essay Title',
     // ... other properties
     image: myChart, // <-- Link your imported image here
   }
   ```

The image will automatically display in the IELTS essay detail page and as a visual reference.

## Example:
```typescript
// At the top of ieltsTask1Essays.ts
import energyChart from '@/assets/ielts-task1-images/energy-consumption.png';

// In your essay object
{
  id: 'energy-essay',
  title: 'Energy Consumption Analysis',
  image: energyChart, // This links the image
  // ... rest of essay data
}
```
