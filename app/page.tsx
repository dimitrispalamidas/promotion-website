import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Hero />
      <ImageSection />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
