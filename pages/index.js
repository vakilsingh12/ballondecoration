import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./component/Header";
import About from "./component/About";
import Occassion from './component/Occassions';
import Service from "./component/Service";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";
import Main from "./component/Main";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>A2Z Balloon Decoration</title>
        <meta name="description" content="Generated by A2Z balooan decoration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header/>
      <Main/>
      <About/>
      <Occassion/>
      <Service/>
      <Gallery/>
      <Footer/>
    </>
  );
}
