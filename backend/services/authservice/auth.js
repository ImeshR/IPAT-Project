import bcrypt from "bcrypt";
import User from "../../models/Users/user.js";

// Function to hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const login = async (req, res, next) => {
    
};

export const register = async (req, res, next) => {
    const hashedPassword = await hashPassword(req.body.password);
    const newUser = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role || "user",
        contactNumber: req.body.contactNumber,
        profilePicture: req.body.profilePicture
    };
    const result = await User.create(newUser);
    res.json(result);
};

export default hashPassword;
