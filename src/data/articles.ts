// Article Images - Import your images here
import thumbnail1_1 from '@/assets/article-images/thumbnail1_1.jpg';
import oop_sucks from '@/assets/article-videos/oop_sucks.mp4';
import dayinthelife from "@/assets/article-images/dayinthelife.jpg"
import youtube from "@/assets/article-images/youtube.png"
import nightmare_institute from "@/assets/article-images/nightmare_institute.jpg"
import dp_generation from "@/assets/article-images/dp_generation.jpg"

// Add more images like this:
// import myImage from '@/assets/article-images/my-image.png';

// Article Videos - Import your videos here
// import myVideo from '@/assets/article-videos/my-video.mp4';
// Add more videos like this (supported formats: .mp4, .webm, .ogg)

// Example demonstration (uncomment when you have a real video file):
// import codingDemoVideo from '@/assets/article-videos/coding-demo.mp4';
import sampleVideoThumbnail from '@/assets/article-videos/sample-video-thumbnail.png';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  image?: string; // Optional image for articles
  video?: string; // Optional video for articles
  youtubeUrl?: string; // Optional YouTube URL instead of video file
  links?: { title?: string; url: string }[]; // ✅ New property for external references
}

export const articles: Article[] = [
  {
    id: '10',
    title: 'The dependant generation. ',
    excerpt: 'Generation that is dependent to each other, particularly parents.',
    publishedAt: '2024-06-11',
    readTime: 8,
    tags: ['Generation', 'Society', 'Comments'],
    links: [
    { title: "The Guardian", url: "https://www.theguardian.com/society/2014/mar/24/dependent-generation-half-young-european-adults-live-parents" },
    //{ title: "Nature", url: "https://www.nature.com/" }
  ],
    // Example YouTube URL - replace with actual video URL when you have one
    image: dp_generation, // Example YouTube URL
    content: `
Writing...
`
  },
  {
    id: '9',
    title: 'SAMSIFL - an institution giving only nightmares',
    excerpt: 'My honest experience studying at SAMSIFL and the challenges I faced over four years.',
    publishedAt: '2024-04-21',
    readTime: 8,
    tags: ['InYaz', 'Comments', 'Hate'],
    links: [
    //{ title: "New Scientist", url: "https://www.newscientist.com/" },
    //{ title: "Nature", url: "https://www.nature.com/" }
  ],
    // Example YouTube URL - replace with actual video URL when you have one
    image: nightmare_institute, // Example YouTube URL
    content: `
Entering SAMSIFL as a first-year student, I felt a mixture of curiosity and unease. The campus was sprawling, the routines unfamiliar, and the atmosphere heavy with tradition. Coming from a smaller school, I was both eager and overwhelmed by the institution’s scale and the sense that everyone else already knew the unwritten rules. My initial impressions were shaped by the diversity of people and the long-standing customs, but also by a quiet anxiety about whether I would fit in or be able to thrive here.

The early weeks were tough. I struggled to find my way around, sometimes arriving late to classes simply because the layout was so confusing. Making friends wasn’t as easy as I’d hoped; the social circles seemed set, and the environment felt more competitive than welcoming. There were small wins—like finding my classroom on time or realizing my roommate was just as nervous as I was—but these were overshadowed by a persistent sense of being out of place. In retrospect, that initial culture shock was less about building resilience and more about learning to cope in an environment that often felt indifferent to newcomers.

As the novelty of the first year wore off, the realities of academic life at SAMSIFL became clear. The coursework was demanding, but what made it harder was the lack of meaningful support. My first major assignment—a literature analysis—left me confused about expectations and unsure where to turn for help. Feedback was often blunt or discouraging, and there was little guidance on how to improve. It seemed as though the institution expected students to adapt instantly, and if you didn’t, you risked falling behind. There were times when I genuinely questioned whether I belonged or if I’d made a mistake in coming here.

Year two brought heavier workloads and more pressure to keep up. Juggling classes, extracurriculars, and the competitive atmosphere was exhausting. Group projects often became exercises in frustration rather than collaboration, with little oversight or support from instructors. I learned more about how to manage disappointment and navigate conflicts than about the subjects themselves. Rather than fostering independence, the environment sometimes felt isolating—students were expected to figure things out on their own, but resources and guidance were limited. Asking for help could be met with indifference or even subtle discouragement. I found myself relying more on peers than on the institution for advice or support.

By the third year, I had adapted to the routines, but it was more a matter of survival than growth. The workload intensified, and the pressure to perform well became relentless. The library felt less like a place of discovery and more like a refuge from constant deadlines and expectations. Burnout was common, and it was easy to feel like you were always falling short. There were moments of camaraderie with classmates—late-night study sessions and shared complaints—but these felt like coping mechanisms rather than signs of a supportive community. Instead of being challenged to grow, I often felt boxed in by rigid standards and a lack of encouragement.

Personal growth during this time came not because of the institution, but in spite of it. I learned to manage my time, set boundaries, and recognize when to step back—not because these skills were taught or encouraged, but because they were necessary for survival. The rare moments of genuine support from a professor or mentor stood out precisely because they were so uncommon. Most lessons were learned through setbacks and frustration, rather than through guidance or inspiration.

In my final year, the campus that once felt intimidating had become familiar, but not necessarily welcoming. The routines were ingrained, and the sense of urgency around final projects and thesis work was intense. Much of the work felt like a test of endurance rather than an opportunity for creativity or exploration. My capstone project, which should have been a culmination of learning, was marked by bureaucratic hurdles and a lack of meaningful feedback. Collaborating with classmates was rewarding, but mostly because we supported each other through the difficulties, not because the environment made it easy.

As graduation approached, I found myself reflecting on the four years with mixed feelings. SAMSIFL had challenged me, but often by putting up obstacles rather than opening doors. There were times when I doubted my abilities or questioned whether the struggle was worth it. While I did experience moments of connection and discovery, these were often the result of individual effort or luck rather than institutional design. The friendships I formed and the resilience I developed came from navigating a system that too often hindered rather than helped.

Looking back, my experience at SAMSIFL was a complex mix of challenges and occasional rewards. The institution demanded a lot, but the support for personal growth was limited and inconsistent. I learned to advocate for myself, to persist in the face of adversity, and to find meaning in small victories. The environment was far from perfect—at times, it was actively discouraging—but it taught me to navigate difficulty and to value the connections and lessons I found along the way.

As I move on to the next chapter, I carry with me a sense of realism about what SAMSIFL offered and what it did not. I am grateful for the resilience I developed and the friendships I made, but I am also honest about the frustrations and the ways the institution could have done more to foster genuine growth. For anyone considering SAMSIFL, I would say: be prepared for challenges, and don’t expect the institution to provide all the answers or support you need. Growth is possible, but it often comes from overcoming obstacles rather than being guided past them. Approach the experience with open eyes, and remember that your journey is shaped as much by what you endure as by what you achieve.

**To be continued...**
`
  },
  {
    id: '8',
    title: 'Learning from articles',
    excerpt: 'How reading articles helps me learn, think critically, and see the world differently.',
    publishedAt: '2024-04-21',
    readTime: 9,
    tags: ['Travelling', 'Lex Fridman', 'Advice'],
    youtubeUrl: "https://www.youtube.com/watch?v=AaGWZBWaUzc",
    content: `

There is a unique kind of magic in reading articles—a magic that is both subtle and transformative, often overlooked in a world that celebrates thick books and grand lectures. Articles, whether in print or scattered across the digital landscape, have always played a special role in how I learn, think, and grow. Their brevity and immediacy make them accessible, but their impact can be as deep and lasting as any book or classroom lesson.

When I reflect on how I’ve learned over the years, I realize that articles have been my constant companions. They are the guides that introduce me to new ideas, the provocateurs that challenge my assumptions, and the bridges that connect me to the experiences of others. Unlike books, which require a significant investment of time and attention, articles slip into the small spaces of my day—on a bus ride, during a lunch break, or in the quiet moments before bed. In these fragments of time, I’ve traveled the world, explored the cosmos, and peered into the depths of the human mind, all through the lens of well-crafted articles.

The value of reading articles lies not just in the information they provide, but in the perspectives they open up. A well-written article can offer a snapshot of a complex issue, distilling research, opinion, and narrative into a form that is both digestible and thought-provoking. I’ve learned about climate change from investigative journalism, discovered the nuances of ancient history in academic reviews, and encountered philosophical questions I’d never considered in personal essays. Each article is like a window, offering a view I might never have sought out on my own.

One of the greatest gifts articles give is the ability to see the world through someone else’s eyes. I remember reading a piece by a doctor working in a war zone, describing not just the physical challenges but the moral dilemmas faced every day. Another time, an article about a small-town bakery’s struggle during the pandemic left me thinking about resilience and community in ways that statistics alone never could. These stories, brief as they are, have a way of lodging in my mind, resurfacing when I encounter similar situations in real life. They remind me that every headline is a doorway to a deeper human story, and that empathy often begins with listening to voices outside my usual circles.

Articles are also powerful tools for developing critical thinking. Because they are short and focused, they often present arguments or evidence in concentrated form. This invites me to question, to compare sources, to look for bias or gaps in reasoning. Over time, I’ve become more discerning—not just about what I read, but about how I read. I’ve learned to recognize sensationalism, to distinguish between opinion and fact, and to seek out multiple perspectives before forming my own conclusions. In a world awash with information, these skills are as important as any technical knowledge.

What makes articles especially valuable is how they complement other forms of learning. Books offer depth and sustained argument; lectures provide structure and guidance; practical experience grounds knowledge in reality. But articles serve as connectors, weaving together insights from different domains. After reading a dense chapter in a textbook, I might turn to a recent article to see how those theories play out in current events. When I’m struggling to understand a concept from a lecture, a well-chosen article can offer a fresh explanation or a real-world example that makes everything click.

In fact, some of my most memorable learning moments have come from stumbling across articles by chance. I once spent an afternoon reading about the mathematics behind cryptography, simply because an article’s headline caught my eye. That unexpected detour not only demystified a subject I’d always found intimidating, but also sparked an interest that led me to take a related course the following semester. Another time, a friend sent me an article about the psychology of habit formation, which helped me break a long-standing procrastination cycle. The beauty of articles is that they invite serendipity; they encourage curiosity to wander, to make connections, to ask “what if?”

Articles have also inspired me to take action in ways that longer works often do not. There’s something about the immediacy of a well-argued op-ed or a moving personal account that makes issues feel urgent and real. After reading a series of articles about food waste, I started paying more attention to how I shop and cook, making small changes that added up over time. A feature on local volunteering opportunities nudged me to sign up for a community project—something I’d thought about for years but never acted on until the right story came along. These are not grand transformations, but they are real, and they began with a few paragraphs that made me see my choices differently.

Of course, not all articles are created equal. The ease of publishing online means that misinformation and shallow content abound. I’ve learned, sometimes the hard way, to be cautious, to check sources, and to avoid the trap of skimming headlines without engaging with the substance. But even this has been a valuable lesson. The very act of sorting through the noise sharpens my judgment, teaching me to value quality over quantity, and to seek out writers and publications that have earned my trust.

One of the joys of reading articles is the sheer variety of topics I can explore. In a single week, I might read about advances in artificial intelligence, the history of jazz, political developments in a far-off country, and the science of sleep. This breadth keeps my curiosity alive and prevents my thinking from becoming too narrow. Sometimes, the most interesting insights come from unexpected juxtapositions—a piece about urban planning might influence how I think about technology, or an article on animal behavior might shed light on human psychology. Articles help me become a more agile thinker, comfortable with crossing boundaries and making connections between fields.

There are personal stories, too, that have shaped how I approach learning from articles. I remember being in high school, feeling overwhelmed by the prospect of writing my first research paper. My teacher suggested starting with articles rather than books, to get a sense of the landscape before diving deep. That advice changed everything. The articles I found not only gave me the background I needed, but also introduced me to the voices of experts, activists, and ordinary people with lived experience. I learned that research is not just about collecting facts, but about understanding context, weighing evidence, and engaging in a conversation that stretches far beyond the classroom.

Later, as a college student, I relied on articles to keep up with developments in my field. Textbooks quickly became outdated, but articles—whether in academic journals or reputable news outlets—offered a way to stay current, to see how theories were being tested and debated in real time. I began to appreciate the rhythm of scholarly discourse: the way one article responds to another, building an ongoing dialogue that shapes the direction of knowledge itself. Even outside academia, I found that reading articles kept me informed and engaged as a citizen, helping me understand the issues that affect my community and the wider world.

Perhaps the most profound lesson I’ve learned from reading articles is the importance of reflection and application. It’s easy to consume information passively, to scroll through headlines without letting anything sink in. But the articles that stick with me are the ones that make me stop and think: How does this relate to my life? What questions does it raise? What might I do differently as a result? Sometimes, I’ll jot down a quote or an idea in a notebook; other times, I’ll bring up a topic in conversation, testing my understanding and hearing how others respond. In this way, articles become more than just sources of information—they become catalysts for growth and change.

I’ve also noticed how reading articles encourages me to be a lifelong learner. There’s always something new to discover, some fresh angle or emerging issue that challenges me to update my views. The world is constantly changing, and articles help me keep pace, reminding me that learning is not a destination but a journey. Even when I disagree with an author, the act of engaging with their argument sharpens my own thinking and helps me see the complexity behind simple answers.

Looking back, I can see how much of who I am has been shaped by the articles I’ve read. They have made me more curious, more informed, and more empathetic. They have taught me to question, to seek out diverse perspectives, and to never stop learning. In a sense, every article is an invitation—to explore, to reflect, to connect. And in accepting that invitation, I’ve found not just knowledge, but a deeper understanding of myself and the world around me.

In a time when information is both abundant and contested, the humble article remains a powerful tool for growth. It offers a way to learn that is flexible, dynamic, and deeply personal. Whether I’m seeking answers to a pressing question, exploring a new passion, or simply passing the time, I know that each article I read has the potential to expand my horizons and enrich my life.

So I keep reading, article by article, trusting that each one will leave its mark—sometimes in ways I can see immediately, and sometimes in ways that only become clear much later. The journey of learning from articles is ongoing, and I wouldn’t trade it for anything. It’s a journey of curiosity, of connection, and of continual discovery—a journey that I hope will last a lifetime.
`
  },
  {
    id: '7',
    title: 'Should I travel or explore through papers',
    excerpt: 'Comparing traveling in real life and learning through books or research papers.',
    publishedAt: '2024-04-21',
    readTime: 7,
    tags: ['Travelling', 'Lex Fridman', 'Advice'],
    // Example YouTube URL - replace with actual video URL when you have one
    youtubeUrl: "https://www.youtube.com/watch?v=bGbHTFN_54s", // Example YouTube URL
    content: `
People have always been curious about the world around them. Some satisfy that curiosity by getting on a plane and seeing new places with their own eyes. Others prefer to sit down with books, research papers, or travel writing to learn about the world through words. Both choices are valid, and both shape how we understand life. But they offer very different kinds of experiences.

There is something irreplaceable about actually going somewhere. Travel is not just about seeing a landmark — it’s about smelling street food in a crowded market, hearing the noise of unfamiliar languages, or feeling the excitement of being lost in a city you’ve never visited before. These sensory details stick in memory in a way no textbook ever can.

Travel also changes people. When you meet others who live differently, you start to question your own assumptions. A short conversation with a local in another country can teach more about empathy and perspective than hours of reading about “cultural differences.” Many travelers also find themselves becoming more adaptable and resilient. Delayed flights, confusing maps, or unexpected challenges force you to think quickly and keep calm — skills that benefit everyday life, too.

And let’s not forget inspiration. Countless writers, artists, and scientists found their ideas while traveling. Darwin’s voyage led him to write On the Origin of Species. Writers like Mark Twain or Ernest Hemingway also drew much of their creativity from time spent abroad. Without travel, their work might not have existed in the same way.

On the other hand, exploring through reading is often underrated. Books and research papers open doors that even the most adventurous traveler could never reach. You can read about black holes, ancient civilizations, or the bottom of the ocean — places and ideas that no ordinary trip will ever take you to.

Reading is also more accessible. Not everyone has the money or freedom to travel. But with a library card, a laptop, or even a borrowed book, anyone can go on a mental journey. Unlike travel, reading doesn’t require visas, long flights, or big expenses. It also gives depth. A historian’s detailed work on the Roman Empire, for example, provides layers of knowledge far beyond what you could get just by standing in front of the Colosseum.

Books and papers also allow safe exploration. Some parts of the world are dangerous or simply too remote. Reading makes it possible to explore them without risk. In this sense, reading is the great equalizer — it gives almost everyone access to knowledge, regardless of where they live.

The real difference lies in the type of exploration each one offers. Traveling is alive, immediate, and deeply personal. Reading is thoughtful, analytical, and often abstract. Travel creates your own stories; reading connects you to the stories of others.

But it would be wrong to set them up as opposites. In fact, they complement each other. Traveling without reading can leave experiences shallow. Reading without traveling can make knowledge feel detached. When combined, they enrich each other: books give travel more meaning, and travel makes books come alive.

There isn’t a universal answer. For someone with limited resources, reading may be the main way to explore. For those with the freedom to move around, travel adds dimension to what they’ve read. Ideally, we would do both — read before a journey to prepare, then travel to bring that knowledge to life.

Exploration is not only about distance, it’s about curiosity. Whether we travel physically or through the written word, what matters is the desire to learn and to see the world with fresh eyes. But the real magic happens when these two forms of exploration blend, becoming more than the sum of their parts.

I remember a summer spent wandering the narrow streets of Istanbul, a city I had first encountered through the pages of Orhan Pamuk’s novels. I’d read about the Bosphorus, the melancholy of old neighborhoods, the call to prayer echoing through the dusk. Standing on Galata Bridge, watching the ferries crisscross the water, I realized how much richer the experience was because I had “traveled” there in my mind long before setting foot in Turkey. The city’s layers—the ancient and the modern, the East and the West—felt familiar and mysterious at once. Later, over tea with a local bookseller, we talked about Pamuk, about history, about the ways stories shape our sense of place. Without those books, my visit would have been just sightseeing. With them, it became a living conversation, a chance to connect literature and life.

Travel, at its best, is a constant lesson in empathy. In Vietnam, I once spent an afternoon with a family in the Mekong Delta who invited me to their home for a simple meal. Our conversation was slow, pieced together with gestures, laughter, and a few shared words. I understood so little of their daily struggles, but as we broke bread and watched the river drift by, I felt an unexpected kinship. Later, reading about the region’s history and the legacy of war and resilience, I gained a deeper understanding of what I’d glimpsed in that short visit. The books gave context to the smiles, the silences, the pride in a well-cooked dish. They helped me see not just the differences, but the common threads of hope and perseverance.

Conversely, reading can spark a hunger to see the world for yourself. After devouring travelogues about Japan, I found myself on a train to Kyoto, eager to witness the cherry blossoms and ancient temples I’d read about. But the real surprises were never in the guidebooks: the old man tending bonsai in a quiet courtyard, the high school students practicing English with nervous determination, the taste of matcha ice cream on a humid afternoon. These moments, small and vivid, taught me humility and curiosity—reminding me that no matter how much you read, reality always has more layers to offer.

Blending travel and reading has changed the way I approach problems and creativity, too. When faced with challenges—whether navigating a new city or tackling a complex idea—I draw on both the adaptability learned from travel and the analytical skills honed through reading. Getting lost in a foreign subway system taught me to stay calm, observe, and ask for help; grappling with a difficult book taught me patience and the value of seeing things from multiple perspectives. Together, these habits have made me more resilient, more willing to try, fail, and try again.

Perhaps the greatest gift of combining reading and travel is perspective. Each new place, each new story, stretches the boundaries of what I consider “normal.” In Morocco, the rhythm of life in the medina—so different from my own—challenged my assumptions about time, hospitality, and community. In Russia, conversations with students about literature and politics made me rethink what I thought I knew about freedom and tradition. Every encounter, every page, became an invitation to see the world through someone else’s eyes.

Over time, this practice has reshaped my worldview. I’ve become less quick to judge, more open to ambiguity, and more curious about the stories behind every face and place. I’ve learned that “truth” is often layered, that wisdom can be found in unexpected corners—a grandmother’s proverb, a stranger’s poem, a quiet moment in a bustling market. The more I read, the more I travel, the more I realize how much I have yet to learn.

This approach has also fueled my creativity. When I write, I draw on memories of places I’ve visited and books I’ve loved, blending sensory details with the insights gained from others’ experiences. Problems that once seemed insurmountable now feel like puzzles to be explored, with solutions hiding in the cross-pollination of ideas, cultures, and disciplines. The intersection of travel and reading has made me a better listener, a more imaginative thinker, and, I hope, a kinder person.

Cultural differences, once intimidating, have become a source of fascination. I’ve learned to celebrate the ways people greet the day, prepare food, tell stories, or mourn their dead. I’ve seen how traditions evolve, how values clash and blend, how people everywhere struggle and dream. Each new culture has taught me something about my own—what I take for granted, what I might question, what I could learn to cherish.

Most importantly, the lessons from travel and reading linger long after the journey or the last page. They shape the way I approach relationships, work, and the search for meaning. They remind me that learning is a lifelong process, that curiosity is a habit to be nurtured, and that empathy is a skill to be practiced every day.

Traveling fills us with real moments and emotions; reading gives us context, perspective, and ideas. Together, they don’t just show us the world—they help us understand it, and ourselves, a little better. In the end, it’s not about how far you go or how many books you read, but about the willingness to be changed by what you encounter. That, I think, is the true heart of exploration.
`
  },
  {
    id: '6',
    title: 'Reading Walkthroughs: YouTube',
    excerpt: 'Creating IELTS Reading walkthroughs on YouTube and what I learned from it.',
    publishedAt: '2024-04-25',
    readTime: 9,
    tags: ['Technology', 'Writing', 'Communication'],
    // Example YouTube URL - replace with actual video URL when you have one
    image: youtube, // Example YouTube URL
    content: `
When I first started creating IELTS Reading walkthroughs on YouTube, I didn’t really have a master plan. I was just another student trying to handle the same problems as everyone else: constant time pressure, confusing questions, and the uneasy feeling of not knowing how I compared to other test takers. I remember watching so-called “tips and tricks” videos, but most of them felt either too generic or, to be honest, a bit fake. They promised secret formulas and “guaranteed” strategies but rarely showed what it’s actually like to sit down with a passage and struggle through it under exam conditions.

That’s what pushed me to make my own walkthroughs. I wanted to create the type of video I wished I had found back then—something that showed the real process in real time. Not the polished advice about what you “should” do, but the pauses, the rereading, the second guessing, and the small techniques I had picked up through practice. I thought that if one person out there could feel less stressed by seeing how another learner works through a passage, it would already be worth doing.

Recording those first videos was nerve‑racking. It’s one thing to miss a question in private, but putting your mistakes out in public is a different feeling altogether. At first I worried that people would laugh at me for overthinking or stumbling over my own words. But after a while, I realized that the mistakes were the most helpful part. If I got stuck, I could explain why. If I changed an answer halfway through, I could walk through my reasoning. That made the video more real than pretending to be flawless. Instead of acting like an expert, I tried to be like a study partner who thinks aloud while solving problems.

The feedback I received showed me that people valued that honesty. Viewers from around the world left comments, sometimes asking questions, sometimes sharing their own struggles, and often just saying “thank you” for making them feel less isolated. A few even mentioned that watching my videos made them realize it was normal to slow down, reread, or feel unsure at times. Test preparation can be lonely, especially if you don’t have a teacher or group to work with, and I wanted my videos to be that missing support system.

Filming these walkthroughs has also improved how I handle IELTS Reading myself. Knowing I would upload my process forced me to notice habits I had never paid attention to before. I saw patterns in the mistakes I made, or recognized which types of questions took me longer than they should. Speaking my thoughts out loud made me more deliberate in the way I approached a passage. Sometimes viewers even pointed out details I had overlooked, which turned the whole process into a two‑way exchange of learning.

Looking back, I can see how much I’ve grown. My early videos were messy—too much hesitation, panicking about time, explanations that weren’t always clear. Over time, I became more confident and steady. I wasn’t trying to show perfection, but I did want to show progress, and progress is often more motivating to watch than a so‑called “perfect” example.

There are challenges, of course. Part of me still wonders if people will question my credibility when they see me make mistakes on screen. But the internet already has more than enough “perfect” examples. What learners often need most is a reminder that it’s okay to struggle, and that improvement is not instant. That’s the message I try to share, even if it means showing the less polished parts of my work.

In the end, I keep making these YouTube walkthroughs because I believe in being open, in building connection, and in learning together. If my videos help even one person approach their exam with more calmness and confidence, then I’ve done something valuable. As long as people continue to find them useful, I’ll keep recording and sharing the real process—complete with the pauses, the doubts, and the small wins that make reading practice feel less intimidating.

Something that’s surprised me along the way is how often viewers share their own struggles in the comments. Sometimes they’ll admit to feeling stuck or embarrassed about their mistakes, and other times they’ll encourage each other or swap tips. It’s turned the comments section into a little community, a place where people are honest about the hard parts and cheer each other on. I never expected that sense of connection to grow out of videos that are, at their core, just me reading and thinking aloud.

Making educational content also comes with a responsibility I didn’t anticipate. When people trust you enough to follow your advice or use your videos as part of their study routine, you have to be careful not to mislead or overpromise. I’ve learned to double-check my explanations and admit when I don’t know something. Sometimes I worry about making a mistake on camera, but I remind myself that being honest about what I don’t know is just as important as sharing what I do.

On a personal level, making these walkthroughs has made me a better reader—and, honestly, a more patient person. Because I know someone might be watching, I slow down and pay closer attention to my own thinking. I’ve caught myself explaining concepts out loud that I used to gloss over, which means I really have to understand them. And every time I have to work through a tricky passage or a question I get wrong, I practice being patient with myself, which is a skill I didn’t realize I needed so much.

Sometimes I wonder what the future of walkthroughs will look like. Part of me hopes that as technology improves, these videos can become more interactive or personalized—maybe viewers could ask questions in real time, or choose which parts of the process they want to see in more detail. I’d love to see more creators sharing their honest, unfiltered problem-solving, so that learners everywhere can find an approach or a voice that resonates with them. The more we can break down the barriers between “teacher” and “student,” the better.

For now, I’m grateful for everyone who’s watched, commented, or simply lurked quietly in the background. These videos started as a way to help others, but they’ve ended up teaching me just as much in return. I hope that sense of openness, community, and real progress continues to grow—wherever this experiment goes next.

Over time, I’ve noticed that one of the most valuable things walkthroughs do is demystify the strategies that textbooks and teachers often mention in passing—skimming, scanning, making inferences, and so on. When you’re reading advice in a book, “skim for the main idea” sounds so straightforward. But in practice, it’s messy. Skimming isn’t just running your eyes over the page; it’s about learning to ignore the urge to read every word, to trust your instincts about what matters, and to tolerate the discomfort of not understanding everything on the first pass. In my videos, I try to show what that actually looks like: the hesitation, the false starts, the way I sometimes double back when I realize I’ve missed the point. The same goes for scanning. It’s a skill that’s easy to define but hard to master, especially when you’re under time pressure and the clock is ticking. I want people to see that these are not magical talents you’re born with—they’re techniques you develop through trial, error, and self-reflection.

Inference, too, is a big stumbling block for many learners. So much of IELTS Reading is about reading between the lines, picking up on what’s implied rather than what’s stated outright. I’ve lost count of the times I’ve second-guessed myself over an inference question, only to realize later that my initial hunch was closer to the mark than I thought. By thinking aloud in my videos, I hope to make the invisible process of inference more visible—to show that it’s a mix of logic, intuition, and sometimes just taking a leap and being willing to be wrong.

What’s also fascinating is how different students approach reading, depending on their background. I’ve heard from viewers in dozens of countries, and their stories have made me realize how much culture shapes our habits and expectations. In some places, students are taught to read for detail, to memorize and recall every fact. In others, the emphasis is on critical thinking or on spotting the “gist” of a passage. When I get comments from viewers in, say, Vietnam or Brazil or Russia, I’m reminded that the anxiety of reading exams is universal, but the ways we cope with it can be wildly different. Some people are afraid to move on from a question they don’t understand, while others are used to skipping and circling back. I’ve learned a lot from these conversations—about humility, about the limits of my own perspective, and about how much we can help each other by sharing our approaches.

The emotional side of test prep is something I think about a lot, too. It’s easy to talk about strategies, but underneath it all, there’s a swirl of self-doubt, frustration, and sometimes even shame. I’ve had days where I felt like giving up because I kept missing the same type of question, or because my practice scores plateaued. I know from the messages I receive that I’m not alone. People write to say they cried after a bad mock exam, or that they feel like they’ll never get better no matter how hard they work. When I read those stories, I feel a responsibility to be honest about my own struggles. I try to show that resilience isn’t about never feeling discouraged—it’s about coming back, again and again, even when you’re tired or demoralized. Sometimes, the most valuable thing I can offer is not a clever tip, but a simple reminder that it’s normal to feel stuck, and that it’s possible to move forward anyway.

One of the most rewarding parts of this journey has been hearing from viewers who found success after following my walkthroughs. Every so often, someone will leave a comment or send a message saying they finally reached their target score, or that something clicked after watching me wrestle with a tough passage. I remember one student from Turkey who wrote, “I used to panic every time I saw a True/False/Not Given question, but after watching you talk through your thinking, I realized it’s okay to pause and think. I got my band 7!” Another viewer from India shared that my videos gave her the confidence to take the test a second time after failing the first. These stories are deeply meaningful to me—not because they make me feel like an “expert,” but because they prove that openness and honesty can actually change someone’s experience for the better.

There’s something humbling about knowing that a video you recorded in your bedroom can reach someone on the other side of the world, and that it might be the tiny nudge they need to keep going. I never take that for granted. Sometimes, when I’m tired or doubting myself, I reread those messages and remember why I started.

As I reflect on all of this, I realize that making these videos has become more than just a hobby or a side project. It’s a way of being part of a global conversation about learning, struggle, and growth. It’s about breaking down the myth that success is a straight line, or that good readers never make mistakes. It’s about celebrating the messy, human side of learning—the doubts, the setbacks, the small victories.

Continuing to make these walkthroughs feels meaningful because it keeps me connected to that sense of shared humanity. Every video is a reminder that we’re all learning, all the time, and that none of us has it all figured out. I hope that as long as I keep showing up—flaws, fumbles, and all—I can help others feel a little less alone on their own journeys. And maybe, just maybe, that’s the real secret to learning: not chasing perfection, but building community, one honest moment at a time.
`
  },
  {
    id: '5',
    title: 'Should parents decide the baby\'s traits',
    excerpt: 'The ethical questions around parents choosing traits for their children.',
    publishedAt: '2024-04-26',
    readTime: 9,
    tags: ['Baby', 'Parenting', 'Genetics'],
    // Example YouTube URL - replace with actual video URL when you have one
    youtubeUrl: "https://youtu.be/SgtdVWEBXOM?feature=shared", // Example YouTube URL
    content: `# Modifying baby's genetics

Genes are the instruction code for all of an individual features. And, genetic modification (altering the genes in the organism) has been debated for centuries.

Understanding how genes work or their structure can help us understand to treat medical conditions, and also shape how a particular person develop. Although this has been a rare chance to see in real life, the movie "Gattaca" depicts a world where characteristics can be selected before birth. However, modern-day companies are able to modify genetic data using a computer or a technology that is made for this. CRISPR, for example, where therapeutics cure various diseases like hemoglobinopathis, cancer, and disease of the liver, lung and muscle. Therefore, its important to consider the ethics of such modification occurring in the modern world to point which this might causes severe issues, or a future goal for businesses and research.

The idea of parents deciding their baby's traits is no longer confined to the realm of science fiction. As genetic technologies advance, what was once a distant hypothetical is now a real, pressing ethical dilemma. Imagine sitting in a clinic, a geneticist sliding a list across the table: Would you like your child to have blue eyes? High intelligence? Resistance to certain diseases? The power to choose is intoxicating, but also deeply unsettling.

At the heart of this dilemma is a simple, yet profound, question: Should we, as parents, have the right to shape the genetic destiny of our children? On one hand, the instinct to give our children the best possible start in life is universal. On the other, the very act of choosing raises questions about autonomy, fairness, and the nature of what it means to be human.

The potential benefits of genetic modification are immense. For many, the most compelling argument is disease prevention. Imagine a world where devastating inherited disorders—cystic fibrosis, sickle cell anemia, Huntington's disease—could be eliminated before a child is even born. Parents who have watched loved ones suffer from such conditions might see gene editing as an act of mercy, a way to spare their children pain and hardship.

Beyond disease, genetic modification holds the promise of enhancing positive traits. Increased resistance to infection, improved cognitive abilities, even a longer lifespan—these are not just dreams, but plausible outcomes as our understanding of genomics deepens. In some visions of the future, humanity could become more resilient, healthier, and better equipped to adapt to a changing world.

There are also potential societal benefits. Reducing the incidence of chronic diseases could ease the burden on healthcare systems, freeing up resources for other needs. If used responsibly, genetic engineering could help level the playing field, giving all children a fairer shot at a healthy, productive life.

Yet the same technology that offers hope also brings significant risks. One of the most immediate concerns is inequality. Access to advanced genetic modification is likely to be expensive, at least at first. Wealthy families could afford to give their children genetic advantages—physical, intellectual, or otherwise—widening the gap between rich and poor. Instead of closing the distance between social classes, genetic engineering could harden it, creating a new kind of biological aristocracy.

The specter of the "designer baby" looms large in public imagination. If parents can choose traits like height, intelligence, or athletic ability, what happens to the value we place on diversity, or on the randomness that makes each person unique? There is a risk that society could converge on a narrow definition of "desirable" traits, eroding the rich tapestry of human variation. The pressure to conform, to select the "best" traits, could become overwhelming, not just for parents, but for the children themselves.

There are also deeper philosophical questions. Does choosing a child's traits violate their autonomy—their right to an open future? If a child grows up feeling that their abilities or appearance were chosen for them, will they feel truly free? What if the choices made by parents turn out to be misguided, or if unforeseen consequences emerge from editing the genome?

And then there are the unknowns. Our understanding of genetics is still in its infancy. Genes interact in complex, unpredictable ways. Editing one gene to prevent disease could have unintended side effects. The history of medicine is full of well-intentioned interventions that produced unexpected harm.

I often imagine myself in the position of a future parent, sitting across from a genetic counselor. The possibilities are dizzying. Would I choose to eliminate the risk of a hereditary disease that runs in my family? Almost certainly. But what about less clear-cut choices? Would I be tempted to select for higher intelligence, or a particular temperament? Would I worry that by not choosing, I was putting my child at a disadvantage?

There is a kind of hubris in believing we can design the perfect child. Parenting has always involved uncertainty, a willingness to accept and love whoever arrives. The idea of choosing feels like both a gift and a burden—one that could haunt a parent for a lifetime. What if my choices led to unhappiness, or to a sense of alienation in my child? Would I ever be able to forgive myself?

I think, too, about the stories parents tell their children—about inherited quirks, family resemblances, the mysteries of lineage. If we edit away the rough edges, do we lose something precious? Part of the wonder of parenting is discovering who your child will become, not just who you want them to be.

History offers both inspiration and warning. In the early 20th century, the eugenics movement sought to improve the human race through selective breeding. What began as a scientific ideal quickly devolved into coercion, discrimination, and horrific abuses. Forced sterilizations, the targeting of marginalized communities, and the justification of atrocities all followed from the belief that some lives were more worthy than others.

Medical advances, too, have often been double-edged swords. The discovery of vaccines and antibiotics saved millions of lives, but also raised questions about who gets access, and at what cost. In vitro fertilization, once controversial, is now mainstream—but it, too, was once the subject of fierce debate about "playing God."

The lesson is clear: technology alone cannot answer ethical questions. The tools we develop are shaped by the values and systems in which they are used. Without humility, oversight, and a commitment to justice, even the most promising advances can be turned to harmful ends.

If the ability to choose traits becomes widespread, the fabric of society could shift in ways we can only begin to imagine. Schools might sort children not just by age or ability, but by genetic profile. Employers could be tempted to screen for certain traits, deepening existing biases. Cultural expectations about beauty, intelligence, and success could become even more rigid, as the possibility of "choosing better" becomes normalized.

At the same time, there is potential for positive change. If used wisely and equitably, genetic technologies could help eradicate suffering, empower individuals to live healthier lives, and foster a new appreciation for the complexity of human development. The key will be to ensure that choice does not become coercion, and that diversity is celebrated rather than erased.

Public dialogue will be essential. Decisions about which traits are "acceptable" to modify cannot be left to scientists, corporations, or governments alone. Communities, families, and individuals must all have a voice. Laws and regulations will need to evolve, balancing innovation with protection of the vulnerable.

Ultimately, the question of whether parents should decide their baby's traits comes down to responsibility. The power to shape a life is both awe-inspiring and sobering. It demands humility—a recognition of the limits of our knowledge, and a willingness to accept uncertainty.

Perhaps the most important lesson is that love, not perfection, is at the heart of parenting. No amount of genetic engineering can guarantee happiness, fulfillment, or meaning. The most precious gifts we can give our children are not traits chosen in a lab, but acceptance, support, and the freedom to become themselves.

As we stand on the threshold of a new era, we must ask not just what we can do, but what we should do. The future of human identity will be shaped not only by the technologies we invent, but by the values we uphold. If we approach these choices with care, compassion, and humility, we may yet find a way to embrace both the promise of progress and the beauty of unpredictability.

In the end, the question is not simply whether parents should decide the baby's traits, but how we, as a society, will choose to use the tools at our disposal. The answers we find will echo for generations to come.
`
  },
  {
    id: '4',
    title: 'If blue-collar job sucks. Why do them?',
    excerpt: 'Why people work blue-collar jobs and the value behind them.',
    publishedAt: '2024-04-27',
    readTime: 11,
    tags: ['Hierarchy', 'Jobs'],
    youtubeUrl: "https://www.youtube.com/watch?v=I-hyT3Dw2eo",
    content: `

## Why blue-collar jobs are often looked down upon.

Back in Japan, I used to work in various factories, ranging from those that manufacture steel, to those producing camera lenses or chips for Canon (yes, like those you see in videos, where workers install the tiniest details of a camera or a phone). I was constantly exposed to a kind of ignorance—not just from people outside, but sometimes even from those around me on the factory floor. And it was not until I landed a job at a hotel as a front-desk administrator that I really understood the reason behind that attitude.

Japan is a country where people of all ages work 24/7. I mean, the country never shuts down. Convenience stores run on a 24-hour clock, factories transport goods shipped from different countries, mail and online orders are delivered at all hours, night clubs are advertised and visited by all sorts of people, and the city lights never really go out. But beneath this tireless energy is a rigid social hierarchy—a silent but powerful distinction between those who work with their hands and those who work behind a desk.

When I first started working in factories, I was just grateful to have a job. The work was repetitive, sometimes physically exhausting, and often dangerous. In the steel factory, the air was thick with dust and the clang of metal on metal was constant. My shifts would start early in the morning, or sometimes late at night, depending on the production schedule. There was no glamour in what we did—just long hours, sore muscles, and the satisfaction of seeing a shipment finally ready to go. Yet whenever I told people what I did, I could see their expressions change—sometimes a flicker of surprise, sometimes a look of pity, and occasionally, a hint of disdain.

I remember one day in particular. We had just finished a twelve-hour shift assembling camera components, our hands stained with oil and our uniforms streaked with sweat. As I walked out of the factory gates, I passed a group of office workers in crisp suits, laughing as they headed to a nearby izakaya for drinks. One of them glanced at me, then quickly looked away. In that moment, I felt invisible, as if my work—essential as it was—meant nothing in the eyes of those who had never set foot on a factory floor.

The reality of blue-collar work is harsh. The hours are long, and the physical strain is real. My back would ache for days after a particularly heavy shift, and sometimes I’d go home too tired to even eat dinner. There’s little recognition for what you do. No one applauds when a shipment goes out on time, or when you fix a jammed machine at 3 a.m. In fact, the only time anyone really notices is when something goes wrong. You become part of the background—a cog in a vast, humming machine that keeps the country running, but rarely gets acknowledged.

So why do people keep doing these jobs, even when they “suck”? For many, it’s about survival. Blue-collar work is often the most accessible path for those without a university degree, or for immigrants like me who are starting over in a new country. The pay isn’t always great, but it’s steady, and sometimes there’s overtime. There’s a certain pride in being able to provide for yourself and your family, even if the work is hard and the hours are unforgiving.

But it’s not just about money. There’s a quiet dignity in manual labor that outsiders rarely see. I’ve met people who have worked the same job for decades—men and women who know every inch of a factory line, who can fix a broken conveyor belt with nothing but a wrench and some ingenuity. Their knowledge is deep, practical, and hard-won. They take pride in a job well done, even if no one else notices. There’s a camaraderie among workers, a sense that you’re all in it together, enduring the same hardships and sharing the same small victories.

When I eventually got a job at a hotel as a front-desk administrator, I saw the contrast firsthand. Suddenly, I was wearing a suit, greeting guests, answering phones, and working in a climate-controlled lobby. People treated me differently. They smiled more, spoke to me with respect, and seemed genuinely interested in what I had to say. My parents were proud to tell their friends that their son worked at a hotel, not a factory. It was as if I had crossed some invisible line—from “laborer” to “professional.”

But here’s the thing: the work at the hotel was, in many ways, less demanding than what I’d done in the factory. Sure, I had to deal with difficult guests and long hours, but I was never as physically drained as I was after a factory shift. And yet, society placed so much more value on my new job, simply because it was white-collar, clean, and visible.

That’s when I started to reflect on how deeply ingrained these hierarchies are—not just in Japan, but everywhere. In Japan, the idea of “tatemae” (public facade) and “honne” (true feelings) runs deep. People are polite and respectful on the surface, but there’s an unspoken understanding of where everyone stands in the social order. Blue-collar workers, despite being the backbone of the country, are rarely celebrated. The “salaryman” in his suit is the ideal; the factory worker is necessary, but invisible.

It’s not just a Japanese thing, either. When I talk to friends from other countries—China, Korea, Russia, even the United States—the story is much the same. Manual labor is seen as something to escape from, not something to aspire to. Parents push their children toward university, hoping they’ll land a desk job and avoid the hardships they themselves endured. There’s a sense that blue-collar work is a dead end, a sign that you didn’t “make it.”

But the truth is, society would collapse without blue-collar workers. Who builds the roads, fixes the plumbing, keeps the lights on, delivers the packages, and grows the food? These are not easy jobs. They require skill, resilience, and a willingness to keep going even when no one is watching. And yet, the people who do them are often the first to be blamed when something goes wrong, and the last to be thanked when everything runs smoothly.

I’ve seen both sides now. In the factory, I learned what real exhaustion feels like. I learned how to work as part of a team, how to troubleshoot problems on the fly, and how to keep going when all I wanted was to collapse. In the hotel, I learned about customer service, about the importance of appearances, and about the subtle ways people judge each other based on their jobs and uniforms. Both experiences shaped me, but it was the factory that taught me humility and respect for hard work.

Sometimes I think about my coworkers from those days—men and women from all walks of life, some supporting families back home, others just trying to save enough to move on to something better. We didn’t talk much about our dreams; the work didn’t leave much room for that. But there was an unspoken understanding that we were all doing what we had to do. There was pride in that, even if the rest of the world didn’t see it.

The lack of recognition for blue-collar work isn’t just unfair—it’s dangerous. When society undervalues manual labor, it creates a sense of alienation and resentment. People begin to feel that their contributions don’t matter, that they’re just disposable parts in a system that doesn’t care about them. This can lead to low morale, high turnover, and even social unrest. During the COVID-19 pandemic, we suddenly realized how essential these workers are. Delivery drivers, grocery clerks, factory workers—they were the ones who kept things running when everyone else was told to stay home. For a brief moment, there was talk of “essential workers” and “frontline heroes.” But as soon as things returned to normal, the old hierarchies reasserted themselves.

There’s also a cultural aspect to all this. In Japan, the work ethic is legendary. People take pride in doing their jobs well, no matter how humble. There’s a sense of collective responsibility—a belief that everyone has a role to play in keeping society functioning. But even here, the pressure to conform, to climb the social ladder, to avoid “dirty” or “unskilled” work, is immense. I’ve met people who hide their jobs from friends and family, ashamed to admit that they work in a factory or clean hotel rooms. The shame isn’t in the work itself, but in how society views it.

Globally, attitudes toward blue-collar work vary, but the underlying pattern is the same. In some countries, manual labor is better paid and more respected; in others, it’s a last resort. In Germany, for example, skilled trades are highly valued, and apprenticeships are a respected path to a stable career. In the U.S., there’s a growing recognition that not everyone needs to go to college, and that trades can offer good pay and job security. But the old prejudices die hard. Too often, blue-collar work is still seen as a fallback, not a first choice.

What people often miss is the hidden value in these jobs. There’s a kind of wisdom that comes from working with your hands, from seeing the tangible results of your labor. There’s satisfaction in fixing something that’s broken, in building something from scratch, in knowing that your work matters—even if no one says thank you. Some of the happiest people I’ve met are those who take pride in their craft, who find meaning in the rhythm of daily work, who measure success not by titles or salaries, but by a job well done.

I sometimes wonder what would happen if we all spent a year doing blue-collar work—if every politician, CEO, and university graduate had to spend time on a factory floor, a construction site, or a delivery route. Maybe we’d have more empathy, more respect, and a better understanding of what really keeps the world turning. Maybe we’d stop taking things for granted, and start valuing the people who do the work no one else wants to do.

Looking back, I don’t regret my time in the factories. It was hard, and sometimes humiliating, but it taught me lessons I couldn’t have learned anywhere else. It made me appreciate the comforts of an office job, but it also made me wary of the arrogance that sometimes comes with a white-collar title. Every time I see a delivery driver braving the rain, or a construction worker sweating in the summer heat, I remember what it felt like to be in their shoes.

Society needs to rethink its attitudes toward blue-collar work. We need to recognize the dignity and value in all forms of labor—not just the ones that come with a suit and a desk. We need to pay people fairly, treat them with respect, and give them the recognition they deserve. Because at the end of the day, it’s not the title on your business card that matters, but the contribution you make to the world around you.

If you’ve ever looked down on someone because of their job, I encourage you to think again. The person cleaning your office, repairing your car, or building your home is doing work that matters—work that makes your life possible. They deserve your respect, your gratitude, and your support.

As for me, I carry the lessons of those factory days with me wherever I go. They remind me to stay humble, to work hard, and to never judge someone by the uniform they wear. In a world obsessed with status and success, maybe the greatest achievement is simply to do your job well, with pride and integrity, no matter what that job is.

So, if blue-collar jobs “suck,” why do people keep doing them? Because someone has to. Because there’s dignity in honest work. Because the world depends on it. And because, sometimes, the greatest value is found in the places we least expect.


Lately, I’ve been thinking about how the future might reshape these jobs. With automation and AI advancing so quickly, there’s a lot of talk about robots replacing factory workers, or algorithms taking over logistics and delivery. It’s true that some tasks will disappear, and new kinds of work will emerge. But after spending years on the factory floor, I’m convinced that human skill, judgment, and adaptability will always be needed. Machines can’t improvise when a tool breaks or a shipment arrives late. They don’t notice the subtle changes in a process that signal something’s about to go wrong. There’s a level of intuition and pride in craft that no robot can replicate—at least not yet.

It also strikes me how the younger generation, myself included, is often reluctant to take on blue-collar jobs. There’s a push toward tech, finance, or anything that lets you work from a laptop in a café. I get it. Those jobs are cleaner, sometimes better paid, and certainly more respected. But someone still has to keep the real world running. If everyone chases the “clean” jobs, who’s left to fix the pipes, run the trains, or keep the factories humming? These roles are crucial, and I worry about what happens when no one wants to do them anymore.

Looking back, I’m grateful I had the chance to experience both the factory floor and the front desk. It gave me a respect for all kinds of work and for the people who do it, quietly and without applause. I learned to appreciate the complexity and value in jobs most people overlook. That perspective changed how I see the world—and how I treat the people who keep it turning.
`
  },
  {
    id: '3',
    title: 'Annoying Day in the Life videos',
    excerpt: 'My thoughts on Day in the Life videos and how they affect viewers.',
    publishedAt: '2024-04-29',
    readTime: 8,
    tags: ['YouTube', 'Trend', 'Trap'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    image: dayinthelife, // <-- This will be used as video poster
    content:
    `
## Is it a trend or a comparison tool?
    
Day in the Life (DITL) videos have recently taken over social media, becoming a trend that countless creators — both amateurs and well-known influencers — are eager to follow. From one side, it is easy to see why. These clips are engaging, especially for young viewers who look up to content creators as role models. Watching how their idols spend an ordinary day can feel authentic, even though much of the reality is often left off-screen.

At their best, such videos can encourage people of all ages to move away from a sedentary lifestyle and to establish routines, whether studying at school, working at an office, or pursuing personal projects. For some, the very act of creating this type of content can encourage them to thrive after something, maybe finding a purpose in life or unlock their hidden potentials, talents, creativity - a part which is mostly developed at school.

However, there are bad sides to this. Most celebrities and vloggers refuse to reveal the less polished aspects of their daily lives. It is unrealistic to assume that every day runs smoothly, filled only with productivity and positive energy. Many creators struggle to balance content production with their private lives, and some may not even have a clear sense of purpose. This raises an important point: if viewers consume such content uncritically, they may be misled into comparing themselves with an ideal that does not exist - gradually ending up feeling stressed and depressed.
That said, the solution is not to reject the trend altogether or to dismiss it as a waste of time. Instead, we should be attentive of how and what we consume online. When approached with awareness, DITL videos can be entertaining, sometimes even inspiring.

If I were to join the trend myself, I would use it not to showcase perfection, but to cheer people on, like a personal coach or even a cheerleader, reminding them that life is about effort and progress rather than flawless routines.

---

I’ll admit, I’ve watched my fair share of “Day in the Life” videos, usually late at night when I should be winding down for bed. There’s something oddly hypnotic about them — the gentle morning routines, the carefully plated breakfasts, the sped-up shots of someone typing away in a cozy cafe, or the aesthetic overhead view of a laptop, a latte, and a scattered notebook. For a while, I even considered filming my own. I thought, maybe if I documented my day, I’d feel that same sense of purpose or productivity that these creators seem to radiate.

But when I tried, it was… awkward. My morning was more “scramble for clean socks” than “sunlight streaming through linen curtains.” The oatmeal boiled over, my desk was a mess, and I spent an embarrassing amount of time doom-scrolling before I actually started working. I filmed a few clips, but watching them back, I felt exposed and, honestly, a bit silly. Where was the magic? Where was the sense of calm achievement? It made me realize how much of what I’d been watching was a performance — not necessarily fake, but filtered, curated, and edited for maximum appeal.

I remember talking about this with a friend after class one day. She confessed she’d stopped watching DITL videos altogether because she always ended up feeling like she wasn’t doing enough. “It’s like, I know it’s edited,” she said, “but I still feel bad that my life isn’t that organized.” Another friend, who’s usually pretty chill, started getting up at 5 a.m. to “optimize” his mornings after binging a bunch of productivity vlogs. For a week, he was insufferable, quoting habits from strangers on the internet and timing his breakfast. By Friday, he was exhausted and cranky, and he admitted that trying to live up to someone else’s routine was making him miserable.

It’s wild how easy it is to fall into the trap of comparison, even when we know better. There’s this underlying pressure — especially on social media — to be constantly improving, hustling, or at the very least, presenting a life that looks put-together. DITL videos, for all their charm, can unintentionally fuel this obsession with productivity. They rarely show the days when nothing gets done, when you procrastinate, or when you just need to take a break and do nothing for a while.

I’ve noticed this even more during exam season. In group chats, someone will inevitably share a “study with me” video, and suddenly everyone is talking about how they need to revamp their routines. Sometimes it’s motivating, but often it just adds to the stress. It’s like there’s an invisible scoreboard, and if you’re not meditating, meal-prepping, and color-coding your notes, you’re somehow falling behind. I’ve seen classmates spiral into anxiety, convinced they’re not working hard enough, even though they’re doing just fine.

What gets lost in all of this is authenticity. The best moments in my own days are never the ones I’d think to film — the impromptu coffee run with a friend, the messy desk brainstorming session, the quiet satisfaction of finishing a project after hours of frustration. Real life is unpredictable and sometimes boring, and that’s okay. Not every day has to be “content.”

There’s also a mental health angle that doesn’t get talked about enough. The constant exposure to idealized routines can make ordinary life feel inadequate. I’ve gone through phases where I felt genuinely down after watching a string of DITL videos, even though I knew, rationally, that what I was seeing was only the highlight reel. It’s easy to forget that everyone — even the most put-together vlogger — has off days, doubts, and moments of laziness or confusion.

I’ve started being more selective about what I watch and how I watch it. Instead of mindlessly scrolling, I try to check in with myself: Am I watching for inspiration, or am I just feeding my anxiety? Sometimes I’ll even take breaks from these types of videos altogether, especially when I notice that I’m getting too wrapped up in comparison. When I do watch, I look for creators who are honest about their struggles, who show the messiness and imperfections alongside the pretty shots.

If you’re tempted to make your own DITL video, my advice is: go for it, but do it for yourself, not for the algorithm. Show the real stuff — the half-burnt toast, the missed alarms, the moments when you’re just staring out the window, lost in thought. You might be surprised at how relatable that is. And if you’re just a viewer, try to remember that what you’re seeing is only one version of reality, carefully edited and packaged for public consumption.

Ultimately, I don’t think DITL videos are inherently bad. They can be fun, motivating, and even comforting — a reminder that we’re all just trying to make it through the day. But like anything online, they need to be consumed with a grain of salt. It’s easy to slip from admiration into self-criticism, from inspiration into insecurity.

So here’s where I’ve landed: Use these videos as a tool, not a measuring stick. Take what’s helpful, leave what isn’t, and don’t be afraid to turn them off when they stop serving you. Real life is messy, unpredictable, and sometimes gloriously unproductive. And that’s more than okay — it’s what makes us human. If I ever do make a DITL video, maybe I’ll call it “A Day in the Life (With All the Boring Bits Left In).” Who knows, maybe that’s the kind of honesty we need more of online.

---

Reflecting on all this, I keep coming back to the idea of honesty, comparison, and being real online.

Reflecting on all this, I keep coming back to the idea of honesty — not just with others, but with ourselves. There’s a quiet strength in being able to admit that our lives aren’t always as tidy or productive as we might wish. Social media, for all its connective power, has a way of rewarding the polished version over the real one. But honesty, even in small doses, can be a relief. It’s a way to say, “Here I am, with my messy breakfast, my unfinished to-do list, and my moments of doubt — and that’s enough.”

There’s a quote I love from Theodore Roosevelt: “Comparison is the thief of joy.” I’ve felt the truth of that line every time I’ve watched someone else’s highlight reel and found my own life wanting. Or as Brené Brown writes, “Authenticity is the daily practice of letting go of who we think we’re supposed to be and embracing who we are.” Even the fictional character Hermione Granger once said, “It’s our choices that show what we truly are, far more than our abilities.” All of these remind me that it’s not about matching someone else’s routine or aesthetic, but about owning our own story, with all its quirks and imperfections.

It’s natural to look for inspiration, and there’s nothing wrong with wanting to improve. But when we start measuring our worth against a curated feed, we lose sight of what makes our own days meaningful. The quiet moments, the setbacks, the small victories — these are just as real and important as anything that fits neatly into a video montage.

So next time you find yourself watching a DITL video (or any trend, really), pause for a moment. Ask yourself: Am I inspired, or am I just comparing? Am I looking for ideas, or am I pressuring myself to be someone I’m not? And above all, can I be gentle with myself — accepting the mess, the boredom, the ordinary, as part of what it means to be alive?

Maybe the best trend we could start is one of kindness: to ourselves, and to others, as we navigate the highlight reels and the realities. There’s no single right way to live a day, and no video can capture the full story. So let’s celebrate the honest moments, the imperfect routines, and the courage it takes to be real — both online and off.
    `
  },
  {
    id: '2',
    title: 'Computer science major in an almost AI world',
    excerpt: 'My experience studying computer science while AI is changing coding jobs.',
    publishedAt: '2024-05-03',
    readTime: 8,
    tags: ['AI', 'Coding', 'Opinion'],
    video: oop_sucks,
    image: thumbnail1_1, // <-- Link your imported image here
    content:
    ` 
## Majoring in CS vs Artificial Intelligence

So, learning computer science is fun until you realize that AI is already taking over many jobs that require coding. "FANG" Companies, these days, are no more looking to hire programmers either.
On the one side, this is a technological revolution. Basically shaping everything around us. AI is rewriting codes that once took months to write, in a matter of seconds. Various companies used to hire individuals with extensive knowledge in programming. These people with deep knowledge were paid millions of dollars to reprogram a software or suggest architectural solutions.

However, does this evolution in technology suggest that majoring in CS is becoming obsolete? Far from it.

You see, back in the days, thousands of programmers had to use a platform such as Stackoverflow to find solutions to various problems. And such issues varied from being simple to extremely complicated to solve that took not less than a month to complete, not to mention the bugs that boiled the heck of our blood - which also prolonged the process of completing a code.
Just a few years ago, when Ai was just considered to be a joke, I was wholly different coder. I was breezing through documentation and writing mostly functional code. At my worst, I would literally sit and chase typos and strange bugs for hours, to no avail.


When I first declared computer science as my major, I was filled with excitement and a sense of pride. I imagined myself as one of those hoodie-wearing geniuses you see in movies, building the next big app or solving mind-bending algorithmic puzzles late into the night. Back then, AI was still something that lived mostly in research papers and science fiction. Sure, there were some impressive demonstrations, but the idea that artificial intelligence could actually write code, debug programs, or even design systems seemed pretty far-fetched. Fast forward to today, and the landscape has changed so dramatically that it sometimes feels like the ground is shifting beneath my feet.

The reality hit me hardest during my sophomore year. I was up late, as usual, struggling with a stubborn bug in a web app project for class. My desk was littered with empty coffee cups, and the only light in the room was the blue glow from my laptop. In a moment of desperation, I pasted my error message into an AI-powered coding assistant. Within seconds, it not only explained the bug but also suggested a fix—one that worked perfectly. I was relieved, of course, but also a little unsettled. I couldn’t help but wonder: if AI can do this so quickly, what’s left for me to learn?

That question has haunted me in different forms ever since. There’s an odd sense of imposter syndrome that comes from relying on AI tools, even when they’re designed to help. Sometimes I feel like I’m cheating, or worse, that I’m training myself out of the very skills I came here to develop. I’ve talked to friends in my program about this, and the conversations are always a mix of awe and anxiety. One classmate joked that we’re “just here to prompt the AI,” while another worried that by the time we graduate, the job market will be flooded with applicants who know how to use AI but don’t really understand the fundamentals.

There’s some truth to those fears. I’ve noticed that when I work on assignments, it’s easy to let the AI do the heavy lifting. Need a function to parse some JSON? Just ask the chatbot. Not sure how to optimize a SQL query? The AI can spit out a dozen examples. It’s efficient, but it also short-circuits the learning process. There’s a difference between recognizing a solution and truly understanding why it works. Sometimes, after using AI to solve a problem, I’ll go back and try to write it out by hand, just to make sure I haven’t lost my edge.

But it’s not all doom and gloom. In fact, the more I reflect on it, the more I realize that studying computer science in the age of AI is both a challenge and an incredible opportunity. Yes, some of the grunt work is being automated away, but that just raises the bar for what it means to be a good computer scientist. Instead of memorizing syntax or spending hours on boilerplate code, I’m learning to think more abstractly—to focus on designing systems, understanding user needs, and framing problems in creative ways.

One of my professors put it best during a seminar: “AI is a tool, not a replacement for thinking. The most valuable skill is knowing how to ask the right questions.” That stuck with me. It’s easy to get lost in the fear of obsolescence, but ultimately, AI can only build on the data and instructions it’s given. It can’t decide what problems are worth solving, or imagine entirely new applications out of thin air. That’s still our job.

I remember a night last semester when a group of us stayed late in the computer lab, prepping for a hackathon. We were brainstorming ideas, tossing out wild concepts about smart campus apps and automated study tools. Someone suggested using AI to match students with study partners based on their learning styles. We debated the ethics, the technical challenges, and the user experience. In that moment, it didn’t matter that AI could help us code the app; what mattered was the collective creativity, the energy in the room, and the sense of building something together. That’s not something you can automate.

There are also practical skills that AI can’t easily replace. Debugging, for example, is as much about intuition and experience as it is about logic. Sometimes a bug isn’t just a typo or a missing semicolon—it’s a subtle misunderstanding of how different systems interact, or an unexpected edge case that only emerges after hours of testing. AI can help, but it doesn’t have the lived experience of banging your head against a problem until the solution finally clicks. Those moments of frustration and breakthrough are still mine, and they shape the kind of developer I’m becoming.

Another thing I’ve noticed is that AI is only as good as the data it’s trained on. When I work on projects that are unusual or require domain-specific knowledge, the AI sometimes stumbles or gives generic advice. That’s where my own expertise comes in. I’ve learned to treat AI suggestions as starting points, not gospel. Sometimes I even enjoy proving the AI wrong, or finding a more elegant solution than the one it provides. It’s a strange kind of rivalry, but it keeps me sharp.

Of course, there are still days when I worry. The headlines about AI replacing software engineers, automating entire industries, or generating codebases overnight can be overwhelming. I wonder if I’ll graduate into a job market that values human ingenuity, or if I’ll be competing with algorithms for every opportunity. But then I remind myself that technology has always been a moving target. The tools change, the languages evolve, and every generation of programmers has had to adapt to something new.

In a way, majoring in computer science right now is an exercise in adaptability. I’m learning not just how to code, but how to learn—how to keep up with new frameworks, how to evaluate tools critically, and how to collaborate with both humans and machines. Those are skills that will matter no matter how advanced AI becomes.

And honestly, there’s a certain joy in embracing the unknown. The fact that AI is rewriting the rules means there’s more room than ever for experimentation. I can prototype ideas faster, get feedback instantly, and focus on the parts of programming that I actually love: solving interesting problems, building things that matter, and connecting with other people who share my curiosity.

If I could give advice to anyone considering computer science in this era, it would be this: don’t let the rise of AI scare you away. Instead, let it push you to dig deeper, to ask better questions, and to find your own unique perspective. The world still needs people who can imagine, who can empathize, and who can bring together technology and humanity in new ways. AI is a powerful tool, but it’s not the whole story.

Some nights, I still stay up late, wrestling with code, fueled by caffeine and stubbornness. But now, when I turn to AI for help, I see it as a partner, not a threat. I know that my value as a computer scientist isn’t just in writing perfect code, but in understanding the bigger picture—how technology fits into our lives, and how we can use it to solve real problems.

In the end, I’m grateful to be studying computer science at such a pivotal moment. It’s not always easy, and the future is anything but certain. But I believe that as long as I keep learning, adapting, and creating, there will always be a place for me—and for anyone else willing to embrace the adventure—no matter how smart the machines become.
    `
  },
  {
    id: '1',
    title: 'How to have consistency',
    excerpt: 'Why is it so hard to stay consistent?',
    publishedAt: '2024-05-05',
    readTime: 3,
    tags: ['YouTube', 'Trend', 'Trap'],
    // Example: This article would have a video with thumbnail
    // video: codingDemoVideo, // <-- Add video here when you have one
    youtubeUrl: "https://www.youtube.com/watch?v=FOVUpRC9j2k", // <-- This will be used as video poster
    content: `
Consistency is one of those qualities that everyone admires, yet very few people are able to maintain for long periods of time. We all start new habits, routines, or projects with the best intentions, only to find ourselves losing motivation after a few days or weeks. Why is it so difficult to stay consistent, even when we know it’s the key to progress in almost anything—whether it’s learning a language, exercising, building a business, or improving our relationships?

The first reason is that consistency is boring. Our brains are wired to seek novelty and excitement. When we begin something new, there’s a rush of motivation. Everything feels fresh, and we imagine the person we’ll become if we stick with it. But as the days go by, the novelty wears off. The excitement fades, and the activity becomes routine. At this point, many people start to look for something new to spark that feeling again. The problem is that meaningful progress almost always comes from doing the same small things over and over, long after the excitement is gone.

Another reason is that we often set unrealistic expectations for ourselves. We imagine that we’ll be able to maintain perfect habits every day, no matter what happens. But life is unpredictable. There are days when we’re tired, stressed, or simply not in the mood. When we inevitably miss a day or fall short of our goals, it’s easy to feel like we’ve failed completely. This all-or-nothing thinking is a major reason why people give up. In reality, consistency doesn’t mean perfection. It means showing up more often than not, and getting back on track when you slip.

Distractions and competing priorities also make consistency difficult. We live in a world full of demands on our attention—work, family, social media, entertainment. It’s easy for our best intentions to get lost in the noise. If you don’t have a clear plan for when and how you’ll do something, it’s unlikely to happen regularly. That’s why routines and habits are so important: they take decision-making out of the equation. When something becomes automatic, it’s much easier to stick with it, even when you’re busy or tired.

So how can you become more consistent? The first step is to start small. Instead of trying to overhaul your entire life at once, pick one habit or activity and commit to doing it every day, even if it’s only for five minutes. The goal is to build the identity of someone who shows up, no matter how you feel. Over time, you can increase the intensity or duration, but the most important thing is to not break the chain.

Tracking your progress can also help. When you see a visual record of your consistency—a calendar with no missed days, a journal of your workouts, a streak counter—it creates a sense of momentum that you don’t want to break. This is why tools like habit trackers or accountability partners can be so powerful.

It’s also important to be kind to yourself when you slip up. Everyone misses a day or has setbacks. The difference between people who succeed and those who don’t is that successful people get back on track quickly, without beating themselves up. They see setbacks as part of the process, not as evidence that they’re incapable of change.

Finally, remember your “why.” Consistency is easier when you’re connected to a deeper purpose. If you know why something matters to you—whether it’s being healthy for your family, mastering a skill, or building a better future—it’s easier to keep going when motivation fades. Remind yourself regularly of the reasons you started, and let that be the fuel that keeps you moving forward.

In the end, consistency is less about willpower and more about systems, habits, and self-compassion. It’s about showing up, even when you don’t feel like it, and trusting that small actions add up over time. It’s not glamorous, and it’s often not exciting, but it’s the foundation of any meaningful achievement. If you can learn to be consistent, even in the smallest things, you’ll be amazed at what you can accomplish.

Real-life examples of consistency are everywhere, even if they don’t always make headlines. Think about a student preparing for exams. The ones who review their notes every day, even for a short time, tend to outperform those who cram at the last minute. Athletes, too, know the value of steady practice—showing up to train on days when they feel tired or uninspired is what separates the good from the great. Artists and writers rarely create masterpieces in a single burst of inspiration; instead, they build their skills and portfolios through daily practice, often producing many drafts before something finally clicks.

It’s tempting to believe that talent is what matters most, but, over the long run, consistency almost always beats raw talent. The world is full of people with potential who never reached it because they gave up too soon, while those who kept going—slowly, steadily—ended up surpassing them. The tortoise really does beat the hare, not because it’s faster, but because it never stops moving forward.

Your environment plays a huge role in whether you can stay consistent. The people you surround yourself with, the spaces you spend time in, and the routines you set up all influence your habits, often more than sheer willpower. If your friends are supportive and share your goals, it’s easier to stick with good habits. A tidy workspace or a specific time of day dedicated to your task can make showing up feel automatic. Sometimes, just laying out your gym clothes the night before or keeping your guitar within arm’s reach is enough to lower the barrier to starting.

I’ll be honest: I’ve struggled with consistency myself, especially when it comes to writing. There have been weeks when I felt inspired and wrote every day, and others when I barely managed a sentence. What helped me most was lowering the bar—not demanding that every session produce something brilliant, but simply committing to open my notebook and write a few lines, no matter how I felt. Some days, those lines turned into pages. Other days, they didn’t. But the act of showing up, even imperfectly, made it easier to return the next day. Over time, the gaps between sessions shrank, and writing became something I did almost automatically, rather than something I had to force myself into.

The truth is, consistency is a lifelong practice. There’s no finish line where you become “done” and never have to think about it again. Life will always throw challenges your way—unexpected changes, setbacks, or just plain boredom. The key is to approach consistency with patience and flexibility, knowing that some seasons will be easier than others. If you fall off track, you can always begin again. Each day is a new chance to show up for yourself and your goals.

In the end, consistency isn’t about being perfect or never missing a day. It’s about returning, again and again, to the things that matter to you. Over time, those small, repeated actions add up to something meaningful. The results may not be dramatic in the moment, but looking back, you’ll see just how far you’ve come—one steady step at a time.
`
  }
];