const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const activitySchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},      
    mood: {type: [String], required: true},
    energyLvl: {type: [Number], required: true},
    image: String,
    title: {type: String, required: true},
    description: String,
    votes: Number
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
