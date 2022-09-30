"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneNote = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const addOneNote = (note) => {
    notes_repository_1.notesRepository.save(note);
    return note;
};
exports.addOneNote = addOneNote;
