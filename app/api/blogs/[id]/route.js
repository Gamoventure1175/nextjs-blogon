import connectMongoDB from "@/libs/mongodb";
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {title, body, author} = await request.json();
    await connectMongoDB();
    await Blogs.findByIdAndUpdate(id, {title: title, body: body, author: author});
    return NextResponse.json({message: "Updated Blog"}, {status: 203})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const blog = await Blogs.findOne({_id: id});
    return NextResponse.json({blog}, {status: 202})
}