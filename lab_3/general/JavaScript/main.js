const options = ["linear", "elastic", "bounce"]

document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height) ;

    const animCbx= document.getElementById("animationCbx");
    animCbx.addEventListener("change", function() {
        manageAnimationPage(animCbx);
    })

    const pathCbx= document.getElementById("pathCbx");
    pathCbx.addEventListener("change", function() {
        managePathPage(pathCbx);
    })

    createOptionsInSelect();
    manageAnimationPage(animCbx);
    managePathPage(pathCbx);

})

function managePathPage(pathCbx) {
    const displays = ["none", ""];
    let ind = pathCbx.checked ? 1 : 0;

    let paragraphs = d3.select("#setting").select("div").selectAll("p")._groups[0];

    paragraphs[0].style.display = displays[1-ind];
    paragraphs[1].style.display = displays[ind];
}

// let runAnimation = (dataForm) => {

//     const svg = d3.select("svg")
//     let pict = drawSmile(svg);

//     let slct = dataForm.animationType;
//     let animType = slct.options[slct.selectedIndex].value;

//     let resType;

//     switch(animType) {
//         case "linear":
//             resType = d3.easeLinear;
//             break;
//         case "bounce":
//             resType = d3.easeBounce;
//             break;
//         case "elastic":
//             resType = d3.easeElastic;
//     }

//     if (dataForm.pathCbx.checked) {

//         let path = drawPath(dataForm.pathSelect.selectedIndex);
//         pict.transition()
//             .ease(resType) // установить в зависимости от настроек формы
//             .duration(6000)
//             .attrTween('transform', translateAlong(path.node()));

//         return;
//     }

//     pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value}) 
//                             scale(${dataForm.xscale.value}, ${dataForm.yscale.value}) 
//                             rotate(${dataForm.angle.value})`)
//         .transition()
//         .duration(6000)
//         .ease(resType)
//         .attr("transform", `translate(${dataForm.cxEnd.value}, ${dataForm.cyEnd.value}) 
//                             scale(${dataForm.xscaleEnd.value}, ${dataForm.yscaleEnd.value}) 
//                             rotate(${dataForm.angleEnd.value})`);

// }


let runAnimation = (dataForm) => {
    const svg = d3.select("svg");
    svg.selectAll('path').remove(); // Очищаем предыдущие пути
    let pict = drawSmile(svg);

    const animType = dataForm.animationType.value;
    const resType = {
        linear: d3.easeLinear,
        bounce: d3.easeBounce,
        elastic: d3.easeElastic
    }[animType] || d3.easeLinear;

    if (dataForm.pathCbx.checked) {
        const pathType = parseInt(dataForm.pathSelect.value);
        const startX = parseInt(dataForm.cx.value) || 100;
        const startY = parseInt(dataForm.cy.value) || 100;
        const startScaleX = parseFloat(dataForm.xscale.value) || 1;
        const startScaleY = parseFloat(dataForm.yscale.value) || 1;
        const endScaleX = parseFloat(dataForm.xscaleEnd.value) || 1;
        const endScaleY = parseFloat(dataForm.yscaleEnd.value) || 1;
        const startAngle = parseInt(dataForm.angle.value) || 0;
        const endAngle = parseInt(dataForm.angleEnd.value) || 0;

        // Создаем путь с учетом начальных координат и масштаба
        const path = pathType === 0 ? 
            drawPath('blue', createPathG(startX, startY, startScaleX, startScaleY)) :
            drawPath('blue', createPathCircle(startX, startY, startScaleX, startScaleY));

        const transformData = [
            startScaleX, endScaleX, 
            startScaleY, endScaleY, 
            startAngle, endAngle
        ];

        pict.transition()
            .ease(resType)
            .duration(6000)
            .attrTween('transform', translateAlong(path.node(), 6000, transformData));

    } else {
        // Стандартная анимация без пути
        pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value}) 
                              scale(${dataForm.xscale.value}, ${dataForm.yscale.value}) 
                              rotate(${dataForm.angle.value})`)
            .transition()
            .duration(6000)
            .ease(resType)
            .attr("transform", `translate(${dataForm.cxEnd.value}, ${dataForm.cyEnd.value}) 
                              scale(${dataForm.xscaleEnd.value}, ${dataForm.yscaleEnd.value}) 
                              rotate(${dataForm.angleEnd.value})`);
    }
};


function createOptionsInSelect() {
    let select = document.getElementById("animationType");

    for (let i in options) {
        let opt = document.createElement("option");
        opt.value = options[i];
        opt.innerHTML = options[i];
        select.append(opt);
    }
    select.children[0].selected = true;

}


function manageAnimationPage(animCbx) {
    const status = animCbx.checked;
    const displayState = status ? "" : "none";
    const btnState = status ? "none" : "";

    document.getElementById("pathCbx").disabled = !status;

    let s = d3.select("#setting")
        .select("div")
        .selectAll('*')
        .selectAll('*')._parents;

    for (let i = 0; i < s.length; i++){
        let el = s[i];
        if ((el.hasAttribute("for") && el.getAttribute("for").indexOf("End") !== -1) || el.id.indexOf("End") !== -1){
            el.style.display = displayState;
        }
    }
    let select = document.getElementById("animationType");
    select.style.display = displayState;

    let animButton = document.getElementById("animButton");
    animButton.style.display = displayState;

    let drawButton = document.getElementById("drawButton");
    drawButton.style.display = btnState;
}

let draw = (dataForm) => {
    const svg = d3.select("svg")
    let pict = drawSmile(svg)
    pict.attr("transform", `translate(${dataForm.cx.value},
                                      ${dataForm.cy.value}) 
                            scale(${dataForm.xscale.value},
                                  ${dataForm.yscale.value}) 
                            rotate(${dataForm.angle.value})`);
    moveRight(pict);
}

let clearForm = (dataForm) => {

    dataForm.cx.value = 100;
    dataForm.cy.value = 100;
    dataForm.cxEnd.value = 100;
    dataForm.cyEnd.value = 100;

    dataForm.xscale.value = 1;
    dataForm.yscale.value = 1;
    dataForm.xscaleEnd.value = 1;
    dataForm.yscaleEnd.value = 1;

    dataForm.angle.value = 0;
    dataForm.angleEnd.value = 0;

    d3.select("svg").selectAll('*').remove();

    dataForm.pathCbx.checked = false;
    dataForm.animationCbx.checked = false;

    manageAnimationPage(dataForm.animationCbx);
    managePathPage(dataForm.pathCbx);
}