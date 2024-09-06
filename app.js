
async function FetchData(){
    try{
        const r = await fetch('./data.json')
        if(r.ok === true){
            return r.json()
        }

        throw new Error("Impossible d'afficher les éléments")
    }catch(e){
        console.error(e)
    }

}
const datas = await FetchData()

datas.forEach(data => {
    const ul= document.querySelector('#ul')
    const li = document.createElement('li')
    li.innerHTML = `
            <div>
              <img src="${data.icon}" alt="${data.category}">
              <span>${data.category}</span>
            </div>
            <div>
              <span>${data.score}</span>
              <span>/ 100</span>
            </div>
    `
    ul.appendChild(li)
});

console.log(datas)
// fetch('data.json')
//     .then(value=>console.log(value))