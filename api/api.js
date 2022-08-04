const express = require("express");
const cors = require("cors");

const postRouter = require("./routers/post");
const userRouter = require("./routers/user");

const api = express();

// Add middleware

api.use(cors());
api.use(express.json());

// Setup routes

api.use("/posts", postRouter);
api.use("/users", userRouter);

module.exports = api;
