function createTable(data, idTable){
    let table=document.getElementById(idTable)
    table.innerHTML=''
    let tr=document.createElement('tr')
    for(let key in data[0]){
        let th=document.createElement('th')
        th.append(key)
        tr.append(th)
    }
    table.append(tr)
    data.forEach(item => {
        let tr=document.createElement('tr')
        for(let key in item){
            let td=document.createElement('td')
            td.append(item[key])
            tr.append(td)
        }
        table.append(tr)
    })
}

let clearTable = (idTable) => {
    let table = document.getElementById(idTable);
    table.innerHTML = "";
}

