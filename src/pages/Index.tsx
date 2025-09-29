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

  const cards: Card[] = [
    { name: "Туз Пик", image: "/img/b34f6665-c1ce-431f-9873-1a600dd3a3b6.jpg", meaning: "Туз Пик — перемены, неожиданные известия." },
    { name: "Король Пик", image: "/img/32d71413-9856-40e0-bf1b-73186a855ff2.jpg", meaning: "Король Пик — могущественный человек, покровитель." },
    { name: "Дама Пик", image: "/img/34dd9ab1-fc94-44dd-b9f6-6324370b7787.jpg", meaning: "Пиковая дама — сильная женщина, загадка, испытание судьбы." },
    { name: "Валет Пик", image: "/img/7ebf6905-7a17-438d-bbba-381f90af3afa.jpg", meaning: "Валет Пик — молодой человек, вестник перемен." },
    { name: "10 Пик", image: "/img/5d50c928-9e0d-4ba2-9638-e98598dd9228.jpg", meaning: "10 Пик — препятствия на пути, но их можно преодолеть." },
    { name: "9 Пик", image: "/img/20244f72-53d9-434d-9434-e84f0b3d41a1.jpg", meaning: "9 Пик — тревоги и беспокойства, но всё разрешится." },
    { name: "8 Пик", image: "/img/bddf5ea2-43ba-424b-ba19-8f12a8bdf662.jpg", meaning: "8 Пик — ограничения временны, скоро будет свобода." },
    { name: "7 Пик", image: "/img/6fa875bf-8efd-4f6d-b63e-ae05fb915d1c.jpg", meaning: "7 Пик — сомнения и размышления приведут к мудрости." },
    { name: "Туз Червей", image: "/img/aafd4872-ee79-4bb9-ba99-1ca737f1ed84.jpg", meaning: "Туз Червей — любовь, радость, новое чувство." },
    { name: "Король Червей", image: "/img/413a431f-52de-490f-a3a8-86a0746f4b91.jpg", meaning: "Король Червей — добрый человек, защитник и советчик." },
    { name: "Дама Червей", image: "/img/79f38696-7d1f-4a76-a833-7253287f7acf.jpg", meaning: "Дама Червей — добрая женщина, искренние чувства." },
    { name: "Валет Червей", image: "/img/7b347c3c-4e4a-4c9d-b6b9-b9dcd63a2eba.jpg", meaning: "Валет Червей — верный друг, приятные вести." },
    { name: "10 Червей", image: "/img/8ae75ae5-68b9-4043-a4ca-9a0026c6fd79.jpg", meaning: "10 Червей — семейное счастье, гармония в доме." },
    { name: "9 Червей", image: "/img/f3ac66e2-c30c-4e1a-bde8-63a09200d026.jpg", meaning: "9 Червей — исполнение желаний, карта мечты." },
    { name: "8 Червей", image: "/img/f7d0e5d3-be2a-41e8-98c9-9a79a10c35bb.jpg", meaning: "8 Червей — гости, встречи, приятное общение." },
    { name: "7 Червей", image: "/img/192a9d85-7398-4571-9d5b-a3fd0b9027c1.jpg", meaning: "7 Червей — размышления о чувствах, душевный покой." },
    { name: "Туз Бубен", image: "/img/875ad202-900d-48c8-98ec-1c7e6f3353ab.jpg", meaning: "Туз Бубен — письмо, документ, важная новость." },
    { name: "Король Бубен", image: "/img/ce16178c-d700-4d86-bb13-d9fd1dac20d1.jpg", meaning: "Король Бубен — деловой человек, выгодное предложение." },
    { name: "Дама Бубен", image: "/img/accb6351-d93b-4fa2-84e1-1e363e1e7ee1.jpg", meaning: "Дама Бубен — деловая женщина, практичность." },
    { name: "Валет Бубен", image: "/img/f420af5b-e8d9-4c15-bad2-5b39c8db224f.jpg", meaning: "Валет Бубен — молодой деловой человек, новости." },
    { name: "10 Бубен", image: "/img/4d7b03a0-0fcb-4bfb-aa6f-9a2c41e96a05.jpg", meaning: "10 Бубен — путешествие, дорога, перемещение." },
    { name: "9 Бубен", image: "/img/e3de4afe-6602-4da5-91dc-fab55bb86e8d.jpg", meaning: "9 Бубен — деньги, материальная прибыль." },
    { name: "8 Бубен", image: "/img/65df91a1-6eb9-4afb-9552-58b51a9f6acc.jpg", meaning: "8 Бубен — разговоры о деньгах, планирование." },
    { name: "7 Бубен", image: "/img/784ce355-ef78-4bfc-a4ae-63ceed8c78e1.jpg", meaning: "7 Бубен — небольшая сумма денег, подарок." },
    { name: "Туз Треф", image: "/img/6fa3421f-0844-41fa-91b5-1bf883efc01b.jpg", meaning: "Туз Треф — удача, успех в делах." },
    { name: "Король Треф", image: "/img/cdecdf80-99b1-417e-8d71-649939dcafda.jpg", meaning: "Король Треф — влиятельный человек, авторитет." },
    { name: "Дама Треф", image: "/img/a0434914-2532-4203-9b70-0cd0da79339d.jpg", meaning: "Дама Треф — уверенная женщина, карьеристка." },
    { name: "Валет Треф", image: "/img/1b291345-69c7-4ce2-a391-d6176c561812.jpg", meaning: "Валет Треф — молодой успешный человек, амбиции." },
    { name: "10 Треф", image: "/img/df3c4c90-2ef4-4c1a-a165-a400509b88b5.jpg", meaning: "10 Треф — успех в бизнесе, крупное достижение." },
    { name: "9 Треф", image: "/img/c778574a-572b-41d3-acbb-7298ddd81959.jpg", meaning: "9 Треф — препятствия в делах, но победа близка." },
    { name: "8 Треф", image: "/img/c74e4d30-d85c-4eb5-8e4b-c8d873226e1d.jpg", meaning: "8 Треф — деловые встречи, переговоры." },
    { name: "7 Треф", image: "/img/41dfb234-bbc8-448c-a155-59da2396f211.jpg", meaning: "7 Треф — небольшой успех, маленькая победа." }
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
      <div className="absolute bottom-8 right-8 flex flex-col gap-4 z-20">
        <button
          onClick={() => setSelectedType('day')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'day'
              ? 'bg-yellow-400/90 text-black shadow-lg shadow-yellow-400/50'
              : 'bg-[rgba(24,24,30,0.9)] text-yellow-400 border-2 border-yellow-400/30 hover:bg-yellow-400/20'
          }`}
        >
          Карта дня
        </button>
        <button
          onClick={() => setSelectedType('love')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'love'
              ? 'bg-yellow-400/90 text-black shadow-lg shadow-yellow-400/50'
              : 'bg-[rgba(24,24,30,0.9)] text-yellow-400 border-2 border-yellow-400/30 hover:bg-yellow-400/20'
          }`}
        >
          Карта любви
        </button>
        <button
          onClick={() => setSelectedType('wish')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'wish'
              ? 'bg-yellow-400/90 text-black shadow-lg shadow-yellow-400/50'
              : 'bg-[rgba(24,24,30,0.9)] text-yellow-400 border-2 border-yellow-400/30 hover:bg-yellow-400/20'
          }`}
        >
          Карта желаний
        </button>
        <button
          onClick={() => setSelectedType('week')}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            selectedType === 'week'
              ? 'bg-yellow-400/90 text-black shadow-lg shadow-yellow-400/50'
              : 'bg-[rgba(24,24,30,0.9)] text-yellow-400 border-2 border-yellow-400/30 hover:bg-yellow-400/20'
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
    </div>
  )
};

export default Index;