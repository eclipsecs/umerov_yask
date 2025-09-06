import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { teachings } from '@/data/teachings';
import { calculateReadTime, formatReadTime } from '@/utils/readTime';
import RoughNotation from '@/components/RoughNotation';

const TeachingDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const teaching = teachings.find(a => a.id === id);

  if (!teaching) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Teaching Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The teaching you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/teachings">
          <Button>Back to The teachings</Button>
        </Link>
      </div>
    );
  }

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

  const readTime = teaching.readTime || calculateReadTime(teaching.content);

  const currentIndex = teachings.findIndex(a => a.id === id);
  const nextTeaching =
    currentIndex >= 0 && currentIndex < teachings.length - 1
      ? teachings[currentIndex + 1]
      : null;
  const prevTeaching =
    currentIndex > 0 ? teachings[currentIndex - 1] : null;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Button */}
      <Link to="/teachings" className="inline-flex items-center mb-8 font-bold text-pink-500 uppercase text-sm hover:text-pink-600 transition-colors" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
        <ArrowLeft className="w-4 h-4 mr-2 font-bold" />
        Back to The teachings
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex justify-between items-center gap-4 mb-6">
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
            {formatRelativeDate(teaching.publishedAt)}
          </span>
          <span className="font-bold text-pink-500 uppercase text-sm" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
            {formatReadTime(readTime)}
          </span>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-foreground leading-tight" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
          {teaching.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-8 md:leading-9 mb-10" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
          {teaching.excerpt}
        </p>
        
      </header>

      {/* YouTube Video */}
      {teaching.youtubeUrl && (
        <div className="mb-12">
          <YouTubeEmbed 
            url={teaching.youtubeUrl} 
            title={teaching.title}
            className="shadow-lg"
          />
        </div>
      )}

      {/* Hero Video */}
      {!teaching.youtubeUrl && teaching.video && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-12 shadow-lg">
          <video 
            src={teaching.video}
            controls
            className="w-full h-full object-cover"
            poster={teaching.image}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Hero Image */}
      {!teaching.youtubeUrl && !teaching.video && teaching.image && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-12 shadow-lg">
          <img 
            src={teaching.image} 
            alt={teaching.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article
        className="mt-10 prose dark:prose-invert max-w-4xl mx-auto font-normal
        prose-p:text-[1.35rem] md:prose-p:text-[1.5rem] prose-p:leading-8 md:prose-p:leading-9 prose-p:font-medium
        prose-li:text-[1.35rem] md:prose-li:text-[1.5rem] prose-li:leading-8 md:prose-li:leading-9 prose-li:font-medium
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3
        prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5
        prose-blockquote:border-l-2 prose-blockquote:border-pink-300 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
        prose-pre:rounded-lg prose-pre:p-4
        prose-img:rounded-lg prose-img:shadow-md
        text-gray-800 dark:text-gray-200"
        style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 400, fontStyle: 'normal' }}
      >
        <MarkdownRenderer content={teaching.content} />
      </article>

      {/* Next Up Section */}
      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevTeaching && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-muted-foreground mb-3" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>Previous</span>
              <Link to={`/teaching/${prevTeaching.id}`} className="text-pink-500 text-base md:text-lg font-semibold" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
                <RoughNotation type="underline" onHover={true}>
                  <span>{prevTeaching.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextTeaching && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-muted-foreground mb-3" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>Next Up</span>
              <Link to={`/teaching/${nextTeaching.id}`} className="text-pink-500 text-base md:text-lg font-semibold" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>
                <RoughNotation type="underline" onHover={true}>
                  <span>{nextTeaching.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeachingDetailPage;
