import apiCards from "api/cards.json";
import { useEffect, useState } from "react";
function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(apiCards);
    console.log(cards)
  }, []);

  return (
    <div className="container mb-7">
      <div className="grid grid-cols-1 md:grid-cols-3 px-3 md:px-0 gap-4">
        {cards &&
          cards.map((item) => (
            <div className="bg-white shadow rounded-lg shadow-slate-100 hover:shadow-slate-300 transition-all p-10 flex flex-col items-center justify-center text-center gap-y-2" key={item.id}>
              <img src={item.image} alt={item.title}/>
              <strong className="text-lg text-primary">{item.title}</strong>
              <div className="text-sm text-gray-400">{item.description}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
