import mongoose from "mongoose";
import Joi from "joi";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  credential: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Regular expression for phone numbers starting with 078, 072, or 073 and exactly 10 digits long
        const phoneRegex = /^(078|072|073)\d{7}$/;
        // Regular expression for valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate if the value matches either phone or email
        return phoneRegex.test(value) || emailRegex.test(value);
      },
      message: props => `${props.value} is not a valid phone number or email!`
    }
  },

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: false,
  },
  fullnames: {
    type: String,
  },
  districtLocation: {
    type: String,
  },
  followers: [],
  following: [],
});

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().required(),
    credential: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required()
  });
  return schema.validate(user)
}

const UserModel = mongoose.model("Users", UserSchema);
export { UserModel as User, validateUser as validate };
