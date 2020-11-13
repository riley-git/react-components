import React, { useState } from "react";
import '../Tooltip.css';


const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);
  
    const showTip = () => {
    
      timeout = setTimeout(() => {
        setActive(true);
      }, props.delay || 100);
     
    };
  
    const hideTip = () => {
      clearInterval(timeout);
      setActive(false);
    };
  
    return (
      <div 
        className="inline-block relative transition-all"
        // When to show the tooltip
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {/* Wrapping */}
        {props.children}
        {active && (
          <div className={`font-display border border-gray-600 rounded-lg   py-4 px-5 bg-gray-500 text-xs whitespace-no-wrap shadow-lg Tooltip-Tip  ${props.direction || "top"} `}>
            {/* Content */}
            {props.content}
          </div>
        )}
      </div>
    );
  };
  
  export default Tooltip;
  

  