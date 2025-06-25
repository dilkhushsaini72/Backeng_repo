const router = require("express").Router();
const User = require("../models/userModel");
// Creating user-----

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
