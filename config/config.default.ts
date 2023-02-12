import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1676106504909_6883";
  // console.log(appInfo);

  // add your egg config in here
  config.middleware = [];
  config.logger = {
    level: "INFO",
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: "mysql",
    database: "egg", //你的数据库名称
    username: "egg",
    password: "egg", //你的数据库密码
    host: "150.158.34.247",
    port: 3306,
    define: {
      // 使用自定义的表名
      freezeTableName: true,
      // 自动生成时间戳 -小驼峰式
      timestamps: true,
      // 表名小驼峰
      underscored: false,
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
