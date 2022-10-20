const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check user input
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: findMean(nums)
  }
  return res.send(result);
});

app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check user input
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "median",
    result: findMedian(nums)
  }
  return res.send(result);
  
});

app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
  }
  let numsAsStrings = req.query.nums.split(',');
  // check user input
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let result = {
    operation: "mode",
    result: findMode(nums)
  }
  return res.send(result);
});

/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found",404);
  // pass the error to the next piece of middleware
  return next(err);
});



app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
