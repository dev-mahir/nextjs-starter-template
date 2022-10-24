import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from '../src/component/Navbar/Navbar'
import Footer from '../src/component/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default MyApp;
