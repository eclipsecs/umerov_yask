import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RoughNotation from '@/components/RoughNotation';

import { articles } from '@/data/readings';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  const currentIndex = articles.findIndex(a => a.id === id);
  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;
  const prevArticle =
    currentIndex > 0 ? articles[currentIndex - 1] : null;

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (years > 0 && months > 0) return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''} ago`;
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    const days = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/readings">
          <Button>Back to Readings</Button>
        </Link>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link
        to="/readings"
        className="inline-flex items-center mb-8 font-bold text-pink-500 uppercase text-sm hover:text-pink-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2 font-bold" />
        Back to Readings
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-0">
            {article.title}
          </h1>
          {article.subheading && (
            <h2 className="text-xl md:text-2xl font-serif text-muted-foreground mt-0">
              {article.subheading}
            </h2>
          )}

          {article.dateRead && (
            <p className="text-sm text-pink-500 uppercase font-bold">
              {formatRelativeTime(article.dateRead)}
            </p>
          )}

          {article.image && (
            <img src={article.image} alt={article.title} className="w-full max-h-96 object-cover rounded-md mb-6" />
          )}
        </div>
      </header>

      {/* Vocabulary Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Vocabulary</h2>
        {article.vocabularies && article.vocabularies.length > 0 ? (
          <table className="w-full border border-border rounded-md overflow-hidden">
            <thead>
              <tr className="bg-muted">
                <th className="text-left px-4 py-2">Word</th>
                <th className="text-left px-4 py-2">Definition</th>
                <th className="text-left px-4 py-2">Explanation</th>
              </tr>
            </thead>
            <tbody>
              {article.vocabularies.map((vocab, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="px-4 py-2 font-medium">{vocab.word}</td>
                  <td className="px-4 py-2 text-muted-foreground">{vocab.definition}</td>
                  <td className="px-4 py-2 text-muted-foreground">{vocab.explanation || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-muted-foreground">No vocabulary available.</p>
        )}
      </section>

      {/* Interesting Sentences Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Interesting Sentences</h2>
        {article.interestingSentences && article.interestingSentences.length > 0 ? (
          <RoughNotation type="bracket" brackets="left" color="#ec4899">
            <div className="space-y-4">
              {article.interestingSentences.map((sentence, index) => (
                <div key={index} className="p-3 rounded-md bg-pink-50 dark:bg-pink-900/30 text-foreground shadow-sm">
                  <span className="font-medium">{sentence}</span>
                </div>
              ))}
            </div>
          </RoughNotation>
        ) : (
          <p className="text-muted-foreground">No interesting sentences available.</p>
        )}
      </section>

      {/* Previous/Next Section */}
      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3">
                Previous Reading
              </span>
              <Link
                to={`/readings/${prevArticle.id}`}
                className="text-pink-500 text-base md:text-lg font-semibold"
              >
                <RoughNotation type="underline" onHover={true} color="#ec4899">
                  <span>{prevArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextArticle && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3">
                Next Up
              </span>
              <Link
                to={`/readings/${nextArticle.id}`}
                className="text-pink-500 text-base md:text-lg font-semibold"
              >
                <RoughNotation type="underline" onHover={true} color="#ec4899">
                  <span>{nextArticle.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ArticleDetailPage;