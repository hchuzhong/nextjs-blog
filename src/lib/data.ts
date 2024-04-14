import { unstable_noStore } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts");
    }
}

export const getPost = async (slug: number | string) => {
    try {
        await connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post");
    }
}

export const getUsers = async () => {
    try {
        await connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}

export const getUser = async (id: number | string) => {
    unstable_noStore();
    try {
        await connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user");
    }
}