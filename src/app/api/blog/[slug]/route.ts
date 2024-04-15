import { connectToDb } from "@/lib/connectToDb"
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        connectToDb();
        const {slug} = params;
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post");
    }
}

export const DELTE = async (request, {params}) => {
    try {
        connectToDb();
        const {id} = params;
        await Post.findByIdAndDelete(id);
        return NextResponse.json("Post deleted from DB");
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post");
    }
}
