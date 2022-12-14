/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:35:00
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 17:43:33
 * @FilePath: \ko2-demo1\src\api\test\model.ts
 * @Description: Description
 */
import * as mongoose from 'mongoose';
import * as paginate from 'mongoose-paginate';

export default mongoose.model('Test',
  new mongoose.Schema({
    content: String,
    time: Date,
    smiles: Boolean
  })
    .plugin(paginate)
);