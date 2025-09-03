// IELTS Task 1 Images - Import your images here
// Add your images like this:
// import myChart from '@/assets/ielts-task1-images/my-chart.png';

export interface IELTSEssay {
  id: string;
  task: 'task1' | 'task2';
  title: string;
  question: string;
  content: string;
  bandScore: number;
  writingTime: string;
  wordCount: number;
  tags: string[];
  image?: string; // Optional image for Task 1 essays
}

export const task1Essays: IELTSEssay[] = [
  // Task 1 - Part 1 of 100
  {
    id: '2',
    task: 'task1',
    title: 'Process Chart: 1 of 100',
    question: 
    `The diagram below shows how one type of coal is used to produce electricity. \n
    Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
    bandScore: 8.5,
    writingTime: '20 minutes',
    wordCount: 172,
    tags: ['Process Chart'],
    image: undefined, // Add your image here when available
    content: `# Energy generation from coal

The **flow chart** illustrates the process of generating electricity from coal, beginning with coal extraction and ending with the distribution of electricity to households and industrial grids. Overall, electricity production involves multiple stages, starting from coal mining and crushing, followed by gasification and purification of the gas, before it is finally converted into electricity. Throughout the process, byproducts such as waste heat are released and managed accordingly.

The process begins with coal being mined and **subsequently** passed through a crusher, where it is broken down into smaller pieces to facilitate handling. The crushed coal is then transported to a gasifier, in which it is subjected to intense heat to produce synthetic gas.

This gas is then channeled to a cooling unit to reduce its temperature and remove waste heat. Following this, it enters a cleaning facility, where impurities are filtered out. The refined gas is fed into a gas-powered plant, where it is used to generate electricity. The final stage involves distributing the produces electricity to residential homes and large-scale electricity grids.

`
  },
  // Task 1 - Part 2 of 100
  {
    id: '3',
    task: 'task1', 
    title: 'Bar Chart: 2 of 100',
    question: 'The bar chart shows the proportion of men and women aged 60-64 employed in four different countries in 1997 and 2000. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '23 minutes', 
    wordCount: 216,
    tags: ['Bar Chart'],
    image: undefined, // Add your image here when available
    content: `# Gender employment rates in four countries

The bar chart compares the percentage of employment for men and women aged between 60 and 64 in Belgium, the US, Japan, and Australia between 1997 and 2000. Overall, in all countries, employment figures in the male category were significantly higher compared to women, especially in 1970, outnumbering women. However, they exhibited a significant decline in later years compared to women.

In Belgium, 79% of men were employed in 1970 in their 60s, however, it declined dramatically to 19% in 2000. The USA and Japan had almost similar employment rates in 1970. However, a decreasing figure emerged in both countries, at 55% and 74% respectively. On the other hand, a substantial decline can be seen in Australia, at 76% of men were employed in 1970, dropping to 47% in 2000.

In contrast, Belgium in the women's category has the lowest employment rate, ranging from 8-7% in both 1970 and 2000. Australia ranked second in that list of least working countries, with 16% of women aged 60-64 having worked in 1970, with a slight increase in the figure after 30 years (2000). While the number of workers in women's pack increased to 39% in 2000, jumping from 36% in 1970, Japan experienced the opposite, with 43% of women working in 1970, but falling to 40% in 2000.
`
  },
  // Task 1 - Part 3 of 100
  {
    id: '4',
    task: 'task1', 
    title: 'Line Graph: 3 of 100',
    question: 'The line graph shows the prison population in a European country between 1911 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.5,
    writingTime: '14 minutes', 
    wordCount: 169,
    tags: ['Line Graph'],
    image: undefined, // Add your image here when available
    content: `# The number of prisoners in a European country by gender

The line graph, classified into male and female groups, illustrates the number of prisoners in a European country from 1911 and 2011.

Overall, more men were imprisoned than women throughout the registered period. While the number of prisoners in female category gradually declined, the reverse is true for male, where the figures show continues increase in prison population.

There were nearly 20.000 male prisoners in 1911. By 1931, this number decreased to 10.000 before increasing again to 20.000. Until 1971, the figure hovered around, however, it dramatically experienced a growth, where over 40.000 males were imprisoned.

Turning to female group, between 3.000 to 3.500 female were in locked in cell. After a slight dip to below 3.000 females in 1921, the figure exhibited a downward trend by dropping to just over 500 female prisoners in 1941. Afterwards, it experienced a brief increase in population number by roughly reaching 1.500. Finally, the female prison population rate slowly rose over 1.500, after seeing a period of decrease from 1961 to 1981.
`
  },
  // Task 1 - Part 4 of 100
  {
    id: '5',
    task: 'task1',
    title: 'Process Diagram: 4 of 100',
    question: 'The diagram below shows how coal is used to produce electricity. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '18 minutes',
    wordCount: 185,
    tags: ['Process Diagram', 'Energy'],
    image: undefined, // Add your image here when available
    content: `# Coal to Electricity Generation Process

The process diagram illustrates the systematic conversion of coal into electricity through a series of interconnected stages. Overall, the process involves coal preparation, combustion, steam generation, and electrical output distribution.

Initially, coal is extracted and transported to the power plant where it undergoes crushing to achieve optimal particle size for efficient combustion. The crushed coal is then fed into a furnace where it burns at high temperatures, generating intense heat energy.

The heat produced from coal combustion is used to boil water in a steam generator, creating high-pressure steam. This steam is directed through turbines, causing them to rotate rapidly. The mechanical energy from the rotating turbines drives electrical generators that convert this kinetic energy into electrical power.

Following electricity generation, the steam is cooled and condensed back into water through a cooling system, which recycles the water back to the steam generator, creating a closed-loop system. The generated electricity is then transmitted through power lines to supply energy to residential and commercial consumers.

Throughout this process, waste products including ash and emissions are managed through appropriate filtration and disposal systems to minimize environmental impact.
`
  }
];