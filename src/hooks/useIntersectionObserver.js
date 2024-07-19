import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const elementsRef = useRef([]); // Create a ref to store elements to be observed

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible'); // Add class when element is in view
          observer.unobserve(entry.target); // Stop observing the element after it's in view
        }
      });
    }, options);

    // Observe each element in elementsRef.current
    elementsRef.current.forEach((element) => {
      if (element && element instanceof Element) {
        observer.observe(element);
      }
    });

    // Cleanup: Unobserve all elements when the component unmounts
    return () => {
      if (observer) {
        elementsRef.current.forEach((element) => {
          if (element && element instanceof Element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, [options]);

  return elementsRef;
};

export default useIntersectionObserver;
