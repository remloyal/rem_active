module.exports = (app) => {
  const { controller, router } = app;
  router.get("/allArticle", controller.article.allArticle);
  router.get("/getArticle", controller.article.getArticle);
  router.post("/createArticle", controller.article.createArticle);
  router.get("/deleteArticle", controller.article.deleteArticle);
  router.post("/updateArticle", controller.article.updateArticle);
};