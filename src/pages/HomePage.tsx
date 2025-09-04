import { Link } from 'react-router-dom';
import { FileText, PenTool, BookOpen, ArrowRight, Book } from 'lucide-react';
import RoughNotation from '@/components/RoughNotation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <RoughNotation type="box" animate={true}>
              <h1 className="hero-title text-foreground px-8 py-4">
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
                  morphTime={1.2}
                  cooldownTime={2}
                  className="font-bold"
                />
              </h1>
            </RoughNotation>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16">
              This is where I store my ramblings.
              <br />
              IELTS essays and articles
          </p>

          {/* Featured Content Sections */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link
              to="/articles"
              className="group block p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border border-border/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold mb-4">Articles</h2>
                </RoughNotation>
                <p className="text-muted-foreground leading-relaxed">
                        A collection of opinions on different topics I’ve read about or watched.
                </p>
              </div>
            </Link>

            <Link
              to="/ielts-essays"
              className="group block p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border border-border/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold mb-4">IELTS Essays</h2>
                </RoughNotation>
                <p className="text-muted-foreground leading-relaxed">
                  In this repository, you can find collections of IELTS essays I have written throughout my teaching career.
                </p>
              </div>
            </Link>

            <Link
              to="/books"
              className="group block p-8 rounded-xl hover:bg-muted/30 transition-all duration-300 bg-gradient-to-br from-background to-muted/20 border border-border/50"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Book className="w-8 h-8 text-primary" />
                </div>
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-serif font-bold mb-4">Books</h2>
                </RoughNotation>
                <p className="text-muted-foreground leading-relaxed">
                  My personal library with detailed notes, chapter summaries, and reflections on books I've read.
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