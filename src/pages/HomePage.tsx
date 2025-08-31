import { Link } from 'react-router-dom';
import { FileText, PenTool, BookOpen, ArrowRight } from 'lucide-react';
import RoughNotation from '@/components/RoughNotation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="text-center mb-16 py-20">
        <div className="mb-8">
          <RoughNotation type="highlight" color="#e91e63" animate={true}>
            <h1 className="hero-title text-foreground">
              coldedly writing
            </h1>
          </RoughNotation>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A collection of articles and IELTS essays exploring the craft of writing, 
          language learning, and the art of clear communication.
        </p>
      </section>

      {/* Featured Content Sections */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="group p-8 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center mb-6">
            <FileText className="w-10 h-10 text-accent-pink mr-4" />
            <h2 className="text-3xl font-serif font-bold">Articles</h2>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            In-depth explorations of writing techniques, creativity, and the writer's journey.
          </p>
          <p className="text-muted-foreground/80 mb-8 text-sm">
            Discover insights about developing your voice, building consistent habits, 
            and overcoming the challenges that every writer faces.
          </p>
          <Link to="/articles">
            <Button className="group-hover:bg-accent-pink group-hover:text-accent-pink-foreground transition-all duration-300 px-6 py-2">
              Read Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="group p-8 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-105">
          <div className="flex items-center mb-6">
            <BookOpen className="w-10 h-10 text-accent-pink mr-4" />
            <h2 className="text-3xl font-serif font-bold">IELTS Essays</h2>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Sample essays for IELTS Task 1 and Task 2 with detailed analysis.
          </p>
          <p className="text-muted-foreground/80 mb-8 text-sm">
            Study high-scoring essay examples, understand structure and style, 
            and learn strategies for academic writing success.
          </p>
          <Link to="/ielts-essays">
            <Button className="group-hover:bg-accent-pink group-hover:text-accent-pink-foreground transition-all duration-300 px-6 py-2">
              View Essays
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-16 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <PenTool className="w-12 h-12 text-accent-pink" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">
            About This Space
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a personal collection of thoughts on writing, language, and learning. 
            Every piece is written in markdown format, making it easy to edit, update, 
            and share. Whether you're here for the articles or the IELTS resources, 
            I hope you find something useful for your own writing journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;