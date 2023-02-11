module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize; // 获取数据类型
  const User = app.model.define(
    "rem_user",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      nickName: { type: STRING, allowNull: false },
      password: { type: STRING, allowNull: false },
      phoneNum: { type: STRING, allowNull: false },
      createdAt: { type: DATE, defaultValue: app.Sequelize.NOW },
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: false,
    }
  );
  return User;
};
