"use client";

import { login } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function LoginForm() {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();
    // useEffect(() => {
    //     if (state?.success) {
    //         router.push("/");
    //     }
    // }, [state, router]);
    return (
        <form action={formAction} className="flex flex-col gap-5">
            <input className="form-input-tailwind" type="text" placeholder="username" name="username" />
            <input className="form-input-tailwind" type="password" placeholder="password" name="password" />
            <button className="form-button-tailwind">Login</button>
            {state?.error && <div className="text-red-500">{state.error}</div>}
            <Link href="/register">{"Don't have an account?"} <b>Register</b></Link>
        </form>
    );
}