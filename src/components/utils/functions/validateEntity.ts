/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:39:24
 * @FilePath: \ko2-demo1\src\components\utils\functions\validateEntity.ts
 * @Description: Description
 */
import { Document } from 'mongoose';
import { EntityNotFoundError } from '../'

export function validateEntity(entity: Document): void {
  if (!entity) {
    throw new EntityNotFoundError()
  }
}