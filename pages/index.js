import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./component/Header";
import About from "./component/About";
import Occassion from "./component/Occassions";
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
        <meta
          name="description"
          content="One does not remember days, but remember moments. We understand the value of an occasion and the emotions attached to it. We provide a wide range of decoration services to make any event full of joy, happiness and memorable. Our luxury balloon decoration services cover all types of events and needs of clients such as baby showers, welcome baby decoration, corporate event decoration, party decoration, wedding decoration, birthday decoration, bachelorette party decoration, anniversary decoration, office party decoration and more."
        />
        <meta name="google-site-verification" content="ZRlr5BDsmx55krhaL5ophvQtuYL1mIi1n7OjQidomdM" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="container mx-auto">
        <Header />
        <Main />
        <About />
        <Occassion />
        <Service />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
