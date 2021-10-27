const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},      
    mood: { type: [String], enum: ["happy", "procrastinating", "restless", "sad", "creative", "angry"], required: true},
    energyLvl: { type: Number, min: 0, max: 5, required: true},
    title: {type: String, required: true},
    description: String,
  },
  {
    timestamps: true,
  }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
