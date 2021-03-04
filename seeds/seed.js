const sequelize = require('../config/connection');
const { Fido, User } = require('../models');

const fido = require('./fido.json');
const user = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const fidos = await Fido.bulkCreate(fido, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of fidos) {
    const newFido = await fido.create({
      fido_id: id,
    });
  }

  for (const user of user) {
    const newUser = await User.create({
      ...user,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
