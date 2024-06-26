import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/utils/context/AuthContext";

import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (username: string) => {
    login(username);
  };

  return (
    <Layout>
      <h1 className="font-bold text-white text-2xl mt-10">
        User Management System
      </h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
          <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
          <form>
            <Input
              label="Username"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <Button onClick={() => handleLogin(username)} type="button">
                Sign In
              </Button>
            </div>
          </form>
          <p className="text-center text-sm mt-4">
            Enter your credentials to access the user management system.
          </p>
        </div>
        <div className="flex gap-x-5 mt-10">
          <h1 className="text-white">Powered by :</h1>
          <Image
            alt="next"
            src="https://imgs.search.brave.com/LPe22G3WouWUTLupx2-kGiS0QjJi9dI3S2cZoJiSmgo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9uZXh0LWpzLnN2/Zw.svg"
            width={50}
            height={50}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
