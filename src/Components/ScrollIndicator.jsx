import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function ScrollIndicator() {
  const location = useLocation();
  const navigate = useNavigate();

  const sections = ["about", "skills", "experience", "projects", "contact"];

  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.6, 
      },
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToNext = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);

      return;
    }

    const next = sections[activeIndex + 1];

    if (next) {
      document.getElementById(next)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToNext}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-50"
    >
      <div className="w-6 h-10 border-2 border-violet-500 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-violet-500 mt-2 animate-bounce" />
      </div>
    </div>
  );
}

export default ScrollIndicator;
