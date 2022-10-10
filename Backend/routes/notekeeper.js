const express = require("express");
const router = express.Router();
const noteController = require("../controller/notekeeper");

//GET: http://localhost:5000/
router.get("/", noteController.getNotes);

//POST: http://localhost:5000/addNote
router.post("/addNote", noteController.addNote);

//PUT: http://localhost:5000/editNote
router.put("/editNote", noteController.editNote);

module.exports = router;
