export default function AdminPage() {
  return (
    <div>
        <form className="flex flex-col gap-5">
            <input className="form-input-tailwind" type="text" placeholder="Blog Title" name="title" />
            <input className="form-input-tailwind" type="text" placeholder="Blog Desc" name="desc" />
            <input className="form-input-tailwind" type="text" placeholder="Blog Slug" name="slug" />
            <input className="form-input-tailwind" type="text" placeholder="User ID" name="userId" />
            <button className="form-button-tailwind">Create</button>
        </form>
        <br />
        <form className="flex flex-col gap-5">
            <input className="form-input-tailwind" type="text" placeholder="Blog ID" name="id" />
            <button className="form-button-tailwind">Delete</button>
        </form>
    </div>
  );
}
