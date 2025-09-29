import { useState } from 'react'

interface Card {
  name: string;
  image: string;
  meaning: string;
}

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [showMeaning, setShowMeaning] = useState(false);

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
    if (isFlipped) return;
    
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setSelectedCard(randomCard);
    setIsFlipped(true);
    
    setTimeout(() => {
      setShowMeaning(true);
      speakMeaning(randomCard.meaning);
    }, 600);
  };

  const speakMeaning = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ru-RU';
      utterance.rate = 0.9;
      utterance.pitch = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-[#121726] flex items-center justify-center">
      <div className="relative w-[450px] h-[600px] rounded-3xl overflow-hidden bg-[#151525] shadow-[0_6px_32px_rgba(0,0,0,0.7)]">
        <img 
          src="https://cdn.poehali.dev/files/79fbba26-6e10-4fd4-9822-3de36103c929.png" 
          alt="Пиковая дама" 
          className="w-full h-full object-cover brightness-90"
        />
        
        <div
          className="absolute left-[45%] top-[62%] w-[100px] h-[150px] -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.6)] z-10"
          style={{
            transform: isFlipped 
              ? 'translate(-50%, -50%) rotateY(180deg) scale(1.08)'
              : 'translate(-50%, -50%) rotateY(0deg) scale(1)',
            backfaceVisibility: 'hidden'
          }}
          onClick={handleCardClick}
        >
          <img 
            src={isFlipped && selectedCard ? selectedCard.image : '/img/59e66927-45a7-46c0-91f6-39f79c23015e.jpg'}
            alt="Карта"
            className="w-full h-full object-cover rounded-lg"
            style={{
              transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)'
            }}
          />
        </div>

        {showMeaning && selectedCard && (
          <div className="absolute w-full bottom-[22px] left-0 bg-[rgba(24,24,30,0.88)] px-4 py-7 pb-[18px] text-white text-center text-[1.38rem] tracking-wide border-t-2 border-white/10 rounded-b-[22px] z-20">
            {selectedCard.meaning}
          </div>
        )}
      </div>
    </div>
  )
};

export default Index;