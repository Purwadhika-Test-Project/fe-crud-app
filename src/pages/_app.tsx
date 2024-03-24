import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function MyApp({ Component: MyComponent, pageProps }: AppProps) {
  return <MyComponent {...pageProps} />;
}

export default MyApp;
