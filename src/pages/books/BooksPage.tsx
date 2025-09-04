import { Link } from 'react-router-dom';
import { Book, Calendar, Tag, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { books } from '@/data/books';

const BooksPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800';
      case 'reading':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800';
      case 'to-read':
        return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800';
    }
  };

  const formatStatus = (status: string) => {
    switch (status) {
      case 'to-read':
        return 'To Read';
      case 'reading':
        return 'Currently Reading';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  const completedBooks = books.filter(b => b.readingStatus === 'completed').length;
  const readingBooks = books.filter(b => b.readingStatus === 'reading').length;
  const toReadBooks = books.filter(b => b.readingStatus === 'to-read').length;

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground">
          Library
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A curated collection of books with personal reflections and insights
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex justify-center items-center gap-8 mb-16 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span>{completedBooks} completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>{readingBooks} reading</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <span>{toReadBooks} to read</span>
        </div>
      </div>

      {/* Books Grid */}
      <div className="space-y-8">
        {books.map((book) => (
          <Link 
            key={book.id} 
            to={`/book/${book.id}`}
            className="group block"
          >
            <div className="border border-border/20 rounded-2xl p-8 hover:border-border/40 hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-medium border ${getStatusColor(book.readingStatus)}`}
                        >
                          {formatStatus(book.readingStatus)}
                        </Badge>
                        {book.publishedYear && (
                          <span className="text-sm text-muted-foreground">
                            {book.publishedYear}
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
                        {book.title}
                      </h2>
                      <p className="text-lg text-muted-foreground font-medium">
                        {book.author}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {book.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs bg-muted/50">
                      {book.genre}
                    </Badge>
                    {book.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-muted/30">
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">
                      {book.chapters.length} chapters
                    </Badge>
                  </div>

                  {/* Personal Comment Preview */}
                  {book.personalComments && (
                    <div className="border-l-2 border-primary/20 pl-6 py-2">
                      <p className="text-muted-foreground italic text-sm leading-relaxed">
                        "{book.personalComments.substring(0, 120)}..."
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;