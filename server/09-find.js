const numbers = [1, 30, 49, 29, 10, 13];

let response = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30){
        response = element;
        break;
    }
}
console.log("For loop", response);

const responseFind = numbers.find(element => element === 30);
console.log("Find method", responseFind);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const responseFindFood = products.find(element => element.id === '🍔');
  console.log("Find food element", responseFindFood);

  const responseFindIndexFood = products.findIndex(element => element.id === '🍔');
  console.log("Find food element", responseFindIndexFood);