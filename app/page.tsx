import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-400 to-blue-800">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-6xl font-bold text-white">🔐 Auth</h1>
        </div>
        <p className="mb-8 text-xl text-white">
          A simple authentication service
        </p>
        <LoginButton>
          <Button
            variant="secondary"
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
          >
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
