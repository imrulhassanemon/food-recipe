import Image from "next/image";
import Navbar from "./navbar/Navbar";
import Hero from "./component/Hero";
import Review from "./component/Review";

export default function Home() {
  return (
    <>
    <Hero/>
    <Review/>
    </>
  );
}
