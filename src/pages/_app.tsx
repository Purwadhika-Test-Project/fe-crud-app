import { AppProps } from "next/app";

function MyApp({ Component: MyComponent, pageProps }: AppProps) {
  return <MyComponent {...pageProps} />;
}

export default MyApp;
