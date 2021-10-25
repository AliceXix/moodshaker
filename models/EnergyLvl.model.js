const { Schema, model } = require("mongoose");

const energyLvlSchema = new Schema(
    {
        value: Number
    },
    {
        timestamps: true,
    }
);

const EnergyLvl = model("EnergyLvl", energyLvlSchema);

module.exports = EnergyLvl;
