import express from 'express';
import {getRoadmaps, getRoadmap, random} from '../controllers/roadmap.js'

const router = express.Router();

router.get('/roadmaps', getRoadmaps);
router.get('/roadmaps/random',random);
router.get('/roadmaps/:id', getRoadmap);

export default router