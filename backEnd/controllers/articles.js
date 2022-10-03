import Article from '../models/Article.js';

export const getArticle = async (req, res,next) => {
    try {
        const article = await Article.findById(req.params.id);
        res.status(200).json(article);
    } catch (error) {
        next(error);
    }
};

export const random = async (req, res,next) => {
    try {
        const articles = await Article.aggregate([{$sample:{size:3}}]);
        res.status(200).json(articles);
    } catch (error) {
        next(error);
    }
};

export const getArticles = async (req, res,next) => {
    try {
        const article = await Article.find(req.params);
        res.status(200).json(article);
    } catch (error) {
        next(error);
    }
};