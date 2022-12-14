"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:27:00
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 19:10:48
 * @FilePath: \ko2-demo1\src\index.ts
 * @Description: Description
 */
const koa = require("koa");
const BodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const onerror = require('koa-onerror');
const router_1 = require("./router");
const mongoose_1 = require("./mongoose");
// Connect to MongoDB
//todo
(0, mongoose_1.setupMongoose)();
exports.app = new koa();
onerror(exports.app);
exports.app.use(logger());
exports.app.use(BodyParser());
// app.use(convert(bodyParser({
//   querystring: qs
// })));
(0, router_1.setupRouters)(exports.app);
exports.app.listen(3000);
console.log('started');
