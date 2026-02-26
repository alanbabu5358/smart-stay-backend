const User = require("../models/User");


//GET ALL USERS

exports.getAllUsers = async (req, res) => {
    try {

        const users = await User.getAllUsers();

        res.json(users);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};


//UPDATE USER

exports.updateUser = async (req, res) => {
    try {

        const id = req.params.id;
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Missing fields"
            });
        }

        const result = await User.updateUser(
            id,
            name,
            email
        );

        if (result === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User updated successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};


//DELETE USER

exports.deleteUser = async (req, res) => {
    try {

        const id = req.params.id;

        const result = await User.deleteUser(id);

        if (result === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};