"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";

export default function AdminPostForm({userId}: {userId: string}) {
    const [state, formAction] = useFormState(addPost, undefined);
    return (
        <div className="flex flex-col items-center mb-5">
            <h3>Add New Post</h3>
            <form className="flex flex-col gap-5 w-full" action={formAction}>
                <input className="form-input-admin-tailwind" type="text" placeholder="Blog Title" name="title" />
                <input className="form-input-admin-tailwind" type="text" placeholder="Blog Slug" name="slug" />
                <input className="form-input-admin-tailwind" type="text" placeholder="Img (Optional)" name="img" />
                <input className="form-input-admin-tailwind" type="hidden" name="userId" value={userId} />
                <textarea
                    placeholder="Blog Description"
                    name="desc"
                    rows={10}
                    className="form-input-admin-tailwind"
                />
                <button className="form-button-tailwind">Add</button>
                {state?.error && <div className="text-red-500">{state.error}</div> }
            </form>
        </div>
    );
}