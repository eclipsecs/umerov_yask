import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, Tag, BookOpen, Clock, ArrowRight, CheckCircle, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { books } from '@/data/books';
import RoughNotation from '@/components/RoughNotation';

const BooksPage = () => {
  const [filter, setFilter] = useState<'all' | 'reading' | 'to-read' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
        <h1 className="text-5xl font-sans font-bold mb-4 text-foreground">
          Library
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A curated collection of books with personal reflections and insights.
        </p>
      </div>

      {/* Navigation Filters - redesigned as smaller, colorful cards with icons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-full mb-8">
        <div className="inline-flex rounded-lg border bg-muted/30 p-1 gap-2 max-w-full justify-center flex-wrap">
          {[
            { key: 'all', label: 'All', icon: BookOpen, color: 'purple' },
            { key: 'completed', label: 'Completed', icon: CheckCircle, color: 'green' },
            { key: 'reading', label: 'Currently Reading', icon: Clock, color: 'blue' },
            { key: 'to-read', label: 'To Read', icon: Bookmark, color: 'orange' }
          ].map(({ key, label, icon: Icon, color }, index) => {
            const isSelected = filter === key;
            const baseColors = {
              purple: {
                bgLight: 'bg-purple-100 dark:bg-purple-900',
                text: 'text-purple-700 dark:text-purple-300',
                border: 'border-purple-300 dark:border-purple-700',
                hoverBg: 'hover:bg-purple-200 dark:hover:bg-purple-800',
              },
              green: {
                bgLight: 'bg-emerald-100 dark:bg-emerald-900',
                text: 'text-emerald-700 dark:text-emerald-300',
                border: 'border-emerald-300 dark:border-emerald-700',
                hoverBg: 'hover:bg-emerald-200 dark:hover:bg-emerald-800',
              },
              blue: {
                bgLight: 'bg-blue-100 dark:bg-blue-900',
                text: 'text-blue-700 dark:text-blue-300',
                border: 'border-blue-300 dark:border-blue-700',
                hoverBg: 'hover:bg-blue-200 dark:hover:bg-blue-800',
              },
              orange: {
                bgLight: 'bg-orange-100 dark:bg-orange-900',
                text: 'text-orange-700 dark:text-orange-300',
                border: 'border-orange-300 dark:border-orange-700',
                hoverBg: 'hover:bg-orange-200 dark:hover:bg-orange-800',
              }
            };
            const colors = baseColors[color];
            return (
              <button
                key={key}
                onClick={() => setFilter(key as typeof filter)}
                className={`flex items-center justify-center rounded-full border px-3 py-1 gap-1 transition-colors duration-200 cursor-pointer text-xs sm:text-sm
                  ${isSelected
                    ? `${colors.bgLight} ${colors.text} ${colors.border}`
                    : `border-transparent text-muted-foreground ${colors.hoverBg}`
                  }
                `}
                aria-pressed={isSelected}
              >
                <Icon className={`w-4 h-4 ${isSelected ? colors.text : 'text-muted-foreground'}`} />
                <span className="font-semibold">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
        {books
          .slice()
          .filter(book => {
            switch (filter) {
              case 'all':
                return true;
              case 'reading':
                return book.readingStatus === 'reading';
              case 'to-read':
                return book.readingStatus === 'to-read';
              case 'completed':
                return book.readingStatus === 'completed';
              default:
                return true;
            }
          })
          .filter(book => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) => b.id.localeCompare(a.id)) // Newest books on top
          .map((book) => (
            <Link 
              key={book.id} 
              to={`/books/${book.id}`}
              className="group block"
            >
              <div className="border border-border/20 rounded-lg overflow-hidden hover:border-border/40 hover:shadow-md transition-all duration-300 bg-background scale-95 hover:scale-100">
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
                    <h3 className="font-sans font-bold text-sm mb-1 text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {book.author}
                    </p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs font-medium border backdrop-blur-sm ${getStatusColor(book.readingStatus)}`}
                    >
                      {formatStatus(book.readingStatus)}
                    </Badge>
                    {book.readingStatus === 'reading' && (
                      <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-300 bg-white/80 dark:bg-black/50 px-2 py-1 rounded shadow-sm">
                        {book.progress ? `${book.progress}%` : 'In Progress'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h2 className="font-sans font-bold text-base mb-1 group-hover:text-accent-pink transition-colors line-clamp-2">
                      {book.title}
                    </h2>
                    <p className="text-muted-foreground text-xs mb-2">
                      {book.author} • {book.publishedYear}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {book.description}
                    </p>
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