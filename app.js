if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// console.log(process.env.SECRET)
// console.log(process.env.API_KEY)

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const ExpressError = require("./utilities/ExpressError");
const methodOverride = require("method-override");
const passport = require("passport");
const passportLocal = require("passport-local");
const User = require("./models/user");

const mongoSanitize = require("express-mongo-sanitize");

// Route requires
const userRoutes = require("./routes/users");

const MongoStore = require("connect-mongo");
const { consumers } = require("stream");

// MongoDB Atlas
// const dbUrl = process.env.DB_URL;
// Local DB/Session Store
const dbUrl = "mongodb://localhost:27017/pokemon-master";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  // No longer supported
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // Used to be necessary to get rid of a depracation warning
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected...");
});

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(mongoSanitize());

const store = new MongoStore({
  mongoUrl: dbUrl,
  secret: "thisshouldbeabettersecret",
  touchAfter: 24 * 3600,
});

store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});

const sessionConfig = {
  store,
  name: "session",
  secret: "thisshouldbeabettersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    // Set to true by default, even without this property added
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

// Session must be used before 'passport.session'
app.use(session(sessionConfig));
app.use(flash());

// Using Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));

// Methods for storing and unstoring Users using mongoose passport plugin
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  // console.log(req.query);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Initial user creation test
// app.get("/fakeUser", async (req, res) => {
//   const user = new User({ email: "fakeuser@gmail.com", username: "fakeuser" });
//   const newUser = await User.register(user, "chicken");
//   res.send(newUser);
// });

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

// Pokédex
app.get("/pokedex", (req, res) => {
  res.render("pokedex/pokedex");
});

// Collections
app.get("/collections", (req, res) => {
  res.render("collections/index");
});

// Trainers
app.get("/trainers", (req, res) => {
  res.render("trainers/trainers");
});

// Initial db save
// app.get("/makecampground", async (req, res) => {
//   const camp = new Campground({ title: "My Backyard", description: "cheap camping!" });
//   await camp.save();
//   res.send(camp);
// });

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Parallax 404
app.use((err, req, res, next) => {
  const { statusCode = 404 } = err;
  // if (!err.message) err.message = "Oh no, something went wrong!";
  // res.status(statusCode);
  res.render("error404");
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh no, something went wrong!";
  res.status(statusCode);
  res.render("error", { err });
});

app.listen(3333, () => {
  console.log("Serving on port 3333...");
});
