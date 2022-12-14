"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
exports.auth = {
    providers: {
        wechat: {
            appId: 'xxxxxx',
            appKey: 'xxxxxx'
        },
        qq: {
            appId: 'xxxxxx',
            appKey: 'xxxxxx'
        }
    },
    roles: {
        all: ['super', 'admin', 'user'],
        default: ['user']
    },
    expires: 60 * 60 * 1 //一天
};
