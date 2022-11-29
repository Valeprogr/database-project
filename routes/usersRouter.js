const { Router } = require('express');

const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require("../controllers/users");

const usersRounter = Router();
usersRounter.route("/").get(getAllUsers).post(createUser);
usersRounter.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = usersRounter;