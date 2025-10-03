import { Link, useSearchParams } from 'react-router-dom';
import { Clock, Award, FileText, Target, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoughNotation from '@/components/RoughNotation';
import { task1Essays } from '@/data/ieltsTask1Essays';
import { task2Essays } from '@/data/ieltsTask2Essays';

const IELTSEssaysPage = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'task1';

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl font-sans">
      <h1 className="text-5xl font-sans font-bold text-center mb-16">IELTS Essays</h1>
      
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
          <TabsTrigger value="task1" asChild>
            <Link
              to="/ielts-essays?tab=task1"
              className="text-muted-foreground font-extrabold text-center transition-colors duration-200 hover:text-foreground"
            >
              Task 1
            </Link>
          </TabsTrigger>
          <TabsTrigger value="task2" asChild>
            <Link
              to="/ielts-essays?tab=task2"
              className="text-muted-foreground font-extrabold text-center transition-colors duration-200 hover:text-foreground"
            >
              Task 2
            </Link>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="task1" className="space-y-6 max-w-3xl mx-auto">
          {task1Essays.map((essay) => (
            <Link
              to={`/ielts-essay/${essay.task}/${essay.id}`}
              key={essay.id}
              className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4 text-muted-foreground text-sm font-bold uppercase bg-transparent">
                <div className="flex items-center gap-3 text-muted-foreground text-sm font-bold uppercase bg-transparent">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Task 1</span>
                </div>
                <span className="text-muted-foreground font-bold">{`Band ${essay.bandScore}`}</span>
              </div>
              <RoughNotation type="underline" onHover={true} color="currentColor" animationDuration={250}>
                <h2 className="text-2xl font-sans font-bold mb-3 text-muted-foreground">
                  {essay.title}
                </h2>
              </RoughNotation>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                {essay.question}
              </p>
              
            </Link>
          ))}
        </TabsContent>
        
        <TabsContent value="task2" className="space-y-6 max-w-3xl mx-auto">
          {task2Essays.map((essay) => (
            <Link
              to={`/ielts-essay/${essay.task}/${essay.id}`}
              key={essay.id}
              className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4 text-muted-foreground text-sm font-bold uppercase bg-transparent">
                <div className="flex items-center gap-3 text-muted-foreground text-sm font-bold uppercase bg-transparent">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Task 2</span>
                </div>
                <span className="text-muted-foreground font-bold">{`Band ${essay.bandScore}`}</span>
              </div>
              <RoughNotation type="underline" onHover={true} color="currentColor" animationDuration={250}>
                <h2 className="text-2xl font-sans font-bold mb-3 text-muted-foreground">
                  {essay.title}
                </h2>
              </RoughNotation>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                {essay.question}
              </p>
              
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IELTSEssaysPage;