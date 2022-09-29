import { Note } from "../services/note";
import data from '../data.json';

class NotesRepository {
  constructor(private notes: Note[]) {}

  findAll(): Note[] {
    return this.notes;
  }

  findOne(id: number): Note | null {
    return this.notes.find(note => note.id === id) || null;
  }

  save(note: Note): void {
    const index = this.notes.findIndex(({id}) => note.id === id);

    if (index >= 0) {
      this.notes[index] = note;
    }

    this.notes.push(note);
  }

  delete(id: number): void {
    const indexToDelete = this.notes.findIndex(note => note.id === id);

    if (indexToDelete >= 0) {
      this.notes.splice(indexToDelete,1);
    }
  }
}

export const notesRepository = new NotesRepository(data.map(note => ({
  ...note,
  creationDate: new Date(note.creationDate)
})));