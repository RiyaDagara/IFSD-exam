const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://riyadbsc22:RiyaDagara@cluster0.5mscvsu.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'Route-Leg-City';

// Function to update users in MongoDB
async function updateUsers(filter, update) {
  // Create a new MongoClient
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Select the database
    const db = client.db(dbName);

    // Get the users collection
    const collection = db.collection('legs');

    // Update users
    const result = await collection.updateMany(filter, update);

    console.log(`${result.modifiedCount} users updated.`);
  } catch (err) {
    console.error('Error updating users:', err);
  } finally {
    // Close the connection
    client.close();
  }
}

// Example usage
const filter = { sourceCity: 'BBL' };
const update = { $set: { sourceCity: 'BLR' } };
updateUsers(filter, update);
