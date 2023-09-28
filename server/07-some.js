const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');


const numbers = [1, 2, 3, 4];

// Using a for loop to discover if numbers' array match the condition of having an even number.
let response = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        response = true;
        break;
    }
}
console.log(response);

// Using a some method to discover if numbers' array match the condition of having an even number. Refactoring...
const responseSome = numbers.some(item => item % 2 === 0);
console.log(responseSome);

// Using Some method on objects.
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

const responseObjectSome = orders.some(element => element.delivered);
console.log(responseObjectSome);



// Now we are using some to detect if there are appointments crossing over the same date and time.
// Also using date-fns library to manage date objects in JS.
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  const isOverlapped = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
  }

  console.log("Is Appoinment overlapped?", isOverlapped(newAppointment));