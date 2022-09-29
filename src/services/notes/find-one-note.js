"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneNote = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const findOneNote = (id) => {
    return notes_repository_1.notesRepository.findOne(id);
};
exports.findOneNote = findOneNote;
