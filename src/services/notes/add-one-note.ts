import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository"

export const addOneNote = (note: Note): Note => {
  const updatedNote = note;
  notesRepository.save(updatedNote);
  return updatedNote;
}