module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, UUIDV4 } = app.Sequelize; // 获取数据类型
  const Article = app.model.define(
    'rem_article',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      article_id: { type: STRING, defaultValue: UUIDV4, allowNull: true },
      //   标题
      title: { type: STRING, allowNull: false },
      //   创建时间
      date: { type: DATE, defaultValue: app.Sequelize.NOW },
      //   内容
      content: { type: STRING(3000), allowNull: false },
      //   标签
      type: { type: STRING(100), allowNull: false },
      //   更新日期
      updated: { type: DATE, allowNull: true },
      //   描述description
      description: { type: STRING, allowNull: true },
      //   关键字 keywords
      keywords: { type: STRING(100), allowNull: false },
      // 顯示文章評論模塊(默認 true)
      comments: { type: BOOLEAN, allowNull: true },
      // 文章頂部圖片
      top_img: { type: STRING, allowNull: true },
      // 文章缩略图
      cover: { type: STRING, allowNull: true },
      mathjax: { type: STRING, allowNull: true },
      katex: { type: STRING, allowNull: true },
      // 显示侧边栏 （默认true）
      aside: { type: STRING, allowNull: true },
      aplayer: { type: STRING, allowNull: true },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Article;
};
