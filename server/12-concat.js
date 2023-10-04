const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

console.log("For loop", newArray);

const newArrayConcat = elements.concat(otherElements);
console.log("Concat method", newArrayConcat);

const newArraySpreadOp = [...elements, ...otherElements];
console.log("...", newArraySpreadOp);

elements.push(...otherElements);
console.log("Push method", elements);