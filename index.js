// console.log(fetch("https://preview.redd.it/tj2xp5c3hkmx.png?auto=webp&s=5243bad866383916f2c63f6533be91d1afa8fecd")).then(response =>{
//     console.log(response)
//     return response.blob()
// })
// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })
// .catch(error =>{
//     console.log(error)
// })

const content = document.querySelector('#content')

window.addEventListener("load", ()=>{
    getUsers();
})

function getUsers(){
    
    let html =""

    fetch("http://localhost:5008/api/members", {mode: "cors"})

    .then((response )=>{
        console.log(response)
        return response.json();
    })
    
    .then((data)=>{
        data.forEach((element)=>{
            html += `<li> ${element.first_name} ${element.last_name}</li>` 
        })
        content.innerHTML = html
    })

    .catch((error)=>{
        console.log(error)
    })
}