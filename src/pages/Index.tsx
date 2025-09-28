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
      {/* Интерактивная область карты в руке */}
      <div 
        className="absolute cursor-pointer opacity-0 hover:opacity-20 transition-opacity duration-300" 
        style={{
          top: '28%',
          left: '40%',
          width: '12%',
          height: '20%',
          backgroundColor: 'rgba(255, 215, 0, 0.1)'
        }}
        onClick={() => {
          const cards = [
            { name: "Дурак", meaning: "Новые начинания", description: "Время для новых приключений и принятия смелых решений. Доверьтесь интуиции.", element: "Воздух" },
            { name: "Маг", meaning: "Сила воли", description: "У вас есть все необходимые инструменты для достижения целей. Действуйте!", element: "Огонь" },
            { name: "Верховная Жрица", meaning: "Интуиция", description: "Прислушайтесь к внутреннему голосу. Ответы приходят через медитацию.", element: "Вода" },
            { name: "Императрица", meaning: "Плодородие", description: "Время творчества и изобилия. Ваши проекты принесут богатые плоды.", element: "Земля" },
            { name: "Император", meaning: "Власть", description: "Возьмите контроль в свои руки. Лидерство и структура принесут успех.", element: "Огонь" },
            { name: "Звезда", meaning: "Надежда", description: "После бури приходит покой. Ваши мечты осуществимы.", element: "Воздух" },
            { name: "Солнце", meaning: "Радость", description: "Период счастья и успеха. Делитесь своим светом с окружающими.", element: "Огонь" }
          ];
          const randomCard = cards[Math.floor(Math.random() * cards.length)];
          handleCardRevealed(randomCard);
        }}
      >
        {/* Невидимая интерактивная зона */}
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