const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('Original', letters);
console.log('New One', newArray);


// Map method used on letters Array // Same Result as previous For method.
const newMappedArray = letters.map(item => item + '++');

console.log('Original', letters);
console.log('New One', newMappedArray);