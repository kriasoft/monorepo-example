/**
 * Web app example
 */

import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("*", (req: Request, res: Response) => {
  res.send("Hello from web");
});

app.listen(port, () => {
  console.log(`Web app listening on http://localhost:${port}/`);
});
