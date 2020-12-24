import { Router } from "express";
import LightsRouter from "./lights";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  return res.json({ online: true });
});

apiRouter.use("/lights", LightsRouter);

export default apiRouter;
