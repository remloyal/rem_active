module.exports = (app) => {
  const { STRING, INTEGER, UUIDV4 } = app.Sequelize; // 获取数据类型
  const ArticleSort = app.model.define(
    'rem_article_sort',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      lable_id: { type: STRING, defaultValue: UUIDV4, allowNull: true },
      lable_name: { type: STRING, allowNull: false },
      lable_alias: { type: STRING, allowNull: false },
      lable_description: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return ArticleSort;
};
