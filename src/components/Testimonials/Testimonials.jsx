import { useRef, useEffect } from "react";
import "./Testimonials.css";
import {
  testimonial1Img,
  testimonial1Img2x,
  testimonial2Img,
  testimonial2Img2x,
  testimonial3Img,
  testimonial3Img2x,
} from "../../assets/images";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import { useLazyLoadImage } from "../../hooks/useLazyLoadImage";

const testimonials = [
  {
    name: "Estanislao A.",
    image: testimonial1Img,
    highResImage: testimonial1Img2x,
    description:
      "by Jaison Justus, Tame Your Test really helped me realize the importance of having a solid structure when solving problems. Moreover, the course was very well prepared and had tons of material to practice and examples to drill down on specific problem types. Really pleased with the course.",
  },
  {
    name: "Estanislao B.",
    image: testimonial2Img,
    highResImage: testimonial2Img2x,
    description:
      "by Jaison Justus, Tame Your Test really helped me realize the importance of having a solid structure when solving problems. Moreover, the course was very well prepared and had tons of material to practice and examples to drill down on specific problem types. Really pleased with the course.",
  },
  {
    name: "Estanislao C.",
    image: testimonial3Img,
    highResImage: testimonial3Img2x,
    description:
      "by Jaison Justus, Tame Your Test really helped me realize the importance of having a solid structure when solving problems. Moreover, the course was very well prepared and had tons of material to practice and examples to drill down on specific problem types. Really pleased with the course.",
  },
];

export function Testimonials() {
  const sectionRef = useRef(null);
  const gridContainerRef = useRef(null);

  function revealSection(entry, observer) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      entry.target.classList.add("section--visible");
      observer.unobserve(entry.target);
    }
  }

  const highQualityImages = testimonials.reduce((acc, testimonial) => {
    acc[testimonial.name] = testimonial.highResImage;
    return acc;
  }, {});

  useRevealOnScroll(
    [sectionRef, gridContainerRef], // Add gridContainerRef here
    { root: null, threshold: 0.15 },
    revealSection
  );

  useLazyLoadImage(gridContainerRef, highQualityImages);

  return (
    <div ref={sectionRef} className="testimonials-container section--hidden">
      <div className="testimonials-title-container">
        <h1>Know some of the students who had Ace the test.</h1>
      </div>
      <div ref={gridContainerRef} className="grid section--hidden">
        {" "}
        {/* Add class 'section--hidden' here */}
        {testimonials.map((testimonial, index) => (
          <div className="grid-item" key={index}>
            {" "}
            {/* Remove 'grid-item--hidden' class */}
            <div className="image-name-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="lazy-img blur"
              />
              <h2>{testimonial.name}</h2>
            </div>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
