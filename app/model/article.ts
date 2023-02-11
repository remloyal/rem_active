module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize; // 获取数据类型
  const Article = app.model.define(
    "rem_article",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      //   标题
      title: { type: STRING, allowNull: true },
      //   创建时间
      date: { type: DATE, defaultValue: app.Sequelize.NOW },
      //   标签
      type: { type: STRING, allowNull: true },
      //   更新日期
      updated: { type: DATE, allowNull: true },
      //   描述description
      description: { type: STRING, allowNull: false },
      //   关键字 keywords
      keywords: { type: STRING, allowNull: false },
      // 顯示文章評論模塊(默認 true)
      comments: { type: BOOLEAN, allowNull: false },
      // 文章頂部圖片
      top_img: { type: STRING, allowNull: false },
      // 文章缩略图
      cover: { type: STRING, allowNull: false },
      mathjax: { type: STRING, allowNull: false },
      katex: { type: STRING, allowNull: false },
      // 显示侧边栏 （默认true）
      aside: { type: STRING, allowNull: false },
      aplayer: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Article;
};
