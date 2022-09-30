"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBodyPatch = exports.validateBody = void 0;
const validateBody = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //const castedBody = schema.cast(req.body);
    try {
        yield schema.validate(req.body);
        return next();
    }
    catch (err) {
        return res.status(500).send("validation failed");
    }
});
exports.validateBody = validateBody;
const validateBodyPatch = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //const castedBody = schema.cast(req.body);
    try {
        yield schema.validate(req.body);
        return next();
    }
    catch (err) {
        return res.status(500).send("validation failed");
    }
});
exports.validateBodyPatch = validateBodyPatch;
