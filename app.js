module.exports = (app) => {
  console.log("应用已启动...");

  app.once("server", (server) => {
    // websocket
  });
  app.on("error", (err, ctx) => {
    // report error
  });
  app.on("request", (ctx) => {
    // log receive request
    ctx.logger.info("some request data: %j", ctx.request);
  });
  app.on("response", (ctx) => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    ctx.logger.info("some request data: %j", ctx.request);
    // log total cost
  });
};
