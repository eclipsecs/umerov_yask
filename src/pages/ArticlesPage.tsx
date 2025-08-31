import { Link } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RoughNotation from '@/components/RoughNotation';
import { articles } from '@/data/articles';

const ArticlesPage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
          Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, insights, and reflections on the craft of writing and the creative process.
        </p>
      </header>

      {/* Articles Grid */}
      <div className="grid gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="content-card group">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(article.publishedAt)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} min read
                  </div>
                </div>
              </div>
              
              <CardTitle className="text-2xl font-serif group-hover:text-accent-pink transition-colors">
                <Link to={`/article/${article.id}`}>
                  <RoughNotation type="highlight" color="#e91e63" animate={true}>
                    <span>{article.title}</span>
                  </RoughNotation>
                </Link>
              </CardTitle>
              
              <CardDescription className="text-base leading-relaxed">
                {article.excerpt}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Link to={`/article/${article.id}`}>
                <Button 
                  variant="ghost" 
                  className="group-hover:text-accent-pink transition-colors p-0 h-auto font-medium"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Article Instruction */}
      <Card className="mt-12 border-dashed border-2 border-muted">
        <CardContent className="text-center py-12">
          <h3 className="text-xl font-serif font-semibold mb-4">Add New Articles</h3>
          <p className="text-muted-foreground">
            To add new articles, create markdown files in the{' '}
            <code className="bg-muted px-2 py-1 rounded text-sm">src/data/articles.ts</code>{' '}
            file. Each article should follow the existing structure with title, content, tags, and metadata.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticlesPage;