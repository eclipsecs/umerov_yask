import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Clock, Award, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { ieltsEssays } from '@/data/ieltsEssays';
import RoughNotation from '@/components/RoughNotation';

const IELTSEssayDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const essay = ieltsEssays.find(e => e.id === id);

  const currentIndex = ieltsEssays.findIndex(e => e.id === id);
  const prevEssay = currentIndex > 0 ? ieltsEssays[currentIndex - 1] : null;
  const nextEssay = currentIndex < ieltsEssays.length - 1 ? ieltsEssays[currentIndex + 1] : null;

  const [hoveredPrev, setHoveredPrev] = useState(false);
  const [hoveredNext, setHoveredNext] = useState(false);

  if (!essay) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Essay Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The essay you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/ielts-essays?tab=task2">
          <Button>Back to IELTS Essays</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">

      {/* Essay Header */}
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Badge 
            variant="outline" 
            className="text-accent-pink border-accent-pink w-fit"
          >
            <Target className="w-4 h-4 mr-2" />
            IELTS {essay.task.toUpperCase()}
          </Badge>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground text-pink-500 dark:text-pink-500 font-bold">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {essay.writingTime}
            </div>
            <div className="flex items-center text-pink-500 dark:text-pink-500 font-bold">
              <FileText className="w-4 h-4 mr-1" />
              {essay.wordCount} words
            </div>
            <div className="flex items-center text-pink-500 dark:text-pink-500 font-bold">
              <Award className="w-4 h-4 mr-1" />
              Band {essay.bandScore}
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight">
          {essay.title}
        </h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Task Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed">
              {essay.question}
            </p>
          </CardContent>
        </Card>
        
        <div className="flex flex-wrap gap-2">
          {essay.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Task 1 Image Display */}
      {essay.task === 'task1' && essay.image && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Task 1 Visual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img 
                src={essay.image} 
                alt={`Task 1 visual for ${essay.title}`}
                className="max-w-full h-auto rounded-lg border border-border/50"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Essay Content */}
      <article className="prose prose-lg max-w-none">
        <MarkdownRenderer content={essay.content} />
      </article>

      {/* Essay Analysis */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-pink-500 dark:text-pink-500 font-bold" />
            Essay Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl text-pink-500 dark:text-pink-500 font-bold mb-2">
                {essay.bandScore}
              </div>
              <div className="text-sm text-muted-foreground">
                Estimated Band Score
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-pink-500 dark:text-pink-500 font-bold mb-2">
                {essay.wordCount}
              </div>
              <div className="text-sm text-muted-foreground">
                Word Count
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-pink-500 dark:text-pink-500 font-bold mb-2">
                {essay.writingTime}
              </div>
              <div className="text-sm text-muted-foreground">
                Writing Time
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevEssay && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>Previous Essay</span>
              <Link
                to={`/ielts-essays/${prevEssay.id}`}
                onMouseEnter={() => setHoveredPrev(true)}
                onMouseLeave={() => setHoveredPrev(false)}
                className="text-pink-500 text-base md:text-lg font-semibold"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}
              >
                <RoughNotation type="underline" show={hoveredPrev} color="#ec4899" strokeWidth={4} animationDuration={500}>
                  <span>{prevEssay.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextEssay && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}>Next Essay</span>
              <Link
                to={`/ielts-essays/${nextEssay.id}`}
                onMouseEnter={() => setHoveredNext(true)}
                onMouseLeave={() => setHoveredNext(false)}
                className="text-pink-500 text-base md:text-lg font-semibold"
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', fontWeight: 700 }}
              >
                <RoughNotation type="underline" show={hoveredNext} color="#ec4899" strokeWidth={4} animationDuration={500}>
                  <span>{nextEssay.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default IELTSEssayDetailPage;