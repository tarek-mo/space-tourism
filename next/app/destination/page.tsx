import SingleDestination from "@/components/SingleDestination";

export default function page() {
  return (
    <main className="text-w destination-main min-h-screen bg-center bg-cover bg-no-repeat  pb-7 md:pb-20 lg:pb-32 px-6 text-center lg:text-left pt-32 lg:pt-48">
      <div className="container text-center lg:text-left max-w-screen-lg mx-auto">
        <h5 className="text-w lg:text-xl font-barlowcond tracking-wide uppercase mb-8 md:mb-14 lg:mb-6 md:text-left text-base md:text-2xl  md:ml-6 lg:ml-0">
          <span className="mr-7 opacity-25 font-bold">01</span>
          Pick your destination
        </h5>
        <SingleDestination />
      </div>
    </main>
  );
}
