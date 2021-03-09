require('dotenv').config();
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the fidos collection and inserts the fidos below
console.log('mongo url');
console.log(process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

const fidoSeed = [
  {
    Fido_Name: "Puck",
    Breed: "Long Hair German Shepherd",
    Sex: "Male",
    Age: 1,
    City: "Spanish Fork",
    Park: "City Park",
    Owners_Preferred_Drink: "Iced Caramel Machiatto",
    date: new Date(Date.now())
  },
  {
    Fido_Name: "Silas",
    Breed: "Dobberman",
    Sex: "Male",
    Age: 6,
    City: "Heber",
    Park: "City Park",
    Owners_Preferred_Drink: "Coca Cola",
    date: new Date(Date.now())
  },
  {
    Fido_Name: "Odin",
    Breed: "Short Hair German Shepherd",
    Sex: "Male",
    Age: 12,
    City: "Short Hair German Shepherd",
    Park: "City Park",
    Owners_Preferred_Drink: "Hot Caramel Machiatto",
    date: new Date(Date.now())
  },
  {
    Fido_Name: "Kassi",
    Breed: "Yorkie",
    Sex: "Male",
    Age: 8,
    City: "Ogden",
    Park: "City Park",
    Owners_Preferred_Drink: "Hot Vanilla Latte",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    firstName: "Sven",
    lastName: "Jorundsson",
    email: "svjor@gmail.com",
    Password: "Pq6789ht",
    date: new Date(Date.now())
  },
  {
    firstName: "Bera",
    lastName: "Gellirdottir",
    email: "bgelli@festung.org",
    Password: "98Ufstg",
    date: new Date(Date.now())
  },
  {
    firstName: "Skard",
    lastName: "Gunnvidsson",
    email: "floki@nord.com",
    Password: "Juhn45aj",
    date: new Date(Date.now())
  },
  {
    firstName: "Sigewulf",
    lastName: "Vekelsson",
    email: "thorrules@notdic.no",
    Password: "tRor98ils",
    date: new Date(Date.now())
  }
];

db.Fido.remove({})
  .then(() => db.Fido.collection.insertMany(fidoSeed))
  .then(data => {
    console.log(data.result.n + " fidos inserted!");
    
  })
  .catch(err => {
    console.error(err);
    
  })
  .then (

  db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }));

