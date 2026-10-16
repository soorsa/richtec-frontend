import Features from "@/app/_components/Features";
import Hero from "@/app/_components/Hero";
import Services from "@/app/_components/Services";
import SomeProducts from "@/app/_components/SomeProducts";
import Testimonials from "@/app/_components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="p-4 sm:p-10 space-y-10 sm:space-y-25">
        <Features />
        <Services />
        <SomeProducts />
      </div>
      <div className="">
        <Testimonials />
      </div>
    </div>
  );
}
