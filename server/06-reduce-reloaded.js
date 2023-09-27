const elements = [1,3,2,3];

// Using reduce method to count how many times a simple element is repeated within the array. Expected outcome is an object
const response = elements.reduce((obj, element) => {
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] += 1;
    }
    return obj;
}, {});
console.log(response);

// Expected Output: a Single object like the following one.
// {
//     1: 1,
//     3: 2,
//     2: 1,
// }

const data = [
    {
        name: 'Fabian',
        level: "low",
    },
    {
        name: 'Paula',
        level: "medium",
    },
    {
        name: 'Fernando',
        level: "high",
    },
    {
        name: 'Camilo',
        level: "low",
    },
    {
        name: 'Viviana',
        level: "medium",
    },
    {
        name: 'Ximena',
        level: "high",
    },
];

const responseData = data
    .map(element => element.level)
    .reduce((obj, element) => {
        if(!obj[element]){
            obj[element] = 1;
        }else{
            obj[element] += 1;
        }
        return obj;
    }, {});
console.log(responseData);