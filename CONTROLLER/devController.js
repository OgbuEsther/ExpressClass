const devModel = require("../MODEL/devModel");

const devPost = async (req, res) => {
  try {
    const { firstname, lastname, gender, complexion, phoneNO, nameOfPC } =
      req.body;
    const createDev = await devModel.create({
      firstname,
      lastname,
      gender,
      complexion,
      phoneNO,
      nameOfPC,
    });
    res.status(201).json({
      message: "data created successfully",
      data: createDev,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occured",
      data: error.message,
    });
  }
};

const getDev = async (req, res) => {
  try {
    const getting = await devModel.find();
    res.status(200).json({
      message: "all data gotten",
      data: getting,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error ",
      data: error.message,
    });
  }
};

const getOneDev = async (req, res) => {
  try {
    const getOne = await devModel.findById(req.params.id);
    res.status(200).json({
      message: "one data gotten",
      data: getOne,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error ",
      data: error.message,
    });
  }
};

const updateDev = async (req, res) => {
  try {
    const { firstname, lastname, gender, complexion, phoneNO, nameOfPC } =
      req.body;
    const update = await devModel.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, gender, complexion, phoneNO, nameOfPC },
      { new: true }
    );
    res.status(200).json({
      message: "data updated successfully",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occured while updating",
      data: error.message,
    });
  }
};

const removeDev = async (req, res) => {
  try {
    const deleting = await devModel.findByIdAndDelete(req.params.id);
    // const deleting = await devModel.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "successfully deleted a dev",
      data: deleting,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occurred while deleting",
      data: error.message,
    });
  }
};

module.exports = { devPost, getDev, getOneDev, updateDev, removeDev };
