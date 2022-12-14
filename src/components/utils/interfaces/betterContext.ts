/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:38:44
 * @FilePath: \ko2-demo1\src\components\utils\interfaces\betterContext.ts
 * @Description: Description
 */
import { IRouterContext } from 'koa-router';
import { BetterRequest } from './'

export interface BetterContext extends IRouterContext {
  user?:any;
  request: BetterRequest;
  session: any;
  params:any
}