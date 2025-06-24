const btnFilter=document.getElementById('bthFilter')
const firstFieldSort=document.getElementById('fieldsFirst')
const secondFieldSort=document.getElementById('fieldsSecond')
const thirdFieldSort=document.getElementById('fieldsThird')
const btnSort=document.getElementById('btnSort')

document.addEventListener('DOMContentLoaded', function (){
    createTable(data, 'table')
    let sort=document.getElementById('sort')
    setSortSelects(data[0], sort)
    let selects = sort.getElementsByTagName('select');
    selects[0].addEventListener("change", function(){changeNextSelect(selects[1].id, selects[0])});
    selects[1].addEventListener("change", function(){changeNextSelectSecond(selects[2].id, selects[0], selects[1])});

})
btnFilter.addEventListener('click', function (){
    console.log('123')
    createTable(getFilteredData(data), 'table')
})

let createOption = (str, val) =>{
    let item=document.createElement('option')
    item.text=str;
    item.value=val
    return item
}

let setSortSelect=(head, sortSelect) =>{
    sortSelect.append(createOption('Нет', 0))
    for(let i in head){
        sortSelect.append(createOption(head[i], Number(i)+1))
    }
}

let setSortSelects=(data, dataForm)=>{
    let head=Object.keys(data)
    let allSelect=dataForm.getElementsByTagName('select')
    for(let j=0; j<allSelect.length;j++){
        setSortSelect(head, allSelect[j])
        if(j!==0){
            allSelect[j].disabled=true
        }
    }
}

let changeNextSelect = (nextSelectId, curSelect)=>{
    let nextSelect=document.getElementById(nextSelectId)

    nextSelect.innerHTML=curSelect.innerHTML
    if(curSelect.value!=0){
        nextSelect.disabled=false
        nextSelect.remove(curSelect.value)
    } else{
        nextSelect.disabled=true;
        thirdFieldSort.disabled=true;
        thirdFieldSort.value=0;
    }
}

let changeNextSelectSecond = (nextSelectId, beforeSelectValue, curSelect)=>{
    let nextSelect=document.getElementById(nextSelectId)
    //let before=document.getElementById(beforeSelectId)
    nextSelect.innerHTML=curSelect.innerHTML
    if(curSelect.value!=0){
        nextSelect.disabled=false
        nextSelect.remove(curSelect.value-1)
        nextSelect.remove(before.value)
    } else{
        nextSelect.disabled=true;
    }
}

btnSort.addEventListener('click', ()=>{
    sortTable('table', document.getElementById('sort'))
})

document.getElementById('bthCrateGraph').addEventListener('click', () => {
    const filtered = getFilteredData(data);
    if (filtered.length === 0) {
        document.getElementById('errorFilter').innerHTML = 'Нет данных для построения графика';
    } else {
        drawGraph(filtered);
    }
});
