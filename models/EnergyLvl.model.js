const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const energyLvlSchema = new Schema(
    {
        value: Number
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const EnergyLvl = model("EnergyLvl", energyLvlSchema);

module.exports = EnergyLvl;
