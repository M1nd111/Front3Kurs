 document.addEventListener('DOMContentLoaded', () => {
    const width = 400;
    const height = 400;
    const svg = d3.select('svg')
        .attr("width", width)
        .attr("height", height);
})

let clearImg = () => {
    const svg = d3.select('svg')
    svg.selectAll('*').remove()
}

// let runAnimation = (dataForm) => {
//     const svg = d3.select('svg');
//     let pict = drawSmile(svg);
//     let path = drawPath();
//     pict.attr('transform', `translate(300, 300) scale(${dataForm.scaleX.value}, ${dataForm.scaleY.value})`)
//         .transition(svg)
//         .ease(eval('d3.ease' + dataForm.selectTypeAnimation.value))
//         .duration(Number(dataForm.timeAnimation.value))
//         .ease(eval('d3.ease'+dataForm.selectTypeAnimation.value))
//         .attr('transform', `scale(${dataForm.scaleXTo.value}, ${dataForm.scaleYTo.value})`)
//         .attrTween('transform', translateAlong(path.node()));
// }

let runAnimation = (dataForm) => {
  const svg = d3.select('svg');
  let pict = drawSmile(svg);
  let path = drawPath();

  // считываем значение начального и конечного масштабов из формы
  const scaleFrom = parseFloat(dataForm.scaleFrom.value);
  //const scaleTo = parseFloat(dataForm.scaleTo.value);
  pict.attr('transform', `translate(300, 300) scale(${scaleFrom})`)
    .transition(svg)
    .ease(eval('d3.ease' + dataForm.selectTypeAnimation.value)) // выбирам тип анимации
    .duration(Number(dataForm.timeAnimation.value)) // длительность задаем
    .attrTween('transform', translateAlong(path.node()));
};




// const svg = d3.select('svg');
// const path = drawPath();
// const circle = svg.append("circle")
//   .attr("r", 6)
//   .attr("fill", "brown");

// document.getElementById("startBtn").addEventListener("click", () => {
//   const duration = parseInt(document.getElementById("duration").value);

//   circle.transition()
//     .duration(duration)
//     .attrTween("transform", translateAlong(path.node()));
// });