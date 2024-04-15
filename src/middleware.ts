import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export { auth as middleware } from "@/lib/auth"

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};