const pool = require("../config/db");

// CREATE complaint
exports.createComplaint = async (req, res) => {
  try {
    const { title, description } = req.body;

    const [result] = await pool.query(
      "INSERT INTO complaints (title, description) VALUES (?, ?)",
      [title, description]
    );

    res.json({
      message: "Complaint created",
      id: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// GET all complaints
exports.getComplaints = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM complaints");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};