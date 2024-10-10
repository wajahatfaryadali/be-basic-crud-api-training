const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product Name is required!']
            
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false,
        },

        isAvailable: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;