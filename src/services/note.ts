import * as yup from "yup";

export let noteSchema = yup.object().shape({
  noteName: yup.string().required(),
  id: yup.number().required().positive().integer(),
  category: yup.string().required(),
  noteContent: yup.string().required(),
  isArchived: yup.bool().required(),
  creationDate: yup
    .date()
    .default(() => new Date())
    .required(),
});

//export type Note = yup.InferType<typeof noteSchema>;

export interface Note {
  id: number;
  noteName: string;
  creationDate: Date;
  category: string;
  noteContent: string;
  isArchived: boolean;
}

export interface NotesStats {
  category: string;
  quantityActive: number;
  quantityArchived: number;
}
