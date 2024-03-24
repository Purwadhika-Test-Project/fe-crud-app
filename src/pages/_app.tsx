import { AppProps } from "next/app";
import { AuthProvider } from "@/utils/context/AuthContext";
import "tailwindcss/tailwind.css";

function MyApp({ Component: MyComponent, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MyComponent {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
