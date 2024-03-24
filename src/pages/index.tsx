import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      router.push("main/dashboard");
    } else {
      router.push("auth/login");
    }
  }, []);

  return null;
};

export default Landing;
