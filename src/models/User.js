const db = require("../config/db");

const User = {

    // ================= GET ALL USERS =================
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT id, name, email, role FROM users",
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                }
            );
        });
    },

    // ================= CREATE USER =================
    createUser: (name, email, password) => {
        return new Promise((resolve, reject) => {
            const sql =
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

            db.query(
                sql,
                [name, email, password],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result.insertId);
                }
            );
        });
    },

    // ================= GET USER BY EMAIL =================
    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM users WHERE email = ?",
                [email],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result[0]);
                }
            );
        });
    },

    // ================= UPDATE USER =================
    updateUser: (id, name, email) => {
        return new Promise((resolve, reject) => {
            const sql =
                "UPDATE users SET name = ?, email = ? WHERE id = ?";

            db.query(
                sql,
                [name, email, id],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result.affectedRows);
                }
            );
        });
    },

    // ================= DELETE USER =================
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            const sql =
                "DELETE FROM users WHERE id = ?";

            db.query(
                sql,
                [id],
                (err, result) => {
                    if (err) reject(err);
                    else resolve(result.affectedRows);
                }
            );
        });
    }

};

module.exports = User;