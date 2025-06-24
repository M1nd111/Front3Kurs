function drawSmile(svg){
    let smile = svg.append('g')
        .style('stroke', 'black')
        .style('stroke-width', 2);

    smile.append("circle") // лицо
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 30)
        .style('fill', 'green');

    smile.append('circle') // левый глаз
        .attr('cx', -15)
        .attr('cy', -10)
        .attr('r', 4)
        .style('stroke', 'white')
        .style('fill', 'black');


    smile.append('circle') // правый глаз
        .attr('cx', 15)
        .attr('cy', -10)
        .attr('r', 4)
        .style('stroke', 'white')
        .style('fill', 'black');

    smile.append('circle') // нос
        .attr('cx', 0)
        .attr('cy', 5)
        .attr('r', 2)

    let arc=d3.arc()
        .innerRadius(18)
        .outerRadius(18);
    smile.append("path")
        .attr("d", arc({startAngle: Math.PI /3 *2, endAngle:Math.PI/3 *4}))
    return smile
}
