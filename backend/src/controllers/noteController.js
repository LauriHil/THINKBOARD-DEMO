import Note from "../models/Note.js"

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)     //Postman or other means of testing the HTTP METHODS
        res.status(500).json({message:"Internal server error"})
    }
}

export function createNote (req, res) {
    res.status(201).json({ message: "Note created succesfully!" });
}

export function updateNote (req, res) {
    res.status(200).json({ message: "Note updated succesfully!" });
}

export function deleteNote (req, res) {
    res.status(200).json({ message: "Note deleted succesfully!" });
}