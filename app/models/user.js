const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, require: true },
        username: { type: String, unique: true, required: true },
        address: { type: String, require: true },
        phone_number: { type: String, require: true },
        email: { type: String, unique: true },
        date_of_birth: { type: Date, required: true },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
