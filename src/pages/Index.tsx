import { useState } from 'react'
import TarotCard, { TarotCardData } from '../components/TarotCard'

const Index = () => {
  const [currentReading, setCurrentReading] = useState<TarotCardData | null>(null);

  const handleCardRevealed = (card: TarotCardData) => {
    setCurrentReading(card);
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat cursor-pointer"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/73158110-0514-4245-badb-856e82fc1812.png)'
      }}
      onClick={handleCardRevealed ? () => {} : undefined}
    >
      {/* Интерактивная область карты */}
      <div className="absolute" style={{
        top: '30%',
        left: '42%',
        width: '16%',
        height: '25%'
      }}>
        <TarotCard onCardRevealed={handleCardRevealed} />
      </div>

      {/* Область предсказания */}
      {currentReading && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-mystic-cream animate-fade-in">
          <div className="text-center">
            <h3 className="mystic-title text-xl text-mystic-gold mb-2">
              {currentReading.name}
            </h3>
            <p className="text-mystic-gold font-medium mb-2">
              {currentReading.meaning}
            </p>
            <p className="text-sm leading-relaxed">
              {currentReading.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
};

export default Index;