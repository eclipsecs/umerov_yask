import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Star, Tag, BookOpen, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { books } from '@/data/books';

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Book Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The book you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/books">
          <Button>Back to Books</Button>
        </Link>
      </div>
    );
  };

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
      {/* Back Button */}
      <Link to="/books" className="inline-flex items-center mb-8 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Books
      </Link>

      {/* Book Header */}
      <header className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <Badge className={getStatusColor(book.readingStatus)}>
                {formatStatus(book.readingStatus)}
              </Badge>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {book.publishedYear && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {book.publishedYear}
                  </div>
                )}
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {book.chapters.length} chapters
                </div>
                {book.rating && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {book.rating}/5
                  </div>
                )}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground leading-tight">
              {book.title}
            </h1>
            
            <div className="flex items-center gap-2 mb-6 text-xl text-muted-foreground">
              <User className="w-5 h-5" />
              <span>by {book.author}</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {book.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-sm">
                {book.genre}
              </Badge>
              {book.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Reading Dates */}
            {(book.startedDate || book.completedDate) && (
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                {book.startedDate && (
                  <div>
                    <strong>Started:</strong> {formatDate(book.startedDate)}
                  </div>
                )}
                {book.completedDate && (
                  <div>
                    <strong>Completed:</strong> {formatDate(book.completedDate)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Book Content */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="chapters">Chapters</TabsTrigger>
          <TabsTrigger value="comments">My Comments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Book Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {book.isbn && (
                <div>
                  <strong>ISBN:</strong> {book.isbn}
                </div>
              )}
              <div>
                <strong>Genre:</strong> {book.genre}
              </div>
              <div>
                <strong>Status:</strong> {formatStatus(book.readingStatus)}
              </div>
              {book.rating && (
                <div className="flex items-center gap-2">
                  <strong>My Rating:</strong>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < book.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chapters" className="mt-8">
          <div className="space-y-6">
            {book.chapters.map((chapter) => (
              <Card key={chapter.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Chapter {chapter.chapterNumber}: {chapter.title}
                  </CardTitle>
                  <CardDescription>
                    {chapter.content}
                  </CardDescription>
                </CardHeader>
                {chapter.notes && (
                  <CardContent>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">My Notes:</h4>
                      <MarkdownRenderer content={chapter.notes} />
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="comments" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Personal Comments & Reflections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <MarkdownRenderer content={book.personalComments} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="text-center">
          <Link to="/books">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Books
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BookDetailPage;