import express from "express";
import dotenv from "dotenv";
import dbConnection from "./dbConfig/dbConnection.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import apartmentListingRoutes from "./routes/IT22577160_Routes/apartmentListing.route_02.js";
import PaymentProfileCreationRoutes from "./routes/IT22602978_Routes/PaymentProfileCreation.route_03.js";
import TaskAssignRoute from "./routes/IT22607232_Routes/s1_TaskAssignRoute.js";
import cookieParser from "cookie-parser";
import serviceListingRoutes from "./routes/IT22350114_Routes/serviceListingRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

dbConnection();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// IT22577160 Routes
app.use("/api/apartmentListing", apartmentListingRoutes);
// IT22602978 Routes
app.use("/api/PaymentProfileCreation",PaymentProfileCreationRoutes)

// IT22350114 Routes
app.use("/api/serviceListing", serviceListingRoutes);

//IT22607232 Routes
app.use("/api/taskAssign", TaskAssignRoute);





app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


