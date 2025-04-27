import React from "react";
import "./profile.css";
import AhmedSaad from "../../assets/avatar.png";
import messageIcon from "../../assets/duo-icons_message.png";

const ProfileCard = () => {
  return (
    <div className="profile-card ">
      <div className="profile-header container">
        <img src={AhmedSaad} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1>Ahmed Saad</h1>
          <p className="username">@ahmed.saad.zb</p>
          <h2 className="profile-title">Community Owner / Volunteer</h2>
        </div>
      </div>

      <span className="line"></span>

      <div className="action-buttons container">
        <button className="btn message">
          <span>Send Message</span>
          <img src={messageIcon} alt="Message Icon" className="message-icon" />
        </button>
        <div className="action-buttons-right">
          <button className="btn">Mute</button>
          <button className="btn">Delete</button>
          <button className="btn">Block</button>
          <button className="btn">Report</button>
        </div>
      </div>

      <div className="about-section container">
        <h3>About me</h3>
        <div className="divider"></div>
        <p>
          Hello! I'm Ahmed Saad, an AI developer and researcher with a strong
          passion for data science and programming. As a volunteer, I love to
          share my knowledge and skills in AI. Born in 1998, I'm always excited
          to push the boundaries of technology and innovation. Let's connect and
          explore the world of AI together!
        </p>
      </div>

      <div className="details-section container">
        <div className="details-input">
          <h3>Education/Occupation</h3>
          <input
            type="text"
            name="occupation"
            id="occupation"
            // value="MIS, AI Developer and Researcher"
            placeholder="MIS, AI Developer and Researcher"
          />
        </div>
        <div className="details-input">
          <h3>Skills/Expertise</h3>
          <input
            type="text"
            name="skills"
            id="skills"
            // value="Data Science, Programming, AI"
            placeholder="Data Science, Programming, AI"
          />
        </div>

        <div className="details-input">
          <h3>Date of Birth</h3>
          <input
            type="date"
            name="dob"
            id="dob"
            // value="1998-01-01"
            placeholder="1998-01-01"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
