
import { Note } from "../note";
import { notesRepository } from "../../repositories/notes.repository"

export const deleteOneNote = (note: Note): Note | null => {
    const deletedNote = note;
    notesRepository.deleteOne(note.id);
    return null;
}