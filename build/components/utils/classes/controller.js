"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(__model) {
        this.__model = __model;
        for (let method of ['index', 'show', 'create', 'update', 'destroy']) {
            this[method] = this[method].bind(this);
        }
    }
    get model() {
        return this.__model;
    }
}
exports.Controller = Controller;
