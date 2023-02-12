module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize; // 获取数据类型
  //   分类表
  const Sort = app.model.define(
    "rem_sort",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      acticle_id: { type: STRING, allowNull: false },
      sort_id: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Sort;
};
