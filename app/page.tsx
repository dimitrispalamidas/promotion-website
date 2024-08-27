import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import FullscreenVideo from "./components/FullScreenVideo";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FullscreenVideo />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
