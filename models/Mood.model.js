const { Schema, model } = require("mongoose");

const moodSchema = new Schema(
    {
        name: String
    },
    {
        timestamps: true,
    }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
