import { Controller } from 'egg';

// 文章分类
export default class ArticleSortController extends Controller {
  // 获取全部
  public async allSort() {
    const { ctx } = this;
    const data = await ctx.model.ArticleSort.findAll();
    await ctx.service.recover.success(data);
  }

  //添加
  public async createSort() {
    const { ctx } = this;
    const { lable_name, lable_alias, lable_description } = ctx.request.body;
    const data = await ctx.model.ArticleSort.create({
      lable_name,
      lable_alias,
      lable_description,
    });
    ctx.body = {
      data: data,
      code: 200,
      message: '数据添加成功',
    };
  }

  // 删除
  public async deleteSort() {
    const { ctx } = this;
    const id = ctx.query.id;
    console.log('字段', id);
    const data = await ctx.model.ArticleSort.findOne({
      where: {
        lable_id: id,
      },
    });
    if (data) {
      data.destroy();
      ctx.body = {
        data: data,
        code: 200,
        message: '数据添加成功',
      };
    } else {
      ctx.body = {
        data: data,
        code: 200,
        message: '数据查找失败',
      };
    }
  }

  // 更新
  public async updateSort() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
