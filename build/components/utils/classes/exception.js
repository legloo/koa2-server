"use strict";
/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:22:48
 * @FilePath: \ko2-demo1\src\components\utils\classes\exception.ts
 * @Description: Description
 */
// import { badData } from '@hapi/boom';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    constructor(boomError) {
        super(boomError.message);
    }
}
exports.Exception = Exception;
