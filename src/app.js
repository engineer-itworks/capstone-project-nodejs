require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

//Routes
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const instructorRoutes = require("./routes/instructorRoutes");
const studentRoutes = require("./routes/studentRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

//DB Connection
const { connectDb } = require("../src/config/db");

const logger = require("../src/middlewares/logger");
const { errorHandler } = require("../src/middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(morgan("dev"));

app.use("/user", authRoutes);
app.use("/course", courseRoutes);
app.use("/instructor", instructorRoutes);
app.use("/student", studentRoutes);
app.use("/enrollment", enrollmentRoutes);

// Upload route (streams)
const upload = multer({ dest: "temp/" });
app.post("/api/v1/upload", upload.single("file"), async (req, res, next) => {
  const { streamToFile } = require("./src/utils/streamUtils");
  try {
    const saved = await streamToFile(req.file.path, req.file.originalname);
    res.json({ message: "uploaded", path: saved });
  } catch (err) { next(err); }
});

// Connect DB then start server
if (process.env.NODE_ENV !== "test") {
  (async () => {
    try {
      await connectDb();
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => logger.info(`Server listening on ${PORT}`));
    } catch (err) {
      console.error("Failed startup:", err);
      process.exit(1);
    }
  })();
}

// Error handler (last)
app.use(errorHandler);

module.exports = app; // for tests