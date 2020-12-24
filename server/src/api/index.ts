import { Router } from "express";
import LightsRouter from "./lights";
import TodayRouter from "./today";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  return res.json({ online: true });
});

apiRouter.use("/lights", LightsRouter);
apiRouter.use("/today", TodayRouter);

export default apiRouter;
