/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:27:00
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 19:10:48
 * @FilePath: \ko2-demo1\src\index.ts
 * @Description: Description
 */
import * as koa from 'koa';
import * as convert from 'koa-convert';
const BodyParser = require('koa-bodyparser');
import * as qs from 'qs';
import * as logger from 'koa-logger';
const onerror = require('koa-onerror')
import { setupRouters } from './router';
import { setupMongoose } from './mongoose';

// Connect to MongoDB
//todo
setupMongoose();



export const app: koa = new koa();

onerror(app)

app.use(logger());

app.use(BodyParser());
// app.use(convert(bodyParser({
//   querystring: qs
// })));
setupRouters(app);
app.listen(3000);
console.log('started')