const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user-routes");
const institueRoutes = require("./routes/institute-routes");
const batchRoutes = require("./routes/batch-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/institute", institueRoutes);
app.use("/api/batch", batchRoutes);

mongoose
  .connect(
    "mongodb+srv://vanitapalanki:Tra9ibgjau@cluster0.7qalg7e.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("server started");
  })
  .catch((err) => {
    console.log(err);
  });
