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
  {
    id: '1',
    task: 'task2',
    title: 'Technology and Education Essay',
    question: 'Some people think that children should be taught to be competitive in school. Others, however, say that cooperation and team working skills are more important. Discuss both sides and give your opinion.',
    bandScore: 8,
    writingTime: '40 minutes',
    wordCount: 298,
    tags: ['Education', 'Competition', 'Cooperation', 'Children'],
    content: `# Competition vs. Cooperation in Education

## The Question
Some people think that children should be taught to be competitive in school. Others, however, say that cooperation and team working skills are more important. Discuss both sides and give your opinion.

## My Essay

In today's educational landscape, there is an ongoing debate about whether schools should emphasize competition or cooperation among students. While both approaches have their merits, I believe that a balanced combination of both elements provides the most comprehensive preparation for students' future success.

Advocates of competitive education argue that competition mirrors real-world scenarios and prepares students for adult life. In competitive environments, students learn to strive for excellence, develop resilience in the face of challenges, and build the determination necessary to achieve their goals. Competition can serve as a powerful motivator, pushing students to discover their full potential and develop a strong work ethic. Furthermore, competitive academic environments often produce high achievers who excel in standardized tests and university admissions, demonstrating measurable academic success.

However, proponents of cooperative learning emphasize the importance of social skills and emotional intelligence in personal and professional development. Collaboration teaches students to communicate effectively, respect diverse perspectives, and work harmoniously toward shared objectives. These teamwork skills are increasingly valuable in modern workplaces, where cross-functional collaboration and project-based work are commonplace. Additionally, cooperative learning environments tend to be more inclusive, supporting students with different learning styles and abilities while fostering empathy and mutual support.

In my opinion, the most effective educational approach combines elements of both competition and cooperation. Students need competitive experiences to develop individual excellence and self-motivation, but they equally require collaborative opportunities to build essential interpersonal skills. Schools could implement competitive individual assessments alongside cooperative group projects, creating a balanced learning environment that prepares students for the diverse challenges they will face in their academic and professional careers.

Therefore, rather than choosing one approach over the other, educators should strive to integrate both competitive and cooperative elements into their curricula, ensuring that students develop both personal achievement drive and collaborative capabilities.

*Word count: 298*
*Writing time: 40 minutes*
*Estimated band score: 8.0*`
  },
  {
    id: '2',
    task: 'task1',
    title: 'Process Chart: Task 1 of 100',
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

The flow chart illustrates the process of generating electricity from coal, beginning with coal extraction and ending with the distribution of electricity to households and industrial grids. Overall, electricity production involves multiple stages, starting from coal mining and crushing, followed by gasification and purification of the gas, before it is finally converted into electricity. Throughout the process, byproducts such as waste heat are released and managed accordingly.

The process begins with coal being mined and subsequently passed through a crusher, where it is broken down into smaller pieces to facilitate handling. The crushed coal is then transported to a gasifier, in which it is subjected to intense heat to produce synthetic gas.

This gas is then channeled to a cooling unit to reduce its temperature and remove waste heat. Following this, it enters a cleaning facility, where impurities are filtered out. The refined gas is fed into a gas-powered plant, where it is used to generate electricity. The final stage involves distributing the produces electricity to residential homes and large-scale electricity grids.

`
  },
  {
    id: '3',
    task: 'task1', 
    title: 'Bar Chart: Task 2 of 100',
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
  }
];