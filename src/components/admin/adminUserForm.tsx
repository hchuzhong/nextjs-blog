"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

export default function AdminUserForm() {
    const [state, formAction] = useFormState(addUser, undefined);
    return (
        <div className="flex flex-col items-center mb-5">
            <h3>Add New User</h3>
            <form className="flex flex-col gap-5 w-full" action={formAction}>
                <input className="form-input-admin-tailwind" type="text" placeholder="username" name="username" />
                <input className="form-input-admin-tailwind" type="text" placeholder="email" name="email" />
                <input className="form-input-admin-tailwind" type="password" placeholder="password" name="password" />
                <input className="form-input-admin-tailwind" type="text" placeholder="avatar img url (optional)" name="img" />
                <select className="form-input-admin-tailwind" name="isAdmin" defaultValue={0}>
                    <option value={0}>Is Admin?</option>
                    <option value={0}>No</option>
                    <option value={1}>Yes</option>
                </select>
                <button className="form-button-tailwind">Add</button>
                {state?.error && <div className="text-red-500">{state.error}</div>}
            </form>
        </div>
    );
}