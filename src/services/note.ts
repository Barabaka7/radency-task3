import * as yup from "yup";

export let noteSchema = yup.object().shape({
  noteName: yup.string().required().strict(true) as yup.StringSchema<string>,
  id: yup.number().required().positive().integer() as yup.NumberSchema<number>,
  category: yup.string().required() as yup.StringSchema<string>,
  noteContent: yup.string().required() as yup.StringSchema<string>,
  isArchived: yup.boolean().required() as yup.BooleanSchema<boolean>,
  creationDate: yup
    .date()
    .default(() => new Date())
    .required() as yup.DateSchema<Date>,
});

export let notePatchSchema = yup.object().shape({
  noteName: yup
    .string()
    .strict(true)
    .test(
      "oneOfRequired",
      "One of noteName, category, noteContent, isArchived or creationDate must be entered",
      function (item) {
        return (
          this.parent.noteName ||
          this.parent.category ||
          this.parent.noteContent ||
          this.parent.isArchived ||
          this.parent.creationDate
        );
      }
    ) as yup.StringSchema<string>,
  category: yup
    .string()
    .strict(true)
    .test(
      "oneOfRequired",
      "One of noteName, category, noteContent, isArchived or creationDate must be entered",
      function (item) {
        return (
          this.parent.noteName ||
          this.parent.category ||
          this.parent.noteContent ||
          this.parent.isArchived ||
          this.parent.creationDate
        );
      }
    ) as yup.StringSchema<string>,
  noteContent: yup
    .string()
    .strict(true)
    .test(
      "oneOfRequired",
      "One of noteName, category, noteContent, isArchived or creationDate must be entered",
      function (item) {
        return (
          this.parent.noteName ||
          this.parent.category ||
          this.parent.noteContent ||
          this.parent.isArchived ||
          this.parent.creationDate
        );
      }
    ) as yup.StringSchema<string>,
  isArchived: yup
    .boolean()
    .strict(true)
    .test(
      "oneOfRequired",
      "One of noteName, category, noteContent, isArchived or creationDate must be entered",
      function (item) {
        return (
          this.parent.noteName ||
          this.parent.category ||
          this.parent.noteContent ||
          this.parent.isArchived ||
          this.parent.creationDate
        );
      }
    ) as yup.BooleanSchema<boolean>,
  creationDate: yup
    .date()
    .strict(true)
    .test(
      "oneOfRequired",
      "One of noteName, category, noteContent, isArchived or creationDate must be entered",
      function (item) {
        return (
          this.parent.noteName ||
          this.parent.category ||
          this.parent.noteContent ||
          this.parent.isArchived ||
          this.parent.creationDate
        );
      }
    ) as yup.DateSchema<Date>,
});

export interface Note extends yup.InferType<typeof noteSchema> {}

// export interface Note {
//   id: number;
//   noteName: string;
//   creationDate: Date;
//   category: string;
//   noteContent: string;
//   isArchived: boolean;
// }

export interface NotesStats {
  category: string;
  quantityActive: number;
  quantityArchived: number;
}
