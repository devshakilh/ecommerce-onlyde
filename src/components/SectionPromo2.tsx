"use client"

import React, { FC } from "react";
import rightImgDemo from "@/images/banner-2.webp";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";

export interface SectionPromo2Props {
  className?: string;
}

const SectionPromo2: FC<SectionPromo2Props> = ({ className = "lg:pt-10" }) => {
  return (
    <div className={`nc-SectionPromo2  ${className}`}>
      <div
        className="relative flex flex-col lg:flex-row lg:justify-end rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24
                   bg-yellow-50 dark:bg-slate-800 bg-cover bg-center"
        style={{
          backgroundImage: `url(${rightImgDemo.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="lg:w-[45%] max-w-lg relative z-10">
          <Link href="/" className="font-bold text-2xl hover:text-gray-600">
            AhmadEco
          </Link>
          <h2 className="font-semibold dark:text-black  text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
            Special offer <br />
            in kids products
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400">
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary
              href="/search"
              className="dark:bg-slate-200 dark:text-slate-900"
            >
              Discover more
            </ButtonPrimary>
          </div>
        </div>

        {/* Optional: Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent dark:from-slate-800 opacity-90"></div> */}
      </div>
    </div>
  );
};

export default SectionPromo2;
