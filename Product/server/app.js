const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const router = require("./routes/api");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/products")
  .then(() => console.log("mongoDB connected::"))
  .catch((err) => console.log(err));

  app.use("/api",router)
  
app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
