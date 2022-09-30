import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository";

export const addOneNote = (note: Note) => {
  notesRepository.save(note);
  return note;
};
