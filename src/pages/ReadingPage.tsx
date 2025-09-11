import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/data/readings';

const ReadingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold mb-4 text-foreground">
          Readings 
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Collection of journals I have read. Each article consists of words and interesting sentences with usage.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-500" />
          <span className="font-bold">{articles.length} articles</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            to={`/readings/${article.id}`}
            className="group block border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-background"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-muted/20 scale-95">
              {article.image ? (
                <img
                  src={typeof article.image === 'string' ? article.image : article.image}
                  alt={`${article.title} cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <FileText className="w-12 h-12" />
                </div>
              )}
            </div>
            <div className="p-4 space-y-2">
              <h2 className="font-serif font-bold text-lg group-hover:text-accent-pink transition-colors line-clamp-2">
                {article.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReadingPage;