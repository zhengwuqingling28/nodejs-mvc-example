const newsRouter = require("./news");
const coursesRouter = require("./courses");
const managerRouter = require("./manager");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/manager", managerRouter);
  app.use("/", siteRouter);
}

module.exports = route;
