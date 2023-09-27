const orders = [
    {
        customerName: 'Fabian',
        total: 50,
        delivered: true,
    },
    {
        customerName: 'Ricardo',
        total: 80,
        delivered: false,
    },
    {
        customerName: 'Francisco',
        total: 40,
        delivered: true,
    },
    {
        customerName: 'Carolina',
        total: 90,
        delivered: true,
    },
];
console.log('original', orders);

// const response = orders.map(item => item.total );
// console.log('response', response);

// const addingTax = orders.map(item => {
//     item.tax = .10;
//     return item;
// });
// console.log('addingTax', addingTax);
// console.log('original', orders); // Original object has been modified by using map incorrectly.

const newArray = orders.map(item => {
    return {
        ...item,
        tax: 0.10,
    };
});
console.log('newArray', newArray); // Original object is not modified if map method is used correctly.
console.log('Original', orders);



