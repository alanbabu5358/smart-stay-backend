const express = require("express");
const router = express.Router();

const complaintController = require("../controllers/complaintController");

// Create complaint
router.post("/", complaintController.createComplaint);

// Get all complaints
router.get("/", complaintController.getComplaints);

module.exports = router;