const products = [
    {title: "Pizza", price: 121, id: "🍕"},
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const myProducts = [];
console.log("Products", products);
console.log("MyProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(element => element.id === '🍔');
if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log("Products", products);
console.log("MyProducts", myProducts);
console.log("-".repeat(10));

// Updatin an array (Mutating it)

const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'Delicious'
    }
}

const productIndexV2 = productsV2.findIndex(element => element.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes

}
console.log(productsV2)