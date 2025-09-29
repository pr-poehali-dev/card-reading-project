import { useState } from 'react'

const Index = () => {
  const [currentReading, setCurrentReading] = useState<any>(null);

  const cards = [
    { name: "Дурак", meaning: "Новые начинания", description: "Время для новых приключений и принятия смелых решений. Доверьтесь интуиции.", element: "Воздух" },
    { name: "Маг", meaning: "Сила воли", description: "У вас есть все необходимые инструменты для достижения целей. Действуйте!", element: "Огонь" },
    { name: "Верховная Жрица", meaning: "Интуиция", description: "Прислушайтесь к внутреннему голосу. Ответы приходят через медитацию.", element: "Вода" },
    { name: "Императрица", meaning: "Плодородие", description: "Время творчества и изобилия. Ваши проекты принесут богатые плоды.", element: "Земля" },
    { name: "Император", meaning: "Власть", description: "Возьмите контроль в свои руки. Лидерство и структура принесут успех.", element: "Огонь" },
    { name: "Звезда", meaning: "Надежда", description: "После бури приходит покой. Ваши мечты осуществимы.", element: "Воздух" },
    { name: "Солнце", meaning: "Радость", description: "Период счастья и успеха. Делитесь своим светом с окружающими.", element: "Огонь" },
    { name: "Луна", meaning: "Иллюзии", description: "Не все является тем, чем кажется. Доверяйте интуиции больше глазам.", element: "Вода" },
    { name: "Смерть", meaning: "Трансформация", description: "Конец одного этапа означает начало нового. Примите изменения.", element: "Вода" },
    { name: "Мир", meaning: "Завершение", description: "Цикл завершен. Вы достигли гармонии и можете праздновать успех.", element: "Земля" }
  ];

  const handleCardClick = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setCurrentReading(randomCard);
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/files/79fbba26-6e10-4fd4-9822-3de36103c929.png)'
      }}
    >
      {/* Интерактивная область карты в руке */}
      <div 
        className="absolute cursor-pointer bg-transparent hover:bg-yellow-400/20 transition-colors duration-300 z-10" 
        style={{
          top: '25%',
          left: '15%',
          width: '12%',
          height: '18%'
        }}
        onClick={handleCardClick}
        title="Нажмите на карту для гадания"
      />

      {/* Область предсказания */}
      {currentReading && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 text-white animate-fade-in z-20">
          <div className="text-center">
            <h3 className="text-xl text-yellow-400 mb-2 font-bold">
              {currentReading.name}
            </h3>
            <p className="text-yellow-300 font-medium mb-2">
              {currentReading.meaning}
            </p>
            <p className="text-sm leading-relaxed mb-3">
              {currentReading.description}
            </p>
            <button 
              onClick={() => setCurrentReading(null)}
              className="px-4 py-2 bg-yellow-600 text-black rounded hover:bg-yellow-500 transition-colors"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Index;