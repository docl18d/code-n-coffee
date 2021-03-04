const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

// db.synch({ force: false})

const PORT = process.env.PORT || 3000;

const sess = {
  secret: "fidos fun day",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

// app.use(logger("dev"));
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening to port: " + PORT));
});

// process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); })