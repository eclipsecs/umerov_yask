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
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center font-sans">
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
      const remainingMonths = diffMonths % 12;
      return `${diffYears} YEAR${diffYears > 1 ? 'S' : ''}${remainingMonths > 0 ? ` ${remainingMonths} MONTH${remainingMonths > 1 ? 'S' : ''}` : ''} AGO`;
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
    <div className="container mx-auto px-4 py-16 max-w-4xl font-sans">
      {/* Back Button */}
      <Link to="/articles" className="inline-flex items-center mb-8 font-bold text-pink-500 uppercase text-sm hover:text-pink-600 transition-colors" style={{ fontWeight: 700 }}>
        <ArrowLeft className="w-4 h-4 mr-2 font-bold" />
        Back to Articles
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex justify-between items-center gap-4 mb-6">
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontWeight: 700 }}>
            {formatRelativeDate(article.publishedAt)}
          </span>
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontWeight: 700 }}>
            {formatReadTime(readTime)}
          </span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-foreground leading-tight" style={{ fontWeight: 700 }}>
          {article.title}
        </h1> {/* You can adjust the title size here */}
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-8 md:leading-9 mb-4" style={{ fontWeight: 400, fontStyle: 'normal' }}>
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
      <article
        className="mt-10 prose dark:prose-invert max-w-4xl mx-auto font-normal font-sans
        prose-p:text-[1.35rem] md:prose-p:text-[1.5rem] prose-p:leading-8 md:prose-p:leading-9
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3
        prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5
        prose-blockquote:border-l-2 prose-blockquote:border-pink-300 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
        prose-pre:rounded-lg prose-pre:p-4
        prose-img:rounded-lg prose-img:shadow-md
        text-gray-800 dark:text-gray-200"
        style={{ fontWeight: 450, fontStyle: 'normal', fontSize: '1.25rem' }} // slightly bolder and larger font
      >
        <MarkdownRenderer content={article.content} />
        <div className="mt-6 text-base font-bold text-gray-900 dark:text-gray-100 tracking-wide">
          {article.content.split(/\s+/).filter(Boolean).length} WORDS
        </div>

        {/* References / External Links */}
        {article.links && article.links.length > 0 && (
          <div className="flex flex-col gap-1 mt-6">
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-1 font-sans">References</span>
            {article.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-base md:text-lg font-semibold font-sans"
                style={{ color: '#ec4899' }}
              >
                <RoughNotation type="underline" onHover={true} color="#ec4899">
                  <span>{link.title || link.url}</span>
                </RoughNotation>
              </a>
            ))}
          </div>
        )}
      </article>

      {/* Next Up Section */}
      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3 font-sans">Previous Article</span>
              <Link to={`/article/${prevArticle.id}`} className="text-pink-500 text-base md:text-lg font-semibold font-sans">
                <RoughNotation type="underline" onHover={true} color="#ec4899">
                  <span>{prevArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3 font-sans">Next Up</span>
              <Link to={`/article/${nextArticle.id}`} className="text-pink-500 text-base md:text-lg font-semibold font-sans">
                <RoughNotation type="underline" onHover={true} color="#ec4899">
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