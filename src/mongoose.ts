/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 17:27:15
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 18:34:32
 * @FilePath: \ko2-demo1\src\mongoose.ts
 * @Description: Description
 */
import * as mongoose from 'mongoose';
import { ImageProcessError } from './components/utils';
import * as config from './config';

export class Image extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, 'Image');
  }

  // `cast()` takes a parameter that can be anything. You need to
  // validate the provided `val` and throw a `CastError` if you
  // can't convert it.
  cast(val) {
    if (!val) {
      throw new ImageProcessError();
    }
    return val;
  }
}

export function setupMongoose() {
  console.log('dbconnect');
  
  mongoose.Schema.Types['Image'] = Image;
  const a = ((e)=>{
    console.log(e);
    
  })
  mongoose.set('strictQuery', false);
  console.log(config.mongo.uri);
  console.log(config.mongo.options);
  mongoose.connect(config.mongo.uri, config.mongo.options);
  mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });
}