import { connectToDb } from "@/lib/connectToDb"
import { MAX_DISPLAY } from "@/lib/global";
import { Post } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page') ?? '1');
    const perPage = MAX_DISPLAY;

    try {
        connectToDb();
        const posts = await Post.find();
        const returnPosts = posts.slice((page - 1) * perPage, page * perPage);
        return NextResponse.json({posts: returnPosts, totalPages: Math.ceil(posts.length / perPage), page});
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts");
    }
}