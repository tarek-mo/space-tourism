import Crew from "@/components/crew";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew | Space Tourism",
  description:
    "Get acquainted with the exceptional individuals who will accompany you on your celestial voyage. Meet the skilled and dedicated crew ready to guide you through the wonders of space exploration. Discover their expertise, dedication, and passion as they prepare to make your journey into the unknown an unforgettable experience.",
};

export default function page() {
  return (
    <main className="text-w crew-main min-h-screen bg-center bg-cover bg-no-repeat px-6 text-center lg:text-left pt-32 lg:pt-48">
      <div className="container text-center lg:text-left max-w-screen-lg mx-auto">
        <h5 className="text-w lg:text-xl font-barlowcond tracking-wide uppercase mb-8 md:mb-14 lg:mb-0 md:text-left lg:absolute text-base md:text-2xl">
          <span className="mr-7 opacity-25 font-bold">01</span>
          Meet your crew
        </h5>
        <Crew />
      </div>
    </main>
  );
}
