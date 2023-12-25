import { Metadata } from "next";
import SelectedTech from "@/components/selected-tech";

export const metadata: Metadata = {
  title: "Technologies | Space Tourism",
  description:
    "Delve into the fascinating world of space technology. Explore a range of groundbreaking innovations and concepts that power space exploration. From propulsion systems to life support, discover the terminology and intricacies behind the technologies propelling humanity into the cosmos. Unravel the essentials and advancements in space technology as you embark on an educational journey through the cutting-edge tools and concepts reshaping our cosmic exploration.",
};
export default function Page() {
  return (
    <main className="text-w technology-main min-h-screen bg-center bg-cover bg-no-repeat lg:pl-6 text-center lg:text-left pt-32 lg:pt-48 pb-20 md:pb-24">
      <div className="container text-center lg:text-left max-w-7xl ml-auto">
        <h5 className="text-w lg:text-xl font-barlowcond tracking-wide uppercase mb-8 md:mb-14 lg:mb-6 md:text-left text-base md:text-2xl  md:ml-6 lg:ml-0">
          <span className="mr-7 opacity-25 font-bold">03</span>
          Space launch 101
        </h5>
        <div className="flex items-center flex-col-reverse lg:flex-row">
          <SelectedTech />
        </div>
      </div>
    </main>
  );
}
