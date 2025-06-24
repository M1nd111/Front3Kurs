import React, { useState } from 'react';
import './App.css';

interface ListItem {
  id: number;
  text: string;
  clicks: number;
}

interface НажмательныйЛистProps {
  items: string[];
}

const НажмательныйЛист: React.FC<НажмательныйЛистProps> = ({ items }) => {
  const [listItems, setListItems] = useState<ListItem[]>(
    items.map((item, index) => ({
      id: index,
      text: item,
      clicks: 0,
    }))
  );

  const кликать = (id: number): void => {
    setListItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, clicks: item.clicks + 1 } : item
        )
        .sort((a, b) => b.clicks - a.clicks)
    );
  };

  return (
    <div>
      <ol>
        {listItems.map((item) => (
          <li
            key={item.id}
            onClick={() => кликать(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {item.text}
            {item.clicks > 0 && ` (${item.clicks})`}
          </li>
        ))}
      </ol>
    </div>
  );
};

const App: React.FC = () => {
  const initialItems: string[] = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];

  return (
    <div>
      <h1>Нажмать на пункт списка</h1>
      <НажмательныйЛист items={initialItems} />
    </div>
  );
};

export default App;