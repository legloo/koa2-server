/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:53:50
 * @FilePath: \ko2-demo1\src\components\utils\functions\handleError.ts
 * @Description: Description
 */
import { Context } from 'koa';
import { getErrorStatus, getErrorStatusCode } from '../';
import { Boom } from '@hapi/boom'

export function handleError(ctx: any, error: Error, statusCode: number = 500): void {

  if (error instanceof Error) {
    let json: any = {
      name: error.name,
      message: error.message
    };
    // boom.
    console.log( error);
    console.log( JSON.stringify(error));
    let be: Boom = getErrorStatus(error);
    console.log(JSON.stringify(be));
    // be.output.payload.details = {
    //   name: error.name
    // };
    //   let errors = (<any>error).errors;
    //   if (errors) be.output.payload.details.errors = errors;

    // ctx.status = getErrorStatusCode(error);
    // ctx.body = JSON.stringify(json);
    // } else {
    //   be = boom.wrap(error, 500);
    ctx.status = be.output.statusCode;
    ctx.body = be.output.payload;
  }

}