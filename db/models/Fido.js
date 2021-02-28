const db = require('./index');
const Fidos = require('../models/index').Fidos
const Users = require('../models/index').Users

const Fidos = [

  { id: 1, 
    Fido_Name: 'Silas', 
    Breed: 'Dobberman', 
    Sex: "Male", 
    Age: 6, 
    City: "Heber", 
    Park: 'City Park', 
    Owners_Preffered_Drink: 'Iced Caramel Machiatto' 
  },
  { id: 2, 
    Fido_Name: 'Puck', 
    Breed: 'Long Hair German Shepard', 
    Sex: "Male", 
    Age: 1, 
    City: "Spanish Fork", 
    Park: 'City Park', 
    Owners_Preffered_Drink: 'Hot Caramel Machiatto' 
  },
  { id: 3, 
    Fido_Name: 'Odin',
    Breed: 'Short Heired German Shepherd', 
    Sex: "Male", 
    Age: 12, 
    City: "Spanish Fork", 
    Park: 'City Park', 
    Owners_Preffered_Drink: 'Blue Agave Full Throttle Energy Drink' 
  },
    { id: 4, 
      Fido_Name: 'Chewie', 
      Breed: 'Red Heeler', 
      Sex: "Male", 
      Age: 6, 
      City: "Ogden", 
      Park: 'City Park', 
      Owners_Preffered_Drink: 'Iced Salted Caramel' 
    },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'fido',
  }
]

const seed = () => {
  return Fidos.bulkCreate(Fidos)
  .the(() => Users.bulkCreate(Users))
}

seed()
.then(() => {
  ProcessingInstruction.exit();
});