/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:15:01
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 19:47:21
 * @FilePath: \ko2-demo1\src\components\utils\functions\paginate.ts
 * @Description: Description
 */
import * as _ from 'lodash';
import { Document } from 'mongoose';
import { BetterContext } from '../';

export function paginate(model: any, ctx: BetterContext, filters?: any, options?: any): Promise<any> {
  let _filters = {}
  let _options = {}

  if (filters) {
    _filters = _.merge(_filters, filters)
  }

  if (options) {
    _options = _.merge(_options, options)
  }

  if (ctx.request.query._filters) {
    let reqFilters = JSON.parse(ctx.request.query._filters)
    _filters = _.merge(_filters, reqFilters)
  }

  if (ctx.request.query._options) {
    let reqOptions = JSON.parse(ctx.request.query._options)
    _options = _.merge(_options, reqOptions)
  }

  console.log('_filters');
  console.log(_filters);
  console.log('_options');
  console.log(_options);
  

  return model.paginate(_filters, _options)
}