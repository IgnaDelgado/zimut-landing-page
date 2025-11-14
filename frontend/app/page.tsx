import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { How } from "@/components/How";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <How />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
