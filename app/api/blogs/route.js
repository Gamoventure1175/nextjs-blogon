import connectMongoDB from "@/libs/mongodb";
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, body, author} = await request.json();
    await connectMongoDB();
    await Blogs.create({body: body, title: title, author: author});
    return NextResponse.json({message:"New Blog Added"}, {status: 201});
}

export async function GET(request) {
    await connectMongoDB();
    const allBlogs = await Blogs.find({});
    return NextResponse.json({allBlogs}, {status: 202});
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Blogs.deleteOne({_id: id});
    return NextResponse.json({message: "Blog Deleted"}, {status: 200})
}