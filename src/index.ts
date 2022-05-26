import * as express from "express";
import { Application } from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import user from "./routes/user";

createConnection()
  .then(async (connection) => {
    const PORT = process.env.PORT || 5000;
    const app: Application = express();

    app.get("/", (req: Request, res: Response) => {
      res.send("Your App is running Fine");
    });

    // express.json use as a middleware
    app.use(express.json());

    app.use("/user", user);

    app.listen(PORT, () => {
      console.log(`app is listening on: http://localhost:${PORT}`);
    });
  })
  .catch(error => console.log("Enable to connect with database",error))
