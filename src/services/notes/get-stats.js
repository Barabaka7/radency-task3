"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const notes_repository_1 = require("../../repositories/notes.repository");
const getStats = () => {
    return notes_repository_1.notesRepository.makeNotesStats();
};
exports.getStats = getStats;
