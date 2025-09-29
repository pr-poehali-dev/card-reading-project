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
    { name: "Туз Пик", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Туз Пик — перемены, неожиданные известия." },
    { name: "Король Пик", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Король Пик — могущественный человек, покровитель." },
    { name: "Дама Пик", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Пиковая дама — сильная женщина, загадка, испытание судьбы." },
    { name: "Валет Пик", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Валет Пик — молодой человек, вестник перемен." },
    { name: "10 Пик", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "10 Пик — препятствия на пути, но их можно преодолеть." },
    { name: "9 Пик", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "9 Пик — тревоги и беспокойства, но всё разрешится." },
    { name: "8 Пик", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "8 Пик — ограничения временны, скоро будет свобода." },
    { name: "7 Пик", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "7 Пик — сомнения и размышления приведут к мудрости." },
    { name: "Туз Червей", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Туз Червей — любовь, радость, новое чувство." },
    { name: "Король Червей", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Король Червей — добрый человек, защитник и советчик." },
    { name: "Дама Червей", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Дама Червей — добрая женщина, искренние чувства." },
    { name: "Валет Червей", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Валет Червей — верный друг, приятные вести." },
    { name: "10 Червей", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "10 Червей — семейное счастье, гармония в доме." },
    { name: "9 Червей", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "9 Червей — исполнение желаний, карта мечты." },
    { name: "8 Червей", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "8 Червей — гости, встречи, приятное общение." },
    { name: "7 Червей", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "7 Червей — размышления о чувствах, душевный покой." },
    { name: "Туз Бубен", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Туз Бубен — письмо, документ, важная новость." },
    { name: "Король Бубен", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Король Бубен — деловой человек, выгодное предложение." },
    { name: "Дама Бубен", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Дама Бубен — деловая женщина, практичность." },
    { name: "Валет Бубен", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Валет Бубен — молодой деловой человек, новости." },
    { name: "10 Бубен", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "10 Бубен — путешествие, дорога, перемещение." },
    { name: "9 Бубен", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "9 Бубен — деньги, материальная прибыль." },
    { name: "8 Бубен", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "8 Бубен — разговоры о деньгах, планирование." },
    { name: "7 Бубен", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "7 Бубен — небольшая сумма денег, подарок." },
    { name: "Туз Треф", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Туз Треф — удача, успех в делах." },
    { name: "Король Треф", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Король Треф — влиятельный человек, авторитет." },
    { name: "Дама Треф", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Дама Треф — уверенная женщина, карьеристка." },
    { name: "Валет Треф", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Валет Треф — молодой успешный человек, амбиции." },
    { name: "10 Треф", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "10 Треф — успех в бизнесе, крупное достижение." },
    { name: "9 Треф", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "9 Треф — препятствия в делах, но победа близка." },
    { name: "8 Треф", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "8 Треф — деловые встречи, переговоры." },
    { name: "7 Треф", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "7 Треф — небольшой успех, маленькая победа." }
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
    </div>
  )
};

export default Index;