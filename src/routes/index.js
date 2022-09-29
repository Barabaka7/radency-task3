"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('This is a notes management server.');
});
