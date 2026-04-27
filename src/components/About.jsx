import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./About.css";
import aboutimg from '../assets/img_5.jpg';

const About = () => {
  const scrollToRooms = () => {
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Into the Wild</span>
          <h2 className="section-title">An Offbeat Camping Experience</h2>
          <p className="section-description">
            Camp Unchi Dhaar is tucked away in the untouched landscapes of Chakrata, Uttarakhand. Surrounded by dense forests and mountain views, it offers a perfect escape for those looking to slow down, explore nature, and experience life under open skies.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Your Basecamp in the Hills</h3>

              <p>
                At Camp Unchi Dhaar, every moment is about reconnecting with nature. Wake up to crisp mountain air, spend your day exploring nearby trails, and end your evenings around a bonfire under a sky full of stars.
              </p>

              <p>
                Whether you're here for adventure or simply to unwind, the experience is simple, raw, and deeply refreshing — far away from the noise of everyday life.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <h4>Guided</h4>
                  <p>Trekking Trails</p>
                </div>

                <div className="stat-item">
                  <h4>Evenings</h4>
                  <p>Bonfire & Music</p>
                </div>

                <div className="stat-item">
                  <h4>100%</h4>
                  <p>Nature Escape</p>
                </div>
              </div>

              <button className="btn-outline" onClick={scrollToRooms}>
                Explore Camps
              </button>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={aboutimg} alt="Camp Unchi Dhaar Chakrata" />

              <div className="image-badge">
                <FontAwesomeIcon icon={faAward} />
                <span>Authentic Camping</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
