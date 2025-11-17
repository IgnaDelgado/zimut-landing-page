import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { How } from "@/components/How";
import { Proof } from "@/components/Proof";
import { Stakes } from "@/components/Stakes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <How />
        <Proof />
        <Stakes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
