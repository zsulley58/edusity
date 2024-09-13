import React, { useRef } from "react";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Alex Martinez</h3>
                  <span>Edusity, Spain</span>
                </div>
              </div>
              <p>
                Studying at Edusity has been a transformative journey. The
                encouraging atmosphere, modern infrastructure, and commitment to
                academic quality have made it a standout experience.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Samantha Lee</h3>
                  <span>Edusity, India</span>
                </div>
              </div>
              <p>
                My decision to study at Edusity has been nothing short of
                amazing. The supportive network, innovative tools, and
                dedication to academic growth have made all the difference.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jordan Patel</h3>
                  <span>Edusity, Australia</span>
                </div>
              </div>
              <p>
                Choosing Edusity for my degree has been a game-changer. The
                collaborative culture, state-of-the-art learning environment,
                and focus on academic excellence have made my experience
                exceptional
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
