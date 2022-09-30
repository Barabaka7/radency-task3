"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notePatchSchema = exports.noteSchema = void 0;
const yup = __importStar(require("yup"));
exports.noteSchema = yup.object().shape({
    noteName: yup.string().required().strict(true),
    id: yup.number().required().positive().integer(),
    category: yup.string().required(),
    noteContent: yup.string().required(),
    isArchived: yup.boolean().required(),
    creationDate: yup
        .date()
        .default(() => new Date())
        .required(),
});
exports.notePatchSchema = yup.object().shape({
    noteName: yup
        .string()
        .strict(true)
        .test("oneOfRequired", "One of noteName, category, noteContent, isArchived or creationDate must be entered", function (item) {
        return (this.parent.noteName ||
            this.parent.category ||
            this.parent.noteContent ||
            this.parent.isArchived ||
            this.parent.creationDate);
    }),
    category: yup
        .string()
        .strict(true)
        .test("oneOfRequired", "One of noteName, category, noteContent, isArchived or creationDate must be entered", function (item) {
        return (this.parent.noteName ||
            this.parent.category ||
            this.parent.noteContent ||
            this.parent.isArchived ||
            this.parent.creationDate);
    }),
    noteContent: yup
        .string()
        .strict(true)
        .test("oneOfRequired", "One of noteName, category, noteContent, isArchived or creationDate must be entered", function (item) {
        return (this.parent.noteName ||
            this.parent.category ||
            this.parent.noteContent ||
            this.parent.isArchived ||
            this.parent.creationDate);
    }),
    isArchived: yup
        .boolean()
        .strict(true)
        .test("oneOfRequired", "One of noteName, category, noteContent, isArchived or creationDate must be entered", function (item) {
        return (this.parent.noteName ||
            this.parent.category ||
            this.parent.noteContent ||
            this.parent.isArchived ||
            this.parent.creationDate);
    }),
    creationDate: yup
        .date()
        .strict(true)
        .test("oneOfRequired", "One of noteName, category, noteContent, isArchived or creationDate must be entered", function (item) {
        return (this.parent.noteName ||
            this.parent.category ||
            this.parent.noteContent ||
            this.parent.isArchived ||
            this.parent.creationDate);
    }),
});
