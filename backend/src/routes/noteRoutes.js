import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/noteController.js";


const router = express.Router();


//Fetching the notes
router.get("/", getAllNotes);

//Fetching a note by id
router.get("/:id", getNoteById);

//Creating a note
router.post("/", createNote);

//Updating a note
router.put("/:id", updateNote);

//Deleting a note
router.delete("/:id", deleteNote);

export default router;