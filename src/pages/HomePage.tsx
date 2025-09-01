import { Link } from 'react-router-dom';
import { FileText, PenTool, BookOpen, ArrowRight } from 'lucide-react';
import RoughNotation from '@/components/RoughNotation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <RoughNotation type="box" animate={true}>
              <h1 className="hero-title text-foreground px-8 py-4">
                coldedly writing
              </h1>
            </RoughNotation>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16">
            A collection of articles and IELTS essays exploring the craft of writing, 
            language learning, and the art of clear communication.
          </p>

          {/* Featured Content Sections */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="group p-6 rounded-xl hover:bg-muted/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-accent-pink mr-3" />
                <h2 className="text-2xl font-serif font-bold">Articles</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                In-depth explorations of writing techniques, creativity, and the writer's journey.
              </p>
              <Link to="/articles">
                <Button variant="outline" className="w-full group-hover:border-accent-pink group-hover:text-accent-pink transition-all duration-300">
                  Read Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="group p-6 rounded-xl hover:bg-muted/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-accent-pink mr-3" />
                <h2 className="text-2xl font-serif font-bold">IELTS Essays</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Sample essays for IELTS Task 1 and Task 2 with detailed analysis.
              </p>
              <Link to="/ielts-essays">
                <Button variant="outline" className="w-full group-hover:border-accent-pink group-hover:text-accent-pink transition-all duration-300">
                  View Essays
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;