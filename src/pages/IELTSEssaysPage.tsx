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

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-serif font-bold text-center mb-16">IELTS Essays</h1>
      
      <Tabs defaultValue="task2" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="task1">Task 1</TabsTrigger>
          <TabsTrigger value="task2">Task 2</TabsTrigger>
        </TabsList>
        
        <TabsContent value="task1" className="space-y-6">
          {task1Essays.map((essay) => (
            <Link
              to={`/ielts-essay/${essay.id}`}
              key={essay.id}
              className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <RoughNotation type="circle" onHover={true}>
                  <span className="inline-block px-3 py-1 bg-accent-pink text-accent-pink-foreground text-xs font-medium rounded-full">
                    {essay.task.toUpperCase()}
                  </span>
                </RoughNotation>
                <span className="text-muted-foreground text-xs">Band {essay.bandScore}</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h2 className="text-xl font-serif font-bold mb-3 text-foreground">
                  {essay.title}
                </h2>
              </RoughNotation>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {essay.question}
              </p>
              <div className="flex flex-wrap gap-1">
                {essay.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </TabsContent>
        
        <TabsContent value="task2" className="space-y-6">
          {task2Essays.map((essay) => (
            <Link
              to={`/ielts-essay/${essay.id}`}
              key={essay.id}
              className="block bg-card rounded-lg p-6 hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <RoughNotation type="circle" onHover={true}>
                  <span className="inline-block px-3 py-1 bg-accent-pink text-accent-pink-foreground text-xs font-medium rounded-full">
                    {essay.task.toUpperCase()}
                  </span>
                </RoughNotation>
                <span className="text-muted-foreground text-xs">Band {essay.bandScore}</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h2 className="text-xl font-serif font-bold mb-3 text-foreground">
                  {essay.title}
                </h2>
              </RoughNotation>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {essay.question}
              </p>
              <div className="flex flex-wrap gap-1">
                {essay.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IELTSEssaysPage;