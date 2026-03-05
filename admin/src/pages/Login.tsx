import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import useLogin from "@/features/Authentication/useLogin";
import { Spinner } from "@chakra-ui/react";
import { Lock } from "lucide-react";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { loginUser, isLoading: isLoginLoading } = useLogin();

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        variant: "error",
        title: "Error",
        description: "Please fill all the fields",
      });
      return;
    }
    loginUser({ email, password });
  };

  return (
    <div className="min-h-screen bg-nBlack flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-nPink mb-4">
            <Lock size={24} className="text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold">Milan 2024</h1>
          <p className="text-white/40 text-sm mt-1">Admin Panel — Staff Login</p>
        </div>

        {/* Card */}
        <div className="bg-[#1e2433] border border-white/10 rounded-2xl p-8 space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-white/70 text-sm">
              Email address
            </Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-lg focus:border-blue-500 focus:ring-0"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-white/70 text-sm">
              Password
            </Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 rounded-lg focus:border-blue-500 focus:ring-0"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>

          <Button
            onClick={handleLogin}
            disabled={isLoginLoading}
            className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors mt-2"
          >
            {isLoginLoading ? <Spinner size="sm" color="white" /> : "Sign in"}
          </Button>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Milan 2024 · SRM Institute of Science and Technology
        </p>
      </div>
    </div>
  );
}

export default Login;
