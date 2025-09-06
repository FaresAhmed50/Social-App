import mongoose from "mongoose";
import {UserModelInterface} from "../../../interfaces/userModel.interface.js";
import {GenderType, RoleType} from "../../../interfaces/genaricTypes.interface.js";


const userSchema = new mongoose.Schema<UserModelInterface>({
    fName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10,
    },
    lName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
        enum: GenderType,
        required: true
    },
    role: {
        type: String,
        enum: RoleType
    },
}, {
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
});

userSchema.virtual("username").set(function (value) {
    const [fName, lName] = value.split(" ");
    this.set({fName, lName});
}).get(function () {
    return this.fName + this.lName;
});


const userModel = mongoose.models.User || mongoose.model<UserModelInterface>("User", userSchema);
export default userModel;
