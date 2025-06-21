let userData = [
  { id: 1, name: "krishna", age: 34 },
  { id: 2, name: "gunnu", age: 42 },
];

// Read users::------::
const showUserController = (req, res) => {
  try {
    res.status(200).send({ success: true, data: userData });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, massage: "Internal server error.." });
  }
};

// View single User:: ====== ::
const viewSingeUserController = (req, res) => {
  try {
    const user = userData.find((user) => {
      return user.id === parseInt(req.params.id);
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("No user found..");
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, massage: "Internal server error.." });
  }
};

// Creat users:: --------- ::
const createUserController = (req, res) => {
  try {
    const newUser = {
      id: userData.length + 1,
      name: req.body.name,
      age: req.body.age,
    };

    userData.push(newUser);
    res.status(200).send(`User ${newUser.id} created successfully...`);
  } catch (error) {
    res
      .status(500)
      .send({ success: false, massage: "Internal server error.." });
  }
};

// Updating users :: ===== ::

const updateUserController = (req, res) => {
  try {
    const user = userData.find((user) => {
      return user.id === parseInt(req.params.id);
    });

    if (user) {
      user.name = req.body.name;
      user.age = req.body.age;
      res.status(200).send(`user ${user.id} is updated..`);
    } else {
      res.status(404).send("user not found..");
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, massage: "Internal server error.." });
  }
};

// Delete user :: ----- ::

const deleteUserController = (req, res) => {
  try {
    const originalLength = userData.length;

    const user = userData.filter((user) => {
      return user.id !== parseInt(req.params.id);
    });
    userData = user;
    if (originalLength === userData.length) {
      res.status(404).send("user not found...");
    } else {
      res.status(200).send("user deleted successfully..");
    }
  } catch (error) {
    res
      .status(500)
      .send({ success: false, massage: "Internal server error.." });
  }
};

module.exports = {
  showUserController,
  viewSingeUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};
