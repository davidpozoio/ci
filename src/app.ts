import express from "express";
import noteRouter from "./notes/router/note-router";

const app = express();

app.use("/notes", noteRouter);

export default app;
