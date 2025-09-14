// IELTS Task 1 Images - Import your images here
// Add your images like this:
// import myChart from '@/assets/ielts-task1-images/my-chart.png';
import chart_1_1 from '@/assets/ielts-task1-images/chart_1_1.png';
import chart_1_2 from '@/assets/ielts-task1-images/chart_1_2.png';
import chart_1_3 from '@/assets/ielts-task1-images/chart_1_3.png';
import chart_1_4 from '@/assets/ielts-task1-images/chart_1_4.png';
import chart_1_5 from '@/assets/ielts-task1-images/chart_1_5.png';

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
  // Task 1 - Part 4 of 100
  {
    id: '105',
    task: 'task1',
    title: 'Task One: 5 of 100: Process Chart',
    question: 'The diagram below shows one way of manufacturing ceramic pots.. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '18 minutes',
    wordCount: 180,
    tags: ['Process Chart'],
    image: chart_1_5, // Add your image here when available
    content: `

The diagram illustrates the process of making ceramic pots that goes through a series of consecutive steps.

Overall, the process involves four main stages: starting with digging and delivering the sand to the factory, after which it undergoes through several industrial process, followed by coloring stages. Also, the process is mainly machine-driven.

Initially, sand is excavated from the ground by an excavator that fills the truck. This truck then delivers the sand to a factory. In this factory, first, the sand is poured into a machine that crushes it before it goes to a water mixing procedure. Once mixed, it is poured into a molding container that creates shapes of the pots. Prior pots being assembled, it is left to dry from 4-6 hours.
After that, these pots are stored in an oven which heats at 1000 degree Celsius. Following this, the pots undergo a coloring stage, where they are painted to a blue color. Finally, the pots are stacked into a color firing machine to ensure the permanence of colors, which are then ready to be used or sold.

`
  },
  // Task 1 - Part 3 of 100
  {
    id: '104',
    task: 'task1', 
    title: 'Task One: 4 of 100 - Table',
    question: 'The table below shows the number of temporary migrant workers in four countries in 2003 and 2006 and the number of these workers per 1,000 people in these countries in 2006.. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.5,
    writingTime: '14 minutes', 
    wordCount: 242,
    tags: ['Table'],
    image: chart_1_4, // Add your image here when available
    content: `

The table compares the number of temporary migrant workers in four countries—Australia, New Zealand, the United Kingdom, and the United States—in the years 2003 and 2006, along with the number of such workers per 1,000 people in 2006.

Overall, the number of temporary migrant workers increased in all countries over the three-year period, although the rates of growth varied. While the United States had the highest number of migrant workers, it had one of the lowest ratios relative to its population.

In more detail, the United States ranked first, employing 577,000 temporary migrant workers in 2003. This figure rose to 678,000 by 2006. However, this large number translated to only 2.3 workers per 1,000 people in 2006, the lowest ratio among the four countries. The United Kingdom, in contrast, had 137,000 migrant workers in 2003, which nearly doubled to 266,000 by 2006. Its migrant-to-population ratio was higher than that of the U.S., at 4.4 per 1,000 people.

Australia also experienced a notable increase in migrant workers, rising from 152,000 in 2003 to 219,000 in 2006. The ratio of migrant workers to population in 2006 stood at 10.7 per 1,000 people—more than double the figure for both the United Kingdom and the United States. Finally, although New Zealand had the fewest migrant workers in absolute numbers (65,000 in 2003 and 87,000 in 2006), it had the highest per capita ratio, with 21.1 temporary migrant workers per 1,000 people in 2006.

`
  },
  // Task 1 - Part 2 of 100
  {
    id: '103',
    task: 'task1', 
    title: 'Task One: 3 of 100 - Line Graph',
    question: `The line graph shows the prison population in a European country between 1911 and 2011.. \n
    Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
    bandScore: 8.0,
    writingTime: '23 minutes', 
    wordCount: 169,
    tags: ['Line Graph'],
    image: chart_1_3, // Add your image here when available
    content: `

The bar chart compares the percentage of employment for men and women aged between 60 and 64 in Belgium, the US, Japan, and Australia between 1997 and 2000. Overall, in all countries, employment figures in the male category were significantly higher compared to women, especially in 1970, outnumbering women. However, they exhibited a significant decline in later years compared to women.

In Belgium, 79% of men were employed in 1970 in their 60s, however, it declined dramatically to 19% in 2000. The USA and Japan had almost similar employment rates in 1970. However, a decreasing figure emerged in both countries, at 55% and 74% respectively. On the other hand, a substantial decline can be seen in Australia, at 76% of men were employed in 1970, dropping to 47% in 2000.

In contrast, Belgium in the women's category has the lowest employment rate, ranging from 8-7% in both 1970 and 2000. Australia ranked second in that list of least working countries, with 16% of women aged 60-64 having worked in 1970, with a slight increase in the figure after 30 years (2000). While the number of workers in women's pack increased to 39% in 2000, jumping from 36% in 1970, Japan experienced the opposite, with 43% of women working in 1970, but falling to 40% in 2000.
`
  },
  // Task 1 - Part 1 of 100
  {
    id: '102',
    task: 'task1',
    title: 'Task One: 2 of 100 - Bar Chart',
    question: 
    `The bar chart shows the proportion of men and women aged 60-64 employed in four different countries in 1997 and 2000. \n
    Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
    bandScore: 8.5,
    writingTime: '20 minutes',
    wordCount: 216,
    tags: ['Bar chart'],
    image: chart_1_2, // Add your image here when available
    content: `#

The bar chart compares the percentage of employment for men and women aged between 60 and 64 in Belgium, the US, Japan, and Australia between 1997 and 2000. Overall, in all countries, employment figures in the male category were significantly higher compared to women, especially in 1970, outnumbering women. However, they exhibited a significant decline in later years compared to women.

In Belgium, 79% of men were employed in 1970 in their 60s, however, it declined dramatically to 19% in 2000. The USA and Japan had almost similar employment rates in 1970. However, a decreasing figure emerged in both countries, at 55% and 74% respectively. On the other hand, a substantial decline can be seen in Australia, at 76% of men were employed in 1970, dropping to 47% in 2000.

In contrast, Belgium in the women’s category has the lowest employment rate, ranging from 8-7% in both 1970 and 2000. Australia ranked second in that list of least working countries, with 16% of women aged 60-64 having worked in 1970, with a slight increase in the figure after 30 years (2000). While the number of workers in women’s pack increased to 39% in 2000, jumping from 36% in 1970, Japan experienced the opposite, with 43% of women working in 1970, but falling to 40% in 2000.


`
  },
  {
    id: '101',
    task: 'task1',
    title: 'Task One: 1 of 100 - Process Chart',
    question: 
    `The diagram below shows how one type of coal is used to produce electricity. \n
    Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
    bandScore: 8.5,
    writingTime: '20 minutes',
    wordCount: 172,
    tags: ['Process Chart'],
    image: chart_1_1, // Add your image here when available
    content: `

The **flow chart** illustrates the process of generating electricity from coal, beginning with coal extraction and ending with the distribution of electricity to households and industrial grids. Overall, electricity production involves multiple stages, starting from coal mining and crushing, followed by gasification and purification of the gas, before it is finally converted into electricity. Throughout the process, byproducts such as waste heat are released and managed accordingly.

The process begins with coal being mined and **subsequently** passed through a crusher, where it is broken down into smaller pieces to facilitate handling. The crushed coal is then transported to a gasifier, in which it is subjected to intense heat to produce synthetic gas.

This gas is then channeled to a cooling unit to reduce its temperature and remove waste heat. Following this, it enters a cleaning facility, where impurities are filtered out. The refined gas is fed into a gas-powered plant, where it is used to generate electricity. The final stage involves distributing the produces electricity to residential homes and large-scale electricity grids.

`
  }
];