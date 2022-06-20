const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        cost:{
            type: Number,
        },
        quantity:{
            type: Number,
        },
        inStock:{
            type: Boolean,
            default:true
        }
    },
    {timestamps:true}
    )

    module.exports = mongoose.model("Item", ItemSchema)