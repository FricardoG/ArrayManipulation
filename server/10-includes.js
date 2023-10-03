const pets = ['cat', 'dog', 'bat'];

let includedInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element == 'dog'){
        includedInArray = true;
        break;
    }
}
console.log("For loop", includedInArray);

const responseIncludes = pets.includes('dog');
console.log('Includes method', responseIncludes);