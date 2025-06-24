function getFilteredData(data){
    let values={}
    let outputData=[]
    values['name']=document.getElementById('name').value
    values['type']=document.getElementById('type').value
    values['country']=document.getElementById('country').value
    values['maxSpeed']=document.getElementById('maxSpeed').value
    values['yearFrom']=document.getElementById('yearFrom').value
    values['yearTo']=document.getElementById('yearTo').value
    values['heightFrom']=document.getElementById('heightFrom').value
    values['heightTo']=document.getElementById('heightTo').value
    if(checkInputFields(values)){
        data.forEach(item => {
            let flagToInput=true
            let checkedData={}
            if(values.name!==''){
                if(item.name.indexOf(values.name)===-1) flagToInput=false
            }
            if(values.type!==''){
                if(item.type.indexOf(values.type)===-1) flagToInput=false
            }
            if(values.country!==''){
                if(item.country.indexOf(values.country)===-1) flagToInput=false
            }
            if(values.maxSpeed!==''){
                if(values.maxSpeed!==item.maxSpeed) flagToInput=false
            }
            if(values.yearFrom!==''){
                let yearFrom=Number(values.yearFrom)
                if(yearFrom>item.year) flagToInput=false
            }
            if(values.yearTo!==''){
                let yearTo=Number(values.yearTo)
                if(yearTo<item.year) flagToInput=false
            }
            if(values.heightFrom!==''){
                let heightFrom=Number(values.heightFrom)
                if(heightFrom>item.height) flagToInput=false
            }
            if(values.heightTo!==''){
                let heightTo=Number(values.heightTo)
                if(heightTo<item.height) flagToInput=false
            }
            if(flagToInput) outputData.push(item)
        })
    }else{
        document.getElementById('errorFilter').innerHTML='Ошибка в фильтре значений'
    }
    return outputData
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
    if(values.heightFrom!==""){
        if(!isNaN(values.heightFrom) && isFinite(values.heightFrom)){
            values.heightFrom=Number(values.heightFrom)
        } else{
            return false
        }
    }
    if(values.heightTo!==""){
        if(!isNaN(values.heightTo) && isFinite(values.heightTo)){
            values.heightTo=Number(values.heightTo)
        } else{
            return false
        }
    }

    return true
}