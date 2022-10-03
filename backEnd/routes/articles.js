import express from 'express';
import {getArticles, getArticle, random} from '../controllers/articles.js'

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/random',random);
router.get('/articles/:id', getArticle);

export default router