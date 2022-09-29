"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const get_all_notes_1 = require("../services/notes/get-all-notes");
const find_one_note_1 = require("../services/notes/find-one-note");
const update_note_1 = require("../services/notes/update-note");
const router = (0, express_1.Router)();
exports.router = router;
router.param('id', (req, res, next, id) => {
    const note = (0, find_one_note_1.findOneNote)(Number(id));
    if (note === null) {
        res.status(404).send({ message: 'Not found' });
        return;
    }
    req.note = note;
    next();
});
router.get('/', (req, res) => {
    const notes = (0, get_all_notes_1.getAllNotes)();
    res.send(notes);
});
router.post('/', (req, res, next) => {
    res.send('TODO: add note');
});
router.get('/:id', (req, res) => {
    res.send(req.note);
});
router.delete('/:id', (req, res) => {
    res.send('TODO: delete one note');
});
router.get('/stats', (req, res) => {
    res.send('TODO: show stats');
});
router.patch('/:id', (req, res) => {
    const updatedNote = (0, update_note_1.updateNote)(req.note, req.body);
    res.send(updatedNote);
});
