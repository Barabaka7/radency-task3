import { Note, NotesStats, noteSchema } from "../services/note";
import data from "../data.json";

class NotesRepository {
  constructor(private notes: Note[]) {}

  findAll(): Note[] {
    return this.notes;
  }

  findOne(id: number): Note | null {
    return this.notes.find((note) => note.id === id) || null;
  }

  save(note: Note): void {
    const index = this.notes.findIndex(({ id }) => note.id === id);

    if (index !== -1) {
      this.notes[index] = note;
    }

    this.notes.push(note);
  }

  deleteOne(id: number): void {
    const indexToDelete = this.notes.findIndex((note) => note.id === id);

    if (indexToDelete >= 0) {
      this.notes.splice(indexToDelete, 1);
    }
  }

  makeNotesStats(): NotesStats[] {
    let notesStats: NotesStats[] = [];
    let categories: string[] = [
      ...new Set(this.notes.map(({ category }) => category)),
    ];

    categories.forEach((cat) => {
      let quantityAct = this.notes.filter(
        (note) => note.category === cat && note.isArchived === false
      ).length;
      let quantityArch = this.notes.filter(
        (note) => note.category === cat && note.isArchived === true
      ).length;
      notesStats.push({
        category: cat,
        quantityActive: quantityAct,
        quantityArchived: quantityArch,
      });
    });
    return notesStats;
  }
}

export const notesRepository = new NotesRepository(
  data.map((note) =>
    noteSchema.cast({
      ...note,
      creationDate: new Date(note.creationDate),
    })
  )
);
