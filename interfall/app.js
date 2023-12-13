// function showMessage(){
//     console.log("Hallo, dit bericht komt elke seconde in mijn console");

// }

// let interval = setInterval(showMessage, 1000)
// setTimeout(() =>{
//     clearInterval(interval)
// }, 5000)


let colors = ["red", "green", "blue"]
let random_getal = Math.floor(Math.random() * 3)

function changeColors() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 3)];

}
setInterval(changeColors, 100);



