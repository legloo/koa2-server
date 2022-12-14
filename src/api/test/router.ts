/*
 * @Author: zhuyh zhuyh@sit.com.cn
 * @Date: 2022-12-14 13:34:25
 * @LastEditors: zhuyh zhuyh@sit.com.cn
 * @LastEditTime: 2022-12-14 14:22:05
 * @FilePath: \ko2-demo1\src\api\test\router.ts
 * @Description: Description
 */
import * as Router from 'koa-router';
import controller from './controller';


let router = new Router({
    prefix: '/api/test'
});

router.get('/', controller.index);

router.post('/', controller.create);

router.get('/:id', controller.show);

router.put('/:id', controller.update);

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy);

export default router;