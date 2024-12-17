"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Heading from "./Heading/Heading";
import CardCategory3 from "./CardCategories/CardCategory3";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";
import { CATS_DISCOVER } from "./CardCategories/data";

const DiscoverMoreSlider = () => {
  const sliderRef = useRef(null);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS: Partial<Glide.Options> = {
      // direction: document.querySelector("html")?.getAttribute("dir") || "ltr",
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };
    if (!sliderRef.current) return;

    let slider = new Glide(sliderRef.current, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [sliderRef]);

  return (
    <div
      ref={sliderRef}
      className={`nc-DiscoverMoreSlider nc-p-l-container ${
        isShow ? "" : "invisible"
      }`}
    >
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
        desc=""
        rightDescText="Good things are waiting for you"
        hasNextPrev
      >
        Discover more
      </Heading>
      <div className="" data-glide-el="track">
        <ul className="glide__slides">
          {CATS_DISCOVER.map((item, index) => (
            <li key={index} className={`glide__slide`}>
              <CardCategory3
                name={item.name}
                desc={item.desc}
                featuredImage={item.featuredImage}
                color={item.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscoverMoreSlider;





// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Heading from "./Heading/Heading";
// import CardCategory3 from "./CardCategories/CardCategory3";
// // @ts-ignore
// import Glide from "@glidejs/glide/dist/glide.esm";
// import { CATS_DISCOVER } from "./CardCategories/data";

// const DiscoverMoreSlider = () => {
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [isShow, setIsShow] = useState(false); // Handles slider visibility
//   const [loading, setLoading] = useState(true); // Handles skeleton loader

//   // Simulate loading for skeleton effect
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); // Adjust loading time if needed
//     return () => clearTimeout(timer);
//   }, []);

//   // Initialize Glide.js slider
//   useEffect(() => {
//     if (!sliderRef.current) return;

//     const OPTIONS: Partial<Glide.Options> = {
//       perView: 2.8,
//       gap: 32,
//       bound: true,
//       animationDuration: 800,
//       animationTimingFunc: "ease-in-out",
//       breakpoints: {
//         1280: {
//           gap: 28,
//           perView: 2.5,
//         },
//         1279: {
//           gap: 20,
//           perView: 2.15,
//         },
//         1023: {
//           gap: 20,
//           perView: 1.6,
//         },
//         768: {
//           gap: 20,
//           perView: 1.2,
//         },
//         500: {
//           gap: 20,
//           perView: 1,
//         },
//       },
//     };

//     try {
//       const slider = new Glide(sliderRef.current, OPTIONS);

//       slider.mount(); // Mount Glide.js
//       console.log("Glide slider mounted");
//       setIsShow(true); // Make the slider visible

//       return () => {
//         slider.destroy(); // Cleanup on unmount
//         console.log("Glide slider destroyed");
//       };
//     } catch (err) {
//       console.error("Glide.js error:", err);
//     }
//   }, [sliderRef]);

//   // Skeleton loader for better UX during loading
//   const renderSkeleton = () => (
//     <div className="animate-pulse space-y-4">
//       <div className="h-8 w-40 bg-gray-300 rounded mb-6"></div>
//       <div className="flex space-x-6 overflow-hidden">
//         {[...Array(4)].map((_, index) => (
//           <div
//             key={index}
//             className="w-[60vh] h-72 bg-gray-200 rounded-lg flex-shrink-0"
//           ></div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className={`nc-DiscoverMoreSlider nc-p-l-container`}>
//       {/* Heading */}
//       <Heading
//         className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container"
//         desc=""
//         rightDescText="Good things are waiting for you"
//         hasNextPrev
//       >
//         Discover more
//       </Heading>

//       {/* Skeleton Loader */}
//       {loading ? (
//         renderSkeleton()
//       ) : (
//         <div
//           ref={sliderRef}
//           className={`glide ${isShow ? "" : "invisible"}`} // Glide wrapper
//         >
//           <div data-glide-el="track" className="glide__track">
//             <ul className="glide__slides">
//               {CATS_DISCOVER.map((item, index) => (
//                 <li key={index} className="glide__slide">
//                   <CardCategory3
//                     name={item.name}
//                     desc={item.desc}
//                     featuredImage={item.featuredImage}
//                     color={item.color}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DiscoverMoreSlider;
