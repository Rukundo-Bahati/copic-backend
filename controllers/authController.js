import { User, validate } from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import config from "config";
import _ from "lodash";
import bcrypt from "bcrypt";

//signup
export const signUp = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({
      credential: req.body.credential,
    });
    if (existingUser) return res.status(400).send("User already registered.");

    const newUser = new User(
      _.pick(req.body, ["username", "credential", "password", "role"])
    );

    const salt = await bcrypt.genSalt(Number(config.get("SALT")));
    newUser.password = await bcrypt.hash(req.body.password, salt);
    const user = await newUser.save();
    const token = generateTokenAndSetCookie(newUser._id, res);

    // Send the user and token in the response, excluding sensitive fields like password
    res.status(201).send({
      user: _.omit(user.toObject(), ["password"]),
      token: token,
    });

    console.log(token);
  } catch (error) {
    // Catch Mongoose validation errors (such as invalid phone or email)
    if (error.name === "ValidationError") {
      return res.status(400).send(error.message);
    }
    console.log(error);
    res.status(500).send("An error occurred during user registration.");
  }
};

//profile controller
export const userProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { fullnames, districtLocation } = req.body;

    if (!fullnames || !districtLocation) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Update the user profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      _.pick(req.body, ["fullnames", "districtLocation"]),
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in userProfile controller", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// login controller
export const login = async (req, res) => {
  try {
    const { credential, password } = req.body;
    const user = await User.findOne({ credential });

    if (!user) {
      return res.status(401).json({ message: "Incorrect credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const token = generateTokenAndSetCookie(user._id, res);

    // Send the response with the necessary user details
    const userDetails = _.omit(user.toObject(), ["password"]);

    res.status(200).json({
      user: userDetails,
      token: token,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//logout
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
