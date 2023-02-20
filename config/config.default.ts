import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1676106504909_6883';
  // console.log(appInfo);

  // add your egg config in here
  config.middleware = [];
  config.logger = {
    level: 'INFO',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  };
  config.cors = {
    origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'egg', //你的数据库名称
    username: 'egg',
    password: 'egg', //你的数据库密码
    host: '150.158.34.247',
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
  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      text: ['application/xml', 'application/json'],
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
