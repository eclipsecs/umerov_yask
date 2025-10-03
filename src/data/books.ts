export interface BookChapter {
  id: string;
  chapterNumber: number;
  title: string;
  content: string;
  notes?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  genre: string;
  description: string;
  coverImage?: string;
  readingStatus: 'to-read' | 'reading' | 'completed';
  startedDate?: string;
  completedDate?: string;
  personalComments: string;
  chapters: BookChapter[];
  tags: string[];
  downloadUrl?: string; // Link to download the book
  progress?: number; // added for tracking reading percentage
}

export const books: Book[] = [
   {
    id: "54",
    title: "The Shallows",
    author: "Nicholas Carr",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/81Ce51P9NEL.jpg",
    readingStatus: "completed",
    personalComments: "Reading The Shallows was a thought-provoking journey into how the internet is reshaping not just our habits, but the very structure of our brains. Carr’s writing made me reflect on my own distracted patterns and the way digital media chips away at my ability to focus deeply. I found myself questioning how often I skim instead of read, and how much of my memory and creativity I’ve outsourced to devices. The historical context Carr provides—tracing the evolution from print to digital—gave me a new appreciation for the silent, internal dialogue of deep reading. \n\nWhat really struck me was how relevant the book feels in our hyper-connected lives. Every day, I notice how easy it is to bounce from notification to notification, rarely giving anything my full attention. Carr doesn’t just sound the alarm for the sake of it; he invites the reader to pause and consider what’s at stake when we allow our minds to be shaped by the demands of the digital world. There’s a tension between the convenience and wonder of technology and the subtle erosion of our ability to think slowly, to let ideas simmer, to remember and synthesize rather than just consume. \n\nAfter finishing The Shallows, I started to reconsider my own reading habits. I realized how seldom I lose myself in a book for hours the way I did as a child, and how quickly I feel the urge to check my phone or open a new tab at the slightest hint of boredom. The book made me nostalgic for the immersive, almost meditative experience of deep reading, but it also left me feeling a sense of urgency to reclaim that space for myself. \n\nCarr’s arguments can feel a bit alarmist at times, but honestly, I think that’s part of the point—the changes are subtle but profound. The most valuable takeaway for me was the idea of being intentional about how I use technology. Since reading it, I’ve tried to set aside pockets of time for uninterrupted reading, to leave my phone in another room, and to notice when I’m slipping into shallow habits online. It’s not about rejecting the internet or digital tools, but about finding a sense of balance and protecting the parts of my mind that thrive on depth, reflection, and real engagement. I’m still figuring out what that looks like in practice, but The Shallows gave me both the motivation and the framework to start. If you ever feel like your attention is fraying or you miss the pleasure of getting lost in a book, this is a must-read. It’s a wake-up call, but also a hopeful reminder that we can still choose how we shape our minds in a noisy world.",
    downloadUrl: "https://psihologija.ff.uns.ac.rs/akves/Shallows.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "Hal and Me",
        content: "Carr introduces his own struggles with maintaining focus and deep reading in the age of the internet, drawing parallels to HAL, the computer from 2001: A Space Odyssey, as a metaphor for how technology changes us.",
        notes: "I really related to Carr’s confession about losing his ability to read deeply. His opening anecdote set the tone for the whole book—I found myself nodding along, thinking about how often my own attention fractures when I’m online. This chapter made me realize that I’m not alone in feeling less patient and more distracted."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "The Vital Paths",
        content: "Explores the concept of neuroplasticity, showing how our brains physically adapt to new habits and technologies, and reviews historical shifts in media and their impacts on cognition.",
        notes: "The idea that our brains are constantly rewiring themselves was both fascinating and a little unsettling. I appreciated the historical perspective—especially how previous innovations like the map or clock changed thinking. It made me see the internet not as an isolated disruptor, but part of a long chain of technological revolutions."
      },
      {
        id: "ch3",
        chapterNumber: 3,
        title: "Tools of the Mind",
        content: "Carr discusses how the invention of writing, maps, and clocks have shaped human thought, emphasizing that every intellectual tool changes the way we think.",
        notes: "This chapter was a great reminder that every tool—no matter how basic—has cognitive consequences. The section on clocks and how they made us more mechanical in our thinking really stuck with me. It made me look at my phone’s clock and notifications in a new light."
      },
      {
        id: "ch4",
        chapterNumber: 4,
        title: "The Deepening Page",
        content: "Focuses on the impact of the printed book, describing how it fostered deep, linear thinking and internal reflection, and contrasts this with the internet’s fragmented style.",
        notes: "I felt a pang of nostalgia reading about the immersive experience of getting lost in a book. Carr’s description of how print culture shaped our minds made me want to pick up a novel and lose myself for hours—something I do less and less often these days."
      },
      {
        id: "ch5",
        chapterNumber: 5,
        title: "A Medium of the Most General Nature",
        content: "Examines the internet as a medium that absorbs and reshapes all previous media, highlighting how its design encourages multitasking, skimming, and constant interruption.",
        notes: "Carr’s analysis of the internet’s ‘all-consuming’ nature felt spot-on. I’m guilty of opening a dozen tabs and jumping between them. This chapter made me more aware of how rarely I give anything my undivided attention online."
      },
      {
        id: "ch6",
        chapterNumber: 6,
        title: "The Very Image of a Book",
        content: "Looks at how digital reading changes the act of reading itself, including the rise of e-books, hyperlinks, and multimedia—often at the expense of comprehension and retention.",
        notes: "I’ve always loved e-books for their convenience, but Carr’s points about hyperlinks and distractions made me rethink my habits. I noticed that I do click away from what I’m reading far more often when it’s digital. It’s a trade-off I hadn’t fully considered before."
      },
      {
        id: "ch7",
        chapterNumber: 7,
        title: "The Juggler’s Brain",
        content: "Explores how multitasking and constant digital interruptions overload working memory, reduce comprehension, and change how we process information.",
        notes: "The science here was eye-opening. I always thought I was a decent multitasker, but Carr makes a compelling case that our brains pay a real price for it. Since reading this, I’ve tried to be more intentional about single-tasking—even if it’s hard."
      },
      {
        id: "ch8",
        chapterNumber: 8,
        title: "The Church of Google",
        content: "Investigates the philosophy and business model behind search engines, especially Google, and how their emphasis on speed and efficiency shapes our expectations and attention spans.",
        notes: "I hadn’t really considered how Google’s approach to knowledge—fast, fragmented, and surface-level—has changed my own expectations. I catch myself wanting instant answers, not deeper understanding. This chapter made me more critical of my search habits."
      },
      {
        id: "ch9",
        chapterNumber: 9,
        title: "Search, Memory",
        content: "Discusses the consequences of outsourcing memory to the internet, arguing that relying on digital devices for information weakens our ability to form lasting knowledge and insights.",
        notes: "This chapter hit home. I rely on my phone for so much—contacts, facts, reminders—that I wonder if my own memory is getting lazier. Carr’s argument that real knowledge requires more than just access to information made me want to practice recall and reflection more often."
      },
      {
        id: "ch10",
        chapterNumber: 10,
        title: "A Thing Like Me",
        content: "Reflects on the broader implications of technological change, considering what is lost when we trade depth for efficiency, and questioning what kind of minds we want to cultivate.",
        notes: "Carr’s closing thoughts were sobering but necessary. He doesn’t just criticize technology—he asks us to consider what kind of lives and minds we want. I finished this chapter feeling both uneasy and inspired to carve out more space for slow, deep thinking."
      },
      {
        id: "ch11",
        chapterNumber: 11,
        title: "Epilogue",
        content: "Carr sums up his arguments, sharing personal reflections and urging readers to be mindful of how technology shapes their attention, memory, and humanity.",
        notes: "The epilogue left me reflecting on my own digital habits. Carr’s gentle call for awareness and balance felt like the right note to end on. It’s not about rejecting technology, but about using it wisely so we don’t lose what makes us fully human."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "53",
    title: "Tafsir Ibn Kathir",
    author: "Ismail ibn Umar ibn Kathir",
    isbn: "9781591440208",
    genre: "Islamic scholarship, Qur’anic exegesis, classical commentary",
    description: "Tafsir Ibn Kathir is one of the most respected and widely referenced commentaries on the Qur’an, offering deep insights into the meanings, historical context, and spiritual lessons of the holy text. Compiled by the renowned 14th-century scholar Ismail ibn Umar ibn Kathir, this tafsir draws from the sayings of the Prophet Muhammad (peace be upon him), his companions, and earlier generations to explain the Qur’an’s verses in a clear and accessible way.",
    coverImage: "https://m.media-amazon.com/images/I/41EnRRiRetL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Reading Tafsir Ibn Kathir is a humbling and transformative experience. It’s not just a scholarly text, but a living, breathing guide that connects you to the earliest generations of Muslims, their struggles, hopes, and unwavering faith. What stands out most is the sense of depth and reverence Ibn Kathir brings to every verse—his explanations are rooted in authentic sources, yet he never loses sight of the Qur’an’s spiritual and ethical dimensions. The stories of the prophets, the lessons drawn from the lives of past nations, and the detailed explanations of even the shortest surahs make the Qur’an feel both timeless and urgently relevant.\n\nWhat I find especially impactful is how Ibn Kathir’s tafsir bridges the gap between historical context and practical application. He often pauses to remind the reader of the mercy, justice, and wisdom embedded in the Qur’an’s guidance, and he doesn’t shy away from addressing difficult or complex passages. The tafsir is rich with narrations, linguistic insights, and reflections that invite you to slow down and ponder each verse—sometimes for hours. It’s a book that rewards patience and sincerity, and the more you return to it, the more you discover.\n\nOn a practical level, Tafsir Ibn Kathir has changed the way I approach the Qur’an. Instead of reading quickly or seeking only surface meanings, I’ve learned to ask deeper questions and to appreciate the interconnectedness of the Qur’an’s message. The reminders about patience, gratitude, humility, and reliance on Allah are woven throughout, and I often find myself reflecting on these lessons in daily life. Above all, the tafsir inspires a sense of awe and gratitude for the Qur’an as a source of light and guidance. If you want to truly understand the Qur’an—not just its words, but its heart—Tafsir Ibn Kathir is an invaluable companion.",
    downloadUrl: "https://www.alim.org/tafsir/ibn-kathir/?surah=1&ayah=0",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "Surah al-Fatihah: The Opening",
        content: "Surah al-Fatihah is the opening chapter of the Qur’an and is considered the essence of its message. Ibn Kathir explores its seven verses, highlighting themes of praise, mercy, guidance, and the believer’s relationship with Allah. He discusses why this surah is recited in every prayer and its centrality in Islamic worship.",
        notes: "Ibn Kathir’s commentary on al-Fatihah is deeply moving. He emphasizes how this short chapter encapsulates the entire spirit of the Qur’an—recognizing Allah’s mercy, seeking guidance, and acknowledging our dependence on Him. It’s a reminder that every prayer begins with gratitude and humility, setting the tone for sincere worship and reflection."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "Surah al-Baqarah: The Cow",
        content: "This longest surah covers a vast array of topics, including faith, law, stories of previous prophets, and guidance for building a just society. Ibn Kathir explains the historical context of many verses, the lessons from Bani Israel, and the practical rulings for daily life.",
        notes: "What stands out is the way Ibn Kathir makes the surah’s complex themes approachable. He ties legal rulings to spiritual goals and often pauses to highlight the wisdom behind divine commandments. The stories of Moses and the Children of Israel are especially vivid, offering timeless lessons in patience and trust."
      },
      {
        id: "ch3",
        chapterNumber: 3,
        title: "Surah Aal Imran: The Family of Imran",
        content: "This chapter addresses the People of the Book, the story of Maryam (Mary) and Isa (Jesus), and the trials faced by the early Muslim community. Ibn Kathir provides detailed background on interfaith dialogue, the importance of steadfastness, and the significance of family and lineage.",
        notes: "Ibn Kathir’s reflections on the trials of believers and the importance of unity are especially relevant today. His explanations encourage readers to approach differences with wisdom and to find strength in faith during times of hardship."
      },
      {
        id: "ch4",
        chapterNumber: 4,
        title: "Surahs an-Nisa to at-Tawbah: Social Justice and Community",
        content: "These chapters cover a range of themes: women’s rights, family relations, inheritance, warfare, forgiveness, and repentance. Ibn Kathir explains the context of each surah, clarifying difficult verses and emphasizing the balance between justice and compassion.",
        notes: "The grouped commentary here is a reminder of the Qur’an’s holistic approach to social life. Ibn Kathir never loses sight of the need for justice, but always balances it with mercy. His explanations of sensitive topics, like inheritance or conflict, are thoughtful and rooted in compassion."
      },
      {
        id: "ch5",
        chapterNumber: 5,
        title: "Surahs Yunus to Ankabut: Stories of the Prophets and Lessons",
        content: "These surahs recount the stories of many prophets—Noah, Hud, Salih, Abraham, Lot, Shu’ayb, and others. Ibn Kathir draws out the lessons of each story, showing how patience, faith, and perseverance lead to success, even in the face of overwhelming odds.",
        notes: "Ibn Kathir’s storytelling brings the prophets’ struggles to life. He highlights the universality of their challenges and the unwavering hope they maintained. This section is especially uplifting when you’re seeking role models for resilience and trust in God."
      },
      {
        id: "ch6",
        chapterNumber: 6,
        title: "Surahs Rum to Ahzab: Morality and Community",
        content: "These chapters focus on the rise and fall of nations, the importance of morality, and the responsibilities of the Muslim community. Ibn Kathir explains the signs of Allah in creation, the need for humility, and the dangers of arrogance.",
        notes: "There’s a strong sense of accountability in these surahs. Ibn Kathir’s notes encourage readers to reflect on their own character and their contributions to society. The emphasis on humility and gratitude is a gentle but constant reminder."
      },
      {
        id: "ch7",
        chapterNumber: 7,
        title: "Surahs Saba to Yasin: Warnings and Resurrection",
        content: "These surahs warn against heedlessness, focus on the reality of resurrection, and call people to reflect on the signs of Allah. Ibn Kathir discusses the stories of past peoples and the consequences of ignoring divine guidance.",
        notes: "The urgency of these chapters is palpable. Ibn Kathir’s explanations drive home the reality of the afterlife and the importance of preparing for it. There’s a recurring theme of hope, though—even warnings are paired with reminders of Allah’s mercy."
      },
      {
        id: "ch8",
        chapterNumber: 8,
        title: "Surahs As-Saffat to Muhammad: Steadfastness in Faith",
        content: "These surahs emphasize the need for steadfastness, the rewards of patience, and the certainty of divine help. Ibn Kathir highlights the struggles of the prophets and the lessons for believers facing adversity.",
        notes: "This section is especially motivating. Ibn Kathir’s commentary is full of encouragement for those who feel tested or alone. He reminds us that even the prophets faced doubt and opposition, but their perseverance brought victory."
      },
      {
        id: "ch9",
        chapterNumber: 9,
        title: "Surahs Qaf to Al-Hujurat: Accountability and Ethics",
        content: "These chapters focus on personal accountability, the ethics of speech, and the importance of brotherhood. Ibn Kathir explains the spiritual dangers of gossip, pride, and division, and the virtues of forgiveness and honesty.",
        notes: "Ibn Kathir’s explanations here are practical and direct. The reminders about guarding the tongue and maintaining unity are timeless. This section often feels like a personal letter, urging you to be your best self."
      },
      {
        id: "ch10",
        chapterNumber: 10,
        title: "Surahs Qaf to Al-Mumtahanah: Balance and Justice",
        content: "These surahs address themes of balance in worship, justice in dealings, and the importance of sincerity. Ibn Kathir discusses how believers should navigate complex social and political realities while remaining true to their values.",
        notes: "There’s a beautiful emphasis on balance—between hope and fear, mercy and justice, private and public life. Ibn Kathir provides guidance for handling real-world dilemmas with integrity."
      },
      {
        id: "ch11",
        chapterNumber: 11,
        title: "Surahs As-Saff to Al-Tahrim: Guidance for Believers",
        content: "These chapters offer advice for the Muslim community, focusing on sincerity, unity, and the consequences of hypocrisy. Ibn Kathir explores the importance of following prophetic guidance and the dangers of neglecting it.",
        notes: "This section feels like a call to action. Ibn Kathir’s reflections are both cautionary and hopeful, urging believers to hold fast to their faith and to support one another in goodness."
      },
      {
        id: "ch12",
        chapterNumber: 12,
        title: "Surahs Al-Mulk to An-Nas: The Final Chapters",
        content: "The concluding surahs focus on the fundamentals of faith, the reality of the afterlife, and seeking refuge in Allah. Ibn Kathir explains the unique power and protection found in these short chapters, which are often recited for daily spiritual strength.",
        notes: "The final chapters are concise but powerful. Ibn Kathir’s commentary brings out their beauty and urgency, reminding us to seek Allah’s protection, to reflect on our mortality, and to renew our commitment to faith every day."
      }
    ],
    tags: ["Islam", "Qur'an", "tafsir", "spirituality", "classical commentary"]
  },
  {
    id: "52",
    title: "Clear Thinking",
    author: "Shane Parrish",
    isbn: "9780593536694",
    publishedYear: 2023,
    genre: "Self-Improvement",
    description: "Clear Thinking by Shane Parrish is a practical guide to making better decisions and navigating the mental traps that cloud judgment. Drawing from years of research and his experience running Farnam Street, Parrish reveals how hidden forces like emotion, ego, and social pressure can hijack our thinking—and offers actionable strategies to regain clarity. With engaging stories and science-backed tools, the book empowers readers to recognize their blind spots, resist manipulation, and approach choices with calm, rational confidence. Whether you're facing a high-stakes business decision or a personal crossroads, Clear Thinking provides a blueprint for cutting through noise and seeing the world—and yourself—more clearly.",
    coverImage: "https://m.media-amazon.com/images/I/81hmO-IVMjL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Reading Clear Thinking felt like having a wise, practical mentor gently nudge me to examine my own patterns of thought. Shane Parrish doesn’t just point out the ways we all get stuck—he offers a compassionate, systematic approach to getting unstuck. What I loved most is how approachable the book is: it’s filled with relatable stories, simple frameworks, and questions that linger long after you put it down. I found myself reflecting on moments when I let emotions or ego drive my decisions, and how easily I fall into the traps Parrish describes. The book doesn’t shame you for being human; instead, it gives you tools to pause, notice, and choose differently. \n\nOne of my biggest takeaways was the idea that clarity isn’t about suppressing emotion or pretending to be a robot. It’s about learning to recognize the forces at play—fear, pride, social pressure—and making space for thoughtful, deliberate action. Parrish’s advice feels refreshingly grounded: he acknowledges that we’ll never be perfect thinkers, but we can get better at noticing when we’re slipping into autopilot. The practical exercises—like the pause, the checklist, and the ‘red flag’ moments—are things I’ve started using in my daily life. \n\nWhat surprised me was how much the book applies beyond big, dramatic decisions. I found myself using the principles in everyday conversations, in how I respond to feedback, and even in how I plan my week. It’s made me more aware of my own stories and assumptions, and more willing to ask, ‘What am I missing?’ or ‘Is this really true?’ \n\nClear Thinking is the kind of book I’ll return to again and again, especially when I feel overwhelmed or stuck. It’s not about being right all the time—it’s about being honest with yourself, slowing down, and making choices you can stand behind. If you’re looking for a guide to better thinking—one that’s warm, practical, and deeply human—I can’t recommend this book enough.",
    downloadUrl: "https://vk.com/doc399904795_667905728?hash=yxNEATmitjv9ZfailpS6SiYqzZW80ukZVdc5L4tXjkk&api=1&no_preview=1",
    chapters: [
      {
        id: "ct-ch1",
        chapterNumber: 1,
        title: "The Forces That Hijack Our Thinking",
        content: "Parrish opens by exploring the invisible forces—emotions, ego, incentives, and social pressure—that subtly distort our decisions. He illustrates how these forces can override logic, leading us astray even when we think we’re being rational.",
        notes: "This chapter made me realize how often I underestimate the power of emotion and ego in my own choices. Parrish’s examples are both humbling and reassuring: everyone falls into these traps, but awareness is the first step to avoiding them. I appreciated how he frames these forces not as ‘bad,’ but as natural parts of being human that we need to manage."
      },
      {
        id: "ct-ch2",
        chapterNumber: 2,
        title: "Creating Space Between Stimulus and Response",
        content: "Here, Parrish introduces the concept of the ‘pause’—the crucial moment between what happens to us and how we react. By learning to insert even a brief pause, we can disrupt automatic patterns and choose more thoughtfully.",
        notes: "This idea has been transformative for me. The pause isn’t always easy, especially when I’m stressed or triggered, but just remembering that I have a choice in how I respond has helped me avoid knee-jerk reactions. Parrish’s practical tips for building this habit are simple but powerful."
      },
      {
        id: "ct-ch3",
        chapterNumber: 3,
        title: "The Power of Mental Models",
        content: "Parrish explains how mental models—frameworks for understanding the world—shape our perceptions and decisions. He encourages readers to build a diverse ‘toolbox’ of models to approach problems from multiple angles.",
        notes: "As a longtime fan of Farnam Street, this chapter felt like a homecoming. Parrish makes a strong case for why collecting mental models is essential, not just for business or investing, but for life. I found myself motivated to revisit and expand my own set of models."
      },
      {
        id: "ct-ch4",
        chapterNumber: 4,
        title: "Spotting and Avoiding Cognitive Traps",
        content: "This chapter dives into common cognitive biases—confirmation bias, sunk cost fallacy, overconfidence—and offers strategies for noticing and counteracting them in real time.",
        notes: "I loved how practical this section is. The real-world examples made the biases feel less abstract and more like everyday hurdles I can actually do something about. The checklists and self-reflection prompts are tools I’ve already started using."
      },
      {
        id: "ct-ch5",
        chapterNumber: 5,
        title: "Building Clarity Through Questions",
        content: "Parrish highlights the importance of asking better questions—to ourselves and others—as a way to cut through confusion and surface hidden assumptions.",
        notes: "This chapter challenged me to slow down and get curious, even (or especially) when I think I already know the answer. Parrish’s suggested questions—like ‘What evidence would change my mind?’—are ones I now keep close at hand."
      },
      {
        id: "ct-ch6",
        chapterNumber: 6,
        title: "Resisting Manipulation and Groupthink",
        content: "Examining how social dynamics and persuasive tactics can cloud our judgment, Parrish provides strategies for maintaining independence and integrity in the face of pressure.",
        notes: "I found this chapter especially relevant in our hyper-connected world. Parrish’s advice on recognizing manipulation and standing your ground without being combative is both wise and practical. It’s a reminder that clear thinking isn’t just internal—it’s social, too."
      },
      {
        id: "ct-ch7",
        chapterNumber: 7,
        title: "Making Decisions You Won’t Regret",
        content: "Parrish offers a framework for making decisions that stand the test of time, emphasizing process over outcome and the value of being able to look back without regret.",
        notes: "This was one of my favorite chapters. The focus on process—rather than obsessing over results—helped me reframe past mistakes and future choices. Parrish’s stories about high-stakes decisions made the principles feel real and attainable."
      },
      {
        id: "ct-ch8",
        chapterNumber: 8,
        title: "Cultivating a Life of Clear Thinking",
        content: "In the final chapter, Parrish ties everything together, encouraging readers to make clear thinking a lifelong practice. He suggests routines, reflection habits, and community support to help sustain clarity over time.",
        notes: "The closing chapter feels like a gentle nudge to keep going, even when it’s hard. Parrish doesn’t promise perfection, but he makes a compelling case that clarity is a journey worth pursuing. I finished the book feeling both equipped and inspired to keep practicing clear thinking in all areas of my life."
      },
      {
        id: "ct-ch9",
        chapterNumber: 9,
        title: "Making Better Choices in Life and Work",
        content: "In this final chapter, Shane Parrish ties together all of the book’s core ideas—the defaults, the importance of pausing, asking questions, shaping environments, and aiming for clarity—into a practical approach for decision-making. He emphasizes that life is not about flawless thinking, but about making consistently better choices that add up over time.",
        notes: "This chapter felt like both a summary and a challenge. Parrish leaves you with the sense that clear thinking isn’t just for big career moves or financial decisions—it’s just as important in everyday life: how we talk to family, how we use our time, even how we respond to frustration. What I appreciated most was that he doesn’t promise perfection, only progress. The reminder that life is simply a series of choices, and that each better choice compounds into something greater, stayed with me long after I finished the book. It felt like a call to keep practicing, not to get everything right at once."
      }
    ],
    tags: ["decision-making", "psychology", "personal growth", "clarity", "self-improvement"]
  },
  {
    id: "51",
    title: "Words of My Father",
    author: "Yousef Bashir",
    genre: "Memoir, Non-fiction, Autobiography, Peace studies",
    publishedYear: 2019,
    isbn: "9780062917353",
    description: "Words of My Father is a deeply moving memoir by Yousef Bashir, chronicling his coming-of-age in Gaza amidst the turbulence and violence of the Israeli-Palestinian conflict. The book intimately follows Yousef’s childhood in the border town of Deir al-Balah, where his family’s home becomes occupied by Israeli soldiers and his daily life is marked by checkpoints, curfews, and the constant threat of violence. Yet, at the heart of this narrative is the extraordinary influence of Yousef’s father, a steadfast advocate of nonviolence and forgiveness, who insists on meeting hatred with dignity and hope. Through harrowing events—including being shot and severely wounded as a teenager—Yousef learns to navigate loss, anger, and fear, ultimately embracing his father’s vision for peace. The memoir explores themes of trauma, resilience, and the transformative power of forgiveness, offering a rare window into the human costs of conflict and the possibility of reconciliation. Bashir’s story is both a testament to the pain of war and a luminous example of the strength it takes to choose empathy over vengeance, leaving readers with a profound sense of hope and a renewed belief in the capacity for healing.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677837399i/41595606.jpg",
    readingStatus: "completed",
    personalComments: "Reading Words of My Father was a humbling and deeply emotional experience. Yousef Bashir’s story is not just a chronicle of suffering, but a testament to the extraordinary strength it takes to forgive in the face of injustice. What moved me most was the unwavering example set by his father—a man who, despite losing his home and enduring relentless hardship, refused to let hatred take root. The book challenged me to consider how easy it is to become consumed by anger when wronged, and how radical and courageous it is to choose compassion instead. There were moments when I felt Bashir’s pain and frustration so acutely that I wondered if I would have the same resilience or capacity for empathy in his place. Yet, by the end, I was left with a sense of hope that even in the darkest circumstances, the seeds of peace can be sown through small, daily acts of kindness and understanding. Bashir’s journey is a reminder that forgiveness is not about forgetting or excusing harm, but about breaking the cycle and reclaiming one’s own humanity. His story is both deeply personal and universally relevant, offering lessons about the cost of conflict, the power of family, and the quiet heroism of those who choose love over bitterness. It’s a book I’ll carry with me for a long time, and one I wish everyone could read—especially those who feel trapped by the weight of old wounds.",
    downloadUrl: "https://libgen.li/edition.php?id=138118916",
    chapters: [
      {
        id: "womf-ch1",
        chapterNumber: 1,
        title: "Home on the Border",
        content: "Yousef introduces his family and the house in Deir al-Balah, Gaza, which sits perilously close to the Israeli border. The chapter paints a vivid picture of childhood innocence amid encroaching tension, as soldiers begin to occupy the upper floors of his home.",
        notes: "This opening chapter struck me with its juxtaposition of normal family life and the surreal presence of soldiers. It’s unsettling, yet Yousef’s voice is gentle, almost nostalgic. The way he describes his father’s patience and refusal to hate—even as their home is invaded—sets the tone for the rest of the book. It made me reflect on how resilience often begins in the quietest acts of dignity."
      },
      {
        id: "womf-ch2",
        chapterNumber: 2,
        title: "Lessons from My Father",
        content: "Yousef recounts his father’s philosophy of nonviolence and the daily lessons he imparts, even as their circumstances grow more dire. The family’s commitment to peace becomes both a shield and a source of tension, especially as neighbors and relatives react with skepticism.",
        notes: "I found this chapter especially powerful. The father’s unwavering belief in peace, despite overwhelming odds, feels almost superhuman. It’s inspiring but also raises difficult questions—how do you hold onto hope when everyone around you is giving in to anger? The chapter challenged my assumptions about what strength really looks like."
      },
      {
        id: "womf-ch3",
        chapterNumber: 3,
        title: "Under Occupation",
        content: "As the military presence intensifies, daily life is upended: curfews are imposed, movement is restricted, and fear becomes constant. Yousef describes the psychological toll on his family and his own struggle to understand the world’s cruelty.",
        notes: "This chapter is raw and honest. You can feel the claustrophobia and helplessness seeping into every aspect of life. Yet, amidst the fear, there are glimpses of warmth—family meals, shared jokes, small defiances. It reminded me that even in the most oppressive situations, people find ways to hold onto their humanity."
      },
      {
        id: "womf-ch4",
        chapterNumber: 4,
        title: "A Bullet and Its Aftermath",
        content: "A pivotal moment arrives when Yousef is shot by an Israeli soldier. The chapter details his injury, the chaos that follows, and the long, painful recovery—both physical and emotional. The event becomes a turning point in his understanding of suffering and forgiveness.",
        notes: "I felt my heart in my throat reading this. The violence is sudden and senseless, and Yousef’s pain is palpable. What lingers, though, is not just the trauma, but his father’s response—refusing to curse or hate, insisting instead on healing. It’s a lesson in radical empathy that feels almost impossible, yet deeply necessary."
      },
      {
        id: "womf-ch5",
        chapterNumber: 5,
        title: "Crossing Boundaries",
        content: "Yousef’s recovery brings him into contact with Israelis on the other side of the conflict, from doctors to peace activists. These encounters challenge his preconceptions and open new possibilities for dialogue, even as the larger conflict rages on.",
        notes: "This chapter gave me hope. It’s not about easy answers—there is still pain and mistrust on all sides—but about the small bridges that can be built through shared humanity. Yousef’s willingness to see ‘the other’ as individuals, not just enemies, is both courageous and deeply moving."
      },
      {
        id: "womf-ch6",
        chapterNumber: 6,
        title: "Choosing Forgiveness",
        content: "In the final chapter, Yousef reflects on his decision to embrace his father’s legacy of forgiveness. He acknowledges the ongoing challenges but insists that peace begins with personal choices. The memoir closes with a message of hope for a future shaped by understanding, not revenge.",
        notes: "The ending left me with a quiet sense of awe. Forgiveness, as Yousef describes it, is not a one-time act but a daily practice—a way of refusing to let hatred define your life. It’s a difficult, often lonely path, but also the only one that offers real freedom. I finished the book feeling both sobered by the realities of conflict and uplifted by the possibility of reconciliation."
      },
      {
        id: "womf-ch7",
        chapterNumber: 7,
        title: "Carrying the Legacy Forward",
        content: "In this closing reflection, Yousef describes how his father’s words continue to guide him in adulthood as he speaks around the world about peace and reconciliation. He shares how he strives to live out those lessons in his own career and personal life, acknowledging the ongoing difficulties but emphasizing the importance of continuing the work.",
        notes: "This final chapter reads like both a farewell and a beginning. I was struck by how Bashir frames his story not as an end but as part of a larger journey that he is still on. The way he takes his father’s wisdom and turns it into action—by becoming a voice for peace—left me inspired. It reminded me that the true test of what we inherit is not just in remembering it, but in carrying it forward, even when the world seems unchanged. It made me reflect on the legacies I’ve inherited in my own life, and how I can honor them through my choices."
      }
    ],
    tags: ["memoir", "nonviolence", "peace", "Gaza", "autobiography"]
  },
  {
    id: "50",
    title: "In front of your nose",
    author: "George Orwell",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/71uDHglnpCL._UF1000,1000_QL80_.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://libgen.li/edition.php?id=136554437",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the main concepts of the book."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "49",
    title: "7 Habits of Highly Effective People",
    author: "Stephen Covey",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/71Koyhv2bML.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://lrc.wiut.uz/Content/Uploads/Ckeditor/fd199c0f-6612-4e28-9229-b7286bfe1ae21590810411_the-7-habits-of-highly-effective-people.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the two modes of thinking."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "48",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "A practical guide to understanding how habits are formed and how tiny changes can lead to remarkable personal and professional growth.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535115320i/40121378.jpg",
    readingStatus: "completed",
    startedDate: "2024-08-01",
    personalComments: "Currently reading this one. The 1% better every day concept is compelling, though some examples feel repetitive. The habit stacking technique is something I'm actively trying to implement.",
    downloadUrl: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Surprising Power of Atomic Habits",
        content: "How small changes compound over time",
        notes: "The 1% improvement principle - small habits compound into significant results over time. This chapter sets the foundation for the book's approach to habit change."
      },
      {
        id: "ch2",
        chapterNumber: 2,
        title: "How Your Habits Shape Your Identity",
        content: "The relationship between habits and identity formation",
        notes: "Every action is a vote for the type of person you wish to become. This chapter connects habits to personal identity."
      }
    ],
    tags: ["habits", "productivity", "self-improvement"]
  },
  {
    id: "47",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "9780374533557",
    publishedYear: 2011,
    genre: "Psychology",
    description: "A landmark exploration of how our thinking is shaped by two systems—one fast and intuitive, the other slow and deliberate—and how they influence our decisions and judgments.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the book's core psychological framework."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "46",
    title: "F*ck Whales: Petty Essays from a Brilliant Mind",
    author: "Maddox",
    isbn: "9781501187513",
    publishedYear: 2017,
    genre: "Humor",
    description: "A collection of satirical essays by Maddox, filled with biting humor and irreverent takes on modern life, culture, and the absurdities of the world.",
    coverImage: "https://pictures.abebooks.com/isbn/9781501187513-us.jpg",
    readingStatus: "reading",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    progress: 50,
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter sets the stage for the book's unique humor and perspective."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "45",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9781455586691",
    publishedYear: 2016,
    genre: "Productivity",
    description: "Examines the benefits of focused, distraction-free work and provides strategies for cultivating deep concentration in a world full of interruptions.",
    coverImage: "https://m.media-amazon.com/images/I/71pqZChaJkL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This first chapter introduces the importance of deep, focused work."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "44",
    title: "The 4-Hour Workweek",
    author: "Timothy Ferriss",
    isbn: "9780307465351",
    publishedYear: 2007,
    genre: "Business",
    description: "A guide to escaping the traditional 9-to-5, automating income, and designing a lifestyle of freedom, travel, and personal fulfillment.",
    coverImage: "https://m.media-amazon.com/images/I/6142S0D-PiL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. An introduction to lifestyle design and unconventional approaches to work."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "43",
    title: "The Dead Zone",
    author: "Stephen King",
    isbn: "9780451155758",
    publishedYear: 1979,
    genre: "Horror",
    description: "A supernatural thriller about Johnny Smith, who awakens from a coma with psychic abilities that allow him to see people's pasts and futures, leading to a confrontation with evil.",
    coverImage: "https://m.media-amazon.com/images/I/51IP+552f5L._SL500_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The first chapter introduces Johnny's awakening and his psychic abilities."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "42",
    title: "The Storyteller (Sea of Ink and Gold #3)",
    author: "Traci Chee",
    isbn: "9780399176796",
    publishedYear: 2018,
    genre: "Young Adult Fantasy",
    description: "The concluding volume of the Sea of Ink and Gold trilogy, where Sefia and Archer fight for freedom and truth in a world shaped by stories and secrets.",
    coverImage: "https://utopia-state-of-mind.com/wp-content/uploads/2018/10/the-storyteller-by-traci-chee.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the final struggle in the trilogy."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "41",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    isbn: "9780061241895",
    publishedYear: 1984,
    genre: "Psychology",
    description: "A classic exploration of the key principles that drive people to say 'yes,' revealing the psychology behind persuasion and how to apply it ethically.",
    coverImage: "https://m.media-amazon.com/images/I/419pbSB7PdL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter explores key psychological triggers for persuasion."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "40",
    title: "Hopeless",
    author: "Colleen Hoover",
    isbn: "9781476718722",
    publishedYear: 2012,
    genre: "New Adult Romance",
    description: "A gripping romance novel about Sky, a girl with a mysterious past, and her journey of love, secrets, and self-discovery.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1666362713i/62967897.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Sky's journey begins with hints of her mysterious past."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "39",
    title: "The Testaments",
    author: "Margaret Atwood",
    isbn: "9780385543781",
    publishedYear: 2019,
    genre: "Dystopian Fiction",
    description: "A sequel to The Handmaid's Tale, this novel follows three women in Gilead as their intertwined stories reveal the fate of the oppressive regime.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549292344l/42975172.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Introduces the world of Gilead and the three main characters."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "38",
    title: "Grit: The Power of Passion and Perseverance",
    author: "Angela Duckworth",
    isbn: "9781501111105",
    publishedYear: 2016,
    genre: "Self-Help",
    description: "Explores why passion and perseverance are more important than talent in achieving success, blending research, stories, and practical advice.",
    coverImage: "https://m.media-amazon.com/images/I/91fmmjCP6FL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The opening chapter explains the concept of grit and its importance."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "37",
    title: "The 80/20 Principle",
    author: "Richard Koch",
    isbn: "9780385491747",
    publishedYear: 1997,
    genre: "Business",
    description: "Demonstrates how 80% of results come from 20% of efforts and how to apply this principle to business, productivity, and life.",
    coverImage: "https://m.media-amazon.com/images/I/71sAovz8llL._UF894,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter introduces the 80/20 rule and its applications."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "36",
    title: "Why Nations Fail",
    author: "Daron Acemoglu & James A. Robinson",
    isbn: "9780307719225",
    publishedYear: 2012,
    genre: "Economics",
    description: "Examines the historical and political roots of prosperity and poverty, arguing that inclusive institutions are the key to national success.",
    coverImage: "https://m.media-amazon.com/images/I/91j9vfc0GmL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The basics of nonverbal communication are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "35",
    title: "The Definitive Book of Body Language",
    author: "Allan & Barbara Pease",
    isbn: "9780553804720",
    publishedYear: 2004,
    genre: "Communication",
    description: "A comprehensive guide to understanding and interpreting body language, revealing the secrets behind nonverbal communication.",
    coverImage: "https://m.media-amazon.com/images/I/71EsQwJ3chL._UF894,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The power of self-image is introduced in this chapter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "34",
    title: "Psycho-Cybernetics",
    author: "Maxwell Maltz",
    isbn: "9780399176130",
    publishedYear: 1960,
    genre: "Self-Help",
    description: "Explores the power of self-image and visualization, offering techniques for personal development and achieving goals.",
    coverImage: "https://m.media-amazon.com/images/I/71dKL5THnGL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Dalio introduces his life philosophy and the importance of principles."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "33",
    title: "Principles",
    author: "Ray Dalio",
    isbn: "9781501124020",
    publishedYear: 2017,
    genre: "Business",
    description: "Billionaire investor Ray Dalio shares the guiding principles that shaped his life and career, focusing on work, decision-making, and organizational success.",
    coverImage: "https://m.media-amazon.com/images/I/61LKD6scbfL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The first chapter introduces Sun Tzu's philosophy of strategy."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "32",
    title: "The Art of War",
    author: "Sun Tzu",
    isbn: "9781599869773",
    publishedYear: -500,
    genre: "Military Strategy",
    description: "An ancient Chinese military treatise offering timeless wisdom on strategy, leadership, and conflict, applicable to both warfare and modern life.",
    coverImage: "https://www.hachettebookgroup.com/wp-content/uploads/2024/01/9780465013272-1.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Taleb introduces the concept of antifragility."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "31",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    isbn: "9781400067824",
    publishedYear: 2012,
    genre: "Philosophy",
    description: "Explores how certain systems benefit and grow from volatility, disorder, and stress, introducing the concept of 'antifragility' in life, business, and nature.",
    coverImage: "https://m.media-amazon.com/images/I/71bPC5sjX5L._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Greene introduces the nature of human drives and behaviors."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "30",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    isbn: "9780525428145",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "Analyzes the forces that drive human behavior, offering strategies to understand and influence people in personal and professional life.",
    coverImage: "https://m.media-amazon.com/images/I/61UPuQRgNKL._UF1000,1000_QL80_.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The journey toward mastery begins with the stories of masters."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "29",
    title: "Mastery",
    author: "Robert Greene",
    isbn: "9780143124177",
    publishedYear: 2012,
    genre: "Self-Improvement",
    description: "Explores the paths of historical masters and provides a blueprint for achieving mastery in any field through dedication, learning, and creativity.",
    coverImage: "https://m.media-amazon.com/images/I/61M2Zzw9FyL._UF1000,1000_QL80_.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Peterson introduces the concept of order and chaos."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "28",
    title: "Beyond Order: 12 More Rules for Life",
    author: "Jordan Peterson",
    isbn: "9780593084649",
    publishedYear: 2021,
    genre: "Self-Help",
    description: "In this sequel to '12 Rules for Life,' Peterson offers twelve new principles to help readers find meaning and stability in a chaotic world.",
    coverImage: "https://m.media-amazon.com/images/I/61fuCrDLgxL._UF894,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. This chapter explores the problem of noise in human judgment."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "27",
    title: "Noise: A Flaw in Human Judgment",
    author: "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    isbn: "9780316451406",
    publishedYear: 2021,
    genre: "Psychology",
    description: "Examines the pervasive problem of 'noise'—randomness and inconsistency in human judgment—and provides strategies to reduce errors in decision-making.",
    coverImage: "https://m.media-amazon.com/images/I/81pn-QpyPGL._UF1000,1000_QL80_.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Winston Smith's world and the oppressive regime are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "26",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949,
    genre: "Dystopian Fiction",
    description: "A chilling vision of a totalitarian future, where Big Brother watches all and independent thought is crushed, exploring themes of surveillance, truth, and freedom.",
    coverImage: "https://m.media-amazon.com/images/I/71wANojhEKL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The principle of extreme ownership is introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "25",
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    isbn: "9781250067050",
    publishedYear: 2015,
    genre: "Leadership",
    description: "Navy SEAL officers share leadership lessons learned in combat, applying them to business and life through the principle of taking full responsibility.",
    coverImage: "https://m.media-amazon.com/images/I/71teGAqCOzL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The benefits of waking up early and morning routines are introduced."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
 {
    id: "24",
    title: "The 5AM Club",
    author: "Robin Sharma",
    isbn: "9781443456623",
    publishedYear: 2018,
    genre: "Self-Help",
    description: "Advocates waking up early and using the first hours of the day for self-improvement, productivity, and personal growth.",
    coverImage: "https://m.media-amazon.com/images/I/712VrOZ60zL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Explores the cultural significance of the TV show 'Friends.'"
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "23",
    title: "I'll Be There for You: The One about Friends",
    author: "Kelsey Miller",
    isbn: "9781488098642",
    publishedYear: 2018,
    genre: "Pop Culture",
    description: "An exploration of the cultural impact, history, and enduring legacy of the TV show 'Friends,' including its influence on society and television.",
    coverImage: "https://m.media-amazon.com/images/I/71ykRDp6kFL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Introduces the main laws of success and how networks matter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "22",
    title: "The Formula: The Universal Laws of Success",
    author: "Albert-László Barabási",
    isbn: "9780316505499",
    publishedYear: 2018,
    genre: "Business",
    description: "Reveals the hidden patterns behind success, drawing on data science and network theory to explain how performance and networks drive achievement.",
    coverImage: "https://m.media-amazon.com/images/I/71XqGEAiEXL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The author embarks on his journey into the world of memory championships."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "21",
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    isbn: "9780143120537",
    publishedYear: 2011,
    genre: "Memoir",
    description: "A journalist's journey into the world of competitive memory, blending neuroscience, history, and personal experience to unlock the secrets of remembering everything.",
    coverImage: "https://m.media-amazon.com/images/I/91aGTM8+3JL._UF894,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Bolton provides an insider's perspective on White House decision-making."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "20",
    title: "The Room Where It Happened",
    author: "John Bolton",
    isbn: "9781982148034",
    publishedYear: 2020,
    genre: "Political Memoir",
    description: "A firsthand account of John Bolton's time as U.S. National Security Advisor, detailing key events and controversies in the Trump administration.",
    coverImage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982148041/the-room-where-it-happened-9781982148041_hr.jpg",
    readingStatus: "to-read",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Lakhiani introduces his framework for questioning societal rules."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "19",
    title: "The Code of the Extraordinary Mind",
    author: "Vishen Lakhiani",
    isbn: "9781623367084",
    publishedYear: 2016,
    genre: "Self-Help",
    description: "Challenges conventional beliefs and offers a framework for breaking free from societal rules to create a life of happiness, success, and meaning.",
    coverImage: "https://m.media-amazon.com/images/I/71ndlTWF5VL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Godin encourages readers to become indispensable."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "18",
    title: "Linchpin",
    author: "Seth Godin",
    isbn: "9781591844099",
    publishedYear: 2010,
    genre: "Business",
    description: "Encourages readers to become indispensable at work by embracing creativity, initiative, and emotional labor, rather than following the status quo.",
    coverImage: "https://www.hachette.co.uk/wp-content/uploads/2023/11/hbg-title-9780349439815-10.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The story begins with a life-changing secret."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "17",
    title: "The Husband's Secret",
    author: "Liane Moriarty",
    isbn: "9780399159348",
    publishedYear: 2013,
    genre: "Contemporary Fiction",
    description: "A suspenseful novel about a woman who discovers her husband's devastating secret, forcing her to confront the boundaries of love, trust, and forgiveness.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460577225l/17802724.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Pink introduces the right-brain skills needed for the future."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "16",
    title: "A Whole New Mind",
    author: "Daniel H. Pink",
    isbn: "9781594481710",
    publishedYear: 2005,
    genre: "Business",
    description: "Argues that creative and empathetic right-brain thinking will be essential in the future, and outlines the skills needed to thrive in a changing world.",
    coverImage: "https://m.media-amazon.com/images/I/710w6375hKL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Bernstein introduces the idea of trusting the universe."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "15",
    title: "The Universe Has Your Back",
    author: "Gabrielle Bernstein",
    isbn: "9781401946548",
    publishedYear: 2016,
    genre: "Spirituality",
    description: "Offers spiritual guidance and practical tools to help readers release fear, trust the universe, and find happiness and peace.",
    coverImage: "https://www.harryhartog.com.au/cdn/shop/products/9781781809334.jpg?v=1662087316",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Ekman introduces the concept of detecting lies."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "14",
    title: "Telling Lies: Clues to Deceit in the Marketplace, Politics, and Marriage",
    author: "Paul Ekman",
    isbn: "9780393321888",
    publishedYear: 1985,
    genre: "Psychology",
    description: "Explores the science of deception, explaining how and why people lie and how to detect lies through facial expressions and behavior.",
    coverImage: "https://m.media-amazon.com/images/I/71EBTJJ8CML._UF1000,1000_QL80_.gif",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Collins lays out the framework for turning good companies into great ones."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "13",
    title: "Good to Great",
    author: "Jim Collins",
    isbn: "9780066620992",
    publishedYear: 2001,
    genre: "Business",
    description: "Examines why some companies make the leap from good to great, identifying key leadership traits and organizational practices that drive lasting success.",
    coverImage: "https://m.media-amazon.com/images/I/51IPJiX34fL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The Theory of Constraints is introduced in a business context."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "12",
    title: "The Goal",
    author: "Eliyahu M. Goldratt",
    isbn: "9780884271956",
    publishedYear: 1984,
    genre: "Business Fiction",
    description: "A business novel that explains the Theory of Constraints through the story of a plant manager racing to save his factory and improve performance.",
    coverImage: "https://cdn11.bigcommerce.com/s-yneuaokjib/images/stencil/1280x1280/attribute_rule_images/111137_source_1746689130.png",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Covey introduces the concept of the 8th habit."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "11",
    title: "The 8th Habit",
    author: "Stephen Covey",
    isbn: "9780743287937",
    publishedYear: 2004,
    genre: "Self-Help",
    description: "Builds on 'The 7 Habits of Highly Effective People' by introducing the concept of finding one's voice and inspiring others to do the same.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435624014i/1044141.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Lee Kuan Yew recounts Singapore's transformation journey."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "10",
    title: "From Third World to First: The Singapore Story: 1965-2000",
    author: "Lee Kuan Yew",
    isbn: "9780060197764",
    publishedYear: 2000,
    genre: "Memoir",
    description: "The memoir of Singapore's founding father, chronicling how he transformed a struggling former colony into a thriving global city-state.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546080459i/144409.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Chang challenges conventional economic wisdom in this chapter."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
   {
    id: "9",
    title: "Economics: The User's Guide",
    author: "Ha-Joon Chang",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Economics",
    description: "A clear and accessible introduction to economics, challenging conventional wisdom and providing the tools to understand how economies really work.",
    coverImage: "https://cdn.penguin.co.uk/dam-assets/books/9780718197032/9780718197032-jacket-large.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://static1.squarespace.com/static/5ae05ff489c1726d6bf80100/t/5ae9d2f18a922d1389c7aa28/1525273342362/_Ha-Joon_Chang_Economics_The_User_s_Guide.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. John Green reviews the human impact on the planet."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "8",
    title: "The Anthropocene Reviewed",
    author: "John Green",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1616514130l/55145261.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://cdn.bookey.app/files/pdf/book/en/the-anthropocene-reviewed.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Greene introduces the first law of power."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "7",
    title: "48 Laws of Power",
    author: "Robert Greene",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "https://irp-cdn.multiscreensite.com/cb9165b2/files/uploaded/The+48+Laws+Of+Power.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Hewlett Packard introduces strategies for antifragility."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "6",
    title: "Strategy of Antifragile",
    author: "Hewlett Packard",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://arminehslibrary.am/images/content/25-09-2023/hewlett-packard-strategia-antihrupkosti_gf_iC.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "http://library.sadjad.ac.ir/opac/temp/19315.pdf",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Will Smith begins his journey of self-discovery and fame."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "5",
    title: "Will",
    author: "Will Smith",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1624126289l/58375739.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. Hallam introduces the basics of expat investing."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "4",
    title: "Millionaire Expat",
    author: "Hallam",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515309359i/37846172.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The story opens with the world of 19th-century Uzbekistan."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "3",
    title: "Bygone Days",
    author: "Abdullah Qodiriy",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://m.media-amazon.com/images/I/61fq6IE2h9L._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# Add your download link here",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical. The novel begins with Fugui's fortunes and family life."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "2",
    title: "To Live",
    author: "Yu Hua",
    isbn: "9780718197032",
    publishedYear: 2014,
    genre: "Nonfiction",
    description: "The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity.",
    coverImage: "https://images.uzum.uz/cv65oclpb7f9qcngdr8g/original.jpg",
    readingStatus: "completed",
    personalComments: "Looking forward to diving into this classic on cognitive psychology and decision-making.",
    downloadUrl: "# https://libgen.li/index.php?req=to+live+yu+hua&columns%5B%5D=t&columns%5B%5D=a&columns%5B%5D=s&columns%5B%5D=y&columns%5B%5D=p&columns%5B%5D=i&objects%5B%5D=f&objects%5B%5D=e&objects%5B%5D=s&objects%5B%5D=a&objects%5B%5D=p&objects%5B%5D=w&topics%5B%5D=l&topics%5B%5D=c&topics%5B%5D=f&topics%5B%5D=a&topics%5B%5D=m&topics%5B%5D=r&topics%5B%5D=s&res=100&filesuns=all",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Characters of the Story",
        content: "Introduction to System 1 and System 2 thinking",
        notes: "System 1 is fast, intuitive, and emotional. System 2 is slow, deliberate, and logical."
      }
    ],
    tags: ["psychology", "decision-making", "cognitive-science"]
  },
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    isbn: "9780465050659",
    publishedYear: 2020,
    genre: "Contemporary Fiction",
    description: "A novel about Nora Seed, who finds herself in a magical library between life and death, where she can explore all the possible lives she could have lived and search for meaning, regret, and hope.",
    coverImage: "https://m.media-amazon.com/images/I/71ls-I6A5KL._UF1000,1000_QL80_.jpg",
    readingStatus: "completed",
    personalComments: "This book completely changed how I think about user experience and design. The principles are timeless and applicable beyond just physical objects - they apply to digital interfaces, processes, and systems. Norman's insights about affordances and signifiers are particularly valuable.",
    downloadUrl: "https://libgen.li/ads.php?md5=1b8c3c1c7877cc2223990f3f8ead5590",
    chapters: [
      {
        id: "ch1",
        chapterNumber: 1,
        title: "The Psychopathology of Everyday Things",
        content: "Introduction to design problems in everyday objects",
        notes: "Great examples of doors that confuse people. The Norman Door concept is introduced here. This chapter highlights the importance of intuitive design."
      },
      {
        id: "ch2", 
        chapterNumber: 2,
        title: "The Psychology of Everyday Actions",
        content: "How people interact with objects and the mental models they form",
        notes: "The seven stages of action framework is crucial for understanding user behavior. This chapter explains how users approach and complete tasks."
      },
      {
        id: "ch3",
        chapterNumber: 3,
        title: "Knowledge in the Head and in the World",
        content: "How we use both internal knowledge and external cues to navigate the world",
        notes: "The distinction between knowledge in the head vs. in the world is fundamental to good design. This chapter explores how design can support memory."
      }
    ],
    tags: ["design", "psychology", "UX", "usability"]
  }
];