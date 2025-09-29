import { useState } from 'react'

interface Card {
  name: string;
  image: string;
  meaning: string;
}

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedType, setSelectedType] = useState<string>('day');
  const [showIntro, setShowIntro] = useState(true);

  const cards: Card[] = [
    { name: "Туз Пик", image: "/img/f0326d7d-cbff-4c13-a067-66484faf2f01.jpg", meaning: "Туз Пик — перемены, неожиданные известия." },
    { name: "Король Пик", image: "/img/d0e04cbd-85a6-46f5-92d2-d4a443c7b551.jpg", meaning: "Король Пик — могущественный человек, покровитель." },
    { name: "Дама Пик", image: "/img/335e7f57-ffd5-4166-9ea6-43aac4d709a8.jpg", meaning: "Пиковая дама — сильная женщина, загадка, испытание судьбы." },
    { name: "Валет Пик", image: "/img/d27a40a7-e9d4-4538-82e2-493d3647b924.jpg", meaning: "Валет Пик — молодой человек, вестник перемен." },
    { name: "10 Пик", image: "/img/250c7abd-cd04-42c5-841e-c0c3d1801421.jpg", meaning: "10 Пик — препятствия на пути, но их можно преодолеть." },
    { name: "9 Пик", image: "/img/250c7abd-cd04-42c5-841e-c0c3d1801421.jpg", meaning: "9 Пик — тревоги и беспокойства, но всё разрешится." },
    { name: "8 Пик", image: "/img/250c7abd-cd04-42c5-841e-c0c3d1801421.jpg", meaning: "8 Пик — ограничения временны, скоро будет свобода." },
    { name: "7 Пик", image: "/img/250c7abd-cd04-42c5-841e-c0c3d1801421.jpg", meaning: "7 Пик — сомнения и размышления приведут к мудрости." },
    { name: "Туз Червей", image: "/img/dee78c76-d9cc-4f14-8356-5e0a8a01b179.jpg", meaning: "Туз Червей — любовь, радость, новое чувство." },
    { name: "Король Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "Король Червей — добрый человек, защитник и советчик." },
    { name: "Дама Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "Дама Червей — добрая женщина, искренние чувства." },
    { name: "Валет Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "Валет Червей — верный друг, приятные вести." },
    { name: "10 Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "10 Червей — семейное счастье, гармония в доме." },
    { name: "9 Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "9 Червей — исполнение желаний, карта мечты." },
    { name: "8 Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "8 Червей — гости, встречи, приятное общение." },
    { name: "7 Червей", image: "/img/373c84d3-a1ea-4742-a344-22d0403cba85.jpg", meaning: "7 Червей — размышления о чувствах, душевный покой." },
    { name: "Туз Бубен", image: "/img/67aaa6e0-c8d2-446e-b7b7-5952d35e6a55.jpg", meaning: "Туз Бубен — письмо, документ, важная новость." },
    { name: "Король Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "Король Бубен — деловой человек, выгодное предложение." },
    { name: "Дама Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "Дама Бубен — деловая женщина, практичность." },
    { name: "Валет Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "Валет Бубен — молодой деловой человек, новости." },
    { name: "10 Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "10 Бубен — путешествие, дорога, перемещение." },
    { name: "9 Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "9 Бубен — деньги, материальная прибыль." },
    { name: "8 Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "8 Бубен — разговоры о деньгах, планирование." },
    { name: "7 Бубен", image: "/img/c4594513-c292-4850-bc64-39aab4e10f5f.jpg", meaning: "7 Бубен — небольшая сумма денег, подарок." },
    { name: "Туз Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "Туз Треф — удача, успех в делах." },
    { name: "Король Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "Король Треф — влиятельный человек, авторитет." },
    { name: "Дама Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "Дама Треф — уверенная женщина, карьеристка." },
    { name: "Валет Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "Валет Треф — молодой успешный человек, амбиции." },
    { name: "10 Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "10 Треф — успех в бизнесе, крупное достижение." },
    { name: "9 Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "9 Треф — препятствия в делах, но победа близка." },
    { name: "8 Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "8 Треф — деловые встречи, переговоры." },
    { name: "7 Треф", image: "/img/f32fb915-3797-4fb4-8a22-3ed2cf094eb9.jpg", meaning: "7 Треф — небольшой успех, маленькая победа." }
  ];

  const getMeaningForType = (card: Card, type: string): string => {
    const meanings: Record<string, Record<string, string>> = {
      day: {
        default: `${card.meaning} Этот день принесёт вам то, что предначертано судьбой.`
      },
      love: {
        default: `В любви ${card.name} означает: ваши чувства истинны, следуйте зову сердца.`
      },
      wish: {
        default: `${card.name} говорит о вашем желании: оно исполнится, если вы верите в него.`
      },
      week: {
        default: `${card.meaning} Эта неделя будет важной для ваших планов.`
      }
    };
    
    return meanings[type]?.default || card.meaning;
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
          onEnded={() => setShowIntro(false)}
          playsInline
          poster="https://284baef4-3d14-4ca5-8247-4811f0d6b14b.selstorage.ru/cf46f75d-6cb1-47a9-8a05-c3647c046ae4_ec9c6fcf-7d13-48a1-9b8d-22d447ed67c7.png"
        >
          <source src="https://284baef4-3d14-4ca5-8247-4811f0d6b14b.selstorage.ru/24611ee1-5089-44cd-b1d9-ea50e7618a2a_01999649-3958-75b6-83b2-8991c0b10513.mp4" type="video/mp4" />
          Ваш браузер не поддерживает элемент video.
        </video>
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
      <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-[#C9A876] font-serif tracking-wider font-extrabold text-4xl">Гадание -  Пиковая дама</h1>
      </div>
    </div>
  )
};

export default Index;