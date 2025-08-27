const basket2 = {
    fruit: "banana",
    printFruit:() => {
        console.log(this.fruit);
    }
};
basket2.printFruit(); // undefined