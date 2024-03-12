const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const {
  exercisesRouter,
  productsRouter,
  diariesRouter,
  usersRouter,
} = require("./route");

dotenv.config();

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const statisticsMiddleware = require("./middlewar/statisticsMiddleware");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", statisticsMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", usersRouter);
app.use("/api/diaries", diariesRouter);
app.use("/api/exercises", exercisesRouter);
app.use("/api/products", productsRouter);


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
      console.log("Server is running. Use our API on port: 3333");
    });
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
