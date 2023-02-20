module.exports = (app) => {
  const { controller, router } = app;
  router.post("/openai", controller.openAi.index);
};
