const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// create operation

let users = [
  { id: 1, name: "krishna" },
  { id: 2, name: "gunnu" },
];

//View all usrs:::
app.get("/users", (req, res) => {
  try {
    res.status(201).send({ success: true, data: users });
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

//View single users::
app.get("/users/:id", (req, res) => {
  try {
    const user = users.find((user) => {
      return user.id === parseInt(req.params.id);
    });

    if (!user) {
      res.status(404).send({ success: false, massage: "User not found.." });
    } else {
      res.status(201).send({ success: true, data: user });
    }
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

// Creating users

app.post("/users", (req, res) => {
  try {
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
    };

    users.push(newUser);
    res.status(201).send("Users created successfully...");
    console.log(newUser);
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

// Updating users.:::::::
app.put("/users/:id", (req, res) => {
  try {
    const User = users.find((user) => {
      return user.id === parseInt(req.params.id);
    });
    if (User) {
      User.name = req.body.name;
      res.status(201).send(`user ${User.id} is updated`);
    } else {
      res.status(404).send("No user found...");
    }
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

// Delete User :--- All users delete

app.delete("/users", (req, res) => {
  try {
    users = [];
    res.status(201).send("All users deleted successfully...");
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

// Desired User deleting:---

app.delete("/users/:id", (req, res) => {
  try {
    users = users.filter((user) => {
      return user.id !== parseInt(req.params.id);
    });

    res.status(200).send("user was deleted...");
  } catch (error) {
    res.status(500).send({ success: false, massage: "server issue...." });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port${PORT}`);
});
