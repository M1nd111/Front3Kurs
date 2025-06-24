import { useState } from 'react';
import ChartDraw from './ChartDraw';
import * as d3 from 'd3';

const Chart = ({ data }) => {
  const [ox, setOx] = useState('productionCount');
  const [oy, setOy] = useState([true, false]); 
  const [chartType, setChartType] = useState('scatter');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setOx(form['ox'].value);
    setOy([form['oy'][0].checked, form['oy'][1].checked]);
    setChartType(form['chartType'].value);

    if (!form['oy'][0].checked && !form['oy'][1].checked) {
      setError('Выберите хотя бы одно значение для оси OY');
    } else {
      setError('');
    }
  };

  const createArrGraph = (data, key) => {
    const groupObj = d3.group(data, (d) => d[key]);
    let arrGraph = [];

    for (let entry of groupObj) {
      let obj = { labelX: entry[0] };
      let rating = entry[1].map((d) => d['rating']);
      let price = entry[1].map((d) => d['price']);
      if (rating.length > 0) {
        if (oy[0]) obj.maxLikes = d3.max(rating);
        if (oy[1]) obj.maxReposts = d3.max(price);
      }
      arrGraph.push(obj);
    }

    return arrGraph;
  };

  return (
    <>
      <h3>Визуализация</h3>
      <form onSubmit={handleSubmit}>
        <p>Значение по оси OX:</p>
        <div>
          <input
            type="radio"
            name="ox"
            value="productionCount"
            defaultChecked={ox === 'productionCount'}
          />
            productionCount
          <br />
          <input type="radio" name="ox" value="maxSpeed" />
            maxSpeed
        </div>

        <p>Значение по оси OY:</p>
        <div>
          <input type="checkbox" name="oy" defaultChecked={oy[0]} />
          рейтинг
          <br />
          <input type="checkbox" name="oy" />
          прайс
        </div>

        <p>Тип диаграммы:</p>
        <select name="chartType" defaultValue={chartType}>
          <option value="scatter">Точечная диаграмма</option>
          <option value="bar">Гистограмма</option>
        </select>

        <p>
          <button type="submit">Построить</button>
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      {!error && (
        <ChartDraw
          dataInit={createArrGraph(data, ox)}
          oy={oy}
          chartType={chartType}
        />
      )}
    </>
  );
};

export default Chart;