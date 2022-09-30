import { NotesStats } from "../note";
import { notesRepository } from "../../repositories/notes.repository";

export const getStats = (): NotesStats[] => {
  return notesRepository.makeNotesStats();
};
