import { useState } from 'react'
import { cards, type Card } from '@/data/cards'
import { meanings } from '@/data/meanings'

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedType, setSelectedType] = useState<string>('day');
  const [showIntro, setShowIntro] = useState(true);

  const getMeaningForType = (card: Card, type: string): string => {
    return meanings[type]?.[card.name] || card.meaning;
  };

  const handleCardClick = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setSelectedCard(null);
      return;
    }
    
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const cardWithMeaning = {
      ...randomCard,
      meaning: getMeaningForType(randomCard, selectedType)
    };
    setSelectedCard(cardWithMeaning);
    setIsFlipped(true);
  };

  if (showIntro) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center">
        <video 
          className="w-full h-full object-contain"
          autoPlay
          muted
          playsInline
          onEnded={() => setShowIntro(false)}
          onError={(e) => {
            console.error('Video error:', e);
            setShowIntro(false);
          }}
          poster="https://284baef4-3d14-4ca5-8247-4811f0d6b14b.selstorage.ru/cf46f75d-6cb1-47a9-8a05-c3647c046ae4_ec9c6fcf-7d13-48a1-9b8d-22d447ed67c7.png"
          src="https://284baef4-3d14-4ca5-8247-4811f0d6b14b.selstorage.ru/24611ee1-5089-44cd-b1d9-ea50e7618a2a_01999649-3958-75b6-83b2-8991c0b10513.mp4"
        />
        <button
          onClick={() => setShowIntro(false)}
          className="absolute bottom-8 right-8 px-6 py-3 bg-[#C9A876] text-black rounded-lg font-medium hover:bg-[#B89866] transition-colors z-50"
        >
          Пропустить
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center" 
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/79fbba26-6e10-4fd4-9822-3de36103c929.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute bottom-0 right-8 flex flex-col gap-0 z-20">
        <button
          onClick={() => {
            setSelectedType('day');
            if (isFlipped) {
              setIsFlipped(false);
              setSelectedCard(null);
            }
          }}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'day'
              ? 'bg-[#C9A876] text-black shadow-lg shadow-[#C9A876]/50'
              : 'bg-[rgba(24,24,30,0.9)] text-[#C9A876] border-2 border-[#C9A876]/30 hover:bg-[#C9A876]/20'
          }`}
        >
          Карта дня
        </button>
        <button
          onClick={() => {
            setSelectedType('love');
            if (isFlipped) {
              setIsFlipped(false);
              setSelectedCard(null);
            }
          }}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'love'
              ? 'bg-[#C9A876] text-black shadow-lg shadow-[#C9A876]/50'
              : 'bg-[rgba(24,24,30,0.9)] text-[#C9A876] border-2 border-[#C9A876]/30 hover:bg-[#C9A876]/20'
          }`}
        >
          Карта любви
        </button>
        <button
          onClick={() => {
            setSelectedType('wish');
            if (isFlipped) {
              setIsFlipped(false);
              setSelectedCard(null);
            }
          }}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'wish'
              ? 'bg-[#C9A876] text-black shadow-lg shadow-[#C9A876]/50'
              : 'bg-[rgba(24,24,30,0.9)] text-[#C9A876] border-2 border-[#C9A876]/30 hover:bg-[#C9A876]/20'
          }`}
        >
          Карта желаний
        </button>
        <button
          onClick={() => {
            setSelectedType('week');
            if (isFlipped) {
              setIsFlipped(false);
              setSelectedCard(null);
            }
          }}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'week'
              ? 'bg-[#C9A876] text-black shadow-lg shadow-[#C9A876]/50'
              : 'bg-[rgba(24,24,30,0.9)] text-[#C9A876] border-2 border-[#C9A876]/30 hover:bg-[#C9A876]/20'
          }`}
        >
          Карта недели
        </button>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-8 z-20">
        <div
          className="w-[120px] h-[180px] cursor-pointer transition-all duration-500 perspective-1000 relative"
          onClick={handleCardClick}
        >
          <img 
            src='/img/59e66927-45a7-46c0-91f6-39f79c23015e.jpg'
            alt="Карта"
            className="w-full h-full object-cover rounded-lg shadow-[0_4px_20px_rgba(255,215,0,0.4)] animate-pulse absolute inset-0"
            style={{
              opacity: isFlipped ? 0 : 1,
              transition: 'opacity 0.3s'
            }}
          />
          {isFlipped && selectedCard && (
            <img 
              src={selectedCard.image}
              alt={selectedCard.name}
              className="w-full h-full object-cover rounded-lg shadow-[0_4px_20px_rgba(255,215,0,0.4)] absolute inset-0"
            />
          )}
        </div>

        {isFlipped && selectedCard && (
          <div className="max-w-md bg-[rgba(24,24,30,0.95)] px-6 py-5 rounded-xl text-white text-xl tracking-wide border-2 border-yellow-400/30 shadow-lg animate-fade-in">
            {selectedCard.meaning}
          </div>
        )}
      </div>

      <div className="absolute bottom-8 md:bottom-8 top-8 md:top-auto left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-[#C9A876] font-serif tracking-wider font-extrabold text-xl md:text-4xl text-center md:text-left">
          <span className="md:hidden">Гадание<br/>Пиковая дама</span>
          <span className="hidden md:inline">Гадание - Пиковая дама</span>
        </h1>
      </div>
    </div>
  )
};

export default Index;
