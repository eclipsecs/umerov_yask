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
                  morphTime={0.8}
                  cooldownTime={1.5}
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
          
          {/* Right Side - Placeholder for future profile image */}
          <div className="lg:w-80">
            <div className="bg-gradient-to-br from-muted/30 to-muted/60 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <PenTool className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Writing is thinking on paper"
              </p>
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
                  <span className="text-sm text-muted-foreground">3 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  CS degree vs AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My personal opinion about majoring in computer science while AI is taking over literally everything...
                </p>
              </Link>
              
              <Link
                to="/articles"
                className="group block p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">over 1 year ago</span>
                  <span className="text-sm text-muted-foreground">3 min read</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-pink transition-colors">
                  DITL: Marketing or comparison tool?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Day in the life videos are popular but not always. Read my opinion on this trending format...
                </p>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/articles"
              className="group p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold">Articles</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Personal thoughts and opinions
              </p>
            </Link>

            <Link
              to="/ielts-essays"
              className="group p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PenTool className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold">IELTS Essays</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Teaching resources and examples
              </p>
            </Link>

            <Link
              to="/books"
              className="group p-6 rounded-xl border border-border/40 hover:border-border/80 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Book className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-bold">Library</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Books with personal reflections
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;