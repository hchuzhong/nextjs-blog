import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import Image from "next/image";

export default async function AdminUsers() {
    const users = await getUsers();
    return (
        <div className="flex flex-col items-center mb-5">
            <h3>Users</h3>
            {users.map((user) => (
                <div key={user.id} className="w-full flex h-16 my-2 items-center justify-between gap-2">
                    <div className="flex items-center gap-5">
                        <div className="relative w-12 h-12">
                            <Image className="object-cover rounded-full" src={user.img ?? '/noavatar.png'} alt="" fill />
                        </div>
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className="py-1 px-2 bg-red-500 rounded border-none">Delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}