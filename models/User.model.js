const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {type: String, required: true, unique: true, trim: true},
    mail: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true},
    moods: [String],
    energyLvls: [Number],
    activities: [String]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
