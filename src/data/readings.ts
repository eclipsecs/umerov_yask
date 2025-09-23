// readings.ts

export interface Article {
  id: string;
  title: string;
  subheading?: string; // optional subheading
  image?: string; // Can be a local import or external URL
  vocabularies?: {
    unit: string;
    vocabularies: { word: string; definition: string; explanation: string }[];
    interestingSentences?: { sentence: string; usage: string }[];
  }[]; // Optional vocabularies for detail display with explanation, grouped by unit
  dateRead?: string; // ISO date string of when the article was read
}

// Articles you have read (expand as needed)
export const articles: Article[] = [
  {
    id: '15',
    title: 'How to live to 100',
    subheading: "New Scientist - September 20, 2025",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/09/17170605/SEI_266220138.jpg?width=628',
    vocabularies: [
      {
        unit: "The race to 100 is often rigged",
        vocabularies: [
          { word: 'Stalling', definition: 'Delaying progress or making something stop moving forward.', explanation: 'Verb/Noun — used to describe slowing down or stopping progress.' },
          { word: 'Motive', definition: 'The reason why someone does something.', explanation: 'Noun — used to talk about intentions or reasons behind actions.' },
          { word: 'Milestone', definition: 'An important stage or event in life or progress.', explanation: 'Noun — used to describe a significant achievement or stage.' },
          { word: 'Hitting it', definition: 'Reaching or achieving something, like a goal or age.', explanation: 'Phrase/verb — informal way of saying you reached something.' },
          { word: 'Well within reach', definition: 'Easily achievable or possible.', explanation: 'Phrase — used to say something is very possible.' },
          { word: 'Centenarians', definition: 'People who are 100 years old or more.', explanation: 'Noun — refers to very old people aged 100+.' },
          { word: 'Even so', definition: 'Despite what was just said.', explanation: 'Phrase — used for contrast, similar to "nevertheless".' },
          { word: 'Widening the gap', definition: 'Making the difference between two groups bigger.', explanation: 'Phrase/verb — used when inequality increases.' },
          { word: 'Lifespan', definition: 'The total length of time a person or organism lives.', explanation: 'Noun — duration of life.' },
          { word: 'Healthspan', definition: 'The period of life spent in good health.', explanation: 'Noun — healthy part of someone’s life.' },
          { word: 'Disparity', definition: 'A big difference or inequality between groups.', explanation: 'Noun — shows inequality or difference.' },
          { word: 'Longest living demographic', definition: 'The group of people who live the longest.', explanation: 'Noun phrase — refers to population group.' },
          { word: 'Fuelled a chasm', definition: 'Made a huge division or gap bigger.', explanation: 'Phrase/verb — describes worsening inequality.' },
          { word: 'Most and the least advantaged', definition: 'The people who have the most benefits and those with the least.', explanation: 'Noun phrase — comparing rich/poor or privileged/unprivileged groups.' },
          { word: 'Nutritious food', definition: 'Food that is healthy and gives the body what it needs.', explanation: 'Noun phrase — refers to healthy diet.' },
          { word: 'Safe housing', definition: 'Homes that are secure and not dangerous to live in.', explanation: 'Noun phrase — refers to safe living conditions.' },
          { word: 'Inoculation', definition: 'The act of giving someone a vaccine to protect against disease.', explanation: 'Noun — medical term for vaccination.' },
          { word: 'Stem', definition: 'To stop or limit something from spreading or growing.', explanation: 'Verb — used when talking about controlling or stopping something.' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '14',
    title: 'Secret landscape of a quantum realm',
    subheading: "New Scienist, September 13, 2025",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/09/10170827/SEI_265246270.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
          { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
          { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '13',
    title: 'Cancers secret weapon ',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/06/11164103/SEI_255139465.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
          { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
          { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '12',
    title: 'Advances in Cancer Research and Treatment',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/06/18170934/SEI_255755061.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
          { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
          { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '11',
    title: 'Advances in Cancer Research and Treatment',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/06/25170758/SEI_256555803.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
          { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
          { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '10',
    title: 'Urban Farming: Growing Food in Cities',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/02172327/SEI_257425914.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Hydroponics', definition: 'Definition of Hydroponics', explanation: 'Explanation of Hydroponics' },
          { word: 'Vertical Farming', definition: 'Definition of Vertical Farming', explanation: 'Explanation of Vertical Farming' },
          { word: 'Food Security', definition: 'Definition of Food Security', explanation: 'Explanation of Food Security' }
        ],
        interestingSentences: [
          { sentence: 'Urban farming is transforming how cities produce and consume food.', usage: 'Reading Comprehension' },
          { sentence: 'Innovative techniques allow for efficient food production in limited spaces.', usage: 'Discussion' }
        ]
      }
    ],
    dateRead: "2023-12-21" // December 21, 2023
  },
  {
    id: '9',
    title: 'Advances in Cancer Research and Treatment',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/09171201/SEI_258168805.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Immunotherapy', definition: 'Definition of Immunotherapy', explanation: 'Explanation of Immunotherapy' },
          { word: 'Genetics', definition: 'Definition of Genetics', explanation: 'Explanation of Genetics' },
          { word: 'Oncology', definition: 'Definition of Oncology', explanation: 'Explanation of Oncology' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      }
    ],
    dateRead: "2023-07-14" // July 14, 2023
  },
  {
    id: '8',
    title: 'The Plastic Pollution Crisis and Solutions',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/16170506/SEI_259008744.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Microplastics', definition: 'Definition of Microplastics', explanation: 'Explanation of Microplastics' },
          { word: 'Waste Management', definition: 'Definition of Waste Management', explanation: 'Explanation of Waste Management' },
          { word: 'Recycling', definition: 'Definition of Recycling', explanation: 'Explanation of Recycling' }
        ],
        interestingSentences: [
          { sentence: 'Plastic pollution poses a serious threat to marine and terrestrial ecosystems.', usage: 'Environmental Science' },
          { sentence: 'Innovative recycling methods are being developed to tackle plastic waste.', usage: 'Policy Discussion' }
        ]
      }
    ],
    dateRead: "2024-02-11" // February 11, 2024
  },
  {
    id: '7',
    title: 'Mars Missions: What We’ve Learned So Far',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/23172632/SEI_259658871.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Rover', definition: 'Definition of Rover', explanation: 'Explanation of Rover' },
          { word: 'Mars Atmosphere', definition: 'Definition of Mars Atmosphere', explanation: 'Explanation of Mars Atmosphere' },
          { word: 'Geology', definition: 'Definition of Geology', explanation: 'Explanation of Geology' }
        ],
        interestingSentences: [
          { sentence: 'Mars rovers have provided valuable data about the planet’s surface and atmosphere.', usage: 'Science Report' },
          { sentence: 'Understanding Mars’ geology helps inform future human exploration.', usage: 'Presentation' }
        ]
      }
    ],
    dateRead: "2024-04-03" // April 3, 2024
  },
  {
    id: '6',
    title: 'Protecting Biodiversity in a Changing Climate',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/07/30171354/SEI_260450841.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Habitat Loss', definition: 'Definition of Habitat Loss', explanation: 'Explanation of Habitat Loss' },
          { word: 'Conservation', definition: 'Definition of Conservation', explanation: 'Explanation of Conservation' },
          { word: 'Species Extinction', definition: 'Definition of Species Extinction', explanation: 'Explanation of Species Extinction' }
        ],
        interestingSentences: [
          { sentence: 'Climate change is accelerating the loss of biodiversity globally.', usage: 'Environmental Studies' },
          { sentence: 'Effective conservation strategies are needed to protect vulnerable species.', usage: 'Policy Making' }
        ]
      }
    ],
    dateRead: "2023-09-27" // September 27, 2023
  },
  {
    id: '5',
    title: 'The Rise of Quantum Computing',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/06170804/SEI_261176007.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Qubit', definition: 'Definition of Qubit', explanation: 'Explanation of Qubit' },
          { word: 'Superposition', definition: 'Definition of Superposition', explanation: 'Explanation of Superposition' },
          { word: 'Quantum Algorithm', definition: 'Definition of Quantum Algorithm', explanation: 'Explanation of Quantum Algorithm' }
        ],
        interestingSentences: [
          { sentence: 'Quantum computers have the potential to solve problems beyond the reach of classical machines.', usage: 'Tech Talk' },
          { sentence: 'Research in quantum algorithms is rapidly advancing the field.', usage: 'Academic Paper' }
        ]
      }
    ],
    dateRead: "2023-10-19" // October 19, 2023
  },
  {
    id: '4',
    title: 'How Renewable Energy is Changing the World',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/13160206/SEI_261830348.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Solar Power', definition: 'Definition of Solar Power', explanation: 'Explanation of Solar Power' },
          { word: 'Wind Energy', definition: 'Definition of Wind Energy', explanation: 'Explanation of Wind Energy' },
          { word: 'Sustainability', definition: 'Definition of Sustainability', explanation: 'Explanation of Sustainability' }
        ],
        interestingSentences: [
          { sentence: 'Renewable energy sources are becoming more cost-effective and widespread.', usage: 'Policy Report' },
          { sentence: 'Transitioning to renewables is essential for reducing carbon emissions.', usage: 'Debate' }
        ]
      }
    ],
    dateRead: "2024-01-29" // January 29, 2024
  },
  {
    id: '3',
    title: 'Exploring the Universe: Latest Discoveries',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/20173704/SEI_262545464.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Cosmology', definition: 'Definition of Cosmology', explanation: 'Explanation of Cosmology' },
          { word: 'Dark Matter', definition: 'Definition of Dark Matter', explanation: 'Explanation of Dark Matter' },
          { word: 'Exoplanet', definition: 'Definition of Exoplanet', explanation: 'Explanation of Exoplanet' }
        ],
        interestingSentences: [
          { sentence: 'New telescopes have revealed previously unseen phenomena in distant galaxies.', usage: 'Science Article' },
          { sentence: 'Understanding dark matter remains one of the biggest challenges in astrophysics.', usage: 'Lecture' }
        ]
      }
    ],
    dateRead: "2023-08-08" // August 8, 2023
  },
  {
    id: '2',
    title: 'A New Human Specices',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/27165302/SEI_263382812.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 1 - Placeholder",
        vocabularies: [
          { word: 'Global Warming', definition: 'Definition of Global Warming', explanation: 'Explanation of Global Warming' },
          { word: 'Ocean Acidification', definition: 'Definition of Ocean Acidification', explanation: 'Explanation of Ocean Acidification' },
          { word: 'Ecosystem', definition: 'Definition of Ecosystem', explanation: 'Explanation of Ecosystem' }
        ],
        interestingSentences: [
          { sentence: 'Rising temperatures are causing significant changes to ocean ecosystems worldwide.', usage: 'Research Paper' },
          { sentence: 'Mitigating climate change is crucial to preserving marine biodiversity.', usage: 'Presentation' }
        ]
      }
    ],
    dateRead: "2023-12-04" // December 4, 2023
  },
  {
    id: '1',
    title: 'Your Brains Balancing act',
    subheading: 'From intelligence to creativity, how your mind works best on the edge of chaos',
    image: 'https://images.newscientist.com/wp-content/uploads/2025/09/03173025/SEI_264253367.jpg?width=628',
    vocabularies: [
      {
        unit: "Brain implants relieve chronic pain", // Example unit
        vocabularies: [
          { word: 'Affects up', definition: 'To have an impact on; influences a particular number or group.', explanation: 'Shows how many people or things are influenced. Useful for IELTS Writing Task 1 or 2 when describing statistics.' },
          { word: 'Fundamental changes', definition: 'Basic and important alterations that have a significant impact.', explanation: 'Means big and basic changes. Good for IELTS Writing Task 2 or Speaking about progress or new ideas.' },
          { word: 'Standard therapies', definition: 'Commonly accepted treatments that are widely used in the medical community.', explanation: 'Refers to usual or common medical treatments. Use in IELTS Writing Task 1 or 2 when comparing treatments.' },
          { word: 'one-size-fits-all approach', definition: 'A method or solution that is applied uniformly to all cases, without individual adaptation.', explanation: 'Describes a method that is not personalized. Useful for IELTS Writing Task 2 when criticizing general solutions.' },
          { word: 'bespoke', definition: 'Custom-made or tailored to the needs of an individual.', explanation: 'Means made for a specific person. Good for IELTS Speaking or Writing Task 2 about personalized solutions.' },
          { word: 'underwent', definition: 'Experienced or was subjected to (a process or treatment).', explanation: 'Means someone had or experienced something. Useful in IELTS Writing Task 1 (process) or Task 2 (personal experience).' },
          { word: 'fine-tuning', definition: 'Making small adjustments to improve performance or effectiveness.', explanation: 'Means making small changes to improve something. Can be used in IELTS Writing Task 2 or Speaking about improvements.' },
          { word: 'interfere', definition: 'To get in the way of or prevent something from happening smoothly.', explanation: 'Means to stop or disturb something. Useful for IELTS Writing Task 2 about problems or obstacles.' },
          { word: 'leverage', definition: 'To use something to maximum advantage.', explanation: 'Means to use something effectively. Good for IELTS Writing Task 2 or Speaking about using resources or technology.' },
          { word: 'invasive methods', definition: 'Medical procedures that involve entering the body, often by cutting or inserting instruments.', explanation: 'Means medical treatments that go inside the body. Use in IELTS Writing Task 1 or 2 when comparing medical techniques.' }
        ],
        interestingSentences: [
          { sentence: '...has helped relieve people of previously untreatable pain', usage: 'Task 2' },
          { sentence: 'another challenge will be economics and scaling of this', usage: 'Task 2' }
        ]
      },
      {
        unit: "Ligh-based AI can generate images without huge energy consumption", // Example additional unit
        vocabularies: [
          { word: 'conventional', definition: 'Based on or in accordance with what is generally done or believed; traditional.', explanation: 'Means traditional or usual. Useful in IELTS Writing Task 1 or 2 when comparing old and new ways.' },
          { word: 'encodes', definition: 'To convert information into a particular form, especially for processing or storage.', explanation: 'Means to change information into another form. Good for IELTS Writing Task 2 or Speaking about technology.' },
          { word: 'a set of', definition: 'A group or collection of things that belong together or are used together.', explanation: 'Means a group of things. Useful for IELTS Writing Task 1 (data groups) or Task 2 (listing factors).' },
          { word: 'coherent image', definition: 'An image that is logical, consistent, and forms a unified whole.', explanation: 'Means a clear and connected image or idea. Can be used in IELTS Writing Task 2 or Speaking about communication.' },
          { word: 'a beam of light', definition: 'A narrow stream of light particles (photons) traveling in the same direction.', explanation: 'Means a narrow line of light. Good for IELTS Writing Task 1 (process diagrams) or Task 2 (science topics).' }
        ],
        interestingSentences: [
          { sentence: 'Humans have evolved unique cognitive abilities over time.', usage: 'Anthropology Lecture' },
          { sentence: 'Evolutionary theory explains the diversity of life.', usage: 'Science Textbook' }
        ]
      }
    ],
    dateRead: "2024-03-30" // March 30, 2024
  }
];