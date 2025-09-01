import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RoughNotation from '@/components/RoughNotation';
import { articles } from '@/data/articles';

const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-serif font-bold text-center mb-16">Articles</h1>
      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-muted-foreground text-sm">{article.publishedAt}</span>
              <span className="text-muted-foreground text-xs">{article.readTime} min</span>
            </div>
            <RoughNotation type="underline" onHover={true}>
              <h2 className="text-xl font-serif font-bold mb-3 text-foreground">
                {article.title}
              </h2>
            </RoughNotation>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-1">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;