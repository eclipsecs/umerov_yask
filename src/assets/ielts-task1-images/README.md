# IELTS Task 1 Images

This folder contains images for IELTS Task 1 essays (charts, graphs, tables, diagrams, etc.).

## How to Add Images to Your IELTS Task 1 Essays

### Step 1: Add your image to this folder
1. Save your chart/graph image in this folder: `src/assets/ielts-task1-images/`
2. Use descriptive names like: `energy-consumption-chart.png`, `population-growth-graph.jpg`, etc.

### Step 2: Import the image in ieltsEssays.ts
```typescript
// At the top of src/data/ieltsEssays.ts, add your import:
import energyChart from '@/assets/ielts-task1-images/energy-consumption-chart.png';
import populationGraph from '@/assets/ielts-task1-images/population-growth-graph.jpg';
```

### Step 3: Add the image to your essay data
```typescript
{
  id: '2',
  task: 'task1',
  title: 'Bar Chart: Global Energy Consumption', 
  // ... other properties ...
  image: energyChart, // <-- Add this line with your imported image variable
  content: `# Your essay content here...`
}
```

### Step 4: The image will automatically display
The image will automatically appear above your essay content when users view the essay detail page.

## Example
See the current example with `sample-chart.png` - this shows exactly how to structure your imports and usage.

## Supported Formats
- PNG (.png)
- JPEG (.jpg, .jpeg)  
- SVG (.svg)
- WebP (.webp)

## Best Practices
- Use descriptive file names
- Keep images under 2MB for fast loading
- Prefer PNG for charts/graphs (better quality)
- Make sure images are clear and readable

## Current Files:
- `sample-chart.png` - Example energy consumption bar chart (currently used in essay ID: 2)
