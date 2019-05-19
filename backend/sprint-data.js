const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SprintDataSchema = new Schema(
    {
        id: Number,
        sprintName: String
    },
    { timestamps: true }
);
module.exports = mongoose.model("SprintData", SprintDataSchema);
