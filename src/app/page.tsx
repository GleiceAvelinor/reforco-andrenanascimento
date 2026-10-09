import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutTeachers from "@/components/AboutTeachers";
import GalleryAndSocialProof from "@/components/GalleryAndSocialProof";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <AboutTeachers />
        <GalleryAndSocialProof />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
