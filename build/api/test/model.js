"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:35:00
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:43:33
 * @FilePath: \ko2-demo1\src\api\test\model.ts
 * @Description: Description
 */
const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");
exports.default = mongoose.model('Test', new mongoose.Schema({
    content: String,
    time: Date,
    smiles: Boolean
})
    .plugin(paginate));
