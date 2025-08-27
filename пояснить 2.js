function showFruit(){
    console.log(this.fruit);
}
showFruit(); // undefined, because this is window object and there is no fruit property
const orangeBasket = {fruit: "orange"};
showFruit.call(orangeBasket); // "orange"