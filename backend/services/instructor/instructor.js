import User from "../../models/Users/user.js";

export const updateinstructor = async (req, res, next) => {
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
