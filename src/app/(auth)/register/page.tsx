import RegisterForm from "@/components/registerForm/registerForm";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] p-12 bg-[var(--bgSoft)] flex flex-col text-center gap-6 rounded">
        <RegisterForm />
      </div>
    </div>
  );
}
