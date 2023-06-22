const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create a MongoDB schema and model
const RouteSchema = new mongoose.Schema({
  route: Number,
  legs: [
    {
      cityA: String,
      cityB: String,
      cost: Number,
    },
  ],
  routeCost: Number,
});

const RouteModel = mongoose.model('Route', RouteSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://riyadbsc22:RiyaDagara@cluster0.5mscvsu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.json());

// POST route to save the data in MongoDB
app.post('/routes', (req, res) => {
  const nLegs = new NLegs();

  // Assuming the request body contains the same structure as the original code
  nLegs.routes = req.body.routes;

  // Save the routes to MongoDB
  RouteModel.insertMany(nLegs.routes)
    .then(() => {
      res.status(200).json({ message: 'Routes saved successfully.' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while saving the routes.' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
