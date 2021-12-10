const Student_Master = require("../models/User");

exports.postData = async (req, res) => {
  try {
    const data = await Student_Master.create(req.body);
    res.json({ massage: "Data Added", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await Student_Master.find({});
    res.send({ message: "All Records", data: data });
  } catch (error) {
    console.log(error);
  }
};
exports.getUserbyId = async (req, res) => {
  try {
    const data = await Student_Master.findOne({ _id: req.params._id });

    res.json({ message: "Data Added", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student_Master.findByIdAndDelete(id);
    res.json({ message: "Data Deleted", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.updateOne = (req, res) => {
  try {
    const _id = req.params._id;
    Student_Master.findByIdAndUpdate(_id, req.body, {
      useFindAndModify: false,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });

    res.json({ message: "Data Updated", data: data });
  } catch (error) {
    console.log(error);
  }
};
