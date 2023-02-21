import { Controller } from 'egg';

// 文章分类
export default class ArticleController extends Controller {
  // 获取全部
  public async allArticle() {
    const { ctx } = this;
    const data = await ctx.model.Article.findAll();
    await ctx.service.recover.success(data);
  }

  // 单个获取详情
  public async getArticle() {
    const { ctx } = this;
    const id = ctx.query.id;
    const data = await ctx.model.Article.findOne({
      where: {
        article_id: id,
      },
    });
    await ctx.service.recover.success(data);
  }

  // 分页查询
  public async getArticlePage() {
    const { ctx } = this;
    // const id = ctx.query.id;
    const record: { page: number; size: number ,} = ctx.request.body;

    const { count, rows } = await ctx.model.Article.findAndCountAll({
      // where: {
      //   article_id: id,
      // },
      offset: (record.page - 1) * record.size,
      limit: record.size,
      order: [['id']],
    });
    await ctx.service.recover.list(count, rows, record.size, record.page);
  }
  //添加
  public async createArticle() {
    const { ctx } = this;
    const record = ctx.request.body;
    record.updated = new Date();
    const data = await ctx.model.Article.create({
      ...record,
    });
    ctx.service.recover.success(data, '数据添加成功');
  }

  // 删除
  public async deleteArticle() {
    const { ctx } = this;
    const id = ctx.query.id;
    const data = await ctx.model.Article.findOne({
      where: {
        article_id: id,
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
  public async updateArticle() {
    const { ctx } = this;
    const record = ctx.request.body;
    const data = await ctx.model.Article.findOne({
      where: {
        article_id: record.article_id,
      },
    });
    record.updated = new Date();
    if (data) {
      await data.update({ ...record });
      await ctx.service.recover.success(null, '数据更新成功');
    } else {
      await ctx.service.recover.success(data, '数据更新失败');
    }
  }
}
