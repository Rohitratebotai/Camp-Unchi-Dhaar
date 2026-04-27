import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faConciergeBell,
  faClock,
  faDumbbell,
  faCampground,
  faFire,
  faCar,
  faMoon,
  faMountain,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    {
      icon: faFire,
      title: "Bonfire Evenings",
      description:
        "Unwind around a warm bonfire under the stars with music, conversations, and mountain silence.",
    },
    {
      icon: faUtensils,
      title: "Fresh Home-style Meals",
      description:
        "Enjoy simple, freshly prepared veg and non-veg meals made with local flavors.",
    },
    {
      icon: faMountain,
      title: "Nature Walks & Treks",
      description:
        "Explore forest trails and nearby viewpoints with guided or self-paced trekking experiences.",
    },
    {
      icon: faCampground, // better than conciergeBell if available
      title: "Comfortable Camping Setup",
      description:
        "Well-maintained tents with basic amenities for a comfortable stay in the outdoors.",
    },
    {
      icon: faCar,
      title: "Parking Available",
      description:
        "Convenient parking space available close to the campsite.",
    },
    {
      icon: faMoon,
      title: "Stargazing Experience",
      description:
        "Clear night skies away from city lights, perfect for stargazing and peaceful moments.",
    },
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Camp Life</span>

          <h2 className="section-title">
            Everything You Need, Nothing You Don’t
          </h2>

          <p className="section-description">
            At Camp Unchi Dhaar, we keep things simple yet meaningful. From bonfire evenings and fresh meals to scenic trails and open skies — every detail is designed to give you an authentic camping experience in the heart of Chakrata.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="facility-icon">
                <FontAwesomeIcon icon={facility.icon} />
              </div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
