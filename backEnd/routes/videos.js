import express from "express";
import { getVideo, getVideos, random} from "../controllers/videos.js";

const router = express.Router();

// CREATE A VIDEO:
// router.post("/",addVideo)
// router.put("/:id",addVideo)
// router.delete("/:id",addVideo)
router.get("/videos",getVideos);
router.get("/videos/random", random)
router.get("/videos/:id",getVideo);

export default router