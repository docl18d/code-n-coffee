const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Fido, User } = require('../../models');

// Get all Fidos
router.get('/', async (req, res) => {
  try {
    const fidoData = await Fido.findAll({});
    res.status(200).json(fidoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single fido
router.get('/:id', async (req, res) => {
  try {
    const fidoData = await Fido.findByPk(req.params.id, {
      // JOIN with fidos, using the User table
      include: [{ model: Fido, through: User, as: 'fido Bio' }]
    });

    if (!fidoData) {
      res.status(404).json({ message: 'No Fido found with this id!' });
      return;
    }

    res.status(200).json(fidoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Fido
router.post('/', async (req, res) => {
  try {
    const fidoData = await Fido.create(req.body);
    res.status(200).json(fidoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Fido
router.delete('/:id', async (req, res) => {
  try {
    const fidoData = await Fido.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!fidoData) {
      res.status(404).json({ message: 'No fido found with this id!' });
      return;
    }

    res.status(200).json(fidoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;