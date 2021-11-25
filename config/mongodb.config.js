const mongoose = require("mongoose");

async function mongoConnect() {
  try {
    const { MONGODB_URL } = process.env;
    const { connection } = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB connected at ${connection.name}`);
  } catch(error) {
    console.error('Error conecting the db', error.message)
  }
}

module.exports = { mongoConnect };






