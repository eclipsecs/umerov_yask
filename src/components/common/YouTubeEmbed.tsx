import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

/**
 * YouTube Embed Component
 * 
 * Usage:
 * <YouTubeEmbed 
 *   url="https://www.youtube.com/watch?v=VIDEO_ID" 
 *   title="Video Title"
 * />
 * 
 * Or with shortened URL:
 * <YouTubeEmbed 
 *   url="https://youtu.be/VIDEO_ID" 
 *   title="Video Title"
 * />
 * 
 * How to use in articles:
 * 1. In your article data, instead of importing a video file, use:
 *    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID"
 * 
 * 2. In ArticleDetailPage, check for youtubeUrl and render this component
 */

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getVideoId(url);

  if (!videoId) {
    return (
      <div className="bg-muted/30 p-4 rounded-lg text-center">
        <p className="text-muted-foreground">Invalid YouTube URL: {url}</p>
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className={`relative w-full aspect-video rounded-lg overflow-hidden bg-muted ${className}`}>
      {!isLoaded ? (
        // Thumbnail with play button
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsLoaded(true)}
        >
          <img
            src={thumbnailUrl}
            alt={title || 'YouTube Video'}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to medium quality thumbnail
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
          {title && (
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-medium text-lg drop-shadow-lg">
                {title}
              </h3>
            </div>
          )}
        </div>
      ) : (
        // Actual YouTube embed
        <iframe
          src={embedUrl}
          title={title || 'YouTube Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default YouTubeEmbed;