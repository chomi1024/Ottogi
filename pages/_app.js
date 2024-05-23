import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "./../src/Layout/index";

export default function App({ Component, pageProps }) {
  const Route = useRouter();

  return Route.pathname === "/404" ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
