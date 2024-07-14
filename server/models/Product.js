import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true,
        default: []
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reviews: {
        type: Array,
        required: true,
        default: []
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numberOfReview: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    productIsNew: {
        type: Boolean,
        required: true
    },
    stripeID: {
        type: String
    },
    
},{timestamps: true}
)