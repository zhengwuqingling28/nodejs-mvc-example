const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// middleware
// app.use(express.urlencoded({ extended: true })); xử lý dữ liệu từ form submit html
// app.use(express.json()); xử lý dữ liệu từ form submit bằng XMLHttpRequest, fetch, axios, AJAX

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

//dispatch ==> Action ==> function handler(Controller)

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/`);
});
