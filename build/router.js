"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRouters = void 0;
const path = require("path");
const fs = require("fs");
function setupRouters(app) {
    const apiDir = path.join(__dirname, 'api');
    fs.readdir(apiDir, (error, dirs) => {
        if (error)
            return console.error(error);
        dirs.forEach(dir => {
            if (/^\./.test(dir))
                return;
            fs.stat(`${apiDir}/${dir}/router.js`, (error, stat) => {
                if (error)
                    return;
                if (stat.isFile()) {
                    let router = require(`./api/${dir}/router`).default;
                    app.use(router.routes());
                }
            });
        });
    });
}
exports.setupRouters = setupRouters;
