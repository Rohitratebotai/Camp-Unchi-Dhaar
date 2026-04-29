import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faClock,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Dining.css";
import img from '../assets/deoban1.avif';

const Dining = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="dining" className="dining">
      <div className="container">
        <div className="dining-content">
          <div className="dining-text">
            <span className="section-subtitle">Meals</span>

            <h2 className="section-title">
              Simple Meals, Rich Flavours
            </h2>

            <p>
              At Camp Unchi Dhaar, meals are simple, fresh, and made with care. Enjoy veg and non-veg dishes prepared in a homely style, served in the open — where good food tastes even better with mountain air and great company.
            </p>

            <p>
              Whether it’s a warm dinner after a long day of exploring or chai by the bonfire, every meal here adds comfort to your outdoor experience.
            </p>

            <div className="dining-features">
              <div className="feature">
                <FontAwesomeIcon icon={faUtensils} />
                <span>Veg & Non-Veg Meals</span>
              </div>

              <div className="feature">
                <FontAwesomeIcon icon={faClock} />
                <span>Freshly Cooked Daily</span>
              </div>

              <div className="feature">
                <FontAwesomeIcon icon={faWineGlass} />
                <span>Bonfire & Chai Evenings</span>
              </div>
            </div>

            <button className="btn-outline" onClick={scrollToContact}>
              Book Your Camp
            </button>
          </div>

          <div className="dining-image">
            <img src={img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
