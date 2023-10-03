const numbers = [1, 30, 49, 29, 10, 13];

let response = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        response = false; 
    }
}
console.log("For loop", response);

// Using every method
const responseEvery = numbers.every(element => element <= 40);
console.log("Every method", responseEvery)


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];

  const responseTeamEvery = team.every(element => element.age <= 15);
  console.log("Team - Every method", responseTeamEvery);