import { Link } from 'react-router-dom';
import { FileText, PenTool, BookOpen, ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import RoughNotation from '@/components/RoughNotation';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-20 max-w-4xl"> {/* Adjust px-0 to control left positioning */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10"> {/* Adjust gap-10 to control spacing */}
          {/* Left Content */}
          {/* Center the block horizontally */}
          <div className="mx-auto flex justify-center"> {/* Centered horizontally */}
            <div className="text-left w-full"> {/* Text aligned left */}
              <div className="flex-1 space-y-8 mx-auto"> {/* Adjust horizontal positioning if needed */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mx-auto">
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
                  
                  {/* Adjust margin/padding to change introduction text position */}
                  <div className="space-y-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                    <p>
                      I love sharing thoughts and ideas through writing. This is where I store my ramblings
                      about technology, education, and life observations.
                    </p>
                    <p>
                      Currently exploring the intersection of AI and education, while documenting
                      my journey through IELTS teaching and personal reading.
                    </p>
                  </div>
                  {/* Adjust margin/padding to change introduction text position */}
                  
                  {/* Quick Stats removed */}
                </div>
              </div>
            </div>
          </div>         
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-0 pb-20 max-w-5xl">
        {/* Latest Articles Preview */}
        <div className="space-y-6">
          {/* Adjust ml-* values to move Latest Writing heading horizontally */}
          <div className="ml-6 sm:ml-6">
            {/* Adjust margin/padding to change Latest Writing heading position */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold">Latest Writing 📝</h2>
              <Link 
                to="/articles" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                View all <ArrowRight className="w-5 h-10" />
              </Link>
            </div>
            {/* Adjust margin/padding to change Latest Writing heading position */}
          </div>
          
          {/* Adjust spacing between articles if needed */}
          <div className="space-y-4">
            <Link
              to="/articles"
              className="group block p-4 sm:p-4 lg:p-6 rounded-xl hover:bg-accent-pink/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">over 1 year ago</span>
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">5 min read</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h3 className="text-xl font-serif font-bold mb-2 sm:mb-3 text-foreground text-accent-pink transition-colors">
                  Computer science major in an almost AI world
                </h3>
              </RoughNotation>
              <p className="text-muted-foreground leading-relaxed">
                My personal opinion about majoring in computer science while AI is taking over literally everything...
              </p>
            </Link>
            <Link
              to="/article/2"
              className="group block p-4 sm:p-4 lg:p-6 rounded-xl hover:bg-accent-pink/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">over 1 year ago</span>
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">3 min read</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h3 className="text-xl font-serif font-bold mb-2 sm:mb-3 text-foreground text-accent-pink transition-colors">
                  DITL: Marketing or comparison tool?
                </h3>
              </RoughNotation>
              <p className="text-muted-foreground leading-relaxed">
                Day in the life videos are popular but not always. Read my opinion on this trending format...
              </p>
            </Link>
            <Link
              to="/article/3"
              className="group block p-4 sm:p-4 lg:p-6 rounded-xl hover:bg-accent-pink/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">10 months ago</span>
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">4 min read</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h3 className="text-xl font-serif font-bold mb-2 sm:mb-3 text-foreground text-accent-pink transition-colors">
                  If blue-collar job sucks. Why do them?
                </h3>
              </RoughNotation>
              <p className="text-muted-foreground leading-relaxed">
                Blue-collar - a labor that does not require working in an office. If you didn't know it...
              </p>
            </Link>
            <Link
              to="/article/4"
              className="group block p-4 sm:p-4 lg:p-6 rounded-xl hover:bg-accent-pink/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">10 months ago</span>
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">6 min read</span>
              </div>
              <RoughNotation type="underline" onHover={true}>
                <h3 className="text-xl font-serif font-bold mb-2 sm:mb-3 text-foreground text-accent-pink transition-colors">
                  Writing in the Digital Age
                </h3>
              </RoughNotation>
              <p className="text-muted-foreground leading-relaxed">
                How technology has transformed the way we write and communicate in the modern world...
              </p>
            </Link>
          </div>
          {/* Adjust spacing between articles if needed */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;