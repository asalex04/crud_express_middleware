"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const booksRouter_1 = __importDefault(require("./booksRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(booksRouter_1.default);
exports.default = router;