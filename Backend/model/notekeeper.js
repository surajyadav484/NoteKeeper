const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteKeeperSchema = new Schema({
  title: { type: String, trim: true, required: true },
  tagLine: { type: String, required: true },
  body: { type: String, required: true },
  pinned: false,
});

module.exports = mongoose.model("NoteKeeper", noteKeeperSchema);
