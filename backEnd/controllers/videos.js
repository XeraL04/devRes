import Video from'../models/Video.js'

export const getVideo = async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (err) {
      next(err);
    }
  };

  export const random = async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ $sample: { size: 3 } }]);
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  };

  export const getVideos = async (req, res, next) => {
    try {
      const video = await Video.find(req.params);
      res.status(200).json(video);
    } catch (err) {
      next(err);
    }
  };


