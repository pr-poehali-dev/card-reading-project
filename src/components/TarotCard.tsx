import { useState } from 'react';

export interface TarotCardData {
  name: string;
  meaning: string;
  description: string;
  element: string;
}

const tarotCards: TarotCardData[] = [
  {
    name: "Дурак",
    meaning: "Новые начинания",
    description: "Время для новых приключений и принятия смелых решений. Доверьтесь интуиции.",
    element: "Воздух"
  },
  {
    name: "Маг",
    meaning: "Сила воли",
    description: "У вас есть все необходимые инструменты для достижения целей. Действуйте!",
    element: "Огонь"
  },
  {
    name: "Верховная Жрица",
    meaning: "Интуиция",
    description: "Прислушайтесь к внутреннему голосу. Ответы приходят через медитацию.",
    element: "Вода"
  },
  {
    name: "Императрица",
    meaning: "Плодородие",
    description: "Время творчества и изобилия. Ваши проекты принесут богатые плоды.",
    element: "Земля"
  },
  {
    name: "Император",
    meaning: "Власть",
    description: "Возьмите контроль в свои руки. Лидерство и структура принесут успех.",
    element: "Огонь"
  },
  {
    name: "Иерофант",
    meaning: "Мудрость",
    description: "Обратитесь к традициям и наставникам. Знания придут через обучение.",
    element: "Земля"
  },
  {
    name: "Влюбленные",
    meaning: "Выбор",
    description: "Важное решение ждет вас. Следуйте зову сердца, но не забывайте о разуме.",
    element: "Воздух"
  },
  {
    name: "Колесница",
    meaning: "Победа",
    description: "Преодолейте препятствия силой воли. Успех близок, не сдавайтесь.",
    element: "Вода"
  },
  {
    name: "Сила",
    meaning: "Внутренняя сила",
    description: "Истинная сила приходит изнутри. Терпение и мягкость победят грубость.",
    element: "Огонь"
  },
  {
    name: "Отшельник",
    meaning: "Поиск истины",
    description: "Время для внутреннего поиска. Уединение поможет найти ответы.",
    element: "Земля"
  },
  {
    name: "Колесо Фортуны",
    meaning: "Перемены",
    description: "Судьба поворачивается к вам лицом. Готовьтесь к позитивным переменам.",
    element: "Огонь"
  },
  {
    name: "Справедливость",
    meaning: "Равновесие",
    description: "Время восстановить баланс. Справедливость восторжествует.",
    element: "Воздух"
  },
  {
    name: "Повешенный",
    meaning: "Жертва",
    description: "Иногда нужно отпустить, чтобы получить больше. Смена перспективы поможет.",
    element: "Вода"
  },
  {
    name: "Смерть",
    meaning: "Трансформация",
    description: "Конец одного этапа означает начало нового. Примите изменения.",
    element: "Вода"
  },
  {
    name: "Умеренность",
    meaning: "Гармония",
    description: "Найдите золотую середину. Терпение и баланс приведут к успеху.",
    element: "Огонь"
  },
  {
    name: "Дьявол",
    meaning: "Искушение",
    description: "Освободитесь от того, что вас сдерживает. Вы сильнее своих страхов.",
    element: "Земля"
  },
  {
    name: "Башня",
    meaning: "Разрушение",
    description: "Старые структуры рушатся, освобождая место для нового. Не бойтесь перемен.",
    element: "Огонь"
  },
  {
    name: "Звезда",
    meaning: "Надежда",
    description: "После бури приходит покой. Ваши мечты осуществимы.",
    element: "Воздух"
  },
  {
    name: "Луна",
    meaning: "Иллюзии",
    description: "Не все является тем, чем кажется. Доверяйте интуиции больше глазам.",
    element: "Вода"
  },
  {
    name: "Солнце",
    meaning: "Радость",
    description: "Период счастья и успеха. Делитесь своим светом с окружающими.",
    element: "Огонь"
  },
  {
    name: "Суд",
    meaning: "Возрождение",
    description: "Время для прощения и новых начинаний. Прошлое отпущено.",
    element: "Огонь"
  },
  {
    name: "Мир",
    meaning: "Завершение",
    description: "Цикл завершен. Вы достигли гармонии и можете праздновать успех.",
    element: "Земля"
  }
];

interface TarotCardProps {
  onCardRevealed?: (card: TarotCardData) => void;
}

export default function TarotCard({ onCardRevealed }: TarotCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState<TarotCardData | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomCard = (): TarotCardData => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    return tarotCards[randomIndex];
  };

  const flipCard = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    const newCard = getRandomCard();
    setCurrentCard(newCard);
    setIsFlipped(true);
    
    if (onCardRevealed) {
      onCardRevealed(newCard);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const resetCard = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsFlipped(false);
    setCurrentCard(null);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="relative w-32 h-48 perspective-1000 cursor-pointer" onClick={isFlipped ? resetCard : flipCard}>
      <div 
        className={`
          absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d
          ${isFlipped ? 'rotate-y-180' : ''}
          ${isAnimating ? 'animate-flip-card' : ''}
        `}
      >
        {/* Рубашка карты */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-mystic-burgundy to-mystic-dark rounded-lg border-2 border-mystic-gold shadow-lg hover:shadow-mystic-gold/30 transition-shadow duration-300">
            <div className="h-full flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 border-2 border-mystic-gold rounded-full flex items-center justify-center mb-2">
                <div className="w-8 h-8 border border-mystic-gold rounded-full"></div>
              </div>
              <div className="flex space-x-1 mb-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-mystic-gold rounded-full"></div>
                ))}
              </div>
              <div className="text-mystic-gold text-xs mystic-title font-medium">ТАРО</div>
            </div>
          </div>
        </div>

        {/* Лицевая сторона карты */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-mystic-cream to-white rounded-lg border-2 border-mystic-gold shadow-lg">
            {currentCard && (
              <div className="h-full p-3 flex flex-col">
                <div className="text-center mb-2">
                  <h3 className="mystic-title font-semibold text-mystic-burgundy text-sm">
                    {currentCard.name}
                  </h3>
                  <p className="text-xs text-mystic-gold font-medium">
                    {currentCard.meaning}
                  </p>
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-mystic-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-mystic-burgundy rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-mystic-gold rounded-full animate-mystical-glow"></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-mystic-dark leading-tight">
                    {currentCard.description}
                  </p>
                  <div className="mt-1 text-xs text-mystic-burgundy font-medium">
                    {currentCard.element}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}