import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./connectToDb";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const login = async (credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({ username: credentials.username });
        if (!user) {
            throw new Error('Wrong credentials!');
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
            throw new Error('Wrong credentials!');
        }
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to login');
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            if (account?.provider === 'github') {
                connectToDb();
                try {
                    if (!profile) return false;
                    const user = await User.findOne({ username: profile.name });
                    if (!user) {
                        const userInfo = {
                            username: profile.name,
                            img: profile.avatar_url,
                        }
                        profile.email && (userInfo.email = profile.email);
                        const newUser = await User.create(userInfo);
                        await newUser.save();
                    } else {
                        console.log('user already exists');
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        }
    }
})