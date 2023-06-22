import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    order: {
        type: [String],
        required: true,
        maxLength: 60,
    },
    total: {
        type: Number,
        required: true,
    }
    ,
    foodMode: {
        type: String,
        required: true,

    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state:{
                type:String,
                required:true,
            },
            zipCode:{
                type:Number,
                required:true
            }

        }

    },
    paid:{
        type:Boolean,
        required:true,
    }




},
    { timestamps: true },
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);