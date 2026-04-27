import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faUtensils,
  faUsers,
  faMountain,
  faCampground,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Rooms.css";
import img1 from '../assets/img_4.jpg';
import img2 from '../assets/img_10.jpeg';
import img3 from '../assets/img_11.jpeg';

const Rooms = () => {
  const rooms = [
    {
      id: "TripleTent",
      title: "3-Person Tent",
      subtitle: "Ideal for Small Groups",
      price: "₹1,500",
      image: img1,
      description:
        "Cozy and comfortable tents perfect for small groups looking to enjoy a peaceful camping experience in nature.",
      badge: "Most Booked",
      capacity: "10 Tents Available",
      amenities: [
        { icon: faUsers, label: "Up to 3 People" },
        { icon: faFire, label: "Bonfire Access" },
        { icon: faUtensils, label: "Meals Included" },
      ],
    },
    {
      id: "FamilyTent",
      title: "5-Person Tent",
      subtitle: "Best for Friends & Families",
      price: "₹1,500",
      image: img2,
      description:
        "Spacious tents designed for groups and families, offering a fun and shared camping experience in the hills.",
      badge: "Best for Groups",
      capacity: "5 Tents Available",
      amenities: [
        { icon: faUsers, label: "Up to 5 People" },
        { icon: faFire, label: "Bonfire Access" },
        { icon: faUtensils, label: "Meals Included" },
      ],
    },
  ];

  return (
    <section id="rooms" className="rooms">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Stay</span>

          <h2 className="section-title">
            Camp Under the Open Sky
          </h2>

          <p className="section-description">
            Choose from well-maintained tents designed for comfort in the outdoors.
            With a total capacity of 50 guests, Camp Unchi Dhaar offers a simple and
            authentic camping experience at ₹1,500 per person, including meals and bonfire evenings.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
                {room.badge && <div className="room-badge">{room.badge}</div>}
              </div>

              <div className="room-content">
                <h3 className="room-title">{room.title}</h3>
                <p className="room-subtitle">{room.subtitle}</p>

                <p className="room-description">{room.description}</p>

                <div className="room-capacity">{room.capacity}</div>

                <div className="room-amenities">
                  {room.amenities.map((amenity, i) => (
                    <span key={i}>
                      <FontAwesomeIcon icon={amenity.icon} />
                      {amenity.label}
                    </span>
                  ))}
                </div>

                <div className="room-footer">
                  <div className="room-price">
                    <span className="price">{room.price}</span>
                    <span className="price-note">per person</span>
                  </div>

                  <a
                    href="https://wa.me/918057118384"
                    className="btn-room"
                  >
                    Book Now →
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