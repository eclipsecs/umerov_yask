import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RoughNotation from '@/components/RoughNotation';
import LiquidTextReveal from '@/components/LiquidTextReveal';
import { articles } from '@/data/articles';

const getRelativeTime = (dateString: string) => {
  const publishedDate = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - publishedDate.getTime();
  const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''} ago`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    return 'this month';
  }
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center text-center gap-6 sm:gap-8 lg:gap-10">
          <div className="mx-auto flex justify-center">
            <div className="w-full">
              <div className="flex-1 space-y-8 mx-auto">
                <div className="space-y-6">
                  <LiquidTextReveal text="Hi, I'm Umerov" />
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground max-w-2xl font-sans font-medium mx-auto text-left">
                    <p>
                      I love sharing thoughts and ideas through writing. This is where I store my ramblings
                      about technology, education, and life observations.
                    </p>
                    <p>
                      Currently exploring the intersection of AI and education, while documenting
                      my journey through IELTS teaching and personal reading.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 pb-20 max-w-5xl">
        <div className="space-y-6">
          <div className="ml-6 sm:ml-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-sans font-bold">Latest Writing 📝</h2>
              <Link 
                to="/articles" 
                className="text-pink-500 dark:text-pink-500 font-bold flex items-center gap-1"
              >
                View all <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[...articles]
              .sort((a, b) => Number(b.id) - Number(a.id))
              .slice(0, 4)
              .map(article => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="group block p-4 sm:p-4 lg:p-6 rounded-xl hover:bg-accent-pink/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-muted-foreground text-sm font-bold uppercase bg-transparent">
                      {getRelativeTime(article.publishedAt)}
                    </span>
                    <span className="text-muted-foreground text-sm font-bold uppercase bg-transparent">
                      {article.readTime} min read
                    </span>
                  </div>
                  <RoughNotation type="underline" onHover={true} color="currentColor">
                    <h3 className="text-xl font-sans font-bold mb-2 sm:mb-3 text-muted-foreground transition-colors">
                      {article.title}
                    </h3>
                  </RoughNotation>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;