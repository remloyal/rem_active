module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize; // 获取数据类型
  const Lables = app.model.define(
    "rem_lables",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      //   文章id
      acticle_id: { type: STRING, allowNull: false },
      //   标签id
      label_id: { type: STRING, allowNull: false },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return Lables;
};
