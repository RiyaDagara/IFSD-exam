const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    const databaseURI = 'mongodb+srv://riyadbsc22:RiyaDagara@cluster0.5mscvsu.mongodb.net/?retryWrites=true&w=majority';
    const databaseName = 'Route-Leg-City'; // Specify your desired database name
    const collectionName = 'legs'; // Specify your desired collection name
;

  await mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName });

  const userSchema = new mongoose.Schema({
    sourceCity: String,
    DestinationCity: String,
    cost: Number
  });

  userSchema.methods.introduce = function() {
    console.log(`Source City name is  ${this.sourceCity}, Destination City is ${this.DestinationCity} and the cost is ${this.cost}.`);
  };

  const User = mongoose.model('User', userSchema, collectionName);

  const deletionResult = await User.deleteOne({ sourceCity: 'Bhubneswar' });
  console.log(`Deleted ${deletionResult.deletedCount} user.`);
}
