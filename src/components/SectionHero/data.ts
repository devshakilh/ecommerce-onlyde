import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}


export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Discover Your Perfect Style",
    subHeading: "This season, find the trendiest looks 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Unveil Exclusive Collections",
    subHeading: "Curated just for you, with timeless fashion 🔥",
    btnText: "Browse Collections",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "New Arrivals for Every Occasion",
    subHeading: "Elevate your wardrobe with the finest trends 🔥",
    btnText: "Explore Now",
    btnLink: "/",
  },
];
