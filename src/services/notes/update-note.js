"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = void 0;
const note_1 = require("../note");
const notes_repository_1 = require("../../repositories/notes.repository");
const updateNote = (note, update) => {
    const updatedNote = Object.assign(Object.assign({}, note), update);
    const castedNote = note_1.noteSchema.cast(updatedNote);
    notes_repository_1.notesRepository.save(castedNote);
    return castedNote;
};
exports.updateNote = updateNote;
