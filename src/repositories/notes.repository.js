"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRepository = void 0;
const data_json_1 = __importDefault(require("../data.json"));
class NotesRepository {
    constructor(notes) {
        this.notes = notes;
    }
    findAll() {
        return this.notes;
    }
    findOne(id) {
        return this.notes.find((note) => note.id === id) || null;
    }
    save(note) {
        const index = this.notes.findIndex(({ id }) => note.id === id);
        if (index !== -1) {
            this.notes[index] = note;
        }
        this.notes.push(note);
    }
    deleteOne(id) {
        const indexToDelete = this.notes.findIndex((note) => note.id === id);
        if (indexToDelete >= 0) {
            this.notes.splice(indexToDelete, 1);
        }
    }
    makeNotesStats() {
        let notesStats = [];
        let categories = [
            ...new Set(this.notes.map(({ category }) => category)),
        ];
        categories.forEach((cat) => {
            let quantityAct = this.notes.filter((note) => note.category === cat && note.isArchived === false).length;
            let quantityArch = this.notes.filter((note) => note.category === cat && note.isArchived === true).length;
            notesStats.push({
                category: cat,
                quantityActive: quantityAct,
                quantityArchived: quantityArch,
            });
        });
        return notesStats;
    }
}
exports.notesRepository = new NotesRepository(data_json_1.default.map((note) => (Object.assign(Object.assign({}, note), { creationDate: new Date(note.creationDate) }))));
