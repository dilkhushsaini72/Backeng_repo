const express = require("express");
const router = require("./routes/api");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
