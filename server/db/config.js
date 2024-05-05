const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://thomassebastian2013:sebinsebin@cluster0.0p6l0sa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
