const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("mongodb+srv://jerminexxx:UJE3Nf0ZmQynubF7@cluster0.4ttil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  } catch (error) {
    console.log("Something went wrong with Database connection");
    process.exit(1);
  }
};

module.exports = connectDB;
