import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository";

export const addOneNote = (note: Note): Note => {
  const updatedNote = { ...note, creationDate: new Date(note.creationDate) };
  notesRepository.save(updatedNote);
  return updatedNote;
};
