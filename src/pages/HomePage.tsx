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
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="content-card group">
          <CardHeader>
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-accent-pink mr-3" />
              <CardTitle className="text-2xl font-serif">Articles</CardTitle>
            </div>
            <CardDescription className="text-base">
              In-depth explorations of writing techniques, creativity, and the writer's journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Discover insights about developing your voice, building consistent habits, 
              and overcoming the challenges that every writer faces.
            </p>
            <Link to="/articles">
              <Button className="w-full group-hover:bg-accent-pink group-hover:text-accent-pink-foreground transition-colors">
                Read Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="content-card group">
          <CardHeader>
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-accent-pink mr-3" />
              <CardTitle className="text-2xl font-serif">IELTS Essays</CardTitle>
            </div>
            <CardDescription className="text-base">
              Sample essays for IELTS Task 1 and Task 2 with detailed analysis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Study high-scoring essay examples, understand structure and style, 
              and learn strategies for academic writing success.
            </p>
            <Link to="/ielts-essays">
              <Button className="w-full group-hover:bg-accent-pink group-hover:text-accent-pink-foreground transition-colors">
                View Essays
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
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