const words = [ 'spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6){
        newArray.push(element);
    }
}

console.log('Original array', words);
console.log('New Array', newArray);

//Using filter, refactoring a for loop method.
const newFilteredArray = words.filter(element => element.length >= 6);

console.log('Original array', words);
console.log('New Filtered Array', newFilteredArray);


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
    {
        customerName: 'Carmelo',
        total: 45,
        delivered: false,
    },
];

const deliveredOrders = orders.filter(element => element.delivered && element.total >= 60);
console.log('New Array for delivered Orders', deliveredOrders);

const searchEspecificName = orders.filter(element => element.customerName === 'Francisco');
console.log('Searching an espcific name', searchEspecificName);

const searchByName = (query) => {
    return orders.filter(element => {
        return element.customerName.includes(query);
    })
}
console.log('Searching by name', searchByName('Car'));