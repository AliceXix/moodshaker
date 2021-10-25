const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true}, //TODO
    moods: [String],
    activities: [String],
    energyLvls: [Number],
    role: String,
    favourites: [String],
    // test comment
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
