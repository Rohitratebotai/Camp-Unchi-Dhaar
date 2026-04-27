import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Camp Unchi Dhaar was exactly the break we needed. The location is peaceful and untouched, and the bonfire evenings were the highlight of our stay. It felt like a proper escape from city life.",
      author: "Rahul Sharma",
      designation: "Adventure Traveler",
    },
    {
      text: "Waking up to mountain views and fresh air every day was amazing. The food was simple and homely, and the overall vibe of the camp is very calm and welcoming.",
      author: "Priya Verma",
      designation: "Group Traveler",
    },
    {
      text: "One of the best camping experiences I’ve had. Clear night skies, quiet surroundings, and a very relaxing atmosphere. Perfect for couples looking to spend quality time.",
      author: "Amit Kapoor",
      designation: "Couple Traveler",
    },
    {
      text: "If you’re looking for something offbeat near Chakrata, this is a great option. The tents are comfortable, and the entire setup feels natural and well maintained.",
      author: "Sneha Joshi",
      designation: "Solo Traveler",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Guest Reviews</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].author}</h4>
              <span>{testimonials[currentIndex].designation}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;