const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VotersDataSchema = new Schema(
    {
        id: Number,
        score: String
    },
    { timestamps: true }
);
module.exports = mongoose.model("VotersData", VotersDataSchema);
