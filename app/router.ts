import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  // app.beforeStart(async () => {
  //   await app.model.sync({ alter: true }); //force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
  // });
  // app.set('Content-Type', 'application/json');
  router.get("/", controller.home.index);
  // router.post("/openai", controller.openAi.index);
  require('./router/articleSortRouter')(app)
  require('./router/articleRouter')(app)
  require('./router/openAi')(app)
};
