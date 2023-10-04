const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  const response = users.map(user => user.attributes).flat();
  console.log("Map - Flat", response);

  const responseFlatMap = users.flatMap(user => user.attributes);
  console.log("Flat - Map", responseFlatMap);


// Using Calendar - Dates
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const objectKeys = Object.keys(calendars);
console.log(objectKeys);

// Object.values returns an array object type
const objectValues = Object.values(calendars).flat();
console.log(objectValues);

const startDateArray = Object.values(calendars).flatMap(element => {
    return element.map(date => date.startDate);
});
console.log(startDateArray);
