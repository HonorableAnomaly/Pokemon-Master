const ExpressError = require("./utilities/ExpressError");
const { campgroundSchema, reviewSchema } = require("./schemas.js");
const Campground = require("./models/campground");
const Review = require("./models/review");
const catchAsync = require("./utilities/catchAsync");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "Must be logged in");
    return res.redirect("/login");
  }
  next();
};
