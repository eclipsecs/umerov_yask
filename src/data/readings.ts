// readings.ts

export interface Article {
  id: string;
  title?: string;
  excerpt?: string;
  content?: string;
  publishedAt?: string;
  readTime?: number;
  tags?: string[];
  image?: string; // Can be a local import or external URL
  video?: string; // Optional video
  youtubeUrl?: string; // Optional YouTube URL
  sourceUrl?: string; // External link to the article
}

// Articles you have read (expand as needed)
export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of AI in Everyday Life',
    sourceUrl: 'https://www.newscientist.com/article/the-future-of-ai-in-everyday-life/',
    image: 'https://images.newscientist.com/wp-content/uploads/2025/09/03173025/SEI_264253367.jpg?width=628',
    tags: ['AI', 'Technology']
  },
  {
    id: '2',
    title: 'Climate Change and Its Impact on Oceans',
    sourceUrl: 'https://www.theguardian.com/environment/oceans-climate-change',
    image: 'https://media.guim.co.uk/4b3a6a1c7a1f5d7f3a0e9cae6f2f4a3e3d6b9a3f/0_0_3500_2100/500.jpg',
    tags: ['Environment', 'Climate']
  },
  {
    id: '3',
    title: 'Exploring the Universe: Latest Discoveries',
    sourceUrl: 'https://www.newscientist.com/article/universe-discoveries/',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/04/19123045/universe-discoveries.jpg',
    tags: ['Space', 'Science']
  },
  {
    id: '4',
    title: 'How Renewable Energy is Changing the World',
    sourceUrl: 'https://www.theguardian.com/environment/renewable-energy',
    image: 'https://media.guim.co.uk/3d4c6e8a5f9a7d4f1c6e8f3a7d4b8c9e0b2a1c3d/0_0_3000_1800/500.jpg',
    tags: ['Energy', 'Environment']
  },
  {
    id: '5',
    title: 'The Rise of Quantum Computing',
    sourceUrl: 'https://www.newscientist.com/article/quantum-computing-rise/',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/06/quantum-computing.jpg',
    tags: ['Technology', 'Quantum']
  },
  {
    id: '6',
    title: 'Protecting Biodiversity in a Changing Climate',
    sourceUrl: 'https://www.theguardian.com/environment/biodiversity-climate',
    image: 'https://media.guim.co.uk/9f7b3c1c6a5e4d7c9b3a2d1e5f6a7b8c9d0e1f2a/0_0_3200_2000/500.jpg',
    tags: ['Biodiversity', 'Climate']
  },
  {
    id: '7',
    title: 'Mars Missions: What We’ve Learned So Far',
    sourceUrl: 'https://www.newscientist.com/article/mars-missions/',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/02/mars-missions.jpg',
    tags: ['Space', 'Mars']
  },
  {
    id: '8',
    title: 'The Plastic Pollution Crisis and Solutions',
    sourceUrl: 'https://www.theguardian.com/environment/plastic-pollution',
    image: 'https://media.guim.co.uk/7d8c4f6a1e2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d/0_0_2800_1600/500.jpg',
    tags: ['Environment', 'Pollution']
  },
  {
    id: '9',
    title: 'Advances in Cancer Research and Treatment',
    sourceUrl: 'https://www.newscientist.com/article/cancer-research-advances/',
    image: 'https://images.newscientist.com/wp-content/uploads/2024/01/cancer-research.jpg',
    tags: ['Health', 'Science']
  },
  {
    id: '10',
    title: 'Urban Farming: Growing Food in Cities',
    sourceUrl: 'https://www.theguardian.com/environment/urban-farming',
    image: 'https://media.guim.co.uk/2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b/0_0_3100_1900/500.jpg',
    tags: ['Agriculture', 'Sustainability']
  }
];