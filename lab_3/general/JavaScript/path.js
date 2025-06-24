
function createPathG(startX, startY, scaleX = 1, scaleY = 1) {
    const svg = d3.select("svg");
    const width = svg.attr("width");
    const height = svg.attr("height");

    let data = [];
    const padding = 50 * Math.min(scaleX, scaleY);
    let posX = startX;
    let posY = startY;
    const step = 5 * Math.min(scaleX, scaleY);

    // Вертикальная линия вверх
    while (posY > padding) {
        data.push({x: posX, y: posY});
        posY -= step;
    }

    // Горизонтальная линия вправо
    while (posX < width - padding) {
        data.push({x: posX, y: posY});
        posX += step;
    }

    return data;
}

function createPathCircle(startX, startY, scaleX = 1, scaleY = 1) {
    let data = [];
    const radius = 100 * ((scaleX + scaleY) / 2);
    const points = 100; // Количество точек для гладкости
    
    for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        data.push({
            x: startX + radius * Math.cos(angle),
            y: startY + radius * Math.sin(angle)
        });
    }
    
    return data;
}



function drawPath(color, dataPoints) {
    const line = d3.line()
        .x(d => d.x)
        .y(d => d.y);

    return d3.select("svg").append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', "brown")
        .attr('fill', 'none')
        .attr('stroke-width', 2);
}


function translateAlong(path, duration, transformData) {
    const length = path.getTotalLength();
    const [startScaleX, endScaleX, startScaleY, endScaleY, startAngle, endAngle] = transformData;
    
    return function() {
        return function(t) {
            const {x, y} = path.getPointAtLength(t * length);
            const currentScaleX = startScaleX + (endScaleX - startScaleX) * t;
            const currentScaleY = startScaleY + (endScaleY - startScaleY) * t;
            const currentAngle = startAngle + (endAngle - startAngle) * t;
            
            return `translate(${x}, ${y}) scale(${currentScaleX}, ${currentScaleY}) rotate(${currentAngle})`;
        };
    };
}