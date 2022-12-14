/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:22:48
 * @FilePath: \ko2-demo1\src\components\utils\classes\exception.ts
 * @Description: Description
 */
// import { badData } from '@hapi/boom';

export class Exception extends Error {
  
  constructor(boomError: any) {
    super(boomError.message)
  }
}