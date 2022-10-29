/** BizTime express application. */


const express = require("express");
//app
const app = express();
//routes
const ExpressError = require("./expressError")
const companiesRoutes = require("./routes/companies");
const invoicesRoutes = require("./routes/invoices");
const routes = require("./routes")

app.use(express.json());

app.use(routes);
/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;
