// readings.ts

export interface Article {
  id: string;
  title: string;
  image?: string; // Can be a local import or external URL
  tags?: string[];
  vocabularies?: { word: string; definition: string; explanation: string }[]; // Optional vocabularies for detail display with explanation
  interestingSentences?: string[]; // Optional interesting sentences for detail display
  dateRead?: string; // ISO date string of when the article was read
}

// Articles you have read (expand as needed)
export const articles: Article[] = [
  {
    id: '13',
    title: 'Advances in Cancer Research and Treatment',
    image: 'https://ia802804.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/newscientist_202002/New_Scientist_-_12_December_2015_jp2.zip&file=New_Scientist_-_12_December_2015_jp2/New_Scientist_-_12_December_2015_0000.jp2&id=newscientist_202002&scale=8&rotate=0',
    tags: ['Health', 'Science'],
    vocabularies: [
      { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
      { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
      { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
    ],
    interestingSentences: [
      'New therapies are improving survival rates for many types of cancer.',
      'Genetic research is leading to more personalized treatment approaches.'
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '12',
    title: 'Advances in Cancer Research and Treatment',
    image: 'https://ia802804.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/newscientist_202002/New_Scientist_-_12_December_2015_jp2.zip&file=New_Scientist_-_12_December_2015_jp2/New_Scientist_-_12_December_2015_0000.jp2&id=newscientist_202002&scale=8&rotate=0',
    tags: ['Health', 'Science'],
    vocabularies: [
      { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
      { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
      { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
    ],
    interestingSentences: [
      'New therapies are improving survival rates for many types of cancer.',
      'Genetic research is leading to more personalized treatment approaches.'
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '11',
    title: 'Advances in Cancer Research and Treatment',
    image: 'https://ia802804.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/newscientist_202002/New_Scientist_-_12_December_2015_jp2.zip&file=New_Scientist_-_12_December_2015_jp2/New_Scientist_-_12_December_2015_0000.jp2&id=newscientist_202002&scale=8&rotate=0',
    tags: ['Health', 'Science'],
    vocabularies: [
      { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
      { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
      { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
    ],
    interestingSentences: [
      'New therapies are improving survival rates for many types of cancer.',
      'Genetic research is leading to more personalized treatment approaches.'
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '10',
    title: 'Urban Farming: Growing Food in Cities',
    image: 'https://ia902804.us.archive.org/BookReader/BookReaderImages.php?zip=/0/items/newscientist_202002/New_Scientist_-_19_March_2016_jp2.zip&file=New_Scientist_-_19_March_2016_jp2/New_Scientist_-_19_March_2016_0000.jp2&id=newscientist_202002&scale=8&rotate=0',
    tags: ['Agriculture', 'Sustainability'],
    vocabularies: [
      { word: 'Hydroponics', definition: 'Definition of Hydroponics', explanation: 'Explanation of Hydroponics' },
      { word: 'Vertical Farming', definition: 'Definition of Vertical Farming', explanation: 'Explanation of Vertical Farming' },
      { word: 'Food Security', definition: 'Definition of Food Security', explanation: 'Explanation of Food Security' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/09171201/SEI_258168805.jpg?width=628',
    tags: ['Health', 'Science'],
    vocabularies: [
      { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
      { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
      { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/16170506/SEI_259008744.jpg?width=628',
    tags: ['Environment', 'Pollution'],
    vocabularies: [
      { word: 'Microplastics', definition: 'Definition of Microplastics', explanation: 'Explanation of Microplastics' },
      { word: 'Waste Management', definition: 'Definition of Waste Management', explanation: 'Explanation of Waste Management' },
      { word: 'Recycling', definition: 'Definition of Recycling', explanation: 'Explanation of Recycling' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/23172632/SEI_259658871.jpg?width=628',
    tags: ['Space', 'Mars'],
    vocabularies: [
      { word: 'Rover', definition: 'Definition of Rover', explanation: 'Explanation of Rover' },
      { word: 'Mars Atmosphere', definition: 'Definition of Mars Atmosphere', explanation: 'Explanation of Mars Atmosphere' },
      { word: 'Geology', definition: 'Definition of Geology', explanation: 'Explanation of Geology' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/30171354/SEI_260450841.jpg?width=628',
    tags: ['Biodiversity', 'Climate'],
    vocabularies: [
      { word: 'Habitat Loss', definition: 'Definition of Habitat Loss', explanation: 'Explanation of Habitat Loss' },
      { word: 'Conservation', definition: 'Definition of Conservation', explanation: 'Explanation of Conservation' },
      { word: 'Species Extinction', definition: 'Definition of Species Extinction', explanation: 'Explanation of Species Extinction' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/06170804/SEI_261176007.jpg?width=628',
    tags: ['Technology', 'Quantum'],
    vocabularies: [
      { word: 'Qubit', definition: 'Definition of Qubit', explanation: 'Explanation of Qubit' },
      { word: 'Superposition', definition: 'Definition of Superposition', explanation: 'Explanation of Superposition' },
      { word: 'Quantum Algorithm', definition: 'Definition of Quantum Algorithm', explanation: 'Explanation of Quantum Algorithm' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/13160206/SEI_261830348.jpg?width=628',
    tags: ['Energy', 'Environment'],
    vocabularies: [
      { word: 'Solar Power', definition: 'Definition of Solar Power', explanation: 'Explanation of Solar Power' },
      { word: 'Wind Energy', definition: 'Definition of Wind Energy', explanation: 'Explanation of Wind Energy' },
      { word: 'Sustainability', definition: 'Definition of Sustainability', explanation: 'Explanation of Sustainability' }
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
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/20173704/SEI_262545464.jpg?width=628',
    tags: ['Space', 'Science'],
    vocabularies: [
      { word: 'Cosmology', definition: 'Definition of Cosmology', explanation: 'Explanation of Cosmology' },
      { word: 'Dark Matter', definition: 'Definition of Dark Matter', explanation: 'Explanation of Dark Matter' },
      { word: 'Exoplanet', definition: 'Definition of Exoplanet', explanation: 'Explanation of Exoplanet' }
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
      { word: 'Global Warming', definition: 'Definition of Global Warming', explanation: 'Explanation of Global Warming' },
      { word: 'Ocean Acidification', definition: 'Definition of Ocean Acidification', explanation: 'Explanation of Ocean Acidification' },
      { word: 'Ecosystem', definition: 'Definition of Ecosystem', explanation: 'Explanation of Ecosystem' }
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
      { word: 'Artificial Intelligence', definition: 'Definition of Artificial Intelligence', explanation: 'Explanation of Artificial Intelligence' },
      { word: 'Automation', definition: 'Definition of Automation', explanation: 'Explanation of Automation' },
      { word: 'Machine Learning', definition: 'Definition of Machine Learning', explanation: 'Explanation of Machine Learning' }
    ],
    interestingSentences: [
      'AI is transforming the way we live and work, making everyday tasks more efficient.',
      'The integration of AI into daily life raises both opportunities and ethical concerns.'
    ],
    dateRead: "2024-03-30" // March 30, 2024
  }
];