function getFilteredData(data) {
    let values = {};
    let outputData = [];
    values['name'] = document.getElementById('name').value;
    values['type'] = document.getElementById('type').value;
    values['country'] = document.getElementById('country').value;
    values['maxSpeed'] = document.getElementById('maxSpeed').value;
    values['yearFrom'] = document.getElementById('yearFrom').value;
    values['yearTo'] = document.getElementById('yearTo').value;
    values['priceFrom'] = document.getElementById('priceFrom').value;
    values['priceTo'] = document.getElementById('priceTo').value;

    if (checkInputFields(values)) {
        data.forEach(item => {
            let flagToInput = true;

            // Преобразуем поля item к строке и сравниваем по includes()
            if (values.name !== '') {
                if (!item.name.toLowerCase().includes(values.name.toLowerCase())) flagToInput = false;
            }
            if (values.type !== '') {
                if (!item.type.toLowerCase().includes(values.type.toLowerCase())) flagToInput = false;
            }
            if (values.country !== '') {
                if (!item.country.toLowerCase().includes(values.country.toLowerCase())) flagToInput = false;
            }

            if (values.maxSpeed !== '') {
                if (values.maxSpeed !== item.maxSpeed) flagToInput = false;
            }
            if (values.yearFrom !== '') {
                let yearFrom = Number(values.yearFrom);
                if (yearFrom > item.year) flagToInput = false;
            }
            if (values.yearTo !== '') {
                let yearTo = Number(values.yearTo);
                if (yearTo < item.year) flagToInput = false;
            }
            if (values.priceFrom !== '') {
                let priceFrom = Number(values.priceFrom);
                if (priceFrom > item.price) flagToInput = false;
            }
            if (values.priceTo !== '') {
                let priceTo = Number(values.priceTo);
                if (priceTo < item.price) flagToInput = false;
            }

            if (flagToInput) outputData.push(item);
        });
    } else {
        document.getElementById('errorFilter').innerHTML = 'Ошибка в фильтре значений';
    }

    return outputData;
}


function checkInputFields(values){
    if(values.name!==""){
        if(typeof values.name !== 'string'){
        return false
        }
        values.name=values.name.trim()
    }
    if(values.type!==""){
        if(typeof values.type !=='string'){
            return false
        }
        values.type=values.type.trim()
    }
    if(values.country!==""){
        if(typeof values.country !=='string'){
            return false
        }
        values.country=values.country.trim()
    }
    if(values.maxSpeed!==""){
        if(!isNaN(values.maxSpeed) && isFinite(values.maxSpeed)){
            values.maxSpeed=Number(values.maxSpeed)
        } else{
            return false
        }
    }
    if(values.yearFrom!==""){
        if(!isNaN(values.yearFrom) && isFinite(values.yearFrom)){
            values.yearFrom=Number(values.yearFrom)
            if(!Number.isInteger(values.yearFrom)) return false
        } else{
            return false
        }
    }
    if(values.yearTo!==""){
        if(!isNaN(values.yearTo) && isFinite(values.yearTo)){
            values.yearTo=Number(values.yearTo)
            if(!Number.isInteger(values.yearTo)) return false
        } else{
            return false
        }
    }
    if(values.priceFrom!==""){
        if(!isNaN(values.priceFrom) && isFinite(values.priceFrom)){
            values.priceFrom=Number(values.priceFrom)
        } else{
            return false
        }
    }
    if(values.priceTo!==""){
        if(!isNaN(values.priceTo) && isFinite(values.priceTo)){
            values.priceTo=Number(values.priceTo)
        } else{
            return false
        }
    }

    return true
}