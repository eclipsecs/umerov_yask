import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, BookOpen, Clock, User, CheckCircle } from 'lucide-react';
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
      <Link to="/books" className="inline-flex items-center mb-8 text-gray-800 hover:text-gray-600 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Books
      </Link>

      {/* Book Header */}
      <header className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <Badge 
                variant="outline" 
                className={`w-fit text-sm font-medium border ${getStatusColor(book.readingStatus)}`}
              >
                {book.readingStatus === 'completed' && <CheckCircle className="w-4 h-4 mr-2" />}
                {formatStatus(book.readingStatus)}
              </Badge>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {book.publishedYear && (
                  <div className="text-foreground font-bold text-sm">
                    {book.publishedYear}
                  </div>
                )}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-foreground leading-tight">
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
            </div>

            {/* Reading Dates */}
            {(book.startedDate || book.completedDate) && (
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                {book.startedDate && (
                  <div className="text-muted-foreground font-bold text-xs">
                    {formatDate(book.startedDate)}
                  </div>
                )}
                {book.completedDate && (
                  <div className="text-muted-foreground font-bold text-xs">
                    {formatDate(book.completedDate)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Book Content */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="comments">My Comments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Cover Image */}
                <div className="md:w-64 flex-shrink-0">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted/30">
                    {book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover"
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
                      <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
                      <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1">
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
                      {book.downloadUrl && (
                        <div className="pt-4 border-t">
                          <strong>Download:</strong>
                          <div className="mt-2">
                            <a 
                              href={book.downloadUrl === "# Add your download link here" ? "#" : book.downloadUrl}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                book.downloadUrl === "# Add your download link here" 
                                  ? "bg-muted text-muted-foreground cursor-not-allowed" 
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                              }`}
                              target={book.downloadUrl === "# Add your download link here" ? undefined : "_blank"}
                              rel="noopener noreferrer"
                            >
                              <BookOpen className="w-4 h-4" />
                              {book.downloadUrl === "# Add your download link here" ? "Download link not set" : "Download Book"}
                            </a>
                            {book.downloadUrl === "# Add your download link here" && (
                              <p className="text-xs text-muted-foreground mt-1">
                                To add a download link, edit the book data and replace "# Add your download link here" with the actual URL
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="comments" className="mt-8">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>My Thoughts</CardTitle>
              <CardDescription>
                Here’s where I share my take on the book — the parts I enjoyed, the lessons I picked up, and anything that really stood out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <MarkdownRenderer content={book.personalComments} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="mt-16 pt-8">
        <div className="text-center">
          <Link to="/books">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105">
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