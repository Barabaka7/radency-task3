"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneNote = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const deleteOneNote = (note) => {
    notes_repository_1.notesRepository.deleteOne(note.id);
    return null;
};
exports.deleteOneNote = deleteOneNote;
