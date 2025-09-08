// readings.ts

export interface Article {
  id: string;
  title: string;
  image?: string; // Can be a local import or external URL
  tags?: string[];
  vocabularies?: { word: string; definition: string }[]; // Optional vocabularies for detail display
  interestingSentences?: string[]; // Optional interesting sentences for detail display
  dateRead?: string; // ISO date string of when the article was read
}

// Articles you have read (expand as needed)
export const articles: Article[] = [
  {
    id: '10',
    title: 'Urban Farming: Growing Food in Cities',
    image: 'https://media.guim.co.uk/2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b/0_0_3100_1900/500.jpg',
    tags: ['Agriculture', 'Sustainability'],
    vocabularies: [
      { word: 'Hydroponics', definition: 'Definition of Hydroponics' },
      { word: 'Vertical Farming', definition: 'Definition of Vertical Farming' },
      { word: 'Food Security', definition: 'Definition of Food Security' }
    ],
    interestingSentences: [
      'Urban farming is transforming how cities produce and consume food.',
      'Innovative techniques allow for efficient food production in limited spaces.'
    ],
    dateRead: "2023-12-21" // December 21, 2023
  },
  {
    id: '9',
    title: 'Advances in Cancer Research and Treatment',
    image: 'https://images.newscientist.com/wp-content/uploads/2024/01/cancer-research.jpg',
    tags: ['Health', 'Science'],
    vocabularies: [
      { word: 'Immunotherapy', definition: 'Definition of Immunotherapy' },
      { word: 'Genetics', definition: 'Definition of Genetics' },
      { word: 'Oncology', definition: 'Definition of Oncology' }
    ],
    interestingSentences: [
      'New therapies are improving survival rates for many types of cancer.',
      'Genetic research is leading to more personalized treatment approaches.'
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '8',
    title: 'The Plastic Pollution Crisis and Solutions',
    image: 'https://media.guim.co.uk/7d8c4f6a1e2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d/0_0_2800_1600/500.jpg',
    tags: ['Environment', 'Pollution'],
    vocabularies: [
      { word: 'Microplastics', definition: 'Definition of Microplastics' },
      { word: 'Waste Management', definition: 'Definition of Waste Management' },
      { word: 'Recycling', definition: 'Definition of Recycling' }
    ],
    interestingSentences: [
      'Plastic pollution poses a serious threat to marine and terrestrial ecosystems.',
      'Innovative recycling methods are being developed to tackle plastic waste.'
    ],
    dateRead: "2024-02-11" // February 11, 2024
  },
  {
    id: '7',
    title: 'Mars Missions: What We’ve Learned So Far',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/02/mars-missions.jpg',
    tags: ['Space', 'Mars'],
    vocabularies: [
      { word: 'Rover', definition: 'Definition of Rover' },
      { word: 'Mars Atmosphere', definition: 'Definition of Mars Atmosphere' },
      { word: 'Geology', definition: 'Definition of Geology' }
    ],
    interestingSentences: [
      'Mars rovers have provided valuable data about the planet’s surface and atmosphere.',
      'Understanding Mars’ geology helps inform future human exploration.'
    ],
    dateRead: "2024-04-03" // April 3, 2024
  },
  {
    id: '6',
    title: 'Protecting Biodiversity in a Changing Climate',
    image: 'https://media.guim.co.uk/9f7b3c1c6a5e4d7c9b3a2d1e5f6a7b8c9d0e1f2a/0_0_3200_2000/500.jpg',
    tags: ['Biodiversity', 'Climate'],
    vocabularies: [
      { word: 'Habitat Loss', definition: 'Definition of Habitat Loss' },
      { word: 'Conservation', definition: 'Definition of Conservation' },
      { word: 'Species Extinction', definition: 'Definition of Species Extinction' }
    ],
    interestingSentences: [
      'Climate change is accelerating the loss of biodiversity globally.',
      'Effective conservation strategies are needed to protect vulnerable species.'
    ],
    dateRead: "2023-09-27" // September 27, 2023
  },
  {
    id: '5',
    title: 'The Rise of Quantum Computing',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/06/quantum-computing.jpg',
    tags: ['Technology', 'Quantum'],
    vocabularies: [
      { word: 'Qubit', definition: 'Definition of Qubit' },
      { word: 'Superposition', definition: 'Definition of Superposition' },
      { word: 'Quantum Algorithm', definition: 'Definition of Quantum Algorithm' }
    ],
    interestingSentences: [
      'Quantum computers have the potential to solve problems beyond the reach of classical machines.',
      'Research in quantum algorithms is rapidly advancing the field.'
    ],
    dateRead: "2023-10-19" // October 19, 2023
  },
  {
    id: '4',
    title: 'How Renewable Energy is Changing the World',
    image: 'https://media.guim.co.uk/3d4c6e8a5f9a7d4f1c6e8f3a7d4b8c9e0b2a1c3d/0_0_3000_1800/500.jpg',
    tags: ['Energy', 'Environment'],
    vocabularies: [
      { word: 'Solar Power', definition: 'Definition of Solar Power' },
      { word: 'Wind Energy', definition: 'Definition of Wind Energy' },
      { word: 'Sustainability', definition: 'Definition of Sustainability' }
    ],
    interestingSentences: [
      'Renewable energy sources are becoming more cost-effective and widespread.',
      'Transitioning to renewables is essential for reducing carbon emissions.'
    ],
    dateRead: "2024-01-29" // January 29, 2024
  },
  {
    id: '3',
    title: 'Exploring the Universe: Latest Discoveries',
    image: 'https://images.newscientist.com/wp-content/uploads/2023/04/19123045/universe-discoveries.jpg',
    tags: ['Space', 'Science'],
    vocabularies: [
      { word: 'Cosmology', definition: 'Definition of Cosmology' },
      { word: 'Dark Matter', definition: 'Definition of Dark Matter' },
      { word: 'Exoplanet', definition: 'Definition of Exoplanet' }
    ],
    interestingSentences: [
      'New telescopes have revealed previously unseen phenomena in distant galaxies.',
      'Understanding dark matter remains one of the biggest challenges in astrophysics.'
    ],
    dateRead: "2023-08-08" // August 8, 2023
  },
  {
    id: '2',
    title: 'Climate Change and Its Impact on Oceans',
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/27165302/SEI_263382812.jpg?width=628',
    tags: ['Environment', 'Climate'],
    vocabularies: [
      { word: 'Global Warming', definition: 'Definition of Global Warming' },
      { word: 'Ocean Acidification', definition: 'Definition of Ocean Acidification' },
      { word: 'Ecosystem', definition: 'Definition of Ecosystem' }
    ],
    interestingSentences: [
      'Rising temperatures are causing significant changes to ocean ecosystems worldwide.',
      'Mitigating climate change is crucial to preserving marine biodiversity.'
    ],
    dateRead: "2023-12-04" // December 4, 2023
  },
  {
    id: '1',
    title: 'The Future of AI in Everyday Life',
    image: 'https://images.newscientist.com/wp-content/uploads/2025/09/03173025/SEI_264253367.jpg?width=628',
    tags: ['AI', 'Technology'],
    vocabularies: [
      { word: 'Artificial Intelligence', definition: 'Definition of Artificial Intelligence' },
      { word: 'Automation', definition: 'Definition of Automation' },
      { word: 'Machine Learning', definition: 'Definition of Machine Learning' }
    ],
    interestingSentences: [
      'AI is transforming the way we live and work, making everyday tasks more efficient.',
      'The integration of AI into daily life raises both opportunities and ethical concerns.'
    ],
    dateRead: "2024-03-30" // March 30, 2024
  }
];