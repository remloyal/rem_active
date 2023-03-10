import { Service } from 'egg';

export default class Recover extends Service {
  public async success(data = null, message?: string) {
    this.ctx.status = 200;
    this.ctx.body = {
      data: data,
      code: 200,
      message: message || '数据请求成功',
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

  // 列表
  public async list(count, row, size, page) {
    this.ctx.status = 200;
    this.ctx.body = {
      code: 200,
      message: '成功',
      data: {
        current: page,
        pages: Math.ceil(count / size),
        size: size,
        total: count,
        records: row,
      },
    };
  }
}
