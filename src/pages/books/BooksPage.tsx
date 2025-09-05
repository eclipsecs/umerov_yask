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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-serif font-bold mb-4 text-foreground">
          Library
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A curated collection of books with personal reflections and insights
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link 
            key={book.id} 
            to={`/book/${book.id}`}
            className="group block"
          >
            <div className="border border-border/20 rounded-lg overflow-hidden hover:border-border/40 hover:shadow-md transition-all duration-300 bg-background">
              {/* Book Cover */}
              <div className="aspect-[3/4] relative overflow-hidden bg-muted/20">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-muted/30 to-muted/50" 
                     style={{ display: book.coverImage ? 'none' : 'flex' }}>
                  <BookOpen className="w-8 h-8 text-muted-foreground mb-3" />
                  <h3 className="font-serif font-bold text-sm mb-1 text-foreground">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {book.author}
                  </p>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-medium border backdrop-blur-sm ${getStatusColor(book.readingStatus)}`}
                  >
                    {formatStatus(book.readingStatus)}
                  </Badge>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-4 space-y-3">
                <div>
                  <h2 className="font-serif font-bold text-base mb-1 group-hover:text-accent-pink transition-colors line-clamp-2">
                    {book.title}
                  </h2>
                  <p className="text-muted-foreground text-xs mb-2">
                    {book.author} • {book.publishedYear}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {book.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs bg-muted/30">
                    {book.genre}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {book.chapters.length} chapters
                  </Badge>
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