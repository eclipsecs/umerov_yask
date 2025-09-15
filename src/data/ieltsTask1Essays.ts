// IELTS Task 1 Images - Import your images here
// Add your images like this:
// import myChart from '@/assets/ielts-task1-images/my-chart.png';
import chart_1_1 from '@/assets/ielts-task1-images/chart_1_1.png';
import chart_1_2 from '@/assets/ielts-task1-images/chart_1_2.png';
import chart_1_3 from '@/assets/ielts-task1-images/chart_1_3.png';
import chart_1_4 from '@/assets/ielts-task1-images/chart_1_4.png';
import chart_1_5 from '@/assets/ielts-task1-images/chart_1_5.png';
import chart_1_6 from '@/assets/ielts-task1-images/chart_1_6.png';
import chart_1_7 from '@/assets/ielts-task1-images/chart_1_7.png';
import chart_1_8 from '@/assets/ielts-task1-images/chart_1_8.png';
import chart_1_9 from '@/assets/ielts-task1-images/chart_1_9.png';

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
    id: '109',
    task: 'task1',
    title: 'Task One: 9 of 100: Stacked Bar Chart',
    question: 'The bar shows the percentage of people going to cinemas in one European country on different days. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 7.5,
    writingTime: '18 minutes',
    wordCount: 203,
    tags: ['Stacked Bar Chart'],
    image: chart_1_9, // Add your image here when available
    content: `

The bar chart illustrates the percentage of people who attended the cinema in a particular European country on each day of the week in three different years: 2003, 2005, 2007.

Overall, cinema attendance was noticeably higher during the weekends, especially on Saturdays, across all three years. In contrast, weekday figures were considerably lower, with Thursday showing the least popularity in most cases.

In detail, during the weekdays, Friday was consistently the most popular day, with exactly 30% of people going to the cinema all three years. Tuesday also saw relatively high attendance, peaking at 20% in 2003 and remaining above 17% in other years. Regarding Monday and Wednesday, these days experienced moderate figures, fluctuating between 9% and 16% depending on the year. Notably, Thursday had the lowest cinema attendance, dropping to just under 10% in 2005 but rising to approximately 15% by 2007.

In terms of weekends, attendance figures were significantly higher. Saturday had the highest proportion of cinema-goers, reaching 45% in 2005 – marking the highest figure overall. In comparison, Sunday attracted fewer people but still remained popular, with percentages ranging from 30% to around 35%. Although attendance peaked in 2005 for both weekend days, 2007 still showed strong figures, particularly on Saturday.

`
  },
  {
    id: '108',
    task: 'task1',
    title: 'Task One: 8 of 100: Pie Chart',
    question: 'The two pie charts show which devices were used by people aged from 18 to 25 to watch TV in Canada in 2009 and 2019. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 7.5,
    writingTime: '18 minutes',
    wordCount: 275,
    tags: ['Pie Chart'],
    image: chart_1_8, // Add your image here when available
    content: `

The two pie charts show which devices were used by people aged from 18 to 25 to watch TV in Canada in 2009 and 2019. Overall, conventional TVs, followed laptops and desktop computers were the most popular means. However, the proportion of people using these devices fell in 2019, but the reverse is true for the percentage of people watched TV on mobile phones, tablets, and flat-screen TVs.  

The two pie charts show which devices were used by people aged from 18 to 25 to watch TV in Canada in 2009 and 2019. Overall, conventional TVs, followed laptops and desktop computers were the most popular means in 2009. However, these devices somewhat fell out of favor as people increasingly preferred flat-screen TVs, mobile phones, and tablets by 2019. 

Focusing on the increases first, 27% of people from the 18-25 age bracket used flat-screen TVs in 2019, up from just 8% in 2009. The least popular means of watching TV in 2009 – tablets – became popular as well, as the percentage reached 19% in 2019 from an initial 5%. Lastly, the change was less pronounced in the percentage of people accessing TV through their phones: it rose from 15% in 2009 to 26% in 2019. 

The remaining devices became outdated. The biggest drop was seen in the proportion of people watching conventional TVs from a staggering 34% to just 4%. While a fifth of people used laptops in 2009, this figure saw an 8-percentage-point change, dropping to 12%. Finally, the figure for those who watched TV on their desktop computers stood at 18% in 2009, a figure that then fell to 12%, representing the smallest overall change.

`
  },
  {
    id: '107',
    task: 'task1',
    title: 'Task One: 7 of 100: Line Graph',
    question: 'The line graph shows the proportion of total exports of clothing in 4 different countries in 2000 to 2014. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '18 minutes',
    wordCount: 235,
    tags: ['Line Graph'],
    image: chart_1_7, // Add your image here when available
    content: `

The line graph displays the percentage of global clothing exports accounted for by four countries – China, the European Union, Asia (excluding China), and the USA – from 2000 to 2014.

Overall, China experienced a substantial increase in its share of clothing exports, surpassing both the European Union and Asia (excluding China) to become the leading exporter by 2014. In contrast, the European Union and Asia (excluding China) showed a consistent decline in their export proportions throughout the period. The USA maintained a relatively stable, though gradually decreasing, market share.

In 2000, China's share of clothing exports was just under 15%, significantly lower than Asia (excluding China). However, China's export proportion grew steadily, overtaking Asia (excluding China) around 2002. This upward trend continued, exceeding the European Union's share in 2010 and reaching over 35% by 2014.

The European Union, starting with a share exceeding 33% in 2000, demonstrated a consistent downward trend. By 2014, its proportion had fallen to below 22%, marking a significant loss of market share to China. Asia (excluding China), which initially held a 30% share, also experienced a decline, fluctuating between 15% and 20% from 2002 to 2008 before falling below 20% in 2014.

The USA's contribution to global clothing exports remained relatively stable at just above 10% until 2004. Following this, a gradual decrease occurred, settling around 10% between 2008 and 2010 before continuing its decline to the end of the period.

`
  },
  {
    id: '106',
    task: 'task1',
    title: 'Task One: 6 of 100: Stacked Bar Chart',
    question: 'The chart below shows the average hours spent per day in leisure and sports activities by youngest and older populations in the US in 2015. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '18 minutes',
    wordCount: 213,
    tags: ['Stacked Bar Chart'],
    image: chart_1_6, // Add your image here when available
    content: `

The bar chart compares the average number of hours per day spent on various leisure and sports activities by the youngest (ages 15-19) and oldest (ages 75 and over) age groups in the United Staes in 2015.

Overall, watching television was the most time-consuming activity for both groups, although older people spent significantly more time on it than teenagers. In contrast, the younger group devoted more time to physically and mentally engaging activities such as sports and computer games.

Older adults spent an average of 4.5 hours per day watching TV, almost double the 2.5 hours spent by teenagers. This was by far the most popular leisure activity among both groups. Meanwhile, young people aged 15-19 spent approximately 1.1 hours playing games or using the computer for leisure, which was about twice the amount spent by those over 75.

With regard to physical activity, those in the 15-19 age group participated in sports, exercise, and recreation for just over half an hour daily, compared to less than half that time among the elderly. Reading and relaxing were more common among the older population, who spent around one hour and 0.5 hours per day on these activities, respectively. In contrast, teenagers spent only about 0.2 hours on reading and even less time on relaxing.

`
  },
  {
    id: '105',
    task: 'task1',
    title: 'Task One: 5 of 100: Process Chart',
    question: 'The diagram below shows one way of manufacturing ceramic pots. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
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
    question: 'The table below shows the number of temporary migrant workers in four countries in 2003 and 2006 and the number of these workers per 1,000 people in these countries in 2006. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
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
    question: `The line graph shows the prison population in a European country between 1911 and 2011. \n
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