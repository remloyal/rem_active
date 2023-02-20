import { Controller } from 'egg';

export default class LabelController extends Controller {
  // 获取标签
  public async obtain() {
    const { ctx } = this;

    ctx.body = await ctx.service.test.sayHi('egg');
  }
  //
  public async addLabel() {
    const { ctx } = this;

    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
