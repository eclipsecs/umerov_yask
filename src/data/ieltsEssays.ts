// IELTS Task 1 Images - Import your images here
import chart_1_1 from '@/assets/ielts-task1-images/chart_1_1.png';
import chart_1_2 from '@/assets/ielts-task1-images/chart_1_2.png'
// Add more images like this:
// import energyChart from '@/assets/ielts-task1-images/energy-consumption-chart.png';
// import populationGraph from '@/assets/ielts-task1-images/population-growth.png';

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


export const ieltsEssays: IELTSEssay[] = [
// Task 2 - Part 1 of 100
  {
    id: '1',
    task: 'task2',
    title: 'Task two: 1 of 100',
    question: ' Today, TV channels show more men’s sports than women’s sports. Why is this the case? Should TV channels give equal time for women’s sport and men’s sport?',
    bandScore: 8,
    writingTime: '31 minutes',
    wordCount: 388,
    tags: ['TV', 'Sports', 'Gender inequality'],
    content: ` ## Inequality of gender in **Sports** broadcasting

Watching and performing sports has been popular in many countries. In fact, it has attracted a wide audience, particularly among men, creating a gap between them and their female counterparts. I believe that it is widely popular among men because it involves physical effort, which is often appreciated by male viewers. Similarly, many people prefer to watch male commentators and presenters over female ones.

These days, many people—particularly men—not only engage in sports but also frequently watch them. This provides a great opportunity for many channels that prioritize prestige and profitable revenue. A particular example is football, which has gained widespread appeal among men due to the excitement it brings and the revenue it generates for broadcasting channels. Moreover, combat sports like boxing and UFC require significant physical strength, not to mention the brutal nature and aggressive attitude demanded of participants. In fact, UFC has also provided opportunities for women, which has attracted public attention in many countries. Ultimately, it can be concluded that a larger male audience in sports provides broadcasting channels with both prestige and profit, in addition to opportunities to advertise various products.

Achieving a balance between both genders in sports coverage requires effort. Many young women have turned to social media, as it not only helps them become public figures but also allows them to gain substantial profits from investors. When it comes to sports, female interest has been surprisingly low, according to a study conducted over 30 years. However, if TV channels broadcast women’s sports for the same number of hours as men’s, it may attract significant attention from young females, benefiting their overall well-being. Take, for example, gymnastics, which is popular among girls and women. This sport has provided various benefits to females in terms of physical appearance and body shape. These factors are especially important to many women, making it a widely followed sport. In addition, equal broadcasting would promote gender equality. However, some argue that famous brands may be less willing to market their products during women’s sports, as it takes extensive time to gain media attention in mainstream society.

In conclusion, while men continue to dominate many areas—especially in sports—women should be given equal opportunities to increase the importance of sports among the female generation, despite concerns about reduced revenue due to a smaller audience.
`
  },
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
    // TO ADD IMAGE: Replace 'sampleChart' with your imported image variable
    image: chart_1_1, // <-- This is where you link your imported image
    content: `# Energy generation from coal

The **flow chart** illustrates the process of generating electricity from coal, beginning with coal extraction and ending with the distribution of electricity to households and industrial grids. Overall, electricity production involves multiple stages, starting from coal mining and crushing, followed by gasification and purification of the gas, before it is finally converted into electricity. Throughout the process, byproducts such as waste heat are released and managed accordingly.

The process begins with coal being mined and **subsequently** passed through a crusher, where it is broken down into smaller pieces to facilitate handling. The crushed coal is then transported to a gasifier, in which it is subjected to intense heat to produce synthetic gas.

This gas is then channeled to a cooling unit to reduce its temperature and remove waste heat. Following this, it enters a cleaning facility, where impurities are filtered out. The refined gas is fed into a gas-powered plant, where it is used to generate electricity. The final stage involves distributing the produces electricity to residential homes and large-scale electricity grids.

`
  },
  // Task 1 - Part 2 of 100
  {
    id: '2',
    task: 'task1', 
    title: 'Bar Chart: 2 of 100',
    question: 'The bar chart shows the proportion of men and women aged 60-64 employed in four different countries in 1997 and 2000. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '23 minutes', 
    wordCount: 216,
    tags: ['Line Graph'],
    image: chart_1_2,
    content: `# Gender employment rates in four countries

The bar chart compares the percentage of employment for men and women aged between 60 and 64 in Belgium, the US, Japan, and Australia between 1997 and 2000. Overall, in all countries, employment figures in the male category were significantly higher compared to women, especially in 1970, outnumbering women. However, they exhibited a significant decline in later years compared to women.

In Belgium, 79% of men were employed in 1970 in their 60s, however, it declined dramatically to 19% in 2000. The USA and Japan had almost similar employment rates in 1970. However, a decreasing figure emerged in both countries, at 55% and 74% respectively. On the other hand, a substantial decline can be seen in Australia, at 76% of men were employed in 1970, dropping to 47% in 2000.

In contrast, Belgium in the women’s category has the lowest employment rate, ranging from 8-7% in both 1970 and 2000. Australia ranked second in that list of least working countries, with 16% of women aged 60-64 having worked in 1970, with a slight increase in the figure after 30 years (2000). While the number of workers in women’s pack increased to 39% in 2000, jumping from 36% in 1970, Japan experienced the opposite, with 43% of women working in 1970, but falling to 40% in 2000.
`
  },
  // Task 1 - Part 3 of 100
  {
    id: '3',
    task: 'task1', 
    title: 'Line Graph: 3 of 100',
    question: 'The line graph shows the prison population in a European country between 1911 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.5,
    writingTime: '14 minutes', 
    wordCount: 169,
    tags: ['Line Graph'],
    image: chart_1_2,
    content: `# The number of prisoners in a European country by gender

The line graph, classified into male and female groups, illustrates the number of prisoners in a European country from 1911 and 2011.

Overall, more men were imprisoned than women throughout the registered period. While the number of prisoners in female category gradually declined, the reverse is true for male, where the figures show continues increase in prison population.

There were nearly 20.000 male prisoners in 1911. By 1931, this number decreased to 10.000 before increasing again to 20.000. Until 1971, the figure hovered around, however, it dramatically experienced a growth, where over 40.000 males were imprisoned.

Turning to female group, between 3.000 to 3.500 female were in locked in cell. After a slight dip to below 3.000 females in 1921, the figure exhibited a downward trend by dropping to just over 500 female prisoners in 1941. Afterwards, it experienced a brief increase in population number by roughly reaching 1.500. Finally, the female prison population rate slowly rose over 1.500, after seeing a period of decrease from 1961 to 1981.
`
  }
];