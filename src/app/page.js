import Blog from "@/components/blog";
import Chooseus from "@/components/chooseus";
import Display from "@/components/display";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Moderndesign from "@/components/moderndesign";
import Newsletter from "@/components/newsletter";
import Products from "@/components/products";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Chooseus />
        <Moderndesign />
        <Display />
        <Testimonial />
        <Blog />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
