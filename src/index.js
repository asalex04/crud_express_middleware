"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routers_1 = __importDefault(require("./routers"));
// import errorHandler from './middleware/ErrorHandlingMiddleware.js'
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', routers_1.default);
//Обработка ошибок
// app.use(errorHandler)
const startApp = () => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};
startApp();
