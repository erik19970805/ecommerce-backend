const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const { auth, authAdmin } = require("./middlewares/authentication");

const { PORT } = process.env;

// init
const app = express();

// settings
app.set("port", PORT || 4000);

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(fileUpload({ useTempFiles: true }));
require("./middlewares/passport");

// routes
app.use("/auth", require("./routes/auth"));
app.use("/users", auth, authAdmin, require("./routes/user"));
app.use("/upload", require("./routes/upload"));
app.use("/category", require("./routes/category"));
app.use("/products", require("./routes/product"));
app.use("/cart", require("./routes/cart"));
app.use("/payment", require("./routes/payment"));
app.use("/history", require("./routes/history"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
module.exports = app;
