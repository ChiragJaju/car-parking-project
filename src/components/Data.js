export const DataLocations = [
  {
    name: "Home",
    address: "abccc",
    owner: "mr.abc",
    slots: [
      {
        number: 1,
        floor: 1,
        carType: "Jeep",
      }, // Have to create more
      {
        number: 2,
        floor: 1,
        carType: "Tank",
      },
      {
        number: 3,
        floor: 1,
        carType: "Car",
      },
    ],
    workers: [
      {
        name: "Aj",
        dateOfJoin: "---",
        salary: 2000,
        userRating: 4.5,
      },
    ],
    waitingList: [
      // {
      //   name: "--",
      //   checkIn: "--",
      //   checkOut: "--",
      //   car: "--",
      // },
    ],
    servicesProvided: ["Car Wash", "Tyre Changing", "Wheel Alignment"],
  },
];

export const User = [
  {
    name: "Ajay",
    username: "-",
    email: "-",
    boookings: [
      {
        slotNumber: 1,
        location: "-",
        checkIn: "-",
        checkOut: "-",
        regNumber: "-",
      },
    ],
  },
];
