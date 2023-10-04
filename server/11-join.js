const elements = ['Fire', 'Air', 'Water'];

let finalResponse = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    finalResponse = finalResponse + element + separator;
}
console.log("For method", finalResponse);

const response = elements.join('--');
console.log("Join method", response);

const title = 'Array Manipulation';
const titleURL = title.split(' ').join('-').toLowerCase();
console.log(titleURL); 
