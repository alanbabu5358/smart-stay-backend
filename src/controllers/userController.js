const pool = require("../config/db");

exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, username FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const [result] = await pool.query("UPDATE users SET username = ? WHERE id = ?", [username, id]);

    res.json({ message: "User updated", affectedRows: result.affectedRows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted", affectedRows: result.affectedRows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};