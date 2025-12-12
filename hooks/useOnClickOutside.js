// hooks/useOutsideClick.js
import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      // Check if the clicked target is outside the referenced element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    // Bind both 'mousedown' (for clicks) and 'touchstart' (for touches) events
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      // Unbind the event listeners on clean up to prevent memory leaks
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);

  return ref;
};

export default useOutsideClick;
