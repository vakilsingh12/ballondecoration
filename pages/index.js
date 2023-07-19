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
        <title>A2Z Balloon Decoration - a2zballoondecoration.in </title>
        <meta
          name="title"
          content="A2Z Balloon Decoration Party Supplies -a2zballoondecoration.in/"
        />
        <meta
          name="description"
          content="Our luxury balloon decoration services cover all types of events and needs of clients such as baby showers, welcome baby decoration, corporate event decoration, party decoration, wedding decoration, birthday decoration, bachelorette party decoration, anniversary decoration."
        />
        <meta name="keywords" content="Balloon, Party, E-commerce" />
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
