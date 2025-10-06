import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Clock, Award, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { ieltsEssays } from '@/data/ieltsEssays';
import { RoughNotation } from 'react-rough-notation';

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
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center" style={{ fontFamily: 'Aptos, sans-serif' }}>
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
    <div className="container mx-auto px-4 py-12 max-w-4xl" style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 500 }}>

      {/* Essay Header */}
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <Badge 
            variant="outline" 
            className="text-muted-foreground border-muted-foreground w-fit"
          >
            <Target className="w-4 h-4 mr-2" />
            IELTS {essay.task.toUpperCase()}
          </Badge>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-bold">
            <div className="flex items-center text-muted-foreground font-bold">
              <Clock className="w-4 h-4 mr-1" />
              {essay.writingTime}
            </div>
            <div className="flex items-center text-muted-foreground font-bold">
              <FileText className="w-4 h-4 mr-1" />
              {essay.wordCount} words
            </div>
            <div className="flex items-center text-muted-foreground font-bold">
              <Award className="w-4 h-4 mr-1" />
              Band {essay.bandScore}
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground leading-tight" style={{ fontFamily: 'Aptos, sans-serif' }}>
          {essay.title}
        </h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg" style={{ fontFamily: 'Aptos, sans-serif' }}>Task Question</CardTitle>
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
            <CardTitle className="text-lg" style={{ fontFamily: 'Aptos, sans-serif' }}>Task 1 Visual</CardTitle>
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
      <article className="prose text-[18px] max-w-none" style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 500 }}>
        <MarkdownRenderer content={essay.content} />
      </article>

      {/* Essay Analysis */}
      <Card className="mt-12 border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Aptos, sans-serif' }}>
            <Award className="w-5 h-5 text-muted-foreground font-bold" />
            Essay Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
  {/* Summary Stats */}
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    <div className="text-center p-3 bg-muted/20 rounded-md">
      <div className="text-2xl font-extrabold text-foreground">{essay.bandScore}</div>
      <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mt-1">
        Band Score
      </div>
    </div>
    <div className="text-center p-3 bg-muted/20 rounded-md">
      <div className="text-2xl font-extrabold text-foreground">{essay.wordCount}</div>
      <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mt-1">
        Word Count
      </div>
    </div>
    <div className="text-center p-3 bg-muted/20 rounded-md">
      <div className="text-2xl font-extrabold text-foreground">{essay.writingTime}</div>
      <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mt-1">
        Writing Time
      </div>
    </div>
  </div>

  {/* IELTS Criteria */}
  <div className="border-t border-border/30 my-6"></div>

  <div>
    <h3 className="text-base font-bold mb-4 text-foreground flex items-center gap-2" style={{ fontFamily: 'Aptos, sans-serif' }}>
      <Award className="w-4 h-4 text-muted-foreground" />
      IELTS Writing Assessment Criteria
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
      {essay.task === 'task1' ? (
        <>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">TA</div>
            <div className="text-[11px] text-muted-foreground mb-1">Task Achievement</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.taskAchievement ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">CC</div>
            <div className="text-[11px] text-muted-foreground mb-1">Coherence & Cohesion</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.coherenceCohesion ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">LR</div>
            <div className="text-[11px] text-muted-foreground mb-1">Lexical Resource</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.lexicalResource ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">GRA</div>
            <div className="text-[11px] text-muted-foreground mb-1">Grammar & Accuracy</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.grammaticalRangeAccuracy ?? '-'}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">TR</div>
            <div className="text-[11px] text-muted-foreground mb-1">Task Response</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.taskResponse ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">CC</div>
            <div className="text-[11px] text-muted-foreground mb-1">Coherence & Cohesion</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.coherenceCohesion ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">LR</div>
            <div className="text-[11px] text-muted-foreground mb-1">Lexical Resource</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.lexicalResource ?? '-'}
            </div>
          </div>
          <div className="p-3 bg-muted/20 rounded-md">
            <div className="text-sm font-bold text-foreground">GRA</div>
            <div className="text-[11px] text-muted-foreground mb-1">Grammar & Accuracy</div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {essay.grammaticalRangeAccuracy ?? '-'}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
</CardContent>
      </Card>

      <section className="mt-16">
        <div className="flex justify-between gap-12 items-start">
          {prevEssay && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 700 }}>Previous Essay</span>
              <Link
                to={`/ielts-essay/${prevEssay.task}/${prevEssay.id}`}
                onMouseEnter={() => setHoveredPrev(true)}
                onMouseLeave={() => setHoveredPrev(false)}
                className="text-muted-foreground text-base md:text-lg font-semibold"
                style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 700 }}
              >
                <RoughNotation type="underline" show={hoveredPrev} color="currentColor" strokeWidth={4} animationDuration={500}>
                  <span>{prevEssay.title}</span>
                </RoughNotation>
              </Link>
            </div>
          )}
          {nextEssay && (
            <div className="flex flex-col items-start text-left">
              <span className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 700 }}>Next Essay</span>
              <Link
                to={`/ielts-essay/${nextEssay.task}/${nextEssay.id}`}
                onMouseEnter={() => setHoveredNext(true)}
                onMouseLeave={() => setHoveredNext(false)}
                className="text-muted-foreground text-base md:text-lg font-semibold"
                style={{ fontFamily: 'Aptos, sans-serif', fontWeight: 700 }}
              >
                <RoughNotation type="underline" show={hoveredNext} color="currentColor" strokeWidth={4} animationDuration={500}>
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