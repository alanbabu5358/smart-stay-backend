const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");


//AUTH ROUTES 

router.post("/register", authController.register);
router.post("/login", authController.login);


//USER CRUD ROUTES

router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;