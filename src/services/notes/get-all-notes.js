"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const getAllNotes = () => {
    return notes_repository_1.notesRepository.findAll();
};
exports.getAllNotes = getAllNotes;
