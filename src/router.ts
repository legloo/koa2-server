/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:27:06
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 14:13:10
 * @FilePath: \ko2-demo1\src\router.ts
 * @Description: Description
 */
import * as koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';
import * as fs from 'fs';

export function setupRouters(app: koa) {
  const apiDir = path.join(__dirname, 'api')
  fs.readdir(apiDir, (error, dirs) => {
    if (error) return console.error(error);
    dirs.forEach(dir => {
      if (/^\./.test(dir)) return;
      fs.stat(`${apiDir}/${dir}/router.js`, (error, stat) => {
        if (error) return;
        if (stat.isFile()) {
          let router: Router = require(`./api/${dir}/router`).default;
          app.use(router.routes());
        }
      });
    });
  });

}
