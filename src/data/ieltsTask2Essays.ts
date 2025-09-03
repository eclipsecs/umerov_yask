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

export const task2Essays: IELTSEssay[] = [
  // Task 2 - Part 1 of 100
  {
    id: '1',
    task: 'task2',
    title: 'Task two: 1 of 100',
    question: 'Today, TV channels show more men\'s sports than women\'s sports. Why is this the case? Should TV channels give equal time for women\'s sport and men\'s sport?',
    bandScore: 8,
    writingTime: '31 minutes',
    wordCount: 388,
    tags: ['TV', 'Sports', 'Gender inequality'],
    content: ` ## Inequality of gender in **Sports** broadcasting

Watching and performing sports has been popular in many countries. In fact, it has attracted a wide audience, particularly among men, creating a gap between them and their female counterparts. I believe that it is widely popular among men because it involves physical effort, which is often appreciated by male viewers. Similarly, many people prefer to watch male commentators and presenters over female ones.

These days, many people—particularly men—not only engage in sports but also frequently watch them. This provides a great opportunity for many channels that prioritize prestige and profitable revenue. A particular example is football, which has gained widespread appeal among men due to the excitement it brings and the revenue it generates for broadcasting channels. Moreover, combat sports like boxing and UFC require significant physical strength, not to mention the brutal nature and aggressive attitude demanded of participants. In fact, UFC has also provided opportunities for women, which has attracted public attention in many countries. Ultimately, it can be concluded that a larger male audience in sports provides broadcasting channels with both prestige and profit, in addition to opportunities to advertise various products.

Achieving a balance between both genders in sports coverage requires effort. Many young women have turned to social media, as it not only helps them become public figures but also allows them to gain substantial profits from investors. When it comes to sports, female interest has been surprisingly low, according to a study conducted over 30 years. However, if TV channels broadcast women's sports for the same number of hours as men's, it may attract significant attention from young females, benefiting their overall well-being. Take, for example, gymnastics, which is popular among girls and women. This sport has provided various benefits to females in terms of physical appearance and body shape. These factors are especially important to many women, making it a widely followed sport. In addition, equal broadcasting would promote gender equality. However, some argue that famous brands may be less willing to market their products during women's sports, as it takes extensive time to gain media attention in mainstream society.

In conclusion, while men continue to dominate many areas—especially in sports—women should be given equal opportunities to increase the importance of sports among the female generation, despite concerns about reduced revenue due to a smaller audience.
`
  }
];