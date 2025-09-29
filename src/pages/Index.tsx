import { useState } from 'react'

interface Card {
  name: string;
  image: string;
  meaning: string;
}

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const cards: Card[] = [
    {
      name: "Туз Пик",
      image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg",
      meaning: "Туз Пик — перемены, неожиданные известия."
    },
    {
      name: "Король Пик",
      image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg",
      meaning: "Король Пик — могущественный человек, покровитель."
    },
    {
      name: "Пиковая дама",
      image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg",
      meaning: "Пиковая дама — сильная женщина, загадка, испытание судьбы."
    }
  ];

  const handleCardClick = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setSelectedCard(null);
      return;
    }
    
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setSelectedCard(randomCard);
    setIsFlipped(true);
    
    if ('speechSynthesis' in window) {
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(randomCard.meaning);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.9;
        utterance.pitch = 0.8;
        window.speechSynthesis.speak(utterance);
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center" 
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/79fbba26-6e10-4fd4-9822-3de36103c929.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute bottom-8 left-8 flex items-center gap-8 z-20">
        <div
          className="w-[120px] h-[180px] cursor-pointer transition-all duration-500 perspective-1000"
          onClick={handleCardClick}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <img 
            src={isFlipped && selectedCard ? selectedCard.image : '/img/59e66927-45a7-46c0-91f6-39f79c23015e.jpg'}
            alt="Карта"
            className="w-full h-full object-cover rounded-lg shadow-[0_4px_20px_rgba(255,215,0,0.4)] animate-pulse"
            style={{
              transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>

        {isFlipped && selectedCard && (
          <div className="max-w-md bg-[rgba(24,24,30,0.95)] px-6 py-5 rounded-xl text-white text-xl tracking-wide border-2 border-yellow-400/30 shadow-lg animate-fade-in">
            {selectedCard.meaning}
          </div>
        )}
      </div>
    </div>
  )
};

export default Index;