import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import useLogin from "@/features/Authentication/useLogin";
import { Spinner } from "@chakra-ui/react";
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
    <div className=" bg-nBlack ">
      <h3 className="text-white text-center mt-[30px]  text-[2rem] font-bold ">
        Admin Login
      </h3>
      <div className="grid text-white w-full max-w-sm items-center gap-y-1.5 m-auto mt-[1rem] border-2 border-black px-4 py-6  ">
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Email"
          className=" "
        />
        <Label htmlFor="email">Password</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="password"
        />

        <Button
          onClick={handleLogin}
          className="mt-5 bg-blue-700 hover:bg-blue-600  text-white text-[1.2rem]    "
        >
          {isLoginLoading ? <Spinner size="md" color="white" /> : "Login"}
        </Button>
      </div>
    </div>
  );
}

export default Login;
