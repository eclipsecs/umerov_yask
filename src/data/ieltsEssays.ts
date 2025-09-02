// IELTS Task 1 Images - Import your images here
import sampleChart from '@/assets/ielts-task1-images/sample-chart.png';
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
    title: 'Bar Chart: Global Energy Consumption',
    question: 'The chart below shows the global energy consumption by different sources from 2010 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 7.5,
    writingTime: '20 minutes',
    wordCount: 187,
    tags: ['Bar Chart', 'Energy', 'Global Trends', 'Data Analysis'],
    // TO ADD IMAGE: Replace 'sampleChart' with your imported image variable
    image: sampleChart, // <-- This is where you link your imported image
    content: `# Global Energy Consumption Analysis

## The Question
The chart below shows the global energy consumption by different sources from 2010 to 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.

## My Essay

The bar chart illustrates global energy consumption patterns across various sources over a decade, from 2010 to 2020.

**Overview**
Overall, fossil fuels remained the dominant energy sources throughout the period, while renewable energy sources showed significant growth. Coal consumption fluctuated considerably, whereas natural gas and renewable sources demonstrated steady upward trends.

**Key Trends**
In 2010, coal was the leading energy source at approximately 40% of global consumption, followed by oil at 32% and natural gas at 20%. Renewable sources, including solar, wind, and hydroelectric power, accounted for only 8% of total consumption.

By 2020, the energy landscape had shifted notably. While oil maintained its position at around 33%, coal consumption declined to 35%. Natural gas consumption increased substantially to 25%, representing the most significant growth among fossil fuels. Most remarkably, renewable energy sources doubled their share to 16%, highlighting the global transition toward sustainable energy solutions.

**Significant Changes**
The most striking development was the consistent growth in renewable energy adoption, which experienced steady annual increases throughout the decade. Conversely, coal showed volatility with peaks around 2013-2014 before declining toward 2020.

This data reflects growing environmental consciousness and technological advancement in the energy sector during this transformative decade.

*Word count: 187*
*Writing time: 20 minutes*
*Estimated band score: 7.5*`
  },
  {
    id: '3',
    task: 'task1', 
    title: 'Line Graph: Temperature Changes',
    question: 'The graph shows average temperature changes in three major cities over the past 50 years. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    bandScore: 8.0,
    writingTime: '18 minutes', 
    wordCount: 195,
    tags: ['Line Graph', 'Temperature', 'Climate Change', 'Comparison'],
    // TO ADD IMAGE: Import your image at the top and add it here
    // image: temperatureGraph, // <-- Uncomment and use your image variable
    content: `# Temperature Changes Analysis

## The Question  
The graph shows average temperature changes in three major cities over the past 50 years. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.

## My Essay

The line graph depicts average temperature variations in three major cities over a five-decade period from 1970 to 2020.

**Overview**
Overall, all three cities experienced upward temperature trends, with City A showing the most dramatic increase, while City C demonstrated the most gradual change throughout the period.

**Detailed Analysis**
In 1970, City B recorded the highest average temperature at 18°C, followed by City A at 15°C and City C at 12°C. However, the subsequent decades witnessed significant shifts in these patterns.

City A experienced the most remarkable transformation, with temperatures rising consistently from 15°C in 1970 to approximately 22°C by 2020, representing a 7°C increase. This trajectory was particularly steep between 1990 and 2010, where temperatures jumped from 17°C to 20°C.

City B maintained its leading position until around 2000, when its growth rate slowed considerably. By 2020, it reached 21°C, having increased by 3°C over the entire period.

City C showed the most conservative temperature rise, climbing gradually from 12°C to 16°C over the five decades, representing a 4°C total increase.

**Conclusion**
The data reveals varying degrees of temperature increases across all locations, with City A ultimately overtaking City B as the warmest location by 2020.

*Word count: 195*
*Writing time: 18 minutes*
*Estimated band score: 8.0*`
  }
];