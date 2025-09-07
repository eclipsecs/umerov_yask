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
      <h1 className="text-5xl font-serif font-bold text-center mb-16">Articles</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {articles.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="block bg-transparent rounded-lg p-6 transition-all duration-300 shadow-none outline-none"
          >
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    {article.title}
                  </h2>
                </RoughNotation>
                <span className="text-pink-500 text-sm font-bold uppercase">
                  {article.readTime} min read
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-4 line-clamp-2 text-left leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;