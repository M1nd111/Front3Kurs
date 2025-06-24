import React, { useState } from 'react';
import './App.css';

const нажмательныйлист = (props) => {
  const [listItems, setListItems] = useState(
    props.items.map((item, index) => ({
      id: index,
      text: item,
      clicks: 0,
    }))
  );

  const кликать = (id) => {
    setListItems((prevItems) => prevItems.map((item) =>
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

const App = () => {
  const initialItems = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];
  return (
    <div>
      <h1>Нажмать на пункт списка</h1>
      <нажмательныйлист items={initialItems} />
    </div>
  );
};

export default App;
