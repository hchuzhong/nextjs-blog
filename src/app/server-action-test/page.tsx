import { addPost, deletePost } from "@/lib/action";

export default function ServerActionPage() {
    const inputStyling = "p-5 rounded border-none outline-none bg-[var(--bgSoft)] text-[var(--text)]";
    return (
        <div>
            <form action={addPost} className="flex flex-col gap-5">
                <input className={inputStyling} type="text" placeholder="Blog Title" name="title" />
                <input className={inputStyling} type="text" placeholder="Blog Desc" name="desc" />
                <input className={inputStyling} type="text" placeholder="Blog Slug" name="slug" />
                <input className={inputStyling} type="text" placeholder="User ID" name="userId" />
                <button className="p-4 bg-[var(--btn)] text-[var(--text)] font-bold border-none rounded">Create</button>
            </form>
            <br />
            <form action={deletePost} className="flex flex-col gap-5">
                <input className={inputStyling} type="text" placeholder="Blog ID" name="id" />
                <button className="p-4 bg-[var(--btn)] text-[var(--text)] font-bold border-none rounded">Delete</button>
            </form>
        </div>
    );
}