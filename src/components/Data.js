export var DataLocations = [
  {
    name: "Home",
    address: "abccc",
    owner: "mr.abc",
    slots: [
      {
        number: 1,
        floor: 1,
        carType: "Jeep",
        bookings: [
          //   {
          //     name: "Ajay",
          //     checkIn: "-",
          //     checkOut: "-",
          //     details: "-",
          //   },
        ],
        userRating: 3.5,
      }, // Have to create more
      {
        number: 2,
        floor: 1,
        carType: "Tank",
        bookings: [
          //   {
          //     name: "Bjay",
          //     checkIn: "-",
          //     checkOut: "-",
          //     details: "-",
          //   },
        ],
        userRating: 4,
      },
      {
        number: 3,
        floor: 1,
        carType: "Car",
        bookings: [
          //   {
          //     name: "Cjay",
          //     checkIn: "-",
          //     checkOut: "-",
          //     details: "-",
          //   },
        ],
        userRating: 2.5,
      },
    ],
    workers: [
      {
        name: "Aj",
        dateOfJoin: "2/10/19",
        salary: 2000,
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
    maxTime: 5,
  },
];

export const User = [
  {
    name: "Ajay",
    username: "abc",
    email: "-",
    password: "abc",
    bookings: [
      // {
      //   slotNumber: 1,
      //   location: "-",
      //   checkIn: "-",
      //   checkOut: "-",
      //   regNumber: "-",
      // },
    ],
    numberOfVisits: 0,
    balance: 100,
  },
];

export const Workers = [];
DataLocations.map((x) => {
  x.workers.map((y) => {
    Workers.push(y);
  });
});
