let block = document.getElementById("block");
let position = 0
let vertical = 0

window.addEventListener("keydown", function(e){

    if(e.key == "w"){
        console.log(e.key);
        vertical -= 10
        block.style.top = vertical + "px"
    }
    
    if(e.key == "s"){
        console.log(e.key);
        vertical += 10
        block.style.top = vertical + "px"
    }

    if(e.key == "a"){
        console.log(e.key);
        position -= 10
        block.style.left = position + "px"
        
    }
    
    if(e.key == "d"){
        console.log(e.key);
        position += 10
        block.style.left = position + "px"
    }
    
})
console.log(position);
