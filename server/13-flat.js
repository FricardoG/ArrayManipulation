const matrix = [
    [1,2,3],
    [4,5,6, [1,2, [1,2,]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i];
    for (let j = 0; j < array.length; j++) {
        const element = matrix[i][j];
        newArray.push(element);
    }
}
console.log("For loop", newArray);

// Using Flat method.
const response = matrix.flat(3);
console.log("Flat", response);