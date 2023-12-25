"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import { technologies } from "@/data.json";
import Link from "next/link";

const SelectedTech = () => {
  const searchParams = useSearchParams();
  const selectedTechSlug = searchParams.get("tech") || technologies[0].slug;
  const selectedTech = technologies.find(
    (tech) => tech.slug == selectedTechSlug
  );
  return (
    <>
      <div className="order-2 lg:order-1 flex flex-row lg:flex-col gap-4 lg:gap-8 lg:mr-20 mb-7 md:mb-11 lg:mb-0">
        {technologies.map((tech) => (
          <Link
            scroll={false}
            key={tech.id}
            href={`?tech=${tech.slug}`}
            className={
              selectedTechSlug === tech.slug
                ? "transform w-10 h-10 md:w-16 md:h-16 lg:w-20	lg:h-20 bg-w hover:bg-w rounded-full font-bellefair text-db hover:text-db text-base md:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300 border-1 border-g flex items-center justify-center"
                : "transform w-10 h-10 md:w-16 md:h-16 lg:w-20	lg:h-20 bg-transparent hover:bg-w rounded-full font-bellefair text-w hover:text-db text-base md:text-2xl lg:text-3xl hover:scale-110 transition-all duration-300 border-1 border-g flex items-center justify-center"
            }
          >
            {tech.id}
          </Link>
        ))}
      </div>
      {selectedTech ? (
        <>
          <div className="order-1 lg:order-2 mx-6 md:mx-0">
            <h4 className="uppercase mb-2	lg:mb-3	md:mb-4 font-barlowcond text-lb">
              the terminology
            </h4>
            <h2 className="uppercase font-bellefair lg:text-h3 sm:text-h5t md:text-4xl leading-tight mb-4">
              {selectedTech.name}
            </h2>
            <p className="md:w-112 lg:w-120 text-lb leading-6 md:leading-7 lg:leading-8">
              {selectedTech.description}
            </p>
          </div>
          <div className="lg:ml-auto lg:pl-5 self-stretch order-3 mb-8 md:mb-14	lg:mb-0">
            <Image
              width={515}
              height={527}
              className="hidden lg:block"
              src={selectedTech.images.portrait}
              alt={selectedTech.name}
            />
            <Image
              width={768}
              height={310}
              className="lg:hidden w-full"
              src={selectedTech.images.landscape}
              alt={selectedTech.name}
            />
          </div>
        </>
      ) : (
        <div className="order-1 lg:order-2 mx-6 md:mx-0">
          <h4 className="uppercase mb-2	lg:mb-3	md:mb-4 font-barlowcond text-lb">
            the terminology
          </h4>
          <h2 className="uppercase font-bellefair lg:text-h3 sm:text-h5t md:text-4xl leading-tight mb-4">
            No technology found
          </h2>
        </div>
      )}
    </>
  );
};

export default SelectedTech;
