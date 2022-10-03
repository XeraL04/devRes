import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        articleUrl: {
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

export default mongoose.model("article", ArticleSchema);