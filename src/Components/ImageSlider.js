import React, { useState, useEffect } from "react";
import "../CSS/ImageSlider.css";
    
    
function ImageSlider({ images=[] , interval = 3000 }) {
            
    const [current, setCurrent] = useState(0);   
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
          }, interval);
      
          return () => clearInterval(timer);
        }, [images.length, interval]);
      
        return (
          <div className="slider-container" >
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(-${current * 100}%)`
              }}
            >
              {images.map((img, idx) => (
                <img className="slide"
                  key={idx}
                  src={img}
                />
              ))}

            
            </div>

            <div className="dots">
              {images.map((_, idx)=>(
                <span key={idx} className={`dot ${current=== idx? "active" : ""}`} onClick={()=> setCurrent(idx)}></span>
              ))}

            </div>
        </div> 
    );
}
      
export default ImageSlider;