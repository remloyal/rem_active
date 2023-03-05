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
    const { lable_name, lable_alias, lable_description } = ctx.request.body.params;
    await ctx.model.ArticleSort.create({
      lable_name,
      lable_alias,
      lable_description,
    });
    ctx.service.recover.success(null, '数据添加成功');
  }

  // 删除
  public async deleteSort() {
    const { ctx } = this;
    const id = ctx.query.id;
    const data = await ctx.model.ArticleSort.findOne({
      where: {
        lable_id: id,
      },
    });
    if (data) {
      data.destroy();
      ctx.service.recover.success(null, '数据删除成功');
    } else {
      ctx.service.recover.fail('数据删除失败');
    }
  }

  // 更新
  public async updateSort() {
    const { ctx } = this;
    const record = ctx.request.body.params;
    const data = await ctx.model.ArticleSort.findOne({
      where: {
        lable_id: record.lable_id,
      },
    });
    if (data) {
      await data.update({ ...record });
      await ctx.service.recover.success(data, '数据更新成功');
    } else {
      await ctx.service.recover.success(data, '未查找到该标签');
    }
  }
}
