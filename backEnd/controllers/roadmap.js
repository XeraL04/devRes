import Roadmap from '../models/Roadmap.js';

export const getRoadmap = async (req, res,next) => {
    try {
        const roadmap = await Roadmap.findById(req.params.id);
        res.status(200).json(roadmap);
    } catch (error) {
        next(error);
    }
};

export const random = async (req, res,next) => {
    try {
        const roadmap = await Roadmap.aggregate([{$sample:{size:3}}]);
        res.status(200).json(roadmap);
    } catch (error) {
        next(error);
    }
};

export const getRoadmaps = async (req, res,next) => {
    try {
        const roadmap = await Roadmap.find(req.params);
        res.status(200).json(roadmap);
    } catch (error) {
        next(error);
    }
};