import { Service } from 'egg';

export default class Recover extends Service {
  public async success(data = null) {
    this.ctx.status = 200;
    this.ctx.body = {
      data: data,
      code: 200,
      message: '数据请求成功',
    };
  }

  public async fail(message?: string) {
    this.ctx.status = 400;
    this.ctx.body = {
      code: 400,
      message: message || '数据请求失败',
    };
  }

  public async error(message?: string) {
    this.ctx.status = 200;
    this.ctx.body = {
      code: 500,
      message: message || '服务器异常',
    };
  }
}
