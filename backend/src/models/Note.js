import mongoose from "mongoose";

//Create a schema
const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
{timestamps: true } // createdAt, updatedAt
);

//Create a model based on the previously created schema
const Note = mongoose.model("Note", noteSchema);

export default Note;