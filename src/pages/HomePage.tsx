import { Link } from 'react-router-dom';
import { FileText, PenTool, BookOpen, ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                <GooeyText
                  texts={[
                    "Hi there", // English
                    "Hola", // Spanish
                    "Bonjour", // French
                    "Hallo", // German
                    "Ciao", // Italian
                    "こんにちは", // Japanese
                    "안녕하세요", // Korean
                    "你好", // Chinese
                    "Привет", // Russian
                    "Olá", // Portuguese
                    "Hej", // Swedish
                    "Hoi", // Dutch
                    "Γεια σας", // Greek
                    "مرحبا", // Arabic
                    "שלום", // Hebrew
                    "Namaste" // Hindi
                  ]}
                  morphTime={0.3}
                  cooldownTime={1.0}
                  className="font-bold"
                />
              </h1>
              
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                <p>
                  I love sharing thoughts and ideas through writing. This is where I store my ramblings about technology, education, and life observations.
                </p>
                <p>
                  Currently exploring the intersection of AI and education, while documenting my journey through IELTS teaching and personal reading adventures.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>4 articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4" />
                  <span>Multiple essays</span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="w-4 h-4" />
                  <span>Personal library</span>
                </div>
              </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 pb-20 max-w-5xl">
        <div className="space-y-12">
          {/* Latest Articles Preview */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold">Latest Writing 📝</h2>
              <Link 
                to="/articles" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              <Link
                to="/articles"
                className="group block p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">over 1 year ago</span>
                  <span className="text-sm font-bold text-accent-pink">3 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  CS degree vs AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My personal opinion about majoring in computer science while AI is taking over literally everything...
                </p>
              </Link>
              
              <Link
                to="/article/2"
                className="group block p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground font-bold color-pink">over 1 year ago</span>
                  <span className="text-sm font-bold text-accent-pink">3 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  DITL: Marketing or comparison tool?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Day in the life videos are popular but not always. Read my opinion on this trending format...
                </p>
              </Link>
              
              <Link
                to="/article/3"
                className="group block p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">10 months ago</span>
                  <span className="text-sm font-bold text-accent-pink">4 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  If blue-collar job sucks. Why do them?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Blue-collar - a labor that does not require working in an office. If you didn't know it...
                </p>
              </Link>
              
              <Link
                to="/article/4"
                className="group block p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">10 months ago</span>
                  <span className="text-sm font-bold text-accent-pink">6 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  Writing in the Digital Age
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  How technology has transformed the way we write and communicate in the modern world...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;