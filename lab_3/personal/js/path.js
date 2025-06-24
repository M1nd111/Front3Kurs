function createNPath() {
  const pathPoints = [];

  pathPoints.push({ x: 300, y: 50 });
  pathPoints.push({ x: 300, y: 300 });
  pathPoints.push({ x: 50, y: 50 });
  pathPoints.push({ x: 50, y: 300 });

  return pathPoints;
}

let drawPath = (typePath) => {
  const svg = d3.select('svg');

  const dataPoints = createNPath();
  const line = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);

  const path = svg.append('path')
    .attr('d', line(dataPoints))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  return path;
};

// function translateAlong(path) {
//   const length = path.getTotalLength();

//   const diffX = Math.trunc(
//     document.getElementById('scaleXTo').value - document.getElementById('scaleX').value
//   );
//   const diffY = Math.trunc(
//     document.getElementById('scaleYTo').value - document.getElementById('scaleY').value
//   );

//   return function () {
//     return function (t) {
//       const { x, y } = path.getPointAtLength(t * length);
//       const xScale = Number(document.getElementById('scaleX').value) + diffX * t;
//       const yScale = Number(document.getElementById('scaleY').value) + diffY * t;

//       return `translate(${x},${y}) scale(${xScale}, ${yScale})`;
//     };
//   };
// }

function translateAlong(path) {
  const length = path.getTotalLength(); 

  const scaleFrom = parseFloat(document.getElementById('scaleFrom').value); //нач масштаб
  const scaleTo = parseFloat(document.getElementById('scaleTo').value); // конечн масштаб
  const scaleDiff = scaleTo - scaleFrom;

  return function () {
    return function (t) {
      const { x, y } = path.getPointAtLength(t * length);
      const scale = scaleFrom + scaleDiff * t;
      return `translate(${x},${y}) scale(${scale})`;
    };
  };
}
