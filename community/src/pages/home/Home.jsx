import React from "react";
import "./home.css";
import vector from "../../assets/Vector.png";
import aiPng from "../../assets/aiPng.png";
import AhmedSaad from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
 const handleClick = () => {
   navigate("/profile");
 };
  return (
    <div className="home">
      <div className="header container">
        <div className="logo">
          <img src={aiPng} alt="" />
        </div>
        <div className="text">
          <h1>Tech Innovators</h1>
          <p>Stay updated on tech trends and AI developments</p>
        </div>
      </div>
      <span className="line"></span>
      <div className="category container">
        <div className="grid">
          <div className="column">
            <div className="item">
              <span className="label">Category :</span>
              <span className="badge">Tech</span>
            </div>
            <div className="item">
              <span className="label">Sub Category :</span>
              <span className="badge ai-badge">
                <img src={vector} alt="" className="vector" />
                <span>AI</span>
              </span>
            </div>
          </div>

          <div className="column">
            <div className="item">
              <span className="label">Members :</span>
              <span>1,293</span>
            </div>
            <div className="item">
              <span className="label">Location :</span>
              <span>Alexandria</span>
            </div>
          </div>

          <div className="column">
            <div className="item">
              <span className="label">Volunteer (Admin) :</span>
            </div>
            <div className="item">
              <span>Ahmed Saad</span>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <span className="label">Start Date :</span>
              <span>Sun 03/08/2025</span>
            </div>
            <div className="item">
              <span className="label">End Date :</span>
              <span>Tue 14/08/2025</span>
            </div>
          </div>
        </div>
      </div>
      <span className="line"></span>
      <div className="meeting-roles container">
        <div className="meeting">
          <h3 className="section-title">Meeting Schedule :</h3>
          <div className="meeting-list">
            <div className="meeting-item">
              <span className="time">Monday at 3:30 pm</span>
              <span className="location">Location: Star Workspace</span>
            </div>
            <div className="meeting-item">
              <span className="time">Wednesday at 5:00 pm</span>
              <span className="location">Location: CAFE CLUB</span>
            </div>
            <div className="meeting-item">
              <span className="time">Saturday at 8:00 pm</span>
              <span className="location">Location: City Walk</span>
            </div>
          </div>
        </div>

        <div className="roles">
          <h3 className="section-title">Community Roles :</h3>
          <ol className="roles-list">
            <li>
              <strong>Respectful Communication:</strong> Always communicate with
              kindness and respect.
            </li>
            <li>
              <strong>Privacy and Confidentiality:</strong> Respect the privacy
              of other members.
            </li>
            <li>
              <strong>Positive Environment:</strong> Contribute to a positive
              and supportive community atmosphere.
            </li>
            <li>
              <strong>Constructive Feedback:</strong> Provide feedback in a
              constructive and helpful manner.
            </li>
          </ol>
        </div>
      </div>
      <span className="line"></span>
      <div className="members-container container">
        <h2 className="members-title">Members :</h2>

        <div className="member" onClick={handleClick}>
          <img src={AhmedSaad} alt="Ahmed Saad" className="member-avatar" />
          <div className="member-info">
            <span className="member-name">Ahmed Saad</span>
            <span className="member-role">Volunteer (Ahmed)</span>
          </div>
        </div>

        <div className="member">
          <img src={AhmedSaad} alt="Fady Adel" className="member-avatar" />
          <div className="member-info">
            <span className="member-name">Fady Adel</span>
          </div>
        </div>

        <div className="member">
          <img src={AhmedSaad} alt="Salma Hany" className="member-avatar" />
          <div className="member-info">
            <span className="member-name">Salma Hany</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
