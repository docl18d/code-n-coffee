const mongoose = require("mongoose");
const db = require("../models");

// This file empties the fidos collection and inserts the fidos below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Fido"
);

const fidoSeed = [
  {
    id: 1,
    Fido_Name: "Puck",
    Breed: "Long Hair German Shepherd",
    Sex: "Male",
    Age: 1,
    City: "Spanish Fork",
    Park: "City Park",
    Owners_Preffered_Drink: "Iced Caramel Machiatto",
    date: new Date(Date.now())
  },
  {
    id: 2,
    Fido_Name: "Silas",
    Breed: "Dobberman",
    Sex: "Male",
    Age: 6,
    City: "Heber",
    Park: "City Park",
    Owners_Preffered_Drink: "Coca Cola",
    date: new Date(Date.now())
  },
  {
    id: 3,
    Fido_Name: "Odin",
    Breed: "Short Hair German Shepherd",
    Sex: "Male",
    Age: 12,
    City: "Short Hair German Shepherd",
    Park: "City Park",
    Owners_Preffered_Drink: "Hot Caramel Machiatto",
    date: new Date(Date.now())
  },
  {
    id: 4,
    Fido_Name: "Kassi",
    Breed: "Yorkie",
    Sex: "Male",
    Age: 8,
    City: "Ogden",
    Park: "City Park",
    Owners_Preffered_Drink: "Hot Vanilla Latte",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    id: 1,
    firstName: "Sven",
    lastName: "Jorundsson",
    userName: "svjor56",
    email: "svjor@gmail.com",
    Password: "Pq6789ht",
    date: new Date(Date.now())
  },
  {
    id: 2,
    firstName: "Bera",
    lastName: "Gellirdottir",
    userName: "bergell",
    email: "bgelli@festung.org",
    Password: "98Ufstg",
    date: new Date(Date.now())
  },
  {
    id: 3,
    firstName: "Skard",
    lastName: "Gunnvidsson",
    userName: "skargunn",
    email: "floki@nord.com",
    Password: "Juhn45aj",
    date: new Date(Date.now())
  },
  {
    id: 4,
    firstName: "Sigewulf",
    lastName: "Vekelsson",
    userName: "sigvik6",
    email: "thorrules@notdic.no",
    Password: "tRor98ils",
    date: new Date(Date.now())
  }
];

db.Fido
  .remove({})
  .then(() => db.Fido.collection.insertMany(fidoSeed, userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
