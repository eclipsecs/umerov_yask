import { Link } from 'react-router-dom';
import RoughNotation from '@/components/RoughNotation';
import { teachings } from '@/data/teachings';

const TeachingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-5xl font-sans font-bold text-center mb-16">Careering</h1>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {teachings.map((teaching) => (
          <Link
            to={`/teaching/${teaching.id}`}
            key={teaching.id}
            className="block bg-transparent rounded-lg p-6 transition-all duration-300 shadow-none outline-none"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <RoughNotation type="underline" onHover={true}>
                  <h2 className="text-2xl font-sans font-bold mb-0 text-foreground">
                    {teaching.title}
                  </h2>
                </RoughNotation>
                <span className="text-pink-500 dark:text-pink-500 text-sm font-bold uppercase bg-transparent">
                  {teaching.readTime} min read
                </span>
              </div>
              <p className="text-lg text-muted-foreground mb-4 line-clamp-2 text-left leading-relaxed">
                {teaching.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeachingsPage;
