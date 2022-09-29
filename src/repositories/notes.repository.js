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
        return this.notes.find(note => note.id === id) || null;
    }
    save(note) {
        const index = this.notes.findIndex(({ id }) => note.id === id);
        if (index >= 0) {
            this.notes[index] = note;
        }
        this.notes.push(note);
    }
    delete(id) {
        const indexToDelete = this.notes.findIndex(note => note.id === id);
        if (indexToDelete >= 0) {
            this.notes.splice(indexToDelete, 1);
        }
    }
}
exports.notesRepository = new NotesRepository(data_json_1.default.map(note => (Object.assign(Object.assign({}, note), { creationDate: new Date(note.creationDate) }))));
