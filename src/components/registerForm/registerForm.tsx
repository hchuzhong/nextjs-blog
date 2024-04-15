"use client";

import { register } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function RegisterForm() {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter();
    useEffect(() => {
        if (state?.success) {
            router.push("/login");
        }
    }, [state, router]);
    return (
        <form action={formAction} className="flex flex-col gap-5">
            <input className="form-input-tailwind" type="text" placeholder="username" name="username" />
            <input className="form-input-tailwind" type="text" placeholder="email" name="email" />
            <input className="form-input-tailwind" type="password" placeholder="password" name="password" />
            <input className="form-input-tailwind" type="password" placeholder="password again" name="passwordRepeat" />
            <input className="form-input-tailwind" type="text" placeholder="avatar img url (optional)" name="img" />
            <button className="form-button-tailwind">Register</button>
            {state?.error && <div className="text-red-500">{state.error}</div>}
            <Link href="/login">Have an account? <b>Login</b></Link>
        </form>
    );
}