import { Link } from 'react-router-dom';
import { Clock, Award, FileText, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoughNotation from '@/components/RoughNotation';
import { ieltsEssays } from '@/data/ieltsEssays';

const IELTSEssaysPage = () => {
  const task1Essays = ieltsEssays.filter(essay => essay.task === 'task1');
  const task2Essays = ieltsEssays.filter(essay => essay.task === 'task2');

  const EssayCard = ({ essay }: { essay: typeof ieltsEssays[0] }) => (
    <Card className="content-card group">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge 
            variant="outline" 
            className="text-accent-pink border-accent-pink"
          >
            {essay.task.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {essay.writingTime}
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {essay.wordCount} words
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-1" />
              Band {essay.bandScore}
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl font-serif group-hover:text-accent-pink transition-colors">
          <Link to={`/ielts-essay/${essay.id}`}>
            <RoughNotation type="underline" color="#fbff00ff" animate={true}>
              <span>{essay.title}</span>
            </RoughNotation>
          </Link>
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed bg-muted/50 p-3 rounded">
          <strong>Question:</strong> {essay.question}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {essay.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link to={`/ielts-essay/${essay.id}`}>
          <Button 
            variant="ghost" 
            className="group-hover:text-accent-pink transition-colors p-0 h-auto font-medium"
          >
            Read Essay
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
          IELTS Essays
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sample essays for IELTS Academic Writing Task 1 and Task 2 with detailed analysis 
          and scoring explanations.
        </p>
      </header>

      {/* Task Tabs */}
      <Tabs defaultValue="task2" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="task1" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Task 1
          </TabsTrigger>
          <TabsTrigger value="task2" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Task 2
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="task1" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-2">Task 1 Essays</h2>
            <p className="text-muted-foreground">
              Academic Writing Task 1 requires you to describe visual information such as 
              charts, graphs, tables, or diagrams in at least 150 words.
            </p>
          </div>
          
          <div className="grid gap-6">
            {task1Essays.map((essay) => (
              <EssayCard key={essay.id} essay={essay} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="task2" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-2">Task 2 Essays</h2>
            <p className="text-muted-foreground">
              Academic Writing Task 2 requires you to write an essay in response to a point of view, 
              argument, or problem in at least 250 words.
            </p>
          </div>
          
          <div className="grid gap-6">
            {task2Essays.map((essay) => (
              <EssayCard key={essay.id} essay={essay} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add New Essay Instruction */}

    </div>
  );
};

export default IELTSEssaysPage;