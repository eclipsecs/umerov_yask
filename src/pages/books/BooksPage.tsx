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
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A curated collection of books with personal reflections and insights
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center items-center gap-8 mb-12 text-sm text-muted-foreground">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link 
            key={book.id} 
            to={`/book/${book.id}`}
            className="group block"
          >
            <div className="border border-border/20 rounded-xl overflow-hidden hover:border-border/40 hover:shadow-lg transition-all duration-300 bg-background">
              {/* Book Cover */}
              <div className="aspect-[3/4] relative overflow-hidden bg-muted/30">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-muted/50 to-muted" 
                     style={{ display: book.coverImage ? 'none' : 'flex' }}>
                  <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {book.author}
                  </p>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-medium border backdrop-blur-sm ${getStatusColor(book.readingStatus)}`}
                  >
                    {formatStatus(book.readingStatus)}
                  </Badge>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="font-serif font-bold text-lg mb-1 group-hover:text-accent-pink transition-colors line-clamp-2">
                    {book.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">
                    {book.author} • {book.publishedYear}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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