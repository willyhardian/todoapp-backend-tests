const express = require("express");
const TaskController = require("./controllers/TaskController");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

app.get("/tasks", TaskController.getTasks);
app.use(errorHandler);
module.exports = app;
