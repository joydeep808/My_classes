'use client'

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
        <button
            className={`group/item fixed bottom-0 right-0 border bg-indigo-600 border-slate-400 rounded-full px-3 py-2 mr-6 mb-[71px] z-50 items-center flex gap-2 scrollToTopButton hover:shadow-xl hover:shadow-slate-400 hover:bg-indigo-700 active:bg-indigo-500 ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <span className="group-hover/item:-translate-y-[2px] transition-transform ease-linear text-white font-extrabold text-xl">&#x2B9D;</span>
        </button>
    )
}
