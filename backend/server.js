const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { logger } = require("./middlewares/logger");
const userRouter = require("./routes/user-router");
const categoryRouter = require("./routes/categories");
const recordsRouter = require("./routes/record-route");
const authRoutes = require("./routes/auth-route");

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/records", recordsRouter);
app.use("/auth", authRoutes);
app.use("/users", userRouter);
app.use("/categories", categoryRouter);

app.get("/", (_, res) => {
  res.send("Welcome expense tracker API");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
