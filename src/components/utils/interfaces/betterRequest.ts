/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:39:13
 * @FilePath: \ko2-demo1\src\components\utils\interfaces\betterRequest.ts
 * @Description: Description
 */
import { Request } from 'koa';

export interface BetterRequest extends Request {
  files: any;
  fields: any;
  qs: any;
  user: any;
  query:any
}