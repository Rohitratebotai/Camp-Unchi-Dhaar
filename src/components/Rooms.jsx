import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faUtensils,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Rooms.css";
import img1 from "../assets/deoban_trek.jpg";
import img2 from "../assets/nagtrek1.webp";
import img3 from "../assets/chopta1.jpeg";

const Rooms = () => {
  const packages = [
    {
      id: "deoban",
      title: "Deoban Trek",
      price: "₹5,000",
      image: img1,
      description:
        "A scenic trek through dense forests and quiet mountain trails, perfect for those looking to reconnect with nature.",
      // duration: "1 Day Experience",
      badge: "Beginner Friendly",
    },
    {
      id: "nagtibba",
      title: "Nag Tibba Trek",
      price: "₹5,000",
      image: img2,
      description:
        "A popular Himalayan trek offering breathtaking summit views and an exciting outdoor adventure.",
      // duration: "1 Night / 2 Days",
      badge: "Most Popular",
    },
    {
      id: "chopta",
      title: "Chopta Expedition",
      price: "₹12,500",
      image: img3,
      description:
        "Explore the beautiful meadows of Chopta with stunning mountain views and a complete trekking experience.",
      // duration: "2 Nights / 3 Days",
      badge: "Premium Experience",
    },
  ];

  return (
    <section id="packages" className="rooms">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Adventure</span>

          <h2 className="section-title">
            Trek Beyond the Ordinary
          </h2>

          <p className="section-description">
            Discover some of Uttarakhand’s most beautiful trekking routes with curated experiences from Camp Unchi Dhaar. Whether you're a beginner or an adventure enthusiast, there's a trail waiting for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="rooms-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={pkg.image} alt={pkg.title} />
                {pkg.badge && <div className="room-badge">{pkg.badge}</div>}
              </div>

              <div className="room-content">
                <h3 className="room-title">{pkg.title}</h3>

                <p className="room-description">{pkg.description}</p>

                <div className="room-capacity">{pkg.duration}</div>

                <div className="room-amenities">
                  <span>
                    <FontAwesomeIcon icon={faMountain} />
                    Guided Trek
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faFire} />
                    Bonfire Stay
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faUtensils} />
                    Meals Included
                  </span>
                </div>

                <div className="room-footer">
                  <div className="room-price">
                    <span className="price">{pkg.price}</span>
                    <span className="price-note">per person</span>
                  </div>

                  <a
                    href="https://wa.me/918057118384"
                    className="btn-room"
                    target="_blank"
                  >
                    Enquire Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rooms;