import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        roadmapUrl: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
    },
    {timestamps:true}
);

export default mongoose.model("roadmap", RoadmapSchema);