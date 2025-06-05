import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import FullscreenVideo from "./components/FullScreenVideo";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FullscreenVideo />
      
      <div className="bg-white">
        <div className="container">
          <AboutUs />
        </div>
      </div>

      <Footer />
    </main>
  );
}
