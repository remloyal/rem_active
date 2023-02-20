module.exports = (app) => {
  const { controller, router } = app;
  router.get("/allSort", controller.articleSort.allSort);
  router.post("/create", controller.articleSort.createSort);
  router.get("/deleteSort", controller.articleSort.deleteSort);
  router.post("/updateSort", controller.articleSort.updateSort);
};