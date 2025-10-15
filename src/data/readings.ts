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
    title: 'How to calm your brain',
    subheading: "Placeholder subheading",
    image: 'https://images.newscientist.com/wp-content/uploads/2025/08/20173704/SEI_262545464.jpg?width=628',
    vocabularies: [
      {
        unit: "Unit 6 - How to calm your brain",
        vocabularies: [
          { word: 'innate', definition: 'something you are born with', explanation: 'Adjective — describes qualities or abilities that are natural, not learned.' },
          { word: 'a huge range', definition: 'a very large variety or number of things', explanation: 'Noun phrase — used to describe great variety or diversity.' },
          { word: 'full promise', definition: 'having great potential or showing signs of future success', explanation: 'Noun phrase — describes something with strong potential.' },
          { word: 'slashed funding', definition: 'when the amount of money given is cut sharply or reduced a lot', explanation: 'Phrase — used in contexts where budgets are reduced significantly.' },
          { word: 'knock-on effects', definition: 'indirect results or consequences of something', explanation: 'Noun phrase — describes chain reactions or secondary effects.' },
          { word: 'built-in', definition: 'already included or part of something', explanation: 'Adjective — describes something that exists as part of a system or structure.' },
          { word: 'wide array', definition: 'a large and diverse group or collection', explanation: 'Noun phrase — similar to "a wide variety" or "a broad range".' },
          { word: '...but in combination', definition: 'when two or more things work together for a stronger effect', explanation: 'Phrase — used to show that things are more effective together.' },
          { word: 'replicate', definition: 'to copy or reproduce something', explanation: 'Verb — means to make or do something again in the same way.' },
          { word: 'outpace', definition: 'to move faster or perform better than something or someone', explanation: 'Verb — describes something progressing faster than another.' },
          { word: 'ramp up', definition: 'to increase or grow something quickly', explanation: 'Phrasal verb — means to boost or raise rapidly.' },
          { word: 'mild', definition: 'not strong, serious, or extreme', explanation: 'Adjective — used for describing gentle or light effects or conditions.' },
          { word: 'kicks in', definition: 'starts to work or take effect', explanation: 'Phrasal verb — refers to the point when something begins to function.' },
          { word: 'side effects', definition: 'unwanted or secondary results of something (especially medicine)', explanation: 'Noun phrase — describes negative or additional outcomes.' },
          { word: 'crucial head start', definition: 'an important early advantage', explanation: 'Noun phrase — means an initial benefit that helps later success.' },
          { word: 'with a dramatic reduction', definition: 'when something decreases sharply', explanation: 'Phrase — describes a strong or significant decrease.' },
          { word: 'a broad range', definition: 'covering many types or areas; wide variety', explanation: 'Noun phrase — means a large and inclusive variety.' },
          { word: 'several steps down the line', definition: 'later in the process; in the future', explanation: 'Phrase — means at a later stage or time.' },
          { word: 'current trajectory', definition: 'the direction or path something is currently moving toward', explanation: 'Noun phrase — describes current progress or trend.' },
          { word: 'unlikely to', definition: 'not expected to happen or be true', explanation: 'Phrase — means it probably will not occur.' },
          { word: 'as long as', definition: 'only if a certain condition is met', explanation: 'Phrase — means "provided that" or "on the condition that".' }
        ],
        interestingSentences: [
          { sentence: 'New therapies are improving survival rates for many types of cancer.', usage: 'Writing Task 2' },
          { sentence: 'Genetic research is leading to more personalized treatment approaches.', usage: 'Speaking' }
        ]
      },
      {
        unit: "Unit 5 - Dangerously hot and humid days are on the rise",
        vocabularies: [
          { word: 'unprecedented levels', definition: 'levels that have never been seen before', explanation: 'Adjective phrase — describes something happening at a record or extreme degree.' },
          { word: 'exceeded', definition: 'went beyond a limit or amount', explanation: 'Verb — used when something surpasses a set level or standard.' },
          { word: 'measure + more than the previous', definition: 'used when comparing one result to another', explanation: 'Phrase — used in data or research contexts to show comparison.' },
          { word: 'moist', definition: 'slightly wet or damp', explanation: 'Adjective — describes a condition with light or gentle wetness.' },
          { word: 'offload heat', definition: 'to release or get rid of extra heat', explanation: 'Phrase/verb — means to cool down by removing excess warmth.' },
          { word: 'threshold', definition: 'a limit or point where something starts to happen or change', explanation: 'Noun — indicates the starting point of a new condition or reaction.' }
        ],
        interestingSentences: [
          { sentence: 'Temperatures have reached unprecedented levels across multiple continents this summer.', usage: 'Writing Task 2' },
          { sentence: 'When humidity rises above the human tolerance threshold, it becomes dangerously hot.', usage: 'Speaking' }
        ]
      },
      {
        unit: "Unit 4 - Is the AI boom slowing down?",
        vocabularies: [
          { word: 'step forward', definition: 'a small but positive move or improvement', explanation: 'Noun phrase — describes a minor but meaningful advancement.' },
          { word: 'leap', definition: 'a big, sudden improvement or change', explanation: 'Noun — refers to a significant or dramatic progress.' },
          { word: 'tentative', definition: 'uncertain, not yet final, or done carefully because you\'re unsure', explanation: 'Adjective — describes something not yet confirmed or done cautiously.' },
          { word: 'driven', definition: 'very motivated or determined to achieve something', explanation: 'Adjective — used to describe a person with strong ambition or motivation.' },
          { word: 'jump in capability', definition: 'a sudden and large increase in ability or performance', explanation: 'Noun phrase — means a major boost in skill or function.' },
          { word: 'apparent', definition: 'easy to see or notice; obvious', explanation: 'Adjective — means clear or visible to the eye or mind.' },
          { word: 'spanning over', definition: 'covering or extending across a period of time or distance', explanation: 'Phrase — means stretching across time or space.' },
          { word: 'borne out', definition: 'proven or confirmed by evidence (bear out)', explanation: 'Phrase — means supported or shown to be true by facts.' },
          { word: 'stagnating', definition: 'not developing or improving; becoming stuck', explanation: 'Verb/adjective — used to describe progress slowing or stopping.' },
          { word: 'stagnant', definition: 'not moving or changing; still and inactive (used for water, economy, career, etc.)', explanation: 'Adjective — describes something motionless or not advancing.' },
          { word: 'prompting', definition: 'causing or motivating someone or something to act', explanation: 'Verb/noun — refers to triggering or inspiring an action.' },
          { word: 'scant', definition: 'very little; not enough', explanation: 'Adjective — means insufficient in amount or quantity.' }
        ],
        interestingSentences: [
          { sentence: 'The recent slowdown in AI innovation has prompted questions about its long-term sustainability.', usage: 'Writing Task 2' },
          { sentence: 'While progress seems to have stagnated, new breakthroughs could soon change that.', usage: 'Speaking' }
        ]
      },
      {
        unit: "Unit 3 - Is this how complex life began?",
        vocabularies: [
          { word: 'remote bay', definition: 'a bay that is far away from towns or people', explanation: 'Noun phrase — refers to a coastal area located far from populated regions.' },
          { word: 'sedimentary', definition: 'made of layers of materials that settled and hardened over time', explanation: 'Adjective — describes rocks or formations created from accumulated sediments.' },
          { word: 'infer', definition: 'to conclude or understand something based on evidence, not directly stated', explanation: 'Verb — means to deduce or reach a conclusion indirectly.' },
          { word: 'sequencing', definition: 'determining the exact order of things, like genes or DNA', explanation: 'Noun — refers to arranging or identifying items in a specific order, often in biology.' },
          { word: 'chains of', definition: 'a connected series or group of similar things', explanation: 'Phrase — describes things that are linked together in a series.' },
          { word: 'sac-like structures', definition: 'small parts shaped like sacs or bags inside an organism', explanation: 'Noun phrase — refers to biological structures resembling small sacs.' },
          { word: 'bears similarities', definition: 'shows likeness or resemblance to something else', explanation: 'Phrase — means to share features or characteristics with something else.' },
          { word: 'a driving force', definition: 'the main factor causing something to happen', explanation: 'Noun phrase — describes a key motivator or cause behind a process or change.' },
          { word: 'possible obligate', definition: 'might be fully dependent', explanation: 'Phrase — used in biology to suggest complete reliance on something for survival.' },
          { word: 'resemble', definition: 'to look like or be similar to something', explanation: 'Verb — means to have a similar appearance or nature.' }
        ],
        interestingSentences: [
          { sentence: 'Scientists inferred that the earliest life forms may have developed in remote bays with rich sedimentary layers.', usage: 'Writing Task 2' },
          { sentence: 'The newly found microfossils bear similarities to modern microorganisms.', usage: 'Speaking' }
        ]
      },
      {
        unit: "Unit 2 - Living at higher altitudes may help ward off child obesity",
        vocabularies: [
          { word: 'ward off', definition: 'to keep something away or prevent it from harming you', explanation: 'Phrasal verb — means to protect yourself from something bad or unwanted.' },
          { word: 'potential impact', definition: 'the possible effect or result something may have', explanation: 'Noun phrase — refers to what might happen as a result of an action or situation.' },
          { word: 'statistical fluke', definition: 'a rare result that happened by chance, not by pattern', explanation: 'Noun phrase — describes an unlikely outcome that occurs accidentally in data.' },
          { word: 'observational', definition: 'based on watching and recording rather than experimenting', explanation: 'Adjective — describes studies or methods involving observation instead of tests.' },
          { word: 'bespoke', definition: 'specially made or customized for a person or purpose', explanation: 'Adjective — means tailor-made or designed specifically for individual needs.' },
          { word: 'basal metabolic rate', definition: 'the amount of energy your body uses while resting, just to stay alive', explanation: 'Noun phrase — describes how much energy the body needs to function at rest.' },
          { word: 'mountaineers', definition: 'people who climb mountains as a sport or profession', explanation: 'Noun — refers to mountain climbers or alpinists.' },
          { word: 'in part', definition: 'partly; to some extent, not completely', explanation: 'Phrase — means not entirely but to some degree.' },
          { word: 'excreted', definition: 'released or removed from the body as waste', explanation: 'Verb — describes the process of eliminating waste materials from the body.' },
          { word: 'elevate', definition: 'to raise or increase something (level, position, or feeling)', explanation: 'Verb — means to lift something higher or make it greater.' },
          { word: 'satiety', definition: 'the feeling of being full and no longer hungry', explanation: 'Noun — refers to the state of satisfaction after eating enough food.' },
          { word: 'might benefit from more tailored advice', definition: 'could do better with advice that is more personal or customized', explanation: 'Phrase — suggests that personalized guidance would be more effective.' },
          { word: 'satire', definition: 'a way of criticizing or mocking people, society, or ideas — often through humor, irony, or exaggeration — to make a serious point', explanation: 'Noun — refers to a literary or artistic form of social criticism.' }
        ],
        interestingSentences: [
          { sentence: 'Children living at high altitudes tend to have lower rates of obesity, possibly due to differences in metabolism.', usage: 'Writing Task 2' },
          { sentence: 'People living at higher elevations might benefit from more tailored advice about diet and exercise.', usage: 'Speaking' }
        ]
      },
      {
        unit: "Unit 1 - Mind the gap",
        vocabularies: [
          { word: 'mind the gap', definition: 'be aware of or pay attention to a difference or space between things', explanation: 'Phrase — commonly used as a warning in transport but also means noticing differences or inequalities.' },
          { word: 'overstate', definition: 'to say something is more important or serious than it really is', explanation: 'Verb — means to exaggerate or make something seem bigger than it is.' },
          { word: 'high-income nations', definition: 'countries with a high average income per person', explanation: 'Noun phrase — refers to economically developed countries.' },
          { word: 'slashed', definition: 'cut or reduced by a large amount', explanation: 'Verb — often used when talking about budgets or funding being sharply reduced.' },
          { word: 'gained a reputation', definition: 'became known for something (good or bad)', explanation: 'Phrase — means to develop a public image or recognition for a particular quality.' },
          { word: 'stagnant', definition: 'not moving, growing, or developing', explanation: 'Adjective — describes something that has stopped progressing, such as an economy or situation.' },
          { word: 'lack of effort', definition: 'not trying hard enough or not putting in enough work', explanation: 'Noun phrase — describes insufficient attempt or motivation.' },
          { word: 'subjective', definition: 'based on personal opinions or feelings, not facts', explanation: 'Adjective — means influenced by individual perspective rather than objective truth.' },
          { word: 'pinning down', definition: 'trying to define or identify something exactly', explanation: 'Phrasal verb — means to specify or make something clear and definite.' },
          { word: 'correlates', definition: 'has a mutual or reciprocal relationship with something', explanation: 'Verb — used to describe things that are connected or move together statistically.' },
          { word: 'ultimately', definition: 'finally; in the end', explanation: 'Adverb — used to describe the final result or conclusion.' },
          { word: 'rapid advances', definition: 'quick and significant developments or improvements', explanation: 'Noun phrase — refers to fast progress, often in science or technology.' },
          { word: 'scourge', definition: 'a cause of great suffering or harm', explanation: 'Noun — describes something that causes serious trouble or pain.' },
          { word: 'byproduct', definition: 'something that happens as a result of another process, not intentionally', explanation: 'Noun — refers to a secondary or unintended result.' },
          { word: 'exercising, relaxing, eating well', definition: 'activities that are beneficial for health and well-being', explanation: 'Structure — used as examples of positive habits that improve mental and physical health.' },
          { word: 'distress', definition: 'extreme anxiety, sadness, or pain', explanation: 'Noun — refers to a state of emotional or physical suffering.' },
          { word: 'a step change is most welcome', definition: 'a big improvement or positive shift is very desirable', explanation: 'Phrase — means a major positive transformation would be appreciated.' }
        ],
        interestingSentences: [
          { sentence: 'High-income nations have made rapid advances in healthcare, but inequality remains a scourge of modern society.', usage: 'Writing Task 2' },
          { sentence: 'Exercising, relaxing, and eating well are beneficial habits that can ultimately reduce distress.', usage: 'Speaking' }
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