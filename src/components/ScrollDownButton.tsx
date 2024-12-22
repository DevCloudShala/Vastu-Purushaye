// ScrollDownButton.js
import React from "react";

const ScrollDownButton = ({ targetId, children, offset = 0, duration = 500 }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;

      // Smooth scroll animation
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <button onClick={handleClick} style={{ cursor: "pointer" }}>
      {children}
    </button>
  );
};

export default ScrollDownButton;

// Usage Example:
// import ScrollDownButton from "./ScrollDownButton";

// <ScrollDownButton targetId="section2" offset={-50} duration={700}>
//   Scroll Down to Section 2
// </ScrollDownButton>

// In your component:
// <div id="section2">This is Section 2</div>
