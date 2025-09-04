import { Link } from 'react-router-dom';
import { Book, Calendar, Star, Tag, BookOpen, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { books } from '@/data/books';

const BooksPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'reading':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'to-read':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
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

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Book Collection
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My personal library with thoughts, notes, and reflections on each book
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{books.filter(b => b.readingStatus === 'completed').length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{books.filter(b => b.readingStatus === 'reading').length}</div>
            <div className="text-sm text-muted-foreground">Currently Reading</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Book className="w-8 h-8 mx-auto mb-2 text-gray-500" />
            <div className="text-2xl font-bold">{books.filter(b => b.readingStatus === 'to-read').length}</div>
            <div className="text-sm text-muted-foreground">To Read</div>
          </CardContent>
        </Card>
      </div>

      {/* Books Grid */}
      <div className="grid gap-8">
        {books.map((book) => (
          <Link 
            key={book.id} 
            to={`/book/${book.id}`}
            className="block group"
          >
            <Card className="hover:shadow-lg transition-all duration-300 border border-border/50 group-hover:border-primary/30">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      by {book.author}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getStatusColor(book.readingStatus)}>
                      {formatStatus(book.readingStatus)}
                    </Badge>
                    {book.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{book.rating}/5</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {book.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    {book.genre}
                  </Badge>
                  {book.publishedYear && (
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {book.publishedYear}
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {book.chapters.length} chapters
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      <Tag className="w-2 h-2 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {book.personalComments && (
                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      "{book.personalComments.substring(0, 150)}..."
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;