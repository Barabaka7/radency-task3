"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const updateNote = (note, update) => {
    const updatedNote = Object.assign(Object.assign({}, note), update);
    notes_repository_1.notesRepository.save(updatedNote);
    return updatedNote;
};
exports.updateNote = updateNote;
