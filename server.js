require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));

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
  console.log("running in production");
  app.use(express.static("client/build"));
  app.get("*", (req, res) => res.sendFile(path.resolve(___dirname, "client", "build", "index.html")));
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})