import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository"

export const getAllNotes = (): Note[] => {
  return notesRepository.findAll();
}