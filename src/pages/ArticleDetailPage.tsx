import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { articles } from '@/data/articles';
import { calculateReadTime, formatReadTime } from '@/utils/readTime';

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate read time if not provided
  const readTime = article.readTime || calculateReadTime(article.content);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link to="/articles" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Articles
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-bold text-pink-500">
              {formatDate(article.publishedAt)}
            </span>
            <span className="font-bold text-pink-500">
              {formatReadTime(readTime)}
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
          {article.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
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
      <article className="prose prose-lg max-w-none">
        <MarkdownRenderer content={article.content} />
      </article>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="text-center">
          <Link to="/articles">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetailPage;