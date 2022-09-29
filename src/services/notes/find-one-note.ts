import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository"

export const findOneNote = (id: number): Note | null => {
  return notesRepository.findOne(id);
}