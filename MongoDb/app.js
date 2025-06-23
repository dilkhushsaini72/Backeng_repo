const express = require("express");
const router = require("./routes/userRoutes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3333;
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB Connected::"))
  .catch((err) => console.log("Not connected:", err));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
