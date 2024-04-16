import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";

export default function LoginPage() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="form-wrapper-tailwind">
          <form action={handleGithubLogin} className="w-full p-5 bg-white text-[var(--bg)] rounded font-bold border-2">
            <button>Login with Github</button>
          </form>
          <LoginForm />
        </div>
      </div>
      
    </div>
  );
}
