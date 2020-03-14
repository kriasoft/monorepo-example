/**
 * API example
 */

import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.redirect("/api");
});

app.get("/api/*", (req: Request, res: Response) => {
  res.send("Hello from API");
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}/`);
});
