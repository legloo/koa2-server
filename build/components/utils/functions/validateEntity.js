"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntity = void 0;
const __1 = require("../");
function validateEntity(entity) {
    if (!entity) {
        throw new __1.EntityNotFoundError();
    }
}
exports.validateEntity = validateEntity;
