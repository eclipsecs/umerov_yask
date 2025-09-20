import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Twitter } from 'lucide-react';
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
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center" style={{ fontFamily: 'Aptos, sans-serif' }}>
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
    <div className="container mx-auto px-4 py-16 max-w-4xl" style={{ fontFamily: 'Aptos, sans-serif' }}>
      {/* Back Button */}
      <Link to="/articles" className="inline-flex items-center mb-8 font-bold text-pink-500 uppercase text-sm hover:text-pink-600 transition-colors no-underline hover:no-underline" style={{ fontWeight: 700, fontFamily: 'Aptos, sans-serif', textDecoration: 'none' }}>
        <ArrowLeft className="w-4 h-4 mr-2 font-bold" />
        Back to Articles
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex justify-between items-center gap-4 mb-6">
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontWeight: 700, fontFamily: 'Aptos, sans-serif' }}>
            {formatRelativeDate(article.publishedAt)}
          </span>
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontWeight: 700, fontFamily: 'Aptos, sans-serif' }}>
            {formatReadTime(readTime)}
          </span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-foreground leading-tight" style={{ fontWeight: 700, fontFamily: 'Aptos, sans-serif' }}>
          {article.title}
        </h1> {/* You can adjust the title size here */}
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-8 md:leading-9 mb-4" style={{ fontWeight: 400, fontStyle: 'normal', fontFamily: 'Aptos, sans-serif' }}>
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
        className={
          "mt-10 prose prose-pink dark:prose-invert max-w-4xl mx-auto font-normal " +
          "prose-p:text-[1.35rem] md:prose-p:text-[1.5rem] prose-p:leading-8 md:prose-p:leading-9 " +
          "prose-headings:font-bold prose-headings:tracking-tight " +
          "prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 " +
          "prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 " +
          "prose-blockquote:border-l-2 prose-blockquote:border-pink-400 prose-blockquote:pl-4 " +
          "prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md " +
          "prose-pre:rounded-lg prose-pre:p-4 " +
          "prose-img:rounded-lg prose-img:shadow-md " +
          "text-gray-800 dark:text-gray-200"
        }
        style={{ fontWeight: 450, fontStyle: 'normal', fontSize: '1.25rem', fontFamily: 'Aptos, sans-serif' }}
      >
        <MarkdownRenderer content={article.content} />
        {/* Quotes Section */}
        {article.quotes && article.quotes.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-pink-500 mb-2 font-sans" style={{ fontFamily: 'Aptos, sans-serif' }}>Quotes</h2>
            <div className="space-y-4">
              {article.quotes.map((quote, index) => (
                <blockquote
                  key={index}
                  className="border-l-4 border-pink-400 pl-4 text-lg text-gray-900 dark:text-gray-100 font-medium bg-muted/30 rounded-md py-2"
                  style={{ fontFamily: 'Aptos, sans-serif', fontStyle: 'normal' }}
                >
                  “{quote}”
                </blockquote>
              ))}
            </div>
          </section>
        )}
        <div className="mt-6 text-lg font-bold text-gray-900 dark:text-gray-100 tracking-wide text-left" style={{ fontFamily: 'Aptos, sans-serif' }}>
          {article.content.split(/\s+/).filter(Boolean).length} WORDS
        </div>

        {/* References / External Links */}
        {article.links && article.links.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-foreground mb-1 font-sans" style={{ fontFamily: 'Aptos, sans-serif' }}>References</h2>
            <ul className="space-y-2">
              {article.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 text-base md:text-lg font-semibold no-underline hover:no-underline font-sans"
                    style={{ color: '#ec4899', fontFamily: 'Aptos, sans-serif', textDecoration: 'none' }}
                  >
                    <RoughNotation type="underline" onHover={true} color="#ec4899">
                      <span>{link.title || link.url}</span>
                    </RoughNotation>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Enjoyed Reading Section */}
      <section className="mt-16">
        <div
          className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-row items-center justify-between gap-4 border border-gray-300 dark:border-gray-600"
          style={{ fontFamily: 'Aptos, sans-serif' }}
        >
          <div className="flex flex-col items-start gap-2">
            <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Enjoyed reading?
            </div>
            <div className="text-foreground/90 text-lg">
              Feel free to connect with me or explore more insights on my pages.
            </div>
          </div>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-md font-semibold text-white bg-black dark:bg-pink-600 hover:bg-pink-700 dark:hover:bg-pink-500 transition-colors"
            style={{ fontFamily: 'Aptos, sans-serif' }}
          >
            Follow Me
          </a>
        </div>
      </section>

      {/* Next Up Section */}
      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3 font-sans" style={{ fontFamily: 'Aptos, sans-serif' }}>Previous Article</span>
              <Link to={`/article/${prevArticle.id}`} className="text-pink-500 text-base md:text-lg font-semibold no-underline hover:no-underline font-sans" style={{ fontFamily: 'Aptos, sans-serif', textDecoration: 'none' }}>
                <RoughNotation type="underline" onHover={true} color="#ec4899">
                  <span>{prevArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3 font-sans" style={{ fontFamily: 'Aptos, sans-serif' }}>Next Up</span>
              <Link to={`/article/${nextArticle.id}`} className="text-pink-500 text-base md:text-lg font-semibold no-underline hover:no-underline font-sans" style={{ fontFamily: 'Aptos, sans-serif', textDecoration: 'none' }}>
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