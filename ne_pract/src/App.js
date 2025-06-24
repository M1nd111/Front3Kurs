import './CSS/App.css';
import Table from './components/Table.js';
import cars from "./data.js";

function App() {
  return (
    <div className="App">
      <h1>Статистика мемов</h1>
      <Table data={cars} amountRows={15} />
    </div>
  );
}

export default App;