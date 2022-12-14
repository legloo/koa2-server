"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:34:25
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 14:22:05
 * @FilePath: \ko2-demo1\src\api\test\router.ts
 * @Description: Description
 */
const Router = require("koa-router");
const controller_1 = require("./controller");
let router = new Router({
    prefix: '/api/test'
});
router.get('/', controller_1.default.index);
router.post('/', controller_1.default.create);
router.get('/:id', controller_1.default.show);
router.put('/:id', controller_1.default.update);
router.patch('/:id', controller_1.default.update);
router.delete('/:id', controller_1.default.destroy);
exports.default = router;
