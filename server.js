require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');

const app = express();
;
const config = require('./config/database');
const { restart } = require('nodemon');

const PORT = process.env.PORT || 5000;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI,
{ 
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,

});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => res.sendFile(path.resolve(___dirname, "client", "build", "index.html")));
}


// routes
// app.use(require("./routes/api.js"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})