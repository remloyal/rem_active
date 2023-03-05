import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import path from "path";
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
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"], // 配置白名单
  };
  config.cors = {
    origin: "*", //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: "/static",
    dir: [path.join(appInfo.baseDir, "static/")], // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
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
    timezone: "+08:00",
    define: {
      // 使用自定义的表名
      freezeTableName: true,
      // 自动生成时间戳 -小驼峰式
      timestamps: true,
      // 表名小驼峰
      underscored: false,
    },
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          // 返回正确得时间
          return field.string();
        }
        return next();
      },
    },
  };
  config.bodyParser = {
    jsonLimit: "1mb",
    formLimit: "1mb",
    enableTypes: ["json", "form", "text"],
    extendTypes: {
      text: ["application/xml", "application/json"],
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
