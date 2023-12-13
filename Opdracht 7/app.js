let button = document.getElementById("block")
let colors = ["green", "red", "blue", "purple", "yellow"];



button.addEventListener("click", function(){
    let random_Getal = Math.floor(Math.random()*5)
    button.style.backgroundColor = colors[random_Getal];
})