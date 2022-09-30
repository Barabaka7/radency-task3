"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneNote = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const addOneNote = (note) => {
    const updatedNote = note;
    notes_repository_1.notesRepository.save(updatedNote);
    return updatedNote;
};
exports.addOneNote = addOneNote;
