import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowRight, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RoughNotation from '@/components/RoughNotation';
import { articles } from '@/data/articles';

const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-serif font-bold text-center mb-16">Articles</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300 border border-border/30"
          >
            <div className="space-y-4">
              {/* Image Display */}
              {article.image && (
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-accent-pink/10 text-accent-pink">
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </Badge>
                </div>
                <Clock className="w-4 h-4 text-primary/70" />
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h2 className="text-xl font-serif font-bold mb-3 text-foreground">
                  {article.title}
                </h2>
              </RoughNotation>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 text-center leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;