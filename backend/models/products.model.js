import mongoose from "mongoose"

const productsSchema = mongoose.Schema({
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required:true
    },
    oldPrice: {
        type: Number,
        required:true
    },
    rating: {
        type: Number,
        required:true
    },
    inStock: {
        type: Number,
        required:true
    },
    image:{
        type: String,
        required: true        
    }

},{timestamps: true})

const Products = mongoose.model("Products", productsSchema)

export default Products