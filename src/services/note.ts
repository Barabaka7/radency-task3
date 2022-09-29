export interface Note {
  id: number,
  noteName: string,
  creationDate: Date,
  category: string,
  noteContent: string,
  isArchived: boolean
}