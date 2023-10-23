const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/usersRouter");
const bookingRouter = require("./routes/bookingRouter");
require("dotenv").config();
const mongoose = require("mongoose");
const touristDestinationsRouter = require("./routes/touristDestinationsRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/touristDestinations", touristDestinationsRouter);
app.use("/users", userRouter);
app.use("/bookings", bookingRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
