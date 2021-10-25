const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const moodSchema = new Schema(
    {
        name: String
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Mood = model("Mood", moodSchema);

module.exports = Mood;
