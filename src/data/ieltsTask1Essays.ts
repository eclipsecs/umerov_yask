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
import chart_1_10 from '@/assets/ielts-task1-images/chart_1_10.png';
import chart_1_11 from '@/assets/ielts-task1-images/chart_1_11.png';
import chart_1_12 from '@/assets/ielts-task1-images/chart_1_12.png';
import chart_1_13 from '@/assets/ielts-task1-images/chart_1_13.png';
import chart_1_14 from '@/assets/ielts-task1-images/chart_1_14.png';
import chart_1_15 from '@/assets/ielts-task1-images/chart_1_15.png';
import chart_1_16 from '@/assets/ielts-task1-images/chart_1_16.png';
import chart_1_17 from '@/assets/ielts-task1-images/chart_1_17.png';


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

  // ✅ New fields for manual scoring (Task 1)
  taskAchievement?: number; // TA
  coherenceCohesion?: number; // CC
  lexicalResource?: number; // LR
  grammaticalRangeAccuracy?: number; // GRA
  taskResponse?: number; // TR for Task 2
}

export const task1Essays: IELTSEssay[] = [
  // Task 1 - Part 4 of 100
  {
    id: '117',
    task: 'task1',
    title: 'Task One: 17 of 100: Bar chart',
    question: 'The bar chart shows the average number of hours students in five different universities studied.. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 6.0,
    taskAchievement: 9,
    coherenceCohesion: 8,
    lexicalResource: 9.0,
    grammaticalRangeAccuracy: 8.0,
    writingTime: '12 minutes',
    wordCount: 190,
    tags: ['Bar'],
    image: chart_1_17, // Add your image here when available
    content: `

The bar charts provide comparison of the number of hours in average students of various universities studied in weekdays and weekends.

Overall, all universities studied almost the same number of hours on weekdays with University C showing the greatest number of hours studied across other universities, however on weekends, university A recorded the greatest number of hours, while still remaining below University C’s weekday total.

The average number of hours studied by students from university C stood at 10.6. A close pattern can be observed for university B and E, where students from both of these universities contribute about 10.1 hours on average on weekdays. Meanwhile, university E constituted 10 hours on average for studying, university A spends 9.8 hours – showing a mild difference in between.

In contrast, on the weekends, the university that showed the greatest number of hours spent for studying is A at 9 hours on average. University B followed, which spends 8.6 hours on average. While students from university C study 7.8 hours on average, university E does so for 6.2 hours. It is university D that experienced the least number of hours spent on studying on weekends.

`
  },
  {
    id: '116',
    task: 'task1',
    title: 'Task One: 16 of 100: Table',
    question: 'The table gives information about water use in three sectors in six different countries. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.5,
    taskAchievement: 9,
    coherenceCohesion: 8,
    lexicalResource: 9.0,
    grammaticalRangeAccuracy: 8.0,
    writingTime: '12 minutes',
    wordCount: 179,
    tags: ['Table'],
    image: chart_1_16, // Add your image here when available
    content: `

The table compares water usage in three sectors – agriculture, industry, and households – across six countries.

Overall, agricultural water consumption was significantly higher than industrial or domestic use in all countries. Canada had the highest total water usage, while China had the lowest.

In detail, Russia had the highest agricultural water consumption at 1863 m³, followed by Turkey with 1482 m³ and Canada with 1238 m³. The UK used considerably less, at 810 m³, closely followed by China at 805 m³. Australia recorded the lowest agricultural usage at 741 m³.

In terms of industrial water use, Canada and Turkey led with 832 m³ and 731 m³ respectively. The UK and Australia used moderate amounts, at 398 m³ and 276 m³, while China and Russia had the lowest figures, at 71 m³ and 56 m³ respectively.

Regarding domestic water usage, Australia and Canada had the highest consumption, at 341 m³ and 279 m³ respectively. The remaining countries used considerably less: Russia (98 m³), Turkey (80 m³), the UK (38 m³), and China, which had the lowest domestic usage at 26 m³.

`
  },
  {
    id: '115',
    task: 'task1',
    title: 'Task One: 15 of 100: Table',
    question: 'The table below shows the number of temporary migrant workers in four countries in 2003 and 2006 and the number of these workers per 1,000 people in these countries in 2006. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.5,
    taskAchievement: 9,
    coherenceCohesion: 9,
    lexicalResource: 8,
    grammaticalRangeAccuracy: 8,
    writingTime: '12 minutes',
    wordCount: 176,
    tags: ['Table'],
    image: chart_1_15, // Add your image here when available
    content: `

The table provides comparison of the number of employees in temporary status in four various countries from 2003 to 2006, and the total number of workers per 1000 people in 2006

Overall, the United States had the highest number of temporary workers in both years. However, despite employing far fewer workers in total, New Zealand recorded the greatest proportion of short-term employees per 1000 people in 2006.

In detail, the number of temporary workers in the United States rose from 577,000 in 2003 to 678,000 in 2006, although this figure represented the lowest ratio of such workers per 1000 pole (2.3). Australia followed, with an increase from 152,000 to 219,000 over the same period, accounting for 10.7 temporary workers per 1000 people in 2006.

In the United Kingdom, the figure almost doubled from 137,000 in 2003 to 266,000 in 2006, giving a rate of 4,4 per 1000 people. Meanwhile, New Zealand experienced a smaller absolute rise – from 65,000 to 87,000 – but it had the highest density of temporary workers, with 21.1 per 1000 people in 2006.

`
  },
  {
    id: '114',
    task: 'task1',
    title: 'Task One: 14 of 100: Table',
    question: 'The table below shows information about travelling to work in one US city. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 9.0,
    taskAchievement: 9,
    coherenceCohesion: 9,
    lexicalResource: 8,
    grammaticalRangeAccuracy: 9,
    writingTime: '19 minutes',
    wordCount: 193,
    tags: ['Table'],
    image: chart_1_14, // Add your image here when available
    content: `

The table compares the means of transport used to travel to work in a particular US city.

Overall, car travel with more than one passanger emerges as the fastest option, whereas public transport such as trains and buses tends to be slower. The least efficient means of commuting is cycling and walking.

When travelling by car, a single occupant covers an average distance of 17 miles, while a car carrying multiple passengers covers a substantially longer distance of 24 miles. Despite the slightly higher speed of 34 mph for multi-passenger cars compared with 31 mph for single-occupancy cars, the former requires more time to complete the journey, taking approximately 42 minutes versus 33 minutes.

Train and bus travel accounts for a journey of 23 miles in roughly 49 minutes, corresponding to an average speed of 28 mph. This places it third in terms of speed, ranking below a multi-passenger car but above cycling and walking. In contrast, cycling and walking are the slowest commuting options, covering just 4 miles in under 20 minutes. Notably, walking averages 3 mph, whereas cycling reaches 10 mph, highlighting a substantial difference in pace between these two modes.

`
  },
  {
    id: '113',
    task: 'task1',
    title: 'Task One: 13 of 100: Mixed Chart',
    question: 'The table and bar chart below give information about travelling to work in Houston, Texas. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 9.0,
    writingTime: '11 minutes',
    wordCount: 206,
    tags: ['Mixed Chart'],
    image: chart_1_13, // Add your image here when available
    content: `

The table provides a comparison of three modes of transport used for commuting to work, whereas the bar chart illustrates the CO2 emissions generated with each mode.

Overall, walking and cycling account for the smallest proportion of commuters and produce significantly lower CO2 emissions compared with other modes of transport. By contrast, car with a single driver generated the highest CO2 emissions, reflecting their greater popularity among commuters.

The majority of commuters, 48%, travel in cars with a single driver, with an average age of 43. This mode also generates the highest CO2 emissions, approximately 0.3 kilograms per commuter, making it the largest contributor among the four transport types. In contrast, cars with multiple passengers account for only 11% of commuters—roughly one-quarter of the single-occupancy cars—and their users have an average age of 44. This category produces around 0.1 kilograms of CO2 per person.

Trains and buses are predominantly used by older commuters, with an average age of 47, representing 37% of the population. This mode also results in about 0.1 kilograms of CO2 emissions per commuter. Cycling and walking are the least popular, with only 4% of commuters, whose average age is 39, opting for this mode. Notably, this category is effectively CO2-free.

`
  },
  {
    id: '112',
    task: 'task1',
    title: 'Task One: 12 of 100: Bar Chart',
    question: 'The bar chart below shows the percentage of adults by age group in the UK who used the internet every day in the years 2003-2006. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 7.5,
    writingTime: '13 minutes',
    wordCount: 254,
    tags: ['Bar Chart'],
    image: chart_1_12, // Add your image here when available
    content: `

The bar chart compares the proportion of people who used the internet on a daily basis, broken down into age categories, between 2003 and 2006.

Overall, young adults and middle-aged groups spent more time using the internet every day compared with other age categories. In contrast, seniors spent the least time across the period given, particularly in 2003.

Between 2003 and 2004, 80% of young adults aged 16–24 used the internet every day. However, this figure reached almost 90% in 2005 before declining slightly in 2006. As for middle-aged adults aged 25–44, just over 70% of people used the internet on a daily basis in 2003 and 2004. In addition, internet usage in this group rose to almost 80% in 2005, a figure that remained the same in 2006.

The 45–54 age group accounted for 55% of daily users in 2003. Although the percentage rose to about 70% in both 2004 and 2006, there was a slight dip in 2005 when just over 60% of people in this group used the internet each day. In contrast, more than 30% of those aged 55–64 used the internet in 2003. Moreover, this figure grew steadily, exceeding 40% in 2005 before reaching 55% in 2006.

In terms of those aged 65 and over, the lowest proportion of people used the internet daily in 2003, but this figure rose dramatically to nearly 20% in 2004. A similar level was observed in 2006 at almost 20%, despite a minor increase in 2005 to exactly 20%.

`
  },
  {
    id: '111',
    task: 'task1',
    title: 'Task One: 11 of 100: Bar Chart',
    question: 'The chart below shows the percentage of people accessing news via different media in one country in 2013, 2015, and 2017. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '10 minutes',
    wordCount: 176,
    tags: ['Bar Chart'],
    image: chart_1_11, // Add your image here when available
    content: `

The bar chart compares the proportion of people using four types of media to watch news in a particular country in three different years: 2013, 2015, and 2017.

Overall, television topped the list as the most popular source of news. While the internet showed a consistent rise over the years, both printed newspapers and radio remained the least preferred ways to access news.

In 2013, almost 80% of people accessed news via television, a figure that fell to just below 70% in 2015 before rising slightly to over 70% in 2017. As for the internet, just over 30% of people used this platform in 2013. This proportion increased by 10%, reaching slightly more than 40% in 2015, and rose significantly in 2017 to approximately 80%.

Usage of printed newspapers declined steadily, from just over 40% in 2013 to 30% in 2015, and then to nearly 20% in 2017. In contrast, just over 30% of people preferred to access news via radio in 2013, and this figure remained stable at exactly 30% in both 2015 and 2017.

`
  },
  {
    id: '110',
    task: 'task1',
    title: 'Task One: 10 of 100: Bar Chart',
    question: 'The chart shows the total distance travelled by passengers on five types of transport in the UK between 1990 and 2000. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '23 minutes',
    wordCount: 162,
    tags: ['Bar Chart'],
    image: chart_1_10, // Add your image here when available
    content: `

The bar chart illustrates the total distance, in billions of kilometres, travelled by passengers using five different modes of transport in 1990 and 2000 in the UK.

Overall, the total distance covered increased slightly over the decade, with bus and rail consistently accounting for the largest share. In contrast, bicycle, motorbike, and air travel contributed far fewer passenger kilometres, although air transport showed a modest rise.

In 1990, passengers travelled about 47 billion kilometres by bus, rising slightly to nearly 50 billion in 2000. Rail travel followed a similar pattern, increasing from 46 billion kilometres to match the bus figure at around 50 billion by the end of the period.

By contrast, bicycle and motorbike use both stood at roughly 15 billion kilometres in 1990 but fell slightly below that level by 2000. Air travel, on the other hand, rose marginally above 15 billion kilometres. Altogether, the total distance travelled increased from just over 100 billion kilometres in 1990 to approximately 115 billion in 2000.

`
  },
  {
    id: '109',
    task: 'task1',
    title: 'Task One: 9 of 100: Stacked Bar Chart',
    question: 'The bar shows the percentage of people going to cinemas in one European country on different days. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
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
    bandScore: 8.5,
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
    bandScore: 8.5,
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
    bandScore: 8.5,
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
    bandScore: 9,
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