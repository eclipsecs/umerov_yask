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
            <Link
              to="/articles"
              className="group block p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border border-border/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-pink/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-accent-pink" />
                </div>
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold mb-4">Articles</h2>
                </RoughNotation>
                <p className="text-muted-foreground leading-relaxed">
                  Explore insightful articles on various topics including language learning, 
                  writing techniques, and academic success strategies.
                </p>
              </div>
            </Link>

            <Link
              to="/ielts-essays"
              className="group block p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border border-border/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-pink/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-accent-pink" />
                </div>
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold mb-4">IELTS Essays</h2>
                </RoughNotation>
                <p className="text-muted-foreground leading-relaxed">
                  High-scoring IELTS essay samples with detailed analysis, 
                  band scores, and expert feedback to help you excel.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;