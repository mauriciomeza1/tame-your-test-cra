import { useRef, useEffect } from "react";
import { programInfoImg, programInfoImg2x } from "../../assets/images";
import "./ProgramInfo.css";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { useLazyLoadImage } from "../../hooks/useLazyLoadImage";

export function ProgramInfo() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const listContainerRef = useRef(null); // New ref for the list container

  const highQualityImages = {
    "Girl with Laptop": programInfoImg2x,
  };

  useLazyLoadImage(imageContainerRef, highQualityImages);

  function revealSection(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      entry.target.classList.add("section--visible");
      observer.unobserve(entry.target);
    }
  }

  useRevealOnScroll(
    [sectionRef],
    { root: null, threshold: 0.15 },
    revealSection
  );

  useRevealOnScroll(
    [listContainerRef],
    { root: null, threshold: 0.15 },
    revealSection
  );

  return (
    <div ref={sectionRef} className="program-info-container section--hidden">
      <div className="separator"></div>
      <div ref={imageContainerRef} className="image-container">
        <img
          src={programInfoImg}
          alt="Girl with Laptop"
          className="lazy-img blur"
        />
      </div>
      <div className="text-container">
        <h2>Is this the best program for me?</h2>
        <p>
          Getting into a top school or landing the job of your dreams requires
          excellent preparation and top scores.
        </p>
        <h3>Reach your goals with courses that let you:</h3>
        <ul ref={listContainerRef} className="section--hidden">
          <li>Study whenever you want</li>
          <li>Study wherever you like</li>
          <li>Plan your perfect study schedule</li>
          <li>Get personal coaching</li>
        </ul>
      </div>
    </div>
  );
}
