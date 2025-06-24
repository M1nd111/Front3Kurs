let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = data.getElementsByTagName('select');

    for (let i = 0; i < sortSelects.length; i++) {
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
        sortArr.push(
            {column: keySort - 1,
                order: desc}
        );
    }
    return sortArr;
};

let sortTable = (idTable, data) => {

    let sortArr = createSortArr(data);

    if (sortArr.length === 0) {
        return false;
    }
    let table = document.getElementById(idTable);

    let rowData = Array.from(table.rows);

    let header = rowData.shift();

    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
            if(key===3 || key===4 || key===5){
                let firstNum=Number(first.cells[key].innerHTML)
                let secondNum=Number(second.cells[key].innerHTML)
                if(firstNum > secondNum){
                    return !sortArr[i].order ? 1:-1
                } else if(firstNum < secondNum){
                    return !sortArr[i].order ? -1: 1
                }
            }else{
            if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
                return !sortArr[i].order ? 1 : -1;
            } else if (first.cells[key].innerHTML < second.cells[key].innerHTML){
                return !sortArr[i].order ? -1 : 1;
            }
            }
        }
        return 0;
    });

    clearTable(idTable);
    rowData.unshift(header);
    rowData.forEach(row => table.append(row));
}