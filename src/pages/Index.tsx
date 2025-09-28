import { useState } from 'react'
import TarotCard, { TarotCardData } from '../components/TarotCard'

const Index = () => {
  const [currentReading, setCurrentReading] = useState<TarotCardData | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleCardRevealed = (card: TarotCardData) => {
    setCurrentReading(card);
    setShowWelcome(false);
  };

  const startNewReading = () => {
    setCurrentReading(null);
    setShowWelcome(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-dark via-mystic-burgundy to-black relative overflow-hidden">
      {/* Мистический фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-mystic-gold rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-mystic-gold rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-mystic-gold rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-mystic-gold rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Заголовок */}
        <header className="text-center py-8">
          <h1 className="mystic-title text-5xl md:text-7xl font-bold text-mystic-gold mb-4">
            ГАДАНИЕ
          </h1>
          <h2 className="mystic-title text-2xl md:text-3xl text-mystic-cream">
            Пиковая Дама
          </h2>
          <div className="mt-4 w-32 h-0.5 bg-gradient-to-r from-transparent via-mystic-gold to-transparent mx-auto"></div>
        </header>

        {/* Основной контент */}
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
            {/* Левая сторона - Пиковая Дама */}
            <div className="flex flex-col items-center space-y-6">
              <img 
                src="/img/27a933b6-9d1f-4bac-95b9-85106d61ccdd.jpg" 
                alt="Пиковая Дама"
                className="w-80 h-auto rounded-2xl shadow-2xl border-2 border-mystic-gold animate-mystical-glow"
              />
              
              <div className="text-center">
                <h3 className="mystic-title text-xl text-mystic-gold mb-2">
                  Карта в руках Дамы
                </h3>
                <TarotCard onCardRevealed={handleCardRevealed} />
              </div>
            </div>

            {/* Правая сторона - Толкование */}
            <div className="text-center md:text-left space-y-6">
              {showWelcome && (
                <div className="animate-fade-in">
                  <h3 className="mystic-title text-3xl text-mystic-gold mb-4">
                    Добро пожаловать
                  </h3>
                  <p className="text-mystic-cream text-lg leading-relaxed mb-6">
                    Пиковая Дама готова открыть вам тайны будущего. 
                    В её руках карта Таро, которая содержит ответ на ваш вопрос.
                  </p>
                  <p className="text-mystic-cream text-base opacity-80">
                    Сосредоточьтесь на своём вопросе и нажмите на карту, 
                    чтобы узнать, что уготовила вам судьба...
                  </p>
                </div>
              )}

              {currentReading && (
                <div className="animate-fade-in bg-mystic-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-mystic-gold/30">
                  <h3 className="mystic-title text-2xl text-mystic-gold mb-3">
                    Ваше предсказание
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="mystic-title text-xl text-mystic-cream mb-2">
                        {currentReading.name}
                      </h4>
                      <p className="text-mystic-gold font-medium text-lg">
                        {currentReading.meaning}
                      </p>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-mystic-gold to-transparent"></div>
                    
                    <p className="text-mystic-cream leading-relaxed">
                      {currentReading.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-mystic-gold text-sm">
                        Стихия: {currentReading.element}
                      </span>
                      <button 
                        onClick={startNewReading}
                        className="px-4 py-2 bg-mystic-burgundy text-mystic-gold border border-mystic-gold rounded-lg hover:bg-mystic-gold hover:text-mystic-burgundy transition-colors duration-300 mystic-title font-medium"
                      >
                        Новое гадание
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Нижняя часть */}
        <footer className="text-center py-6">
          <p className="text-mystic-cream/60 text-sm">
            Карты раскрывают тайны, но выбор всегда остаётся за вами
          </p>
        </footer>
      </div>
    </div>
  )
};

export default Index;