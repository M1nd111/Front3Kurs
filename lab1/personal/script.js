function calculate() {
    let base = parseFloat(document.getElementById("base1").value);
    let height = parseFloat(document.getElementById("base2").value);
    let inputType = document.querySelector('input[name="inputType"]:checked').value;
    let output = document.getElementById("output");
    output.innerHTML = "";

    let errors = [];

    if (isNaN(base) || base <= 0) errors.push("Введите корректное значение для основания.");
    if (isNaN(height) || height <= 0) errors.push("Введите корректное значение для высоты.");

    let extra1, extra2;
    if (inputType === "side") {
        extra1 = parseFloat(document.getElementById("side1").value);
        extra2 = parseFloat(document.getElementById("side2").value);
        if (isNaN(extra1) || extra1 <= 0) errors.push("Введите корректное значение для боковой стороны C.");
        if (isNaN(extra2) || extra2 <= 0) errors.push("Введите корректное значение для боковой стороны D.");
    } else {
        extra1 = parseFloat(document.getElementById("angle1").value);
        extra2 = parseFloat(document.getElementById("angle2").value);
        if (isNaN(extra1) || extra1 <= 0) errors.push("Введите корректное значение для угла α.");
        if (isNaN(extra2) || extra2 <= 0) errors.push("Введите корректное значение для угла β.");
    }

    if (errors.length > 0) {
        output.innerHTML = errors.map(err => `<p class='error-message'>${err}</p>`).join("");
        return;
    }

    let perimeter, unknownSides, diagonal1, diagonal2, angleBetweenDiagonals;

    if (inputType === "side") {
        let b = base + 2 * (Math.sqrt(extra1 ** 2 - height ** 2) + Math.sqrt(extra2 ** 2 - height ** 2));
        perimeter = base + b + extra1 + extra2;
        diagonal1 = Math.sqrt(extra1 ** 2 + ((b - base) / 2) ** 2 + height ** 2);
        diagonal2 = Math.sqrt(extra2 ** 2 + ((b - base) / 2) ** 2 + height ** 2);
        angleBetweenDiagonals = Math.acos((diagonal1 ** 2 + diagonal2 ** 2 - (base - b) ** 2) / (2 * diagonal1 * diagonal2)) * (180 / Math.PI);
        unknownSides = `Второе основание: ${b.toFixed(2)}`;
    } else {
        let alpha = extra1 * (Math.PI / 180);
        let beta = extra2 * (Math.PI / 180);
        let c = height / Math.sin(alpha);
        let d = height / Math.sin(beta);
        let b = base + c * Math.cos(alpha) + d * Math.cos(beta);
        perimeter = base + b + c + d;
        diagonal1 = Math.sqrt(c ** 2 + ((b - base) / 2) ** 2 + height ** 2);
        diagonal2 = Math.sqrt(d ** 2 + ((b - base) / 2) ** 2 + height ** 2);
        angleBetweenDiagonals = Math.acos((diagonal1 ** 2 + diagonal2 ** 2 - (base - b) ** 2) / (2 * diagonal1 * diagonal2)) * (180 / Math.PI);
        unknownSides = `Боковые стороны: C = ${c.toFixed(2)}, D = ${d.toFixed(2)}`;
    }

    let results = [];

    if (document.getElementById("perimeter").checked) {
        results.push(`Периметр: ${perimeter.toFixed(2)}`);
    }
    if (document.getElementById("unknownSides").checked) {
        results.push(unknownSides);
    }
    if (document.getElementById("diagonal").checked) {
        results.push(`Диагональ 1: ${diagonal1.toFixed(2)}`);
        results.push(`Диагональ 2: ${diagonal2.toFixed(2)}`);
    }
    if (document.getElementById("angleBetweenDiagonals").checked) {
        results.push(`Угол между диагоналями: ${angleBetweenDiagonals.toFixed(2)}°`);
    }

    output.innerHTML = results.map(res => `<p>${res}</p>`).join("");
}

function clearFields() {
    document.getElementById("base1").value = "";
    document.getElementById("base2").value = "";
    document.getElementById("side1").value = "";
    document.getElementById("side2").value = "";
    document.getElementById("angle1").value = "";
    document.getElementById("angle2").value = "";
    document.getElementById("output").innerHTML = "";
}