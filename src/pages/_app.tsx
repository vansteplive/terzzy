import { Header, Footer } from "@/widgets";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import {clashDisplay} from "@/shared/constants";
import styles from './index.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="appContent">
          <Component className={clashDisplay.className} {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
