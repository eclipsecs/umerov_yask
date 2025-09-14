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
    id: '3',
    task: 'task2',
    title: 'Task two: 3 of 100 - Home based education',
    question: 'In some countries, there has been an increase in the number of parents who are choosing to educate their children themselves at home instead of sending them school. Do the advantages of home education outweigh the disadvantages?',
    bandScore: 8,
    writingTime: '21 minutes',
    wordCount: 301,
    tags: ['Housing'],
    content: `

Home-based education has been widely popular these days, especially to those who travel frequently. And, in some countries, this phenomenon is gaining attention among families who are preferring to educate their children at home rather than attending conventional schools. While there may be some benefits to this decision, I believe that children, in their formative years, should have more interaction with contemporaries. This results in better well-being and understanding of the real world, which far outweighs the advantages.

One major benefit of homeschooling is flexibility. Certainly, there are some children who cannot cope with school curriculum, and puts them under pressure, and leave little time for socializing and entertainment. Considering these challenges, some parents turn to online learning platforms, or even teach them themselves. Learning at home allows children to study at their own pace and choose their own schedule. However, such freedom makes them lazier and sedentary, which eventually becomes challenging to study in the foreground. Not to mention that they often than never need more social interaction.

Traditional schools, by contrast, follow a structured system tailored to students’ age and academic level. Take for example standardized tests, which frequently requires extensive preparation and discipline. This feature is made to classify a student according to their level, and slowly progress through many stages. In addition to this, interaction with their peers can be crucial, since communicating with them can remove anxiety, and make life-long friends. More importantly, these experiences prepare them to face real-world situations with greater awareness and better decision-making.

In conclusion, although there might some benefits in learning at home like keeping a child safe from community danger, or providing flexible learning. I, however would argue that school is a better option not only in terms of education, but also in terms of mental well-being and healthier future.


`
  },
  {
    id: '2',
    task: 'task2',
    title: 'Task two: 2 of 100 - Government and Housing',
    question: 'Housing is a basic necessity for everyone. Therefore, governments must provide free housing to those who cannot afford it. To what extent do you agree or disagree?',
    bandScore: 8,
    writingTime: '31 minutes',
    wordCount: 309,
    tags: ['Housing'],
    content: `

Housing is considered essential feature of people’s everyday lives. Thereby, suggesting that governing bodies should take control of supplying free housing to those who are in need. However, this sort of aid, should not come without strict regulations and monitoring, and should be provided to those who are less privileged, and eligible citizens.

Modern world has been experiencing a growing concern in housing. Developed nations around the world with their impressive per capita rate witness such situations rarely, while developing nations still have to cope with this issue, and seek further solutions to mitigate it. Brazil, for example, has over 1 million residents left with no proper accommodations, and large portion of these people are young adults and teenagers. As a result, these people engage in local gangs for chance to find a place to live. By joining, they contribute to various types of violence like drug trafficking, murder and many other felonies. This condition leads to a more growing concern in the community, other than housing. It is also worth and interesting to note, however, that Brazil is the same country who bravely invested 10 billion dollars to host FIFA World Cup in 2014, and the Summer Olympics in 2016. Some of this money could be invested on housing, and education instead.

While housing is crucial to many, it should not go without monitoring. Government should allocate the budget rationally by carefully investing the citizens employment status and their salary, since even those people with money may try to apply to such aid. Therefore, certificate of eligibility should be provided to prevent money being wasted when it can be invested to other essential needs.

In conclusion, indeed housing is important part of anyone’s live. Officials should create a well-calculated housing plans and programs to assist citizens in need, and successfully avert homelessness and its effects to the society.

`
  },
  {
    id: '1',
    task: 'task2',
    title: 'Task two: 1 of 100 - Men and women sports',
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