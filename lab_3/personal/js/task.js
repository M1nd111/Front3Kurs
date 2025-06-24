document.addEventListener('DOMContentLoaded', ()=>{
    let out=d3.selectAll('ol').selectAll('li');
    console.log(out._groups);
    let newOl=document.createElement('ol')
    out._groups.forEach((item)=>{
        for(let i=0; i<item.length; i++){
            let newLi=document.createElement('li')
            newLi.append(item[i].innerHTML);
            newOl.append(newLi);
        }
    })
    document.getElementById('task').append(newOl)
    console.log(newOl);
})