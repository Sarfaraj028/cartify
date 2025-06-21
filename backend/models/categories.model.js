import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        unique: true
    }
},
{timestamps: true})

const Category = mongoose.model("Category", categorySchema)

export default Category