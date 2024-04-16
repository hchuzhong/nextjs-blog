import AdminPostForm from "@/components/admin/adminPostForm";
import AdminPosts from "@/components/admin/adminPosts";
import AdminUserForm from "@/components/admin/adminUserForm";
import AdminUsers from "@/components/admin/adminUsers";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

export default async function AdminPage() {
  const session = await auth();
  const rowStyling = "flex gap-24";
  const colStyling = "flex-1";
  return (
    <div className="mt-12 flex flex-col gap-24">
        <div className={rowStyling}>
          <div className={colStyling}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPosts />
            </Suspense>
          </div>
          <div className={colStyling}>
            <AdminPostForm userId={session?.user?.id} />
          </div>
        </div>
        <div className={rowStyling}>
          <div className={colStyling}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUsers />
            </Suspense>
          </div>
          <div className={colStyling}>
            <AdminUserForm />
          </div>
        </div>
    </div>
  );
}
