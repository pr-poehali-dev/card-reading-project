import { useState, useEffect } from 'react';

interface VideoSplashProps {
  videoUrl: string;
  duration?: number;
  onComplete?: () => void;
}

export default function VideoSplash({ 
  videoUrl, 
  duration = 5000,
  onComplete 
}: VideoSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center animate-in fade-in">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => {
          setIsVisible(false);
          onComplete?.();
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      <button
        onClick={() => {
          setIsVisible(false);
          onComplete?.();
        }}
        className="absolute top-8 right-8 text-white/80 hover:text-white text-sm px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50 transition-all"
      >
        Пропустить
      </button>
    </div>
  );
}
