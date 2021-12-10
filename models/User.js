const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  field_of_study: {
    type: String,
    required: true,
  },
});

const Student_Master = mongoose.model("student_master", userSchema);
module.exports = Student_Master;
