const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const contactsRouter = require('./route/contactsRouter');
const dotenv = require("dotenv");
const { usersRouter, postsRouter, pagesRouter, settingsRouter } = require("./route");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/pages", pagesRouter);
app.use("/api/settings", settingsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB connection success");
      console.log("Server is running. Use our API on port: 5556");
    });
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
