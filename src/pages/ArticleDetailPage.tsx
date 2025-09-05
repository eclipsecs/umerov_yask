import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { articles } from './../data/articles';
import { calculateReadTime, formatReadTime } from '@/utils/readTime';
import RoughNotation from '@/components/RoughNotation';


const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/articles">
          <Button>Back to Articles</Button>
        </Link>
      </div>
    );
  }

  // Returns relative date in format like "1 YEAR AGO", "10 MONTHS AGO", "3 DAYS AGO", "JUST NOW"
  const formatRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
    if (diffYears >= 1) {
      return `${diffYears} YEAR${diffYears > 1 ? 'S' : ''} AGO`;
    } else if (diffMonths >= 1) {
      return `${diffMonths} MONTH${diffMonths > 1 ? 'S' : ''} AGO`;
    } else if (diffDays >= 1) {
      return `${diffDays} DAY${diffDays > 1 ? 'S' : ''} AGO`;
    } else if (diffHours >= 1) {
      return `${diffHours} HOUR${diffHours > 1 ? 'S' : ''} AGO`;
    } else if (diffMinutes >= 1) {
      return `${diffMinutes} MINUTE${diffMinutes > 1 ? 'S' : ''} AGO`;
    } else {
      return 'JUST NOW';
    }
  };

  // Calculate read time if not provided
  const readTime = article.readTime || calculateReadTime(article.content);

  // Find the index of the current article
  const currentIndex = articles.findIndex(a => a.id === id);
  // Next article in sequence, or null if at end
  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;
  const prevArticle =
    currentIndex > 0 ? articles[currentIndex - 1] : null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link to="/articles" className="inline-flex items-center mb-8 font-bold text-pink-500 uppercase text-sm hover:text-pink-600 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2 font-bold" />
        Back to Articles
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex justify-between items-center gap-4 mb-6">
          <span className="font-bold text-pink-500 uppercase text-sm">
            {formatRelativeDate(article.publishedAt)}
          </span>
          <span className="font-bold text-pink-500 uppercase text-sm">
            {formatReadTime(readTime)}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
          {article.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          {article.excerpt}
        </p>
        
      </header>

      {/* YouTube Video */}
      {article.youtubeUrl && (
        <div className="mb-12">
          <YouTubeEmbed 
            url={article.youtubeUrl} 
            title={article.title}
            className="shadow-lg"
          />
        </div>
      )}

      {/* Hero Video */}
      {!article.youtubeUrl && article.video && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-12 shadow-lg">
          <video 
            src={article.video}
            controls
            className="w-full h-full object-cover"
            poster={article.image} // Use image as poster if available
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Hero Image (only if no video or YouTube) */}
      {!article.youtubeUrl && !article.video && article.image && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-12 shadow-lg">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="prose max-w-none text-lg md:text-xl leading-relaxed md:leading-loose lg:leading-[2] font-hanken tracking-wide font-medium">
        <MarkdownRenderer content={article.content} />
      </article>

      {/* Next Up Section */}
      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-muted-foreground mb-3">Previous Article</span>
              <Link to={`/article/${prevArticle.id}`} className="text-pink-500 text-base md:text-lg font-hanken font-semibold">
                <RoughNotation type="underline" onHover={true}>
                  <span>{prevArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-muted-foreground mb-3">Next Up</span>
              <Link to={`/article/${nextArticle.id}`} className="text-pink-500 text-base md:text-lg font-hanken font-semibold">
                <RoughNotation type="underline" onHover={true}>
                  <span>{nextArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;