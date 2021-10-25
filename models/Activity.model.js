const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: 'User'},      
    mood: { type: Schema.Types.ObjectId, ref: 'Mood', required: true},
    energyLvl: { type: Schema.Types.ObjectId, ref: 'EnergyLvl', required: true},
    image: String,
    title: {type: String, required: true},
    description: String,
    votes: Number
  },

  {
    timestamps: true,
  }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
