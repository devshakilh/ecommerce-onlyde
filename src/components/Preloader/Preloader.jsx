"use client"

import { useEffect, useState } from "react";
import './Preloader.css' 

const Preloader = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate page loading or data fetching
      setTimeout(() => {
        setLoading(false);
      }, 4000); // Adjust the time to suit your needs (in ms)
    }, []);
  
    return (
      <div className={`preloader ${!loading ? "hidden" : ""} font-bold `}>
       
        <div className="loader-text">Ahmad{`'`}s</div>
        <div className="loader-text mx-2">Shopping</div>
        <div className="loader-text">Luxury</div>
        <div className="loader-text mx-2">Experience</div>
      </div>
    );
  };

export default Preloader;
