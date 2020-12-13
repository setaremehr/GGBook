require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true ,
    useUnifiedTopology: true 
  }
)
  .then(() => console.log('yeee'))
  .catch(e => console.log(e));

  mongoose.set('debug', true);

  
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// }

const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

