import { Router } from "express";
import { getCityWeather } from "../service/OpenWeatherClient";
import { getTodayCards } from "../service/TrelloAPIClient";
import APIResponse from "./APIResponse";

const router = Router();

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTodayCards();

    return res.json({ success: true, data: tasks } as APIResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: {
        id: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong fetching today's tasks",
      },
    } as APIResponse);
  }
});

router.get("/weather", async (req, res) => {
  try {
    const weather = await getCityWeather();

    return res.json({ success: true, data: weather } as APIResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: {
        id: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong fetching today's weather",
      },
    } as APIResponse);
  }
});

export default router;
