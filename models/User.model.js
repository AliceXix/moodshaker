const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true, trim: true},
    mail: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true},
    moods: [String],
    activities: [String],
    energyLvls: [Number],
    role: String,
    favourites: [String],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
