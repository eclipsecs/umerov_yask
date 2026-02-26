import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  return (
    <div className={cn('prose prose-lg', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-serif font-bold mb-6 mt-8 text-foreground">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-serif font-bold mb-4 mt-6 text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-serif font-bold mb-3 mt-5 text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-7 text-foreground/90">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-accent-pink hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono">
                  {children}
                </code>
              </pre>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent-pink bg-muted/50 p-4 my-6 italic">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground/90">
              {children}
            </li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;