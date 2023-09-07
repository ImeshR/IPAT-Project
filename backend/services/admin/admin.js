import Labroom from "../../models/Labroom/labroom.js";
import User from "../../models/Users/user.js";
import { hashPassword } from "../../services/authservice/auth.js";
import { createError } from "../../utils/error.js"; // Import your custom error handler

// Create a new labroom
export const createlabroom = async (req, res, next) => {
  try {
    const {
      name,
      description,
      capacity,
      enrollmentkey,
      instructorname,
      instructoremail,
      labdate,
      step,
    } = req.body;

    const newLabroom = new Labroom({
      name,
      description,
      capacity,
      enrollmentkey,
      instructorname,
      instructoremail,
      labdate,
      step,
    });

    await newLabroom.validate();
    const savedLabroom = await newLabroom.save();

    res.status(200).json(savedLabroom);
  } catch (error) {
    const errorMessages = [];

    if (error.errors) {
      for (const key in error.errors) {
        if (error.errors.hasOwnProperty(key)) {
          errorMessages.push(error.errors[key].message);
        }
      }
    } else {
      errorMessages.push(error.message);
    }

    // Use your custom error handler to create and pass the error
    next(createError(400, errorMessages.join(", "))); // Pass a combined error message
  }
};

// Update labroom
export const updatelabroom = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatelab = {
      name: req.body.name,
      description: req.body.description,
      capacity: req.body.capacity,
      enrollmentkey: req.body.enrollmentkey,
      instructorname: req.body.instructorname,
      instructoremail: req.body.instructoremail,
      labdate: req.body.labdate,
      step: req.body.step,
    };

    const update = await Labroom.findByIdAndUpdate(id, updatelab, { new: true });

    if (!update) {
      // Use your custom error handler to create and pass the error
      return next(createError(404, "Labroom not found"));
    }

    res.status(200).json(update);
  } catch (error) {
    // Use your custom error handler to create and pass the error
    next(createError(500, "Internal server error"));
  }
};

// Delete labroom
export const deletelabroom = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletelab = await Labroom.findByIdAndDelete(id);

    if (!deletelab) {
      // Use your custom error handler to create and pass the error
      return next(createError(404, "Labroom not found"));
    }

    res.status(200).send("Labroom deleted");
  } catch (error) {
    // Use your custom error handler to create and pass the error
    next(createError(500, "Internal server error"));
  }
};

// Add a new instructor
export const addinstructor = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Use your custom error handler to create and pass the error
      return next(createError(400, "Email already exists"));
    }

    const hashedPassword = await hashPassword(req.body.password);
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || "instructor",
      contactNumber: req.body.contactNumber,
      profilePicture: req.body.profilePicture,
    };

    const result = await User.create(newUser);
    res.json(result);
  } catch (error) {
    // Use your custom error handler to create and pass the error
    next(createError(500, "Internal server error"));
  }
};

// Delete an instructor
export const deleteinstructor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      // Use your custom error handler to create and pass the error
      return next(createError(404, "User not found"));
    }

    res.send("User deleted");
  } catch (error) {
    // Use your custom error handler to create and pass the error
    next(createError(500, "Internal server error"));
  }

};
