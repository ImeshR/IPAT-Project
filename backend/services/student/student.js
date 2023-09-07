import Labroom from "../../models/Labroom/labroom.js";
import User from "../../models/Users/user.js";
import { createError } from "../../utils/error.js";

export const enroll = async (req, res, next) => {
  const { key } = req.params;

  try {
    const labroom = await Labroom.findOne({ enrollmentkey: key });

    if (!labroom) {
      return next(createError(404, "Labroom not found"));
    }

    res.status(200).json(labroom);
  } catch (error) {
    next(createError(500, "Internal server error"));
  }
};

export const updatestudent = async (req, res, next) => {
    const { id } = req.params;
  
    //update instructor
    const updatedata = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        contactNumber: req.body.contactNumber,
        profilePicture: req.body.profilePicture,
    };
  
    const update = User.findByIdAndUpdate(id, updatedata, { new: true })
      .then((update) => {
        res.status(200).json(update);
      })
      .catch((err) => {
        res.status(500).json("not found");
      });
  };