"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const get_all_notes_1 = require("../services/notes/get-all-notes");
const find_one_note_1 = require("../services/notes/find-one-note");
const delete_one_note_1 = require("../services/notes/delete-one-note");
const add_one_note_1 = require("../services/notes/add-one-note");
const update_note_1 = require("../services/notes/update-note");
const get_stats_1 = require("../services/notes/get-stats");
const note_1 = require("../services/note");
const validate_1 = require("../helpers/validate");
const router = (0, express_1.Router)();
exports.router = router;
router.param("id", (req, res, next, id) => {
    const note = (0, find_one_note_1.findOneNote)(Number(id));
    if (note === null) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    req.note = note;
    next();
});
router.get("/", (req, res) => {
    const notes = (0, get_all_notes_1.getAllNotes)();
    res.send(notes);
});
router.get("/stats", (req, res) => {
    const stats = (0, get_stats_1.getStats)();
    res.send(stats);
});
router.post("/", (0, validate_1.validateBody)(note_1.noteSchema), (req, res, next) => {
    try {
        const newNote = (0, add_one_note_1.addOneNote)(req.body);
        res.status(201).send(newNote);
    }
    catch (error) {
        next(error);
    }
});
router.get("/:id", (req, res) => {
    res.send(req.note);
});
router.delete("/:id", (req, res) => {
    (0, delete_one_note_1.deleteOneNote)(req.note);
    res.status(204).send(`Note was deleted!`);
});
router.patch("/:id", (0, validate_1.validateBody)(note_1.notePatchSchema), (req, res) => {
    const updatedNote = (0, update_note_1.updateNote)(req.note, req.body);
    res.send(updatedNote);
});
