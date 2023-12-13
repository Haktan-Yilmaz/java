
let fruit = [];

fruit.push("appel");
fruit.push("banaan");
fruit.push("sinaasapple");

console.log(fruit[0]); 
console.log(fruit[1]); 

console.log(fruit.length); 

fruit[1] = "peer"; 

fruit.pop(); 

fruit.splice(1, 0, "bosbessen", "citroen", )

console.log(fruit);

fruit.sort();

console.log("Het tweede stuk fruit is " + fruit[1]);