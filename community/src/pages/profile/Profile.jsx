import React from "react";
import "./profile.css";

const ProfileCard = () => {
  return (
    <div className="profile-card container">
      <div className="profile-header">
        <h1>Ahmed Saad</h1>
        <p className="username">@ahmed.saad.zb</p>
      </div>

      <h2 className="profile-title">Community Owner / Volunteer</h2>
      <span className="line"></span>

      <div className="action-buttons">
        <button className="btn">Send Message</button>
        <button className="btn">Mute</button>
        <button className="btn">Delete</button>
        <button className="btn">Block</button>
        <button className="btn">Report</button>
      </div>

      <div className="about-section">
        <h3>About me</h3>
        <p>
          Hello! I'm Ahmed Saad, an AI developer and researcher with a strong
          passion for data science and programming. As a volunteer, I love to
          share my knowledge and skills in AI. Born in 1998, I'm always excited
          to push the boundaries of technology and innovation. Let's connect and
          explore the world of AI together!
        </p>
      </div>

      <hr className="divider" />

      <div className="details-section">
        <h3>Education/Occupation</h3>
        <ul>
          <li>MIS, AI Developer and Researcher</li>
        </ul>

        <h3>Skills/Expertise</h3>
        <ul>
          <li>Data Science, Programming, AI</li>
        </ul>

        <h3>Date of Birth</h3>
        <p>05/12/1998</p>
      </div>
    </div>
  );
};

export default ProfileCard;
