import mongoose,{ Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: String,
        body: String,
        author: String
    }, {
        timestamps: true
    }
)

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema)

export default Blogs;