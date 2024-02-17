import  mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            uniq: true,
            lowercase: true,
            trim: true,
            index: true //it is better option to enable searching option, with it work but it is optimized
        },
        email: {
            type: String,
            required: true,
            uniq: true,
            lowercase: true,
            trim: true,
        },
        fulname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //cloudinary url
            required: true,
        },
        coverImage : {
            type: String, //cloudinary url
        },
        watcHistory : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        password : {
            type: String,
            required: [true, "password is required"]
        },
        refreshToken: {
            type: String
        }
    }, {timestamps: true})

export const User = mongoose.model("User", userSchema)