import mongoose from "mongoose"

const SectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60,
    },

},
{ timestamps: true },
);

export default mongoose.models.Section || mongoose.model("Section",SectionSchema);