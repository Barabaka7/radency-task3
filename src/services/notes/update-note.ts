import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository"

export type NoteUpdateRequest = Partial<Omit<Note, 'id'>>;

export const updateNote = (note: Note, update: NoteUpdateRequest): Note => {
  const updatedNote = {...note, ...update};
  notesRepository.save(updatedNote);

  return updatedNote;
}